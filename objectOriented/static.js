//Create a class MathTools with a static method add(a, b) that returns the sum of two numbers
class MathTools{
    static add(a ,b){
        return a + b
    }
}
console.log(MathTools.add(3,8));


//Create a class User with a static method loginMessage() that prints "Please log in"

class user {
    static loginMessage (){
        console.log(`plese log in`);
    }

}
user.loginMessage()

//Create a class Animal with a static method info() that prints "Animals are living beings"

class animal {
    static info(){
        console.log(`Animals are living beings`);
    }
}

animal.info()

//Create a class Vehicle with properties name and speed, and a static method compareSpeed(v1, v2) that compares the speed of two vehicles

class Vehicle {
    constructor(name , speed){
        this.name = name
        this.speed = speed
    }

    static compareSpeed(v1 , v2){

        if (v1.speed > v2.speed) {
            console.log(`${v1.name} is very speed`);
        }else if (v1.speed < v2.speed){
            console.log(`${v2.name} is very speed`);
        }else{
            console.log(`both speed are same`);
        }
    }
}

const bike  = new Vehicle("toyota" , 220)
const car = new Vehicle("BMW", 300)

Vehicle.compareSpeed(bike, car)

//Can you call a static method using an instance? Try and see what happens

// const user = new user()



//Create a class Calculator with both a static method multiply(a, b) and an instance method divide(a, b)

class Calculator {
   static multiply (a , b){
    return a*b
   }

   devide (a ,b){
    return a/b
   }
}

console.log(Calculator.multiply(5,3));
// console.log(Calculator.devide(4, 2));
const newNo = new Calculator()
console.log(newNo.devide(4,2));


//Create a class Parent with a static method hello() and extend it in a Child class. Override the static hello() method in the child.

class parent {
    static hello (){
        console.log(`parent`);
    }
}

class child extends parent{
    static hello(){
        console.log(`child`);
    }
}

parent.hello()
child.hello()

//Use super.hello() inside the Child class’s static method to access the Parent class's version.

class parent2{
    static hello (){
        console.log(`hello i am parent`);
        // return "hello i am parent"
    }
}

// parent2.hello()

class child2 extends parent2 {
    static hello (){
        console.log(`hello i am child`);
        // return super.hello() + "and i am child"
        super.hello()
    }
}

// console.log(child2.hello());
child2.hello()


//Create a static method createGuestUser() inside a User class that returns a new User object with default name and role.

class User {
    constructor(name, role){
        this.name = name
        this.role = role
    }

    static createGuestUsre(){
        return  new User ("Abhijit" , "Actor")
    }
}

const guest =  User.createGuestUsre()
console.log(guest);

//What happens when you use this inside a static method? Try logging it.

class example {
    static msg (){
        console.log(this);
    }
}

example.msg()