// Do not change
document.getElementById('cat').addEventListener('click', (e) => {
  alert('meow!');
});


// When clicked, "More info" link should alert "Here's some info"
// instead of going to a new webpage

document.getElementById("more-info").addEventListener('click', () => {
  e.preventDefault();
  alert("Here's some info");
});


// When the bark button is clicked, should alert "Bow wow!"
// Should *not* alert "meow"


// document.getElementById('cat').removeEventListener('click', () => {
//   alert('meow!');
// });

// removeMeow = function () {
//   document.getElementById('cat').removeEventListener('click', () => {
//     alert('meow!');
//   });
// }

document.getElementById('dog').addEventListener('click', () => {
  // removeMeow();
  document.getElementById('cat').removeEventListener('click', () => {
    alert('meow!');
  });
  alert('Bow Wow!');

});