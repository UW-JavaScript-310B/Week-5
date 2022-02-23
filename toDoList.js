// If an li element is clicked, toggle the class "done" on the <li>

// If a delete link is clicked, delete the li element / remove from the DOM

// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)
const addListItem = function (event) {
  event.preventDefault();
  const input = this.parentNode.getElementsByTagName("input")[0];
  const text = input.value; // use this text to create a new <li>
  //TODO - add logic if text is blank
  //TODO - Split this into a function
  const list = document.getElementsByClassName("today-list")[0];
  const listItem = document.createElement(`li`);
  const listSpan = document.createElement(`span`);
  const listATag = document.createElement(`a`);
  listSpan.innerText = text + " "; //TODO - figure out why we need a space here
  listATag.setAttribute("class", "delete");
  listATag.innerText = "Delete Bee";
  list.appendChild(listItem);
  listItem.appendChild(listSpan);
  listSpan.appendChild(listATag);
};

const addButton = document.getElementsByClassName("add-item");
const deleteButton = document.getElementsByClassName("delete");

addButton[0].addEventListener("click", addListItem);

deleteButton[0].addEventListener("click", () => {
  console.log("delete btn clicked");
});

// var ulElem = document.getElementById('myList');
// ulElem.removeChild(ulElem.childNodes[i])
