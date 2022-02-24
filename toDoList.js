// If an li element is clicked, toggle the class "done" on the <li>
document.querySelector("ul").addEventListener("click", updateDone);

function updateDone(e) {
  if(e.target.localName === 'li') {
    e.target.classList.add('done');
  }
}

// If a delete link is clicked, delete the li element / remove from the DOM
document.querySelector("ul").addEventListener("click", deleteItem);

function deleteItem(e) {
  if(e.target.className === 'delete') {
    e.target.parentElement.remove();
  }
}

// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)

const addListItem = function(e) {
  e.preventDefault();
  const input = this.parentNode.getElementsByTagName('input')[0];
  const text = input.value;

  const span = document.createElement("span");
  span.innerText = text;

  const deleteItem = document.createElement("a");
  deleteItem.className = "delete";
  deleteItem.innerText = "Delete";

  const toDo = document.createElement("li");
  toDo.appendChild(span);
  toDo.appendChild(deleteItem);
  document.getElementsByClassName("today-list")[0].appendChild(toDo);
};

document.getElementsByClassName("add-item")[0].addEventListener("click", addListItem);