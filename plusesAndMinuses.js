// Define var counter and get <counter> element
let counter = 0;
const counterEl = document.getElementById("counter");
// When a user clicks the + element, the count should increase by 1 on screen.
const plusEl = document.getElementById("plus");
// plus click event
plusEl.addEventListener('click', (e) => {
  counter++;
  // Display the result in HTML page
  counterEl.innerHTML = counter;
});

// When a user clicks the – element, the count should decrease by 1 on screen.
const minusEl = document.getElementById("minus");
// minus click event
minusEl.addEventListener('click', (e) => {
  counter--;
  // Display the result in HTML page
  counterEl.innerHTML = counter;
});