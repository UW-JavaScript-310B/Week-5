// When a user clicks the + element, the count should increase by 1 on screen.
let counter = 0;
let counterText = document.getElementById('counter')
const incrementButton = document.getElementById('increment');

incrementButton.addEventListener('click', eventHandlerincrement);

// would like to turn this into an if statement if i have time, so i would only need one
// function instead of two to get increment or decrement
function eventHandlerincrement(e) {
  counter++
  console.log(`counter is now ${counter}`);
  counterText.innerText = counter;
};

// When a user clicks the – element, the count should decrease by 1 on screen.
const decrementButton = document.getElementById('decrement');
decrementButton.addEventListener('click', eventHandlerdecrement);

function eventHandlerdecrement(e) {
  counter--
  console.log(`counter is now ${counter}`);
  counterText.innerText = counter;
};