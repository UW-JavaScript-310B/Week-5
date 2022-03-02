// If an li element is clicked, toggle the class "done" on the <li>
const listParent = document.querySelector('ul.today-list');
let listItems = document.querySelectorAll('li')

listParent.addEventListener('click', (e) => {
  const clickedLiElement = e.target;
  clickedLiElement.classList.toggle('done');
});

// If a delete link is clicked, delete the li element / remove from the DOM
const deleteEl = document.getElementsByClassName('delete')[0].parentNode;

const deleteLi = (e) => {
  deleteEl.remove()
};

deleteEl.addEventListener('click', (deleteLi));

// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)
const addListItem = function (e) {
  e.preventDefault();
  const input = this.parentNode.getElementsByTagName('input')[0];
  const text = input.value; // use this text to create a new <li>
  let newListItem = document.createElement('li');
  let span = document.createElement('span');
  let deleteClass = document.createElement('a');
  deleteClass.classList.add('delete')
  deleteClass.appendChild(document.createTextNode('Delete'));
  span.appendChild(document.createTextNode(text));
  newListItem.appendChild(span);
  newListItem.appendChild(deleteClass);
  listParent.appendChild(newListItem);
};

const newListItem = document.getElementsByClassName('add-item')[0];
newListItem.addEventListener('click', addListItem);