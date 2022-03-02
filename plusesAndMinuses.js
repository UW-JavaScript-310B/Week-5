// When a user clicks the + element, the count should increase by 1 on screen.
// When a user clicks the – element, the count should decrease by 1 on screen.
const buttonInc = document.getElementById('increment')
const buttonDec = document.getElementById('decrement')
let counterHTML = document.getElementById('counter')
let counter = 0; 

buttonInc.addEventListener('click', function(e) {
    counter++;
    counterHTML.innerText = counter; 
} )

buttonDec.addEventListener('click', function(e) {
    counter--; 
    counterHTML.innerText = counter; 
} )