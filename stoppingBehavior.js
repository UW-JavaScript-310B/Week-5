// Do not change
document.getElementById('cat').addEventListener('click', () => {
  alert('meow!');
});

// When clicked, "More info" link should alert "Here's some info"
// instead of going to a new webpage
const moreInfo = document.getElementById("more-info");
moreInfo.addEventListener('click', e => {
  e.preventDefault();
  alert(`Here's some info!`);
});

// When the bark button is clicked, should alert "Bow wow!"
// Should *not* alert "meow"
const bark = document.getElementById('dog');
// Bark click event function
bark.addEventListener('click', e => {
  e.stopPropagation();
  alert('Bow wow!');
});