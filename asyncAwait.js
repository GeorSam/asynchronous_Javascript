const getData = async () => {
  //we use the keyword async to mark the arrow function as asynchronous, that it always returns a Promise
  const response = await fetch("/dataSet1.json"); //the awaits keyword basically tells fetch -which returns a Promise-, that, when there is a response insert it into response const
  const data = await response.json(); //this returns a promise too
  //multiple chaining can go here

  return data;
};

console.log(1);
console.log(2);

getData()
  .then((data) => console.log(data))
  .catch((error) => console.log(error)); // when all of the getData implementation gets resolved, then return me the data, where getData returns a Promise too
//it is not blocking the programm execution

console.log(3);
console.log(4);
