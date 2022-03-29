// If an li element is clicked, toggle the class "done" on the <li>
// var columns = document.getElementsByTagName('li');

const toggleDone = function(e) {
  const target = e.target; 
  const classList = target.classList;
  if (classList.contains('delete')) {
    this.parentNode.removeChild(this);
  }
  else{
    this.classList.toggle('done');
  }
};

let allLiEls = document.getElementsByTagName('li');
for (let i = 0; i < allLiEls.length; i++) {
  allLiEls[i].addEventListener('click', toggleDone);
}

  const addListItem = function(e) {
    e.preventDefault();

    const input = this.parentNode.getElementsByTagName('input')[0];
    const text = input.value;
    input.value = '';
    const containingUl = this.parentNode.parentNode.getElementsByTagName('ul')[0];

    const newLi = document.createElement('li');
    newLi.innerHTML = `<span>${text}</span> <a class="delete">Delete</a>`;
    containingUl.appendChild(newLi);
    newLi.addEventListener('click', toggleDone); 
  };

  let addButtons = document.getElementsByClassName('add-item');
  for (let i = 0; i < addButtons.length; i++) {
    addButtons[i].addEventListener('click', addListItem);
  }

// If a delete link is clicked, delete the li element / remove from the DOM
// var values = document.getElementsByClassName('delete');


// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)

  // Finish function here
//};
