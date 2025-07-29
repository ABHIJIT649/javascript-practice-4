function createCounter() {
    let count = 0; 
    return function() {
      count++;
      return count;
    };
  }


const counter = createCounter()

const btn = document.getElementById("btn").addEventListener("click",function () {
    display.textContent = counter(); 
  });
const display = document.getElementById("count")
  

