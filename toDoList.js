// If an li element is clicked, toggle the class "done" on the <li>

let liEl = document.getElementsByTagName('li');
let index = 0;
function funct(e){
  liEl[index].classList.toggle('done');
  e.path[1].classList.toggle('done');
}
liEl[index].addEventListener('click',funct);
// If a delete link is clicked, delete the li element / remove from the DOM

const delBtn = document.getElementById('anchor');
const allList = document.querySelector('ul');
delBtn.addEventListener('click', ()=>{
  allList.removeChild(liEl[0]); 
})



// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)

const addListItem = function(e) {
  
  e.preventDefault();

  const input = this.parentNode.getElementsByTagName('input')[0];
  const text = input.value; // use this text to create a new <li>

  let newLi = document.createElement('li');

  let newSpan = document.createElement('span');
  newSpan.innerText = text;
  newLi.appendChild(newSpan);
  document.getElementsByClassName('today-list')[0].append(newLi);
  
  // Finish function here
};  

document.getElementsByClassName('add-item')[0].addEventListener('click', addListItem);

const listItems = document.getElementsByTagName('li')[0];
  // return listItems;




allList.addEventListener('click',(e)=>{
  console.log(e.path[1]);
  console.log(e.target);
   //e.target.classList.toggle('done');
   e.path[1].classList.toggle('done');
 });


 document.getElementById('plus').addEventListener('click',()=>{
  let items = document.querySelectorAll('li');
  items[items.length-1].parentNode.insertBefore(items[items.length-1], items[0]);
 })
 document.getElementById('minus').addEventListener('click',()=>{
  let items = document.querySelectorAll('li');
  items[items.length-1].parentNode.insertBefore(items[0],items[items.length]);
 })