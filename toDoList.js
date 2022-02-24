// If an li element is clicked, toggle the class "done" on the <li>

// If a delete link is clicked, delete the li element / remove from the DOM

// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)
const addListItem = function(e) {
  e.preventDefault();
  const input = this.parentNode.getElementsByTagName('input')[0];
  const text = input.value; // use this text to create a new <li>
  input.value = "";
  
  let addToList = document.querySelector('.today-list');
    liTag = document.createElement('li');
      addToList.appendChild(liTag);
        spanTag = document.createElement('span');
      liTag.appendChild(spanTag);
          spanTag.innerHTML = text;
          deleteItem = document.createElement('a'); 
          deleteItem.classList.add('delete');
          deleteItem.innerHTML = 'Delete';
      liTag.appendChild(deleteItem); 
  
};


const listItemClickHandler = function(e) {
  if (e.target.className === 'delete') {
    const deleteButton = e.target;
    const item = deleteButton.parentNode;
    todayList.removeChild(item);

   } else {
 
    const underlineItem = e.target.parentNode;
      underlineItem.classList.toggle('done');
   }
}

const addButton = document.querySelector('.add-item');
addButton.addEventListener('click', addListItem);

const todayList = document.querySelector('.today-list');
todayList.addEventListener('click', listItemClickHandler);

