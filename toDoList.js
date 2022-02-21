

const list = document.getElementsByClassName('today-list');

const listItems = document.querySelectorAll('li')[0];

const deleteButton = document.getElementsByClassName('delete');

console.log(listItems);
console.log(deleteButton);


// If an li element is clicked, toggle the class "done" on the <li>

listItems.addEventListener('click', () => {
  listItems.classList.toggle("done");
});


// If a delete link is clicked, delete the li element / remove from the DOM

deleteButton.addEventListener('click', () => {
   
});


// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)


// const addListItem = function(e) {
//   e.preventDefault();
//   const input = this.parentNode.getElementsByTagName('input')[0];
//   const text = input.value; // use this text to create a new <li>

// Finish function here
// };