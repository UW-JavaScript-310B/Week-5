// If an li element is clicked, toggle the class "done" on the <li>
// const list = document.getElementsByClassName('today-list')[0];
// console.log(list)

const list = document.querySelector('ul.today-list');
console.log(list);

const listItems = document.querySelectorAll('li');
console.log(listItems);

// array1.forEach(element => console.log(element));
const listChildren = list.children;
console.log(listChildren);

//toggle the class for the li element under the parent list when it is clicked

list.addEventListener('click', e => {
  const li = e.target;
 listItems.forEach(listItems =>{
  listItems.classList.toggle("done");
});

// elements.forEach(x => x.classList.toggle('otherClass');

});

// If a delete link is clicked, delete the li element / remove from the DOM
//identify elements for button and parent of the button

//get element for delete button
const deleteButton = document.getElementsByClassName('delete')[0];
//identiy li parent for the button element
const buttonParent = deleteButton.parentNode

//get ul for button

const buttonUL = deleteButton.closest('ul.today-list');

console.log(deleteButton);
console.log(buttonParent);
console.log(buttonUL);

//upon click keep removing the first child of the parent until there are no more children to remove.  This insures both the span and a tags for the li are deleted


deleteButton.addEventListener('click', (e) => {
  while (buttonParent.firstChild) {
    buttonParent.removeChild(buttonParent.firstChild);
  }
  buttonParent.remove();
});

// buttonUL.addEventListener('click', (e) => {
//   const a = e.target;
//   while (buttonUL.firstChild) {
//     buttonUL.removeChild(buttonUL.firstChild);
//   }
// });

// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)


//identify the ul element which will be the parent of the new li


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