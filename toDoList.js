// If an li element is clicked, toggle the class "done" on the <li>
// Get <ul> element "today-list"
const todayList = document.getElementsByClassName('today-list')[0];
// Define a var for the current selected item
let liSelectedItem;
// Fires when users click on <today-list>
todayList.addEventListener('click', e => {
  let liItem = e.target;
  switch (liItem.tagName) {
    // The current element is <li> 
    case 'LI':
      // Get the current selected item from the list
      liSelectedItem = liItem;
      // If a <li> element is clicked, toggle the class "done" on it
      liItem.classList.toggle('done');
      break;

    // The current element is <span>
    case 'SPAN':
      // Get the current selected li
      liSelectedItem = liItem.parentNode;
      // If a span element inside a <li> is clicked, toggle class "done" on the <li> element (i.e. span parent node)
      liItem.parentNode.classList.toggle('done')
      break;

    // When the delete link is clicked
    case 'A':
      // If the deleted item is the selected item, reset var liSelectedItem
      if (liItem.parentNode === liSelectedItem) {
        liSelectedItem = undefined;
      }
      // If a delete link is clicked, delete the li element / remove from the DOM
      todayList.removeChild(liItem.parentNode);
      // Set visible for up & down buttons if today-list has more than 1 item.
      document.getElementById('btn').style.display = todayList.childElementCount > 1 ? 'block':'none';
      break;

    // Others
    default:
      break;
  }
});

// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)
const addListItem = function(e) {
  e.preventDefault();
  const input = this.parentNode.getElementsByTagName('input')[0];
  const text = input.value; // use this text to create a new <li>

  // Check if the text value is empty or not 
  if (text.trim().length !== 0) {
    // Create a new <li> item
    const liItem = document.createElement('li');
    // Create a <span> element with desc is text's content.
    const span = document.createElement('span');
    span.innerHTML = `${text} `;
    // Append this <span> element as a child to the <li> item
    liItem.appendChild(span);
    // Create an <a> element with desc is "Delete" and className is 'delete'
    const deleteEl = document.createElement('a');
    deleteEl.innerHTML = "Delete";
    deleteEl.className = 'delete';
    // Add this <a> element to <li>
    liItem.appendChild(deleteEl);

    // Add the new <li> item above to <today-list> as a child
    todayList.appendChild(liItem);
  } else {
    alert('Please input your to-do task!');
  }
  input.value = '';
  // Set visible for up & down buttons if today-list has more than 1 item.
  document.getElementById('btn').style.display = todayList.childElementCount > 1 ? 'block':'none';
};

// Create addItem function to add new item to item list
const addItem = document.getElementsByClassName('add-item')[0];
// Fires when <add-item> element is clicked
addItem.addEventListener('click', addListItem);

// Create function "moveItem" to move up & down the selected item from the list
const btn = document.getElementById('btn');
btn.addEventListener('click', e => {
  // Check if an item in the list is selected or not
  if (liSelectedItem !== undefined) {
    // If the clicked button is "up" button and the selected item is under another item
    if (e.target.id === 'up' && (liSelectedItem.previousElementSibling)) {
      // Move up the selected item
      todayList.insertBefore(liSelectedItem, liSelectedItem.previousElementSibling);

      // If the clicked button is "down" and the selected item is above another item
    } else if (e.target.id === 'down' && (liSelectedItem.nextElementSibling)) {
      // Move down the selected item
      todayList.insertBefore(liSelectedItem.nextElementSibling, liSelectedItem);
    }
  } else {
    // There is no selected item
    alert('Please select an item in the list that you want to move up/down!');
  }
});