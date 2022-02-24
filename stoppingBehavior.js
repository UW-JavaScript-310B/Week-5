// Do not change
document.getElementById('cat').addEventListener('click', () => {
  alert('meow!');
});

// When clicked, "More info" link should alert "Here's some info"
// instead of going to a new webpage

const moreEl = document.getElementById('more-info');
moreEl.addEventListener("click", function (e) {
  e.preventDefault();
  alert("Here's some info");
});

// When the bark button is clicked, should alert "Bow wow!"
// Should *not* alert "meow"

const newClick = document.getElementById('dog');
newClick.addEventListener('click', (e) => {
  e.stopPropagation();
  alert("Bow wow!");
});
