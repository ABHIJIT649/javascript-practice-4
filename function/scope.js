// difference between global scope and local scoope (1)

// use let only becuese const var are inner and the outer clg is called it will be come but let it no come 
//let only coming iner is colling iner and let is outer then call the outer is coming
 let x = 100; //global
  if (true){
    let x = 200; ///local/block scope
    console.log("inner :", x); //block scope 
  }

  console.log("outer :", x); //global scope

  // create a variable inside a function and try to access it outside(2)
   function show (){
     var message = "Hello I am Abhijit";
   
   }
//    console.log(message);   // it is show error becuse  it is local/block scope it can't acess directly
   
//another method is acess to outside
function show2(){
    let message2 = "Hello World" //inside variable
    return message2; //agar return message2 nehi hota to output undefined ata
}
let result = show2()
 console.log(result);

 //create a global variable and use it inside a function (3) //outer function

 let name = "Abhijit"
  function outervar (){
    console.log(name);
  }

  outervar() //function call and shiw the output

  //can two functions have the same variable name (4)

  function sameNameOne(){
    let a = 1;
  }

  function sameNameTwo(){
    let a = 2;
  } // ans: yes Each function has it own local scope

//what happen with let inside block (5)
 //example use let
if(true){
     let a = 10;
}
// console.log(a); //output is not coming becuse let cann't deine inside block

// example use var
if(true){
    var a = 10;
}
console.log(a); //out put is coming becuse var work var inside the block

//show let block scope(6)
 
{
    let z = 300;
}
// console.log(z); //out put is error becuse z is not define

//show var block scope(7)
{
    var b = "ffg"
}
console.log(b); // output coming b is defind

//global + local variable (8)

let color = "red";  // global ko inner be acess ho sakta he but local variable ko outer pe acess nehi kiya ja sakta
function globaLocal (){
    let brush = "round";
    console.log(color + " " + brush);
}
globaLocal()

//local vs global same name(9)

let o = 50;
function sameName(){
    let o = 40;
    console.log(o); 
}
sameName()//mout put is local same name but prayority is gratter than global 

//using variable before declaring

// console.log(d);
var d = 90; //output undefined becuse of hoisting

// console.log(e);
let = 80; //output error becuse cannot access 'e' before initialization 

//let inside if block 
  if(true){
    let temp = "hot";
    console.log(temp); //this is show "hot" becuse if inside call can initialization
  }
//   console.log(temp); // inside let and outside called 
