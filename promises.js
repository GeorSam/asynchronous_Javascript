const getData = (url) => {
  console.log("Hello world");

  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.send();

    request.addEventListener("load", () => {
      if (request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else {
        reject("error");
      }
    });
  });
};

getData("/dataSet1.json")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
