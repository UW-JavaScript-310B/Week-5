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
  // const tempDeleteButton = document.querySelector("ul li:last-child");
  // tempDeleteButton.addEventListener("click", () => {
  //   const ulElem = document.getElementsByClassName("today-list")[0];
  //   ulElem.removeChild(ulElem.childNodes[1]); //TODO - remove the hard coding
  // });
  console.log("add");
  console.log(
    event.target.parentNode.previousElementSibling.querySelector(
      "ul li a:last-child"
    )
  );

  const deleteButton = document.querySelector("ul li a:last-child");
  console.log(deleteButton);
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

/*
review https://www.tutorialspoint.com/how-to-remove-li-elements-on-button-click-in-javascript
   var allSubjectName = document.querySelectorAll(".subjectName");
   for (var index = 0; index <allSubjectName.length; index++){
      allSubjectName[index].addEventListener("click", function(){
         this.classList.toggle("active");
      });
      allSubjectName[index].querySelector("button").addEventListener("click",
      function(){
         this.closest(".subjectName").remove();
      });
*/

const addButton = document.querySelector(".add-item");
const deleteButton = document.querySelector(".delete");
const listItem = document.getElementsByClassName("today-list")[0];
addButton.addEventListener("click", addListItem);
listItem.addEventListener("click", clickListItem);
deleteButton.addEventListener("click", deleteListItem);
