//Create a new <h2> with text "Welcome to DOM World" and add it inside a <div id="container">
const firsth2 = document.createElement('h2')
firsth2.textContent = "Wellcome To DOM World"
console.log(firsth2);
 let sdf =  document.querySelector('#container') 
 sdf.appendChild(firsth2)


//   Create a <button> with text "Click Me" and add it to the page
  const btn = document.createElement('button');
 btn.textContent= "click me";
 document.body.appendChild(btn);


 //Create an <img> element with a link and add it to the body
 const img = document.createElement('img')
 img.src = "https://via.placeholder.com/150"
 img.alt = "Simple Img"
 document.body.appendChild(img)


//  //Edit Element

 //Given a <p id="note">Old Text</p>, change the text to "New Updated Text"
  const oldNote = document.querySelector('#note')
  const newNote = document.createElement('p')
  newNote.textContent = " New  updet Text"
  oldNote.replaceWith(newNote)

  //Change the background color of a <div id="box"> to green using JavaScript.
  const change = document.querySelector('#box')
  change.style.backgroundColor = "green"

  //Change the src of an <img id="logo"> to a new image

  





