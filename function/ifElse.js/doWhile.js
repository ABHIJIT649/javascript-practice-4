//Print numbers from 1 to 5 using a do…while loop

let i = 0;
 do {
    console.log(i);
    i ++;

 } while ( i <= 5);

 //Print the sum of numbers from 1 to 10 using a do…while loop

 let sum = 0; 
 let num = 1

 do {
    num ++;
    sum = sum + num;

 } while ( num <= 10);

 console.log(`sum of 1 to 10 is : ${sum}`); // bahar becuse the sum is global

 //Print all odd numbers between 1 and 15 using a do…while loop
 let number = 1
 do {
   number ++; 
   if (number %2 != 0) {
    
     console.log(`the odd number is ${number}`);
   }

 } while ( number <= 15);


//Print numbers from 10 to 1 (reverse) using a do…while loop

let reverse = 10;

do {
     console.log(`reverse numner is ${reverse}`);
     reverse -- ;

} while ( reverse > 0 );