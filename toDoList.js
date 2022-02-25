// If an li element is clicked, toggle the class "done" on the <li>
document.querySelector("ul").addEventListener("click", listManager);

function listManager(e) {
  if(e.target.localName === 'li') {
    e.target.classList.toggle('done');
  }
  else if(e.target.localName === 'span') {
    e.target.parentNode.classList.toggle('done');
  }
  else if(e.target.className === 'delete') {
    e.target.parentElement.remove();
  }
  else if(e.target.className === "moveUp") {
    const parentElement = e.target.parentElement;
    if(parentElement.previousElementSibling !== null) {
      const item = parentElement.cloneNode();
      item.innerHTML = parentElement.innerHTML;
      parentElement.previousElementSibling.before(item);
      parentElement.remove();
    }
  }
  else if(e.target.className === "moveDown") {
    const parentElement = e.target.parentElement;
    if(parentElement.nextElementSibling !== null) {
      const item = parentElement.cloneNode();
      item.innerHTML = parentElement.innerHTML;
      parentElement.nextElementSibling.after(item);
      parentElement.remove();
    }
  }
}

// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)

document.getElementsByClassName("add-item")[0].addEventListener("click", addListItem);

function addListItem() {
  const text = this.parentNode.getElementsByTagName('input')[0].value;

  if(text !== '') {
    const span = document.createElement("span");
    span.innerText = text;
  
    const deleteItem = document.createElement("a");
    deleteItem.className = "delete";
    deleteItem.innerText = "Delete";
  
    const toDo = document.createElement("li");
    toDo.appendChild(span);
    toDo.appendChild(deleteItem);
  
    const up = document.createElement("a");
    up.innerText = "Up";
    up.className = "moveUp";
    toDo.appendChild(up);
  
    const down = document.createElement("a");
    down.innerText = "Down";
    down.className = "moveDown";
    toDo.appendChild(down);
  
    document.getElementsByClassName("today-list")[0].appendChild(toDo);
  }
};

if(document.querySelectorAll("li").length > 1) {
  document.getElementById("moveUp").addEventListener("click", moveUp);
}