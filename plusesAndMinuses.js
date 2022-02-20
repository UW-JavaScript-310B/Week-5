// When a user clicks the + element, the count should increase by 1 on screen.

let counterValue = 0;
const plusBtn = document.getElementById("plus-btn");
const minusBtn = document.getElementById("minus-btn");
const counter = document.getElementById("counter");
console.log(plusBtn);


plusBtn.addEventListener("click", () => {
    counterValue++;
    counter.innerText = counterValue;
});

// When a user clicks the – element, the count should decrease by 1 on screen.

minusBtn.addEventListener("click", () => {
    counterValue--;
    counter.innerText = counterValue;
});