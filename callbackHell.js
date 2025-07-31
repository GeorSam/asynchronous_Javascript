const getData = (url, callback) => {
  console.log("Hello world");

  const request = new XMLHttpRequest();
  request.open("GET", url);
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

getData("/dataSet1.json", (data, err) => {
  if (data) {
    console.log(data);
    getData("/dataSet2.json", (data, err) => {
      if (data) {
        console.log(data);
        getData("/dataSet3.json", (data, err) => {
          if (data) {
            console.log(data);
          } else {
            console.log(err);
          }
        });
      } else {
        console.log(err);
      }
    });
  } else {
    console.log(err);
  }
});
