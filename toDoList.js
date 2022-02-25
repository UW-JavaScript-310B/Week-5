let todayList = document.querySelector('.today-list');

// If an li element is clicked, toggle the class "done" on the <li>

todayList.addEventListener('click', function(e) {
  const toggleDone = e.target;
  if (toggleDone.localName === 'span')
    toggleDone.parentNode.classList.toggle('done');
  } );

// If a delete link is clicked, delete the li element / remove from the DOM

const delListItem = function(e) {
  const deleteTarget = e.target;
  if (deleteTarget.className === 'delete') {
    deleteTarget.parentNode.remove(); 
  }
};

todayList.addEventListener('click', delListItem);

// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)

const addListItem = function(e) {
  e.preventDefault();
  const input = this.parentNode.getElementsByTagName('input')[0];
  const text = input.value + " "; // use this text to create a new <li>

  // Finish function here
  let newLi = document.createElement('li');
  let newSpan = document.createElement('span');
  let newDelete = document.createElement('a');
  
  newDelete.className = "delete"
  newDelete.appendChild(document.createTextNode('Delete'));
  newSpan.appendChild(document.createTextNode(text));
  newLi.appendChild(newSpan);
  newLi.appendChild(newDelete)
  todayList.appendChild(newLi);  
};

const addList = document.querySelector('.add-item');
addList.addEventListener('click', addListItem);