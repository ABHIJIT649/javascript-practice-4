//Given [1, 2, 3, 4, 5], create a new array of their squares

const myArray = [1, 2, 3, 4, 5]
// let squreOfNum = 0;
const squarumes = myArray.map( (num) =>  num * num)
console.log(squarumes);

//Given ["apple", "banana", "grape"], create a new array with each word in uppercase

const fruits = [ "apple", "banana", "grape"]

const upper = fruits.map( (fruit) => fruit.toUpperCase() )

console.log(upper);

//Given [10, 20, 30], add 5 to each number.

const number = [10, 20 ,30]

const addNum = number.map( (num) => num + 5 )
console.log(addNum);

//Given ["hi", "hello", "hey"], create a new array that contains the length of each string.

const strings = [ "hi", "hello", "hey"]

const lenthStr = strings.map( (string) => `length is ${string.length}`)

console.log(`${lenthStr} `);


//Given [2, 4, 6, 8], create a new array that says "Even number: <number>" for each.

const nums = [ 2, 4, 6 ,8]

const evenNo = nums.map( (num) => `even number are ${num}` )

console.log(`the Even number are ${evenNo}`);