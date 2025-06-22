// break use Example

// Print numbers 1 to 10, but stop the loop when you reach 5.

for (let i = 0; i <=10; i++) {
   
    if (i === 5) {
        
        console.log(`ditected value is ${i}`);
        break
    }
    console.log(`all value are ${i}`);
}

//Given an array [2, 4, 6, 8, 10, 12], print each number until you encounter the number 8. Stop afterwards

let myArray = [2, 4, 6, 8, 10, 12]

for (let i = 0; i < myArray.length; i++) {
    
    if (myArray[i] === 8) {
         console.log(`the array is stope find 8`);
         break
    }
    console.log(myArray[i]);
}

//Keep summing numbers starting from 1. Stop the loop as soon as the sum exceeds 20. Print the sum

let sum = 0;
for (let i = 1;  i <= 10 ; i++) {
    sum = sum +i
    if (sum  < 20) {
    } else if (sum >= 20){
        console.log(`the sum is stope `);
        break
    }
    console.log(sum);
}

//Given a list [10, 23, 45, 67, 89], stop the loop and print a message as soon as you find 45. Print the index as well

let array = [10, 23, 45, 67, 89]

for (let i = 0; i < array.length; i++) {
    
    if (array[i] === 45) {
        console.log(`find my number ${array[i]}`);
        break
    }
    console.log(array[i]);

}
