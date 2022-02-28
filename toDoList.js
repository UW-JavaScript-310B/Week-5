// If an li element is clicked, toggle the class "done" on the <li>

// If a delete link is clicked, delete the li element / remove from the DOM

// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)
const addListItem = function (event) {
  event.preventDefault();
  const input = this.parentNode.getElementsByTagName("input")[0];
  console.log(input);
  const inputElement = input.parentNode;
  console.log(inputElement);
  const listElement = inputElement.previousElementSibling;
  console.log(listElement);
  const text = input.value;
  const listItem = document.createElement(`li`);
  const listSpan = document.createElement(`span`);
  const listATag = document.createElement(`a`);
  listSpan.innerText = text + " ";
  listATag.setAttribute("class", "delete");
  listATag.innerText = "Delete";
  listElement.appendChild(listItem);
  listItem.appendChild(listSpan);
  listItem.appendChild(listATag);
  listSpan.addEventListener("click", clickListItem);

  const lastRow =
    event.target.parentNode.previousElementSibling.querySelector(
      "li:last-child"
    );
  document.querySelector("ul.today-list li:last-child");
  const deleteButton = lastRow.querySelector(".delete");
  deleteButton.addEventListener("click", deleteListItem);
};

const clickListItem = function (event) {
  event.target.parentNode.classList.toggle("done");
};

const deleteListItem = function (event) {
  console.log(`delete`);
  console.log(event.target.parentNode);
  console.log(event.target.parentNode.parentNode);
  event.target.parentNode.parentNode.removeChild(event.target.parentNode);
};

const addButton = document.querySelector(".add-item");
const deleteButton = document.querySelector(".delete");
const listElement = document.getElementsByClassName("today-list");
const listItem = document.querySelector("ul.today-list li:first-child span");
addButton.addEventListener("click", addListItem);
listItem.addEventListener("click", clickListItem);
deleteButton.addEventListener("click", deleteListItem);
