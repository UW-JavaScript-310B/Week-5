// If an li element is clicked, toggle the class "done" on the <li>

const ulList = document.querySelector('ul.today-list');

let liList = document.querySelectorAll('li');

ulList.addEventListener('click', e => {
  const li = e.target;
  liList.forEach(e => e.classList.toggle("done"));

});


// If a delete link is clicked, delete the li element / remove from the DOM
const deleteLink = document.getElementsByClassName('delete')[0];
const parentLink = deleteLink.parentNode;
console.log(parentLink);

deleteLink.addEventListener('click', (e) => {
  
  parentLink.remove();
});



// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)
const addListItem = function(e) {
  e.preventDefault();
  const input = this.parentNode.getElementsByTagName('input')[0];
  const text = input.value; // use this text to create a new <li>
  // ulList has the ul in it

  const liElement = document.createElement('li');
  const aElement = document.createElement('a');
  const spanElement = document.createElement('span');

  ulList.appendChild(liElement);
  liElement.appendChild(spanElement);
  liElement.appendChild(aElement);

  spanElement.innerText = `${text}`;
  aElement.setAttribute('class', 'delete');
  aElement.innerHTML = `Delete`;

  // Finish function here
};

const addItem = document.getElementsByClassName('add-item')[0];
addItem.addEventListener("click", addListItem);