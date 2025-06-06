const car = {
  brand: "Toyota",
  model: "crplla",
  year: 2022,
};
//get the car model
console.log(car.model);

//add a new preority cal color
car.color = "red";
console.log(car);

//change preority value year chnage 2024
car.year = 2024;
console.log(car);

//delet a preority
delete car.model;
console.log(car);

//create a another object
const student = {
  name: "Amiya",
  class: "9th",
  rollNo: 21,
};

//check preority exists or not (hasOwnProperty  => use this amd chack property exist or not)
console.log(car.hasOwnProperty("brand"));

//grt all keys
console.log(Object.keys(student));
console.log(Object.keys(car));

//get all values
console.log(Object.values(student));
console.log(Object.values(car));

//count number of preority
console.log(Object.keys(student).length);
console.log(Object.values(car).length);

//create a empty book object and add keys & values one by one
const book = {};

(book.title = "javaScript Besics"), (book.author = "jhon Doe");

console.log(book);

//updet student class 10th

student.class = "10th";
console.log(student);

//another object create persion

const persion = {
  name: "Amit",
  address: {
    city: "Delhi",
    pin: 76574,
  },
};

//get nesteed property

console.log(persion.address);

//
const color = {
  "full name": "abhijit",
};

console.log(color["full name"]);
