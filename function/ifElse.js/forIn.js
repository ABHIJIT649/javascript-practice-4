
// let person = { name: "Alice", age: 25, city: "New York" };
// Print each key and its corresponding value

let persion = {
    name :"Alice",
    age: 24,
    city : "New Work"
}

for (const key  in persion) {
    
    console.log( `${key} => ${persion[key]}`);
}

//let student = { rollNo: 101, name: "John", marks: 85 };
// Print only the keys

let student = {
    rollNo :101,
    name : "jhon",
    mark : 85
}

for (const key in student) {
    
    console.log(key);
}

//let product = { id: 5001, title: "Mobile", price: 12000 };
// Print only the values.

let product = {
    id : 5001,
    title : "Mobile",
    price: 12000
}

for (const key in product) {
    console.log(product[key]);
}

//let car = { brand: "Toyota", model: "Camry", year: 2020 };
// Print "Key: <key>, Value: <value>" for each

let car = {
    brand : "tayota",
    model : "camry", 
    year : 2020
}

for (const key in car) {
    
    console.log( ` key : ${key}`);

    console.log(` value : ${car[key]}`);
}

//let data = { a: 10, b: 20, c: 30 };
// Find the sum of all the values using for...in

let data = {

    a: 10,
    b: 20,
    c: 30
}
 sumofData = 0;
for (const key in data) {
   
    sumofData = sumofData + data[key]
    
}
console.log(sumofData);
