// When a user clicks the + element, the count should increase by 1 on screen.
let counter = 0;
const plusEl = document.getElementById("btnInc");
const minusEl = document.getElementById("btnDec");
let cntTextEl = document.getElementById("cntText");
plusEl.addEventListener ('click', (e) => {
    counter++;
    cntTextEl.innerHTML = `Count is ${counter}`;
});
minusEl.addEventListener ('click', (e) => {
    counter--;
    cntTextEl.innerHTML = `Count is ${counter}`;
});
// When a user clicks the – element, the count should decrease by 1 on screen.
