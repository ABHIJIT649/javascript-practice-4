//Given the array [1, 2, 3, 4, 5], print each number using forEach

const myArray = [1, 2, 3, 4, 5]

myArray.forEach( (arr) => {
   console.log(arr);
})

//Given the array ["apple", "banana", "grapes"], print each fruit in uppercase using forEach

const fruit = ["apple", "banana" , "grapes"]

fruit.forEach( (fruits) => {

    console.log(fruits.toUpperCase());
})

//Given the array [5, 7, 9, 11], find the sum of all numbers using forEach

const arr = [5, 7, 9, 11]
let sum = 0;
 
arr.forEach( (num) =>{
    sum = sum + num;
   
})
console.log(sum);

//Given the array [2, 4, 6, 8], print the index of each element along with the value

const num = [2, 4, 6, 8]

num.forEach( (number , index) =>{

    console.log(` index is:${index} and value is ${number}  `);
})

//Given the array [10, 20, 30, 40], create a new array with each number doubled

// const myarray = [10, 20, 30 , 40]


//Given the array ["red", "green", "blue"], print "Color is: <color>" for each color

let color = ["red" , "green", "blue"]

color.forEach ( (colors ) =>{

    console.log(`color is: ${colors}`);
})

//Given the array of numbers [1, 3, 5, 7, 9], check if all numbers are odd and print the result.

const number = [1, 3, 5, 7, 9]

number.forEach( (numbers) =>{

    if (numbers %2 != 0) {
        console.log(`the number is odd number ${numbers}`);
    }
})

//Given the array [100, 200, 300], print "<value> is at index <index>" for each number

const val = [100, 200, 300]

val.forEach( (value , index) => {
   console.log(`index is  ${index} and value is: ${value}`);

})

//Given the array ["Alice", "Bob", "Charlie"], print a greeting like "Hi, Alice!

let name = ["Alice", "Bob" , "charlie"]

name.forEach( (names) => {

    console.log(`hi ${names}`);
})

//Given the array [2, 3, 4, 5], find the product of all numbers using forEach

