fetch("/dataSet1.json") //returns a Promise
  .then((response) => {
    console.log("resolved", response);
    return response.json(); //we use promise chaining to return the data in the right type
  })
  .then((data) => console.log(data))
  .catch((err) => {
    console.log(err); //only runs when is rejected, but it is rejected only if there is false server response etc,
    // if for example status code is 400 it is caught on .then
  });
