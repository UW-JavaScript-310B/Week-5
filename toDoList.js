// If an li element is clicked, toggle the class "done" on the <li>

const addBtn = document.getElementsByClassName("add-item")[0];
const todayList = document.getElementsByClassName("today-list")[0];

const doneListItem = function(e) {
  console.log(e.target);
  e.preventDefault();
  if (e.target.tagName === "LI") {
    e.target.className = "done";
  }
}

// If a delete link is clicked, delete the li element / remove from the DOM

const deleteListItem = function(e) {
  e.preventDefault();
  if (e.target.className === "delete") {
    e.target.parentNode.remove();
  }
}

// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)
const addListItem = function(e) {
  e.preventDefault();
  const input = this.parentNode.getElementsByTagName('input')[0];
  const text = input.value;
  let li = document.createElement("li");
  li.innerHTML =
    `
      <span>${text}</span>
      <a class="delete">Delete</a>
    `
  li.addEventListener("click", deleteListItem);
  li.addEventListener("click", doneListItem);
  todayList.appendChild(li);
};

addBtn.addEventListener("click", addListItem);