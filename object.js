const myId ={
    name : "Ravi",
    age : 24
}

console.log(myId);
//acess a single value name
console.log(myId.name);
console.log(myId["name"]);

//add a new preority in oibject
myId.city = "Delhi" 
console.log(myId)

//change the value of on exiting preority
myId.age = 28;
console.log(myId)


//delet a preority from an object
delete myId.city;
console.log(myId)

//check if a preority existing in an object
console.log("age" in myId) //to chack this persion age name keys he ya nehi

//Get all keys of an a object
console.log(Object.keys(myId)) //to print object keys

//get all values on object
console.log(Object.values(myId)) //to print object value

//get the number of properties in  object (length)
console.log(Object.keys(myId).length) //to print how many keys are there

//create an empty object and properties one by one

const student ={}
console.log(student)
student.name ="Amiya kumar das"; //first create a empty object then add the object properties
console.log(student)
student.age =34;
student.city ="cuttack";
student.Email = "student@gmail.com";
console.log(student)










