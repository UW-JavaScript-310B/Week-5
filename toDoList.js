let todayList = document.querySelector('.today-list');

// If an li element is clicked, toggle the class "done" on the <li>

todayList.addEventListener('click', function(e) {
  if (e.target.localName === 'span')
  e.target.parentNode.classList.toggle('done');
  } );

// If a delete link is clicked, delete the li element / remove from the DOM

const delListItem = function(e) {
  if (e.target.className === 'delete') {
    e.target.parentNode.remove(); 
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
  
  let upButton = document.createElement('button');
  let downButton = document.createElement('button');
  upButton.appendChild(document.createTextNode('Up'));
  downButton.appendChild(document.createTextNode('Down'));

  newDelete.className = "delete"
  newDelete.appendChild(document.createTextNode('Delete'));
  newSpan.appendChild(document.createTextNode(text));
  newLi.appendChild(newSpan);
  newLi.appendChild(newDelete);
  newLi.appendChild(upButton);
  newLi.appendChild(downButton);
  todayList.appendChild(newLi);  
};

const addList = document.querySelector('.add-item');
addList.addEventListener('click', addListItem);

const moveUpOrDown = function(e) {
  if (e.target.outerText === 'Up') {
    todayList.insertBefore(e.target.parentNode, e.target.parentNode.previousSibling);
  } else if (e.target.outerText === 'Down') {
    todayList.insertBefore(e.target.parentNode, e.target.parentNode.nextSibling.nextSibling);
  }
}

let firstUpButton = document.createElement('button');
let firstDownButton = document.createElement('button');
firstUpButton.appendChild(document.createTextNode('Up'));
firstDownButton.appendChild(document.createTextNode('Down'));

let liFirst = document.querySelector('li');
liFirst.appendChild(firstUpButton);
liFirst.appendChild(firstDownButton);

todayList.addEventListener('click', moveUpOrDown);
