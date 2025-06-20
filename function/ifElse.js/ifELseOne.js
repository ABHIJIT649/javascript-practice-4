// write a condition to check if a number is positive , negative , or zero

let  num = -2
if( num === 0){
  console.log("this is a zero ");

}else if ( num > 0){
    console.log("this is possitive value");
} else if (num < 0){
    console.log("this is nagetive value");
}

// given someone age check if thay are eligable to votr or not(age or above 18)

let age = 18

if (age >= 18){
    console.log("eligible for vote");
} else{
   console.log("not eligible for vote");
}

//check a given number is even or odd

const number = 10

if( number %2 == 0){
    console.log("given number is even");
}else{
    console.log("given number is odd");
}

//Compare two number and print which number is gratter ,or if thay are equal

let val1 = 6
let val2= 7

if(val1 < val2){
    console.log(`gratter number is  ${val2}`);
}else if (val1 > val2){
    console.log(`gratter number is  ${val1}`);
} else if (val1 === val2){
    console.log("the number is equal");
}

// check if a year is a leap year or not 

let year = 2050

if( year %4 == 0 ){
    console.log("this is a leap year");
}else{
    console.log("this is not a leap year");
}