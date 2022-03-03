const list = document.querySelectorAll('li');
const ul = document.querySelector('ul.today-list');
const deleteButton = document.querySelector('a.delete');

// If an li element is clicked, toggle the class "done" on the <li>
ul.addEventListener('click', (e) => {
  const toggle = e.target;

  toggle.classList.toggle('done');
  
  alert('This task has been finished');
});

// If a delete link is clicked, delete the li element / remove from the DOM

ul.addEventListener('click', (e) => {
  const click = e.target;

  if (click.classList.contains('delete')) click.parentElement.remove();
});
// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)
const add = document.getElementsByClassName('add-item')[0];

const addListItem = function(e) {
  e.preventDefault();
  const input = this.parentNode.getElementsByTagName('input')[0];
  const text = input.value;
  let li = document.createElement("li");
  let parentLi = ul.appendChild(li);
  parentLi.innerHTML = `<span>${text}</span> <a class="delete">Delete</a>`
};

add.addEventListener('click', addListItem);
