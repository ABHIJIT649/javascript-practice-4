// print the numbers from 1 to 10

for(i=1;i<=10;i++){
    console.log(i);
}

// print all even numbers between 1 to 20

for (let i =1; i <=20; i++) {
    if (i %2 ===0) {
        console.log(i);
        
    }
    
}

//print all odd number between 1 to 20

for (let i = 0; i <= 20; i++) {
    
    if (i%2 != 0) {
        console.log(i);
    }
    
}

//print the multiplication table of 5

for (let i = 1; i <= 5; i++) {
    
    for (let j = 1; j<= 10; j++) {
        
        console.log( i ,"*",  j ,"=" , i * j );
        
    }
    
}

//print the sum of the first 10 natural number

let sum = 0;
for (let i = 1; i <= 10; i++) {
   
    sum += i
    
}
console.log(sum);