// If an li element is clicked, toggle the class "done" on the <li>
const toggleLiDone = function(e)
{

  if (e.target.tagName === 'LI') {
    if (e.target.className === 'done') {
      e.target.className = ''
    } else {
      e.target.className = 'done'
    }
  }
}

let ulNode = document.getElementsByClassName('today-list')
ulNode[0].addEventListener('click', toggleLiDone)
// If a delete link is clicked, delete the li element / remove from the DOM
const deleteLi = (e) =>
{
  e.preventDefault()
  e.stopPropagation()
  e.target.parentElement.parentElement.removeChild(e.target.parentElement)
}

ulNode[0].addEventListener('click', deleteLi)

// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)
const addListItem = function(e) {
  e.preventDefault();
  const input = this.parentNode.getElementsByTagName('input')[0];
  const text = input.value; // use this text to create a new <li>
  let ulElement = document.getElementsByClassName("today-list")[0]
  let liElement = document.createElement("li")
  let spanElement = document.createElement("span")
  spanElement.innerText = text + " "
  liElement.appendChild(spanElement)
  let aElement = document.createElement("a")
  aElement.innerText = 'Delete'
  aElement.className = 'delete'
  liElement.appendChild(aElement)
  ulElement.appendChild(liElement)

  // Finish function here
};

let addButton = document.getElementsByClassName("add-item")[0]
addButton.addEventListener('click', addListItem)