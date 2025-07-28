// Bind greet() to another object

const person1 = {
    name: "Abhijit",
    greet : function(){
        console.log("hello , " + this.name);
    }
}

const person2 = {
    name : "Mohnaty"
}
const greetMohanty = person1.greet.bind(person2)
greetMohanty()

//Create an object person with a method greet(). Use bind() to call it with another object.

const person = {
    name : "Abhi"

}

function greet(){
   console.log("hello, " +this.name);
}
const greetperson = greet.bind(person)
greetperson()

//Create a function sayHello() that uses this.name. Use bind() to call it with different objects.

function sayHello (){
    console.log("hey , " + this.name);
}

const student1 = {name : "rohit"}
const student2 = { name : "Virat"}

const bindstudent1 = sayHello.bind(student1)
const bindstudent2 = sayHello.bind(student2)
bindstudent1()
bindstudent2()

//Create an object car with a method start(). Extract the method and use bind() so it still works correctly.

const car = {
    brand : "toyota",
    start(){
        console.log("car is starting" + this.brand);
    }
}

const brandBind = car.start.bind(car)
brandBind()

//Create a constructor function User with a method printRole(). Use bind() to lock it to a specific instance.

//stape 1 not use bind
function User(name , role){
   this.name = name
   this.role = role

   this.printRole = () => {
    console.log(this.name +"is a" + this.role);
}
}



const name1 = new User("gendu" , "Admin")
// const name2 = new User("amiya" , "devloper")

const say = name1.printRole
say()

//stape 2 use bind

function userOne (name, role){
    this.name = name
    this.role = role

    this.printRole = function(){
        console.log(this.name + " is a " + this.role);
    }.bind(this)
}

const user1 = new userOne("AbhijitMohanty" , "Devloper")

const print = user1.printRole
print()


//Create a function add(a, b) and bind it partially to always add 10.

function add(a, b){
    return a+b
}

const addTen = add.bind(null,10)
console.log(addTen(10));

//Use bind() to pass arguments (partial application) to a function multiply(a, b) where a is always 5.

function multipy(a, b){
    return a*b
}

const multiplyfive = multipy.bind( null, 5)
console.log(multiplyfive(7));