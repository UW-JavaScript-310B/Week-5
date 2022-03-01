//initialize counter to 0
let counter = 0;
//get a handle on text input
let countElm = document.getElementById("countInput");

// When a user clicks the + element, the count should increase by 1 on screen.
//get a handle on button plus
const plusElm = document.getElementById("plusBtn");
//add click event listener on button plus
plusElm.addEventListener("click", plusBtnFtn);
//function to increase counter by 1 and display in the input element
function plusBtnFtn() {
    counter++;
    countElm.value = counter;
}
// When a user clicks the – element, the count should decrease by 1 on screen.
//get a handle on button minus
const minusElm = document.getElementById("minusBtn");
//add click event listener on button minus
minusElm.addEventListener("click", minusBtnFtn);
//function to decrease counter by 1 and display in the input element
function minusBtnFtn() {
    counter--;
    countElm.value = counter;
}