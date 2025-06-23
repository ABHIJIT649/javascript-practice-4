//Given [1, 2, 3, 4, 5], use reduce() to find the sum

const nums = [1, 2, 3, 4,5 ]

const sumofNum = nums.reduce( ( acc , curr) => acc + curr , 0)

console.log(sumofNum);

//Given ["apple", "banana", "grape"], use reduce() to create one string like "apple, banana, grape"

const fruits = [ "apple", "banana", "grape"]

const oneString = fruits.reduce(( acc , curr) => acc + " , " + curr )

console.log(oneString);

//Given [2, 3, 4, 5], use reduce() to multiplay all number

const numbers = [2, 3, 4, 5]

const multiplay = numbers.reduce ( (acc , curr) => acc * curr , 1)

console.log(multiplay);

// Given [10, 20, 30, 40], use reduce() to find the maximum number

// const  maxNum = [ 10 , 20, 30 ,40];

// const maximumNum = maxNum.reduce( ( acc, curr) => acc < curr ,0)

// console.log(maximumNum);

//Given [1, -1, 2, -2, 3, -3], use reduce() to calculate the sum of only positive numbers

const newNum = [ 1, -1, 2, -2, 3, -3,]

const sumNum = newNum.reduce ( (acc, curr) => curr > 0 ? acc + curr: acc ,0  )

console.log(sumNum);