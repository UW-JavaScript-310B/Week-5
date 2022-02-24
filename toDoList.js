// If an li element is clicked, toggle the class "done" on the <li>

const list = document.querySelector('ul.today-list');
      // console.log(list);

let listItems = document.querySelectorAll('li');
      // console.log(listItems);

      // const listChildren = list.children;
      // console.log(listChildren);

//toggle the class for the li element under the parent list when it is clicked

list.addEventListener('click', e => {
  e.preventDefault();
        // console.log('clicked');
  const li = e.target;
  listItems.forEach(e => e.classList.toggle('done'));
        // elements.forEach(x => x.classList.toggle('otherClass');
        // for (let i = 0; i < listItems.length; i++) {
        //   const li = listItems[i];
        //   li => li.classList.toggle('done')
        // }

});

// If a delete link is clicked, delete the li element / remove from the DOM
//identify elements for button and parent of the button

const deleteButton = document.querySelectorAll('.delete');
      // const buttonParent = document.querySelectorAll('.toDo-item');;
      // const buttonUL = document.querySelectorAll('.today-list');

      // console.log(deleteButton);
      // console.log(buttonParent);
      // console.log(buttonUL);

function deleteToDo (e) {

  // Implement the click handler here for button of class 'remove'
  var target = e.target;
  target.parentNode.parentNode.removeChild(target.parentNode);
};

for (var i = 0 ; i < deleteButton.length; i++) {
    deleteButton[i].addEventListener("click", deleteToDo); 
};

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
 newToDo.setAttribute("class", "toDo-item");

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