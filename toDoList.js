// If an li element is clicked, toggle the class "done" on the <li>

const listItem = document.querySelectorAll('li');
const parentList = document.querySelector('ul.today-list');
const delBtn = document.querySelector('a.delete');

parentList.addEventListener('click', (e) => {
  const clickedElement = e.target;
  clickedElement.classList.toggle('done')
  
  if (clickedElement.classList.contains('delete')) clickedElement.parentElement.remove();


  function moveUpDown() {
    let currentLi = clickedElement.parentElement;
    let prevLi = currentLi.previousElementSibling;
    let nextLi = currentLi.nextElementSibling;
    if (clickedElement.classList.contains('up')){
    parentList.insertBefore(currentLi, prevLi);
    }else if(clickedElement.classList.contains('down')){
      parentList.insertBefore(nextLi, currentLi);
    }
  }
   moveUpDown();

});

// If a delete link is clicked, delete the li element / remove from the DOM


// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)

const addBtn = document.getElementsByClassName('add-item')[0];
let main = document.getElementsByTagName('main')[0];

const addListItem = function(e) {
  e.preventDefault();
  const input = this.parentNode.getElementsByTagName('input')[0];
  const text = input.value; // use this text to create a new <li>
  let li = document.createElement("li");
  let newLi = parentList.appendChild(li);
  newLi.innerHTML = `<span>${text}</span> <a class="delete">Delete</a> <a class="up">Move Up</a>
  <a class="down">Move Down</a>`;
};

addBtn.addEventListener('click', addListItem);
