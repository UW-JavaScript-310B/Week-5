// When a user clicks the + element, the count should increase by 1 on screen.
// When a user clicks the – element, the count should decrease by 1 on screen.

let header = document.querySelector("h2");
header.innerText = 0;

document.getElementById("increment").addEventListener("click", addOne);
document.getElementById("decrememt").addEventListener("click", subtractOne);

function addOne() {
  header.innerText++;
}

function subtractOne() {
  header.innerText--;
}