//simple hello print in function
function helloPrint() {
  console.log("Hello WOrld");
}

helloPrint();

//add two  number and print the result

function addTwoNumber(a, b) {
  console.log(a + b);
}

addTwoNumber(2, 3);

//create a function and that return thr square of number

function square(num) {
  console.log(num * num);
}
square(3);

//create a function that return thr full name from first and last namee

//first method

function setFulname(first, last) {
  return first + "" + last;
}

console.log(setFulname(" Abhjit", "Mohanty"));

//second method

function setFulname(first, last) {
  console.log(first + last);
}

setFulname(" Amiya", "Das");


// create a function  thsat check if a numbr is even
 function checkNumberEven ( num) {
    return num%2 === 0;
 
 }
 console.log(checkNumberEven(9))

 //create a function that takes a number and return double of it

 function double (number) {
   return number * 2;
 }

 console.log(double(4))