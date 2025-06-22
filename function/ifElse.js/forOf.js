//Given an array of numbers [2, 4, 6, 8, 10], print each number using for...of

let myArray = [2, 4, 6, 8, 10]

for (const element of myArray) {
    console.log(element);
}

//Given a string "HELLO", print each character using for...of.

const string = "HELLO"

for (const eachChar of string) {
    console.log(eachChar);
}

//Given an array of names ['Alice', 'Bob', 'Charlie'], print "Hello, <name>!" for each

let names = [ 'Alice', 'Bob', 'Charlie']
// let name2 = "Hello"
for (const name of names) {
    console.log(  `Hello ${name}`);
}

//Find the sum of all numbers in [1, 2, 3, 4, 5] using for...of

let nums = [1, 2, 3, 4, 5]
let sum = 0

for (const num of nums) {
   
   sum = sum + num

}
console.log(sum);

//Given an array of mixed types [1, "apple", true, null], print the type of each element

let mixed = [1, "apple", true, null ]

for (const mixe of mixed) {
    
    console.log(typeof mixe);
}