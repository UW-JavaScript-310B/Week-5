// If an li element is clicked, toggle the class "done" on the <li>

const liToggle = document.getElementsByTagName('span')[0];

liToggle.addEventListener('click', function(e) {
    e.target.classList.toggle('done');
  } );

// If a delete link is clicked, delete the li element / remove from the DOM

const deleteButton = document.getElementsByClassName('delete')[0];
const deleteTarget = document.getElementsByClassName('delete')[0].parentNode;

deleteButton.addEventListener('click', function(e) {
  deleteTarget.remove(); 
} );

// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)
const addListItem = function(e) {
  e.preventDefault();
  const input = this.parentNode.getElementsByTagName('input')[0];
  const text = input.value; // use this text to create a new <li>

  // Finish function here
  const newLi = document.createElement('li');
  newLi.appendChild(text);
};

const addList = document.getElementsByClassName('add-item')[0];
addList.addEventListener('click', addListItem);