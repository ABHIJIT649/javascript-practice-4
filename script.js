const groceryList = ["milk", "oil", "papad"] ;
console.log(groceryList)

groceryList.push("atta"); //add last in array
console.log(groceryList)

groceryList.unshift("badi"); //add first in arrya
console.log(groceryList)

groceryList.pop() //remove last in arry
console.log(groceryList)


groceryList.shift()//remove first in arry
console.log(groceryList)


console.log(groceryList) //final output



//length of thr array

const number= [1,3,5,7,6,9];
 console.log(number.length);


 // change the array item

 const fruit = ["apple", "mango", "orange","chery"]
fruit[2] = "banana";
console.log(fruit) 

//get the secomd item
const cities = ["delhi", "odisha", "mumbai"]
console.log(cities[1]);
//replace the last item
//type one
const animals =["dog", "cat", "cow"]
animals.pop() , animals.push("goat");
console.log(animals)


//type2
const animal = ["dog","cat","cow"]
animal[2] = "goat";
console.log(animal)


//add two new itam in last
const colors = ["red","blue"];
colors.push("green", "yello")
console.log(colors)


//add two item in start
const cars = ["honda","toyota"]
cars.unshift("BMW" , "Audi");
console.log(cars)


//remove second item
const tools = ["hammer", ""]
