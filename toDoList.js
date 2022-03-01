// If an li element is clicked, toggle the class "done" on the <li>

let liArr = document.getElementsByTagName('li');

for (let e of liArr)
{
  addEvtListnerToggleClass(e);  
}
function addEvtListnerToggleClass(elmt)
{
  elmt.addEventListener('click', () =>
  {
    elmt.classList.toggle('done');
  });
}

// If a delete link is clicked, delete the li element / remove from the DOM
// get a handle of all delete class tags
let deleteArr = document.getElementsByClassName('delete');
// loop through the tag collection and attach a click event handler
// on each tag.  Remove the node when it is clicked
for (let i = 0; i < deleteArr.length; i++)
{
  deleteArr[i].addEventListener('click', () =>
  {
    let liNode = deleteArr[i].parentNode;
    let ulNode = liNode.parentNode;
    
    ulNode.removeChild(liNode);
  })
}

// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)
const addListItem = function(e) {
  e.preventDefault();
  const input = document.getElementsByTagName('input')[0];
  const text = input.value; // use this text to create a new <li>

  // Finish function here
  // create a new li node
  let li = document.createElement('li');
  //add click event listenter to to li tag to toggle class
  addEvtListnerToggleClass(li);
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
  // add click event listener for a tag
  // to remove li tag
  a.addEventListener('click', () => {  
    let ulNode = li.parentNode;
    ulNode.removeChild(li)
  });
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
});
