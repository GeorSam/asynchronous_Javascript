const getData = (callback) => {
  console.log("Hello world");

  const request = new XMLHttpRequest();
  request.open("GET", "/dataSet1.json");
  request.send();

  request.addEventListener("load", () => {
    if (request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(data, undefined); // Log the JSON data
    } else {
      callback(undefined, "Failed to fetch data");
    }
  });
};

getData((data, err) => {
  data ? console.log(data) : console.log(err);
});
