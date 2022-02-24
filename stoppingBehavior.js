// Do not change
document.getElementById("cat").addEventListener("click", () => {
  alert("meow!");
});

// When clicked, "More info" link should alert "Here's some info"
// instead of going to a new webpage
document.getElementById("more-info").addEventListener("click", clickAlert);

function clickAlert(event) {
  event.preventDefault();
  alert("Here's some info");
}

// When the bark button is clicked, should alert "Bow wow!"
// Should *not* alert "meow"
document.getElementById("dog").addEventListener("click", bark);

function bark(event) {
  event.stopPropagation();
  alert("Bow wow!");
}
