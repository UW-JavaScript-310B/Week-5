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
  const deleteButton = document.querySelector("ul li:last-child");
  deleteButton.addEventListener("click", deleteListItem);

  //const beeList = document.getElementsByClassName("today-list")[0];
  const beeList = document.getElementsByClassName("ul li:last-child")[0];
};

const deleteListItem = function (event) {
  console.log(`test`);
  const ulElem = document.getElementsByClassName("today-list")[0];
  const liElem = ulElem.children;
  for (item in liElem) {
    console.log(item);
  }
  ulElem.removeChild(ulElem.childNodes[1]); //TODO - remove the hard coding
};

/*
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

addButton.addEventListener("click", addListItem);
deleteButton.addEventListener("click", deleteListItem);
