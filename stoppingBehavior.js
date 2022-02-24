// Do not change
document.getElementById('cat').addEventListener('click', () => {
  alert('meow!');
});

// When clicked, "More info" link should alert "Here's some info"
// instead of going to a new webpage

const moreInfoBtn = document.getElementById('more-info');
console.log(moreInfoBtn);

function stopLink(e){
  e.preventDefault();
  alert("Here's some info");
}

moreInfoBtn.addEventListener('click', stopLink,)

// When the bark button is clicked, should alert "Bow wow!"
// Should *not* alert "meow"

const bark = document.getElementById('dog');
console.log(bark);

function bowwow(e){
  e.stopPropagation();
  alert("Bow wow!");
}

bark.addEventListener('click', bowwow);
