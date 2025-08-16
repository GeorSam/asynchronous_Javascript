// Fetch JSON data from the given URL using XMLHttpRequest
// Returns a Promise that resolves with parsed data or rejects with an error
const getData = (url) => {
  console.log("Hello world");

  return new Promise((resolve, reject) => {
    // Create and configure the HTTP GET request
    const request = new XMLHttpRequest();
    request.open("GET", url); // Set request type and target URL
    request.send(); // Send the request to the server

    // Handle request completion
    request.addEventListener("load", () => {
      if (request.status === 200) {
        // Successful response → parse JSON and resolve
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else {
        // Request failed → reject with an error message
        reject("error");
      }
    });
  });
};

// Example usage: fetch the dataset and handle the result
getData("/dataSet1.json")
  .then((data) => {
    console.log(data); // Log the parsed JSON data
  })
  .catch((err) => {
    console.log(err); // Log the error if request fails
  });
