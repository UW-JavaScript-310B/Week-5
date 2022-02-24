// If an li element is clicked, toggle the class "done" on the <li>

// If a delete link is clicked, delete the li element / remove from the DOM

// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)
const addListItem = function (event) {
  event.preventDefault();
  const input = this.parentNode.getElementsByTagName("input")[0];
  const text = input.value; // use this text to create a new <li>
  //TODO - add logic if text is blank to default it
  //TODO - Split this into a function
  const list = document.getElementsByClassName("today-list")[0];
  const listItem = document.createElement(`li`);
  listItem.addEventListener("click", clickListItem);
  const listSpan = document.createElement(`span`);
  const listATag = document.createElement(`a`);
  listSpan.innerText = text + " "; //TODO - figure out why we need a space here
  listATag.setAttribute("class", "delete");
  listATag.innerText = "Delete";
  list.appendChild(listItem);
  listItem.appendChild(listSpan);
  listSpan.appendChild(listATag);

  //TODO - figure out how to clear input box
  //input.innerText = "";
  const lastRow =
    event.target.parentNode.previousElementSibling.querySelector(
      "li:last-child"
    );
  document.querySelector("ul.today-list li:last-child");
  const deleteButton = lastRow.querySelector(".delete");
  deleteButton.addEventListener("click", deleteListItem);
};

const clickListItem = function (event) {
  event.target.parentNode.setAttribute("class", "done");
};

const deleteListItem = function (event) {
  console.log(`test`);
  console.log(event.target.parentNode);
  console.log(event.target.parentNode.parentNode);
  event.target.parentNode.parentNode.removeChild(event.target.parentNode);
};

const alertEvent = function (event) {
  alert(event.target);
};

const addButton = document.querySelector(".add-item");
const deleteButton = document.querySelector(".delete");
const listItem = document.getElementsByClassName("today-list")[0];
addButton.addEventListener("click", addListItem);
listItem.addEventListener("click", clickListItem);
deleteButton.addEventListener("click", deleteListItem);
