// Do not change
document.getElementById('cat').addEventListener('click', () => {
  alert('meow!');
});

// When clicked, "More info" link should alert "Here's some info"
// instead of going to a new webpage
document.getElementById("more-info").addEventListener("click", () => {
  alert("More info");



  ????


  
});

// When the bark button is clicked, should alert "Bow wow!"
// Should *not* alert "meow"
document.getElementById("dog").addEventListener("click", () => {
  alert(document.getElementById("dog").innerText);
});