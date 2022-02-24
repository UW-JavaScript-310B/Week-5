// If an li element is clicked, toggle the class "done" on the <li>

const liElement = document.getElementsByTagName('li')[0];
liElement.addEventListener('click', function (e) {
  liElement.classList.toggle('done');
})

const toggleClass = (node) => {
  node.classList.toggle("done");
}

// If a delete link is clicked, delete the li element / remove from the DOM

const delEl = document.getElementsByClassName('delete')[0];
delEl.addEventListener('click', function (e) {
  e.target.parentNode.remove();
})

const deleteNode = (node) => {
  node.parentNode.remove();
}

// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)

const addListItem = function (e) {
  e.preventDefault();
  const input = document.getElementsByTagName('input')[0];
  const text = input.value; // use this text to create a new <li> 
  const liEl = document.createElement('li');
  const ulEl = document.getElementsByClassName('today-list')[0];
  ulEl.appendChild(liEl);

  const spanEl = document.createElement('span');
  spanEl.onclick = () => { toggleClass(liEl) }
  const liTextNode = document.createTextNode(text);
  spanEl.appendChild(liTextNode);
  liEl.appendChild(spanEl);

  const a = document.createElement('a');
  a.onclick = () => { deleteNode(a) }
  a.classList.add("delete");
  liEl.appendChild(a);

  const deleteTxt = document.createTextNode('Delete').style.marin = "5px";
  a.appendChild(deleteTxt);

  // Finish function here
};

const addClick = document.getElementsByClassName('add-item');
for (let i = 0; i < addClick.length; i++) {
  addClick[i].addEventListener('click', function (e) {
    addListItem(e);
  });
}