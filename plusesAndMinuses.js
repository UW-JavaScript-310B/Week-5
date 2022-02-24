// When a user clicks the + element, the count should increase by 1 on screen.
// When a user clicks the – element, the count should decrease by 1 on screen.

const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
let jsCounter = 0;
const counter = document.getElementById('counter');

  
plus.addEventListener('click', () => {
    jsCounter ++;
    counter.innerText = jsCounter;
    console.log(`The current count is now ${jsCounter}`)
});

minus.addEventListener('click', () => {
    jsCounter --;
    counter.innerText = jsCounter;
    console.log(`The current count is now ${jsCounter}`)
});