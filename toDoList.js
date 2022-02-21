// If an li element is clicked, toggle the class "done" on the <li>


  const list = document.getElementsByClassName('today-list');
  const listItems = document.getElementsByTagName('li')[0];
  // return listItems;
  
 let done =  listItems.addEventListener('click', e => {
    let li = e.target;
    if (li.getAtrribute('class') !== "done") {
      li.setAttribute('class', "done");
    } else {
    }
    });


  // const betterToDos = 
  // document.querySelectorAll('#better-to-do li');



// for (let i = 0; i < tasks.children.length; i++) {
//    if taskListClass[i].getAttribute("class") !== 'done' {
//      task
//    }




// bestToDoList.addEventListener('click', e => {
// let li = e.target;
// if (li.innerHTML.indexOf('□') !== -1) {
// li.innerHTML = li.innerHTML.replace('□',  '✓');
// } else {
// li.innerHTML = li.innerHTML.replace('✓',  '□');
// }
// });



// If a delete link is clicked, delete the li element / remove from the DOM

// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)


// const addListItem = function(e) {
//   e.preventDefault();
//   const input = this.parentNode.getElementsByTagName('input')[0];
//   const text = input.value; // use this text to create a new <li>

  // Finish function here
// };