//Create a class Person with firstName and lastName.
// Add a fullname getter that returns "firstName lastName"


//step process but wrong

// class person {
//     constructor(firstname , lastname) {
//         this.firstname = firstname
//         this.lastname = lastname
//     }

//     get firstname(){
//         return this._firstname.toUpperCase()

//     }
//     set firstname (value){
//         this._firstname = value
//     }

//     get lastname (){
//         return this._lastname.toUpperCase()
//     }

//     set lastname(value){
//         this._lastname = value
//     }

// }


//correct process
// class person {
//     constructor(firstname , lastname){
//         this.firstname = firstname
//         this.lastname = lastname
//     }

//     get fullname (){
//         return this.firstname +" "+this.lastname
//     }
//     set fullname(value){
//        const parts = value.split(" ")
//         this.firstname = parts[0]
//         this.lastname = parts[1]
//     }
// }

// const Abhi =  new person ("Abhijit" , "mohanty")
// console.log(Abhi.fullname)



//In the same class, add a fullname setter

// When someone sets fullname = "John Doe", it should update firstName and lastName

class person1 {
    constructor(firsrtname , lastname){
        this.firsrtname = firsrtname
        this.lastname = lastname
    }

    get fullname (){
        return this.firsrtname + " " + this.lastname
    }
    set fullname(value){
        const parts = value.split(" ")
        this.firsrtname = parts[0]
        this.lastname = parts[1]
    }
}

const babul =  new person1 ("Abhijit" , "mohanty")
console.log(babul.fullname)

babul.fullname = "Amiya Das";
console.log(babul.fullname);


/**Create a class Circle with a radius property.
Add a getter area that returns the area of the circle.
(Formula: Math.PI * radius * radius) */

class circle {
    constructor(radius){
        this.radius = radius
    }
    get area (){
        return Math.PI * this.radius * this.radius
    }

    set area(value){
        this.radius = value
    }
}

const areas = new circle(5)
console.log(areas.area);


/*Make a User class with a private _password property.
Use a setter to allow only passwords longer than 6 characters.*/

class user {
    constructor(){
        this._password = ""
    }
    get password(){
        return this._password
    }

    set password (value){
        if (value.length < 6) {
            console.log("password is too short");
            
        }else{
            this._password = value
        }
    }
}

const pass = new user ()
pass.password = "11122"
pass.password = "111221222"

console.log(pass.password);

//