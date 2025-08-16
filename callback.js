// Function to retrieve JSON data from '/dataSet1.json'
// Accepts a callback with parameters (data, error)
const getData = (callback) => {
  console.log("Hello world");

  // Create a new HTTP request
  const request = new XMLHttpRequest();
  request.open("GET", "/dataSet1.json"); // Prepare GET request to the dataset
  request.send(); // Send the request to the server

  // Triggered when the request has finished loading
  request.addEventListener("load", () => {
    if (request.status === 200) {
      // Parse the JSON string into a JavaScript object
      const data = JSON.parse(request.responseText);
      callback(data, undefined); // Pass parsed data to callback (no error)
    } else {
      // Pass error message to callback (no data)
      callback(undefined, "Failed to fetch data");
    }
  });
};

// Call getData with a callback to handle success or error
getData((data, err) => {
  data ? console.log(data) : console.log(err); // Log data if present, otherwise log error
});
