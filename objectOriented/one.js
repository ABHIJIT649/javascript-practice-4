//Create a class called Person
// → It should have name and age as properties and a method sayHello() that prints the name.

// class persion  {
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }

//     sayhello(){
//         console.log(`hello my name is ${this.name}`);
//     }

//     sayhello2(){
//         console.log(`my age is ${this.age}`);
//     }
// }

// const name = new persion("abhijit" , "23")

// name.sayhello()
// name.sayhello2()

//Create two objects from the Person class
// → One for yourself, and one for your friend

class user {
    constructor(username){
        this.username = username
    }

   logMe(){
    console.log(`my name is ${this.username}`);
   }
}

// const myName =  new User ("abhijit")
// myName.me()

class Teacher extends user {
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
   
    myFriend(){
        console.log(`my friend name is ${this.username}`);
    }

    myFriend2(){
        console.log(`my friend email id is ${this.email}`);
    }

    myFriend3(){
        console.log(`my friend password is ${this.password}`);
    }
}

const chai = new Teacher ("Babul" , "babul@gmail.com","123")

chai.myFriend()
chai.myFriend2()
chai.myFriend3()

//Add a method isAdult() to the class
// → It should return true if age is 18 or above

class student {
    constructor(name, age){
        this.name = name
        this.age = age
    }
    sayhii(){
        console.log(`hello my name is ${this.name}`);
    }

    isAdult(){
        return this.age >= 18
    }
}

const me = new student("mohanty" , 23)
const me2 = new student("mohantyAbhi" , 17)

me.sayhii()
me2.sayhii()
console.log(me2.isAdult());

//Create a class Student that extends Person
// → Add a property course and a method introduce() that shows name and course
class persion{
    constructor(name , age) {
        this.name = name
        this.age = age
    }

    sayHello(){
        console.log(`hello my name is ${this.name}`);
    }
}


class students extends persion{
    constructor(name, age, course){
        super(name, age)
        this.course = course
    }

    interduce() {
        console.log(`Hi my name is ${this.name} and my course is ${this.course}`);
    }
}

const student1 = new students("rohit" , 23 , "computerScience") 

student1.sayHello()
student1.interduce()


//Use a constructor to initialize values in a class
// → Write a class Car with model and year

class car {
    constructor(model , year) {
        this.model = model
        this.year = year
    }
}

const car1 = new car ("tayota",2014)
console.log(car1);

//