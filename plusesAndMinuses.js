let count = 0;
const counter = document.getElementById('counter');

// When a user clicks the + element, the count should increase by 1 on screen.
const increase = document.getElementById('increase');

increase.addEventListener("click",()=>{
count++;
counter.innerHTML = count;

});
// When a user clicks the – element, the count should decrease by 1 on screen.
const decrease = document.getElementById('decrease');

decrease.addEventListener("click",()=>{
    count--;
    counter.innerHTML = count;

});