//Change Text on Click
// → When a button is clicked, change the text of a paragraph.
document.getElementById('new_text').addEventListener('click', function(){
    document.getElementById('p_graph').innerHTML = "I am abhijit"
})

//Hide an Element
// → When a button is clicked, hide a div from the page

document.querySelector('#hide_btn').addEventListener('click' , function(){
    document.getElementById('img').remove()
})

//Show Hidden Element
// → A div is hidden. When a button is clicked, show the div
document.querySelector('#show_btn').addEventListener('click' , function() {
    document.querySelector('#show_img').style.display = "block"
})

//Toggle Background Color
// → When a button is clicked, change the background color of a div (toggle between two colors).

document.querySelector('#color_change_btn').addEventListener('click', function() {
    let box = document.querySelector('#toggle_color_box')
    if (box.style.background === "red") {
        box.style.background = "blue"
    }else{
        box.style.background = "red"
    }
})

//Count Button Clicks
// → Display a number. Each time a button is clicked, increase the number by 1
let conut = 0;
document.querySelector('#increse_btn').addEventListener('click',function() {
   conut++;
   document.querySelector('#increse_number').innerHTML = conut
})


//Toggle Show/Hide
// → One button should toggle a paragraph between visible and hidden
let paragraph = document.querySelector('.show_hide')

document.querySelector('#show_hide_btn').addEventListener('click' ,function(){
    
    if (paragraph.style.display === "none") {
        paragraph.style.display = "block"
    }else{
        paragraph.style.display = "none"
    }
})


//Change Image on Click
// → When a button is clicked, change the image source.
document.querySelector('#ChangeImgBtn').addEventListener('click' , function(){
     document.querySelector('#myImage').src = "deadpool.jpeg"

})


//Multiple Buttons Action
// → Create 3 buttons. When any one is clicked, show which one was clicked in a paragraph

let buttons = document.querySelectorAll('#btn')

buttons.forEach(function(button){
   button.addEventListener('click', function(){
    document.getElementById('message').innerText = `${button.innerText} was clicked`
   })
})


//Change Button Text on Click
// → When the button is clicked, change its own text (e.g., "Click Me" → "Clicked!")
 let btn = document.querySelector('#clicked').addEventListener('click',function(){
    clicked.innerText = "clicked"
 })

 
 //Double Click to Change Color
// → On double-clicking a div, change its background color.

document.querySelector('#double').addEventListener('dblclick', function() {
    double.style.background = "red"
})

