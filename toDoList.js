// If an li element is clicked, toggle the class "done" on the <li>

// done was fixed by adding an event listener in the addListItem Function
//fixed done by using the span element instead of li element. If a li element is used,
//it interferes with the delete tag.
//fixed delete by adding an event listener in the addListItem Function

let deleteRef = document.getElementsByClassName('delete')

const doneItem = function(e) {
  e.preventDefault();
  if (this) {
    this.parentNode.className = 'done'
  }

}

let spanRef = document.getElementsByTagName('span')

for (let i=0; i<spanRef.length; i++){

  spanRef[i].addEventListener('click', doneItem)

}


const deleteListItem = function(e) {
  e.preventDefault();

  const liEl=this.parentNode

  //console.log(liEl)

  const ulEl=liEl.parentNode

  //console.log(ulEl)

  ulEl.removeChild(liEl)

}

for (let i=0; i<deleteRef.length; i++){

  //console.log(deleteRef.length)

  deleteRef[i].addEventListener('click', deleteListItem)

}

let addElem = document.getElementsByClassName('add-item')

// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)
const addListItem = function(e) {
  e.preventDefault();
  const input = this.parentNode.getElementsByTagName('input')[0];
  const text = input.value; // use this text to create a new <li>

  // Finish function here

  // need to access ul from div

  const mainElem = this.parentNode.parentNode

  const ulElem = mainElem.getElementsByTagName('ul')[0]

  const liElem = document.createElement('li')

  const spanElem = document.createElement('span')

  spanElem.textContent=text

  const aElem = document.createElement('a')

  aElem.className="delete"

  const link = document.createTextNode('Delete')

  aElem.appendChild(link)

  liElem.appendChild(spanElem)

  liElem.appendChild(aElem)

  spanElem.addEventListener('click', doneItem)

  aElem.addEventListener('click', deleteListItem)

  ulElem.append(liElem)

};

addElem[0].addEventListener('click', addListItem)

