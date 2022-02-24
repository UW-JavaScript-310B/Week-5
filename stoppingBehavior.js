// Do not change
document.getElementById('cat').addEventListener('click', () => {
  alert('meow!');
});

// When clicked, "More info" link should alert "Here's some info"
// instead of going to a new webpage
function switchToAlert(){
  let aTag = document.getElementById('more-info')
  aTag.setAttribute('href', '#')
  alert("Here's some info")
}
// When the bark button is clicked, should alert "Bow wow!"
// Should *not* alert "meow"
// document.getElementById('cat').addEventListener('mouseover', ()=>{
//   let cat = document.querySelector('cat')
//   cat.setAttribute('id', 'woof')
// })
// function killOldAlert(e){
//   // e.stopPropagation()
//   let doggy = document.getElementById('dog')
//   doggy.addEventListener('click', () =>{
//     alert(`Bow wow wow yippy yo yippy yay 
//     Doggy Dogg's in the ... house`);
//     alert("Sorry... couldn't miss the oppurtunity ...its an old 90's song")
//   })
// }

const killCat = document.getElementById('dog').addEventListener('click', event => {
  event.stopPropagation()
  alert(`Bow wow wow yippy yo yippy yay 
  Doggy Dogg's in the ... house`);
    alert("Sorry... couldn't miss the oppurtunity ...its an old 90's song")
})

// doc:https://www.w3schools.com/jsref/event_stoppropagation.asp
// doc:https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_event_stoppropagation
