// If an li element is clicked, toggle the class "done" on the <li>
document.addEventListener('click', e => {
    if (e.target.tagName === 'SPAN' && e.target.closest('.today-list')) {
        e.target.parentNode.className = 'done';
    } 
})
// If a delete link is clicked, delete the li element / remove from the DOM
document.addEventListener('click', e => {
    if (e.target.className === 'delete' && e.target.closest('.today-list').className === 'today-list') {
        e.target.parentNode.remove();
    } 
})

// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)
const addListItem = function(e) {
  e.preventDefault();
  const input = this.parentNode.getElementsByTagName('input')[0];
  const text = input.value; // use this text to create a new <li>

  // Finish function here
    const todayList = document.querySelector('.today-list');
    const listItem = document.createElement('li');
    
    const spanItem = document.createElement('span');
    spanItem.textContent = text + ' ';

    const anchorItem = document.createElement('a');
    anchorItem.textContent = 'Delete'
    anchorItem.setAttribute('class', 'delete');
    
    listItem.append(spanItem);
    listItem.append(anchorItem);
    todayList.append(listItem);


    console.log('durrr');
};


// Lexical scoping--- look it up...
const addItem = document.getElementsByClassName('add-item')[0];
addItem.addEventListener('click', addListItem);