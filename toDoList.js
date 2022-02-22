// If an li element is clicked, toggle the class "done" on the <li>
// const list = document.getElementsByClassName('today-list')[0];
// console.log(list)



const listItems = document.querySelectorAll('li')[0];

console.log(listItems);

listItems.addEventListener('click', () => {
  listItems.classList.toggle("done");
});


// If a delete link is clicked, delete the li element / remove from the DOM
//identify elements for button and parent of the button
const deleteButton = document.getElementsByClassName('delete')[0];
//identiy parent for the 
const buttonParent = deleteButton.parentNode


console.log(deleteButton);
console.log(buttonParent);

//upon click keep removing the first child of the parent until there are no more children to remove.  This insures both the span and a tags for the li are deleted
deleteButton.addEventListener('click', (e) => {
  while (buttonParent.firstChild) {
    e.stopPropagation();
    buttonParent.removeChild(buttonParent.firstChild);
  }
});

// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)


//identify the ul element which will be the parent of the new li
const list = document.getElementsByClassName('today-list')[0];
console.log(list)

const addListItem = function (e) {
  e.preventDefault();
  const input = this.parentNode.getElementsByTagName('input')[0];
  const text = input.value; // use this text to create a new <li>

  // create and add the list element
  let newToDo = document.createElement("li");

  //append the new list to the parent ul
  list.appendChild(newToDo);

  // create and add the span element
  let newDescr = document.createElement("span");
  newDescr.innerHTML = ` ${text}   `;
  //append the new span to the parent li
  newToDo.appendChild(newDescr);

  // create and add the span element
  let newDelete = document.createElement("a");
  newDelete.setAttribute("class", "delete");
  newDelete.innerHTML = `Delete`;
  //append the new span to the parent li
  newToDo.appendChild(newDelete);

};


//identify the element that will be clicked to trigger the event
const addNewToDo = document.getElementsByClassName('add-item')[0];
//add the new ToDo item when the add-item button is clicked
addNewToDo.addEventListener('click', addListItem);


/* <li>
<span>Reading</span>
<a class="delete">Delete</a>
</li> */

//   let mainEl = document.createElement("main")
// mainEl.setAttribute("id", "main-section");