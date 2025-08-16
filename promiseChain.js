// Fetch JSON data from the given URL using XMLHttpRequest
// Returns a Promise that resolves with parsed data or rejects with an error
const getData = (url) => {
  console.log("Hello world");

  return new Promise((resolve, reject) => {
    // Create and configure the HTTP GET request
    const request = new XMLHttpRequest();
    request.open("GET", url); // Set method and target resource
    request.send(); // Send the request

    // Handle response when the request is finished
    request.addEventListener("load", () => {
      if (request.status === 200) {
        // Parse JSON string into a JavaScript object
        const data = JSON.parse(request.responseText);
        resolve(data); // Resolve promise with parsed data
      } else {
        reject("error"); // Reject promise with an error message
      }
    });
  });
};

// Sequentially fetch datasets 1 → 2 → 3
getData("/dataSet1.json")
  .then((data) => {
    console.log(data); // Log dataset 1
    return getData("/dataSet2.json"); // Fetch dataset 2
  })
  .then((data) => {
    console.log(data); // Log dataset 2
    return getData("/dataSet3.json"); // Fetch dataset 3
  })
  .then((data) => {
    console.log(data); // Log dataset 3
  })
  .catch((err) => console.log(err)); // Handle any error from the chain
