// If an li element is clicked, toggle the class "done" on the <li>

let liArr = document.getElementsByTagName('li');

for (let i of liArr)
{
  console.log(i);
  i.addEventListener('click', e =>
  {
    let li = e.target;
    li.classList.toggle('done');
  })
  
}

// If a delete link is clicked, delete the li element / remove from the DOM
// get a handle of all delete class tags
let deleteArr = document.getElementsByClassName('delete');
// loop through the tag collection and attach a click event handler
//remove the clicked node
for (let node of deleteArr)
{
  node.addEventListener('click', e =>
  {
    let n = e.target;
    //access parent of the a node which is a li node
    let liNode = n.parentNode;
    //check if the parents of li node which is ul node exist
    if (liNode.parentNode)
    {
      // remove the li node
      liNode.parentNode.removeChild(liNode);
      
    }
    
  })
  
}
// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)
const addListItem = function(e) {
  e.preventDefault();
  //const input = this.parentNode.getElementsByTagName('input')[0];
  const input = document.getElementsByTagName('input')[0];
  const text = input.value; // use this text to create a new <li>

  // Finish function here
  // create a new li node
  let li = document.createElement('li');
  // create a new span node
  let span = document.createElement('span');
  // set text of span node to value in input tag
  span.innerHTML = text;
  //append span node to li node
  li.appendChild(span);
  //create a new a node
  let a = document.createElement('a');
  // set text of the a node to Delete
  a.innerHTML = 'Delete';
  // set class of the a node to delete
  a.className = 'delete';
  //append the a node to the span node
  span.appendChild(a);
  // get a handle on the ul node
  let ul = document.querySelector('ul');
  // append the li node to ul node
  ul.appendChild(li);
  // reset input value
  input.value = '';
};

//get a handle on button class
const btnAdd = document.querySelector('.add-item');
//create a click event listener for button class

btnAdd.addEventListener('click',function(event){
 event.preventDefault();
 addListItem(event);
},true);
