const meowEl = document.getElementById('cat');


const removeMeow = function () {
  document.getElementById('cat').removeEventListener( "click", () => {alert('meow!');
});
};

const addMeow = function () {
  document.getElementById('cat').addEventListener('click', () => {alert('meow!');
  });
  
};



// When clicked, "More info" link should alert "Here's some info"
// instead of going to a new webpage





// When the bark button is clicked, should alert "Bow wow!"
// Should *not* alert "meow"

const addBark = function () {
  removeMeow();
  document.getElementById('dog').addEventListener('click', () => {alert('Bow Wow');

});

};








// betterToDos[0]
// .removeEventListener('click', toggleToDo);

// const myDiv = document.getElementById("myDIV");
// myDiv.addEventListener("mousemove", myFunction);

// function removeHandler() {
//   myDiv.removeEventListener("mousemove", myFunction);
// }

// function myFunction() {
//   document.getElementById("demo").innerHTML = Math.random();
// }