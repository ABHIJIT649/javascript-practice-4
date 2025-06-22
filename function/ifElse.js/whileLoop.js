//Print numbers from 1 to 10 using a while loop

let i = 1;
while (i <=10) {
    console.log(`print ${i}`);
    i++
}

//Print even numbers between 1 and 20 using a while loop.

// type one
let eveNumber = 0;

while (eveNumber <= 20) {
    
    console.log(` number is ${eveNumber}`);
    eveNumber = eveNumber+2

}

// type two

let num = 1;

while (num <= 20) {
    
    if ( num %2 == 0) {
        console.log(`even number is ${ num}`);
        
    }
    num ++;
}

//Given sum = 0, add all numbers from 1 to 50 using a while loop

let sum  = 0;
let num2  = 1;
 while (num2  <= 50) {
    
    sum = sum +num2
    num2 ++;
    
 }
 console.log(`sum is ${sum}`);

 //Print the numbers in reverse order from 10 down to 1 using a while loop

 let number = 10;

 while ( number >=1 ) {
    
    console.log(`reverse  number is ${number}`);

    number -- ;
 }