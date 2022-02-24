// When a user clicks the + element, the count should increase by 1 on screen.
let counter = 0
const countEl = document.getElementById('count');
const plusEl = document.getElementById('plus');
plusEl.addEventListener('click', (e) =>{
    counter++;
    countEl.innerHTML = `counter: ${counter}`
})

// When a user clicks the – element, the count should decrease by 1 on screen.
const minusEl = document.getElementById("minus");
minusEl.addEventListener('click', (e) =>{
    counter--;
    countEl.innerHTML = `counter: ${counter}`
})