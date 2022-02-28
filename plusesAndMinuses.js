// When a user clicks the + element, the count should increase by 1 on screen.
// When a user clicks the – element, the count should decrease by 1 on screen.
let counter = 0;
const plusButton = document.getElementById("plusButton");
const minusButton = document.getElementById("minusButton");
const resetButton = document.getElementById("resetButton");
const resultField = document.getElementById("result");

plusButton.addEventListener("click", () => {
  counter++;
  resultField.innerHTML = counter;
});

minusButton.addEventListener("click", () => {
  counter--;
  resultField.innerHTML = counter;
});

resetButton.addEventListener("click", () => {
  counter = 0;
  resultField.innerHTML = counter;
});
