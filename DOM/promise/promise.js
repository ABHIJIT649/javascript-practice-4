//Create a basic promise
// → Write a promise that resolves with "Success!" after 2 seconds

const promiseOne = new Promise( (resolve , reject) => {
   setTimeout( () => {
    console.log('Success');
   }, 2000)
})


//Handle promise using .then() and .catch()
// → Create a promise that randomly either resolves or rejects. Handle both outcomes.

const promiseTwo = new Promise ( (resolve , reject) => {
    let error = false
    if (!error) {
        resolve({username : "Abhijit" , pass : "123@"})
    }else{
        reject('Error something wents wrong')
    }
} , 1000)

promiseTwo.then( (user) => {
   console.log(user);
}).catch(  (err) => {
  console.log(err);
})

//Chain multiple .then() calls
// → Create a promise that resolves with a number, then use .then() to double it, then square it

const promiseThree = new Promise( (resolve , reject) => {
     let error = false
     if (!error) {
        resolve({username : "Abhijit@123" , password : "123345" , email : "abhi@gmail.com"})
     }else{
        reject("error some thing wents erong plese try again")
     }

})

promiseThree.then( (users) => {
   console.log(users);
   return users.username
}).then( (users) => {
    return users.email
     
}).catch( (error) => {
   console.log(error);
}).finally( () => {
  console.log("finally all are right the promise is successfully run ");
})


//Use Promise to simulate API call
// → Create a fake fetchData() function that resolves with data after 3 seconds.

fetch ()