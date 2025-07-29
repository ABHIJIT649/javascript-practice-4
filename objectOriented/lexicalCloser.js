// Create a function outer() that has a variable x = 5 and a nested function inner() that logs x

function outer (){
    let x = 5

    function inner (){
        console.log(x);
    }
    inner()
}
outer()

//Create a function makeCounter() that returns another function which increases a number by 1 every time it is called:
function makeCounter(){
    let count =0

    return function (){
        count ++
        return count
    }
}

const counter = makeCounter()
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

//Create a function rememberName(name) that returns a function that says:

function rememberName (name){

    return function(){
        console.log(`hello ${name}`);
    }
}

const greet = rememberName("Abhhijt")
greet()

//Create a function multiplyBy(n) that returns another function to multiply any number by n.

function multiplyBy(n){
    
    return function(){
        return n*5

    }
}

const number = multiplyBy(2)
console.log(number());


//Create a function once(fn) that ensures a function can only be called once.

function once(fn){
    
}