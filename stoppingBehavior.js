// Do not change
document.getElementById('cat').addEventListener('click', () => {
  alert('meow!');
});

// When clicked, "More info" link should alert "Here's some info"
// instead of going to a new webpage


const info = document.getElementById('more-info');

function stopLink(event){
  event.preventDefault();
  alert("Here's some info");
};

info.addEventListener('click', stopLink,)
// When the bark button is clicked, should alert "Bow wow!"
// Should *not* alert "meow"

const dog = document.getElementById('dog');

function bark(event){
  event.stopPropagation();
  alert("Bow wow!");
};

dog.addEventListener('click', bark,);