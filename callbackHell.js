// Fetch JSON data from the given URL and pass the result to a callback
// callback signature: (data, error)
const getData = (url, callback) => {
  console.log("Hello world");

  // Create and configure an HTTP GET request
  const request = new XMLHttpRequest();
  request.open("GET", url); // Set the request method and target URL
  request.send(); // Send the request to the server

  // When the request finishes loading
  request.addEventListener("load", () => {
    if (request.status === 200) {
      // Successfully received response → parse JSON
      const data = JSON.parse(request.responseText);
      callback(data, undefined); // Pass parsed data to callback (no error)
    } else {
      // Request failed → pass error message to callback (no data)
      callback(undefined, "Failed to fetch data");
    }
  });
};

// Start fetching the first dataset
getData("/dataSet1.json", (data, err) => {
  if (data) {
    console.log(data);

    // Once the first dataset is loaded, fetch the second dataset
    getData("/dataSet2.json", (data, err) => {
      if (data) {
        console.log(data);

        // Once the second dataset is loaded, fetch the third dataset
        getData("/dataSet3.json", (data, err) => {
          if (data) {
            console.log(data);
          } else {
            console.log(err); // Handle third dataset error
          }
        });
      } else {
        console.log(err); // Handle second dataset error
      }
    });
  } else {
    console.log(err); // Handle first dataset error
  }
});
