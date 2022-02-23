// If an li element is clicked, toggle the class "done" on the <li>

// done was fixed by adding an event listener in the addListItem Function
// delete not working

const doneItem = function(e) {
  e.preventDefault();
  if (this) {
    this.className = 'done'
  }

}

let liRef = document.getElementsByTagName('li')

// for (let i=0; i<liRef.length; i++){
//
//   liRef[i].addEventListener('click',()=>{
//
//     if (liRef[i]){
//       liRef[i].className='done'
//     }
//
//   })
//
// }

for (let i=0; i<liRef.length; i++){

  liRef[i].addEventListener('click', doneItem)

}

// let spanRef = document.getElementsByTagName('span')
//
// for (let i=0; i<spanRef.length; i++){
//
//   spanRef[i].addEventListener('click',()=>{
//
//     if (spanRef[i]){
//
//       liReference = spanRef[i].parentNode
//       liReference[i].className='done'
//     }
//
//   })
//
// }

// If a delete link is clicked, delete the li element / remove from the DOM

let deleteRef = document.getElementsByClassName('delete')

//console.log(deleteRef.length)

const deleteListItem = function(e) {
  e.preventDefault();

  // const input = this.parentNode.getElementsByTagName('input')[0];
  // const text = input.value; // use this text to create a new <li>
  //
  // console.log(text)

  const liEl=this.parentNode

  console.log(liEl)

  const ulEl=liEl.parentNode

  console.log(ulEl)

  ulEl.removeChild(liEl)

}

// for (let i=0; i<deleteRef.length; i++){
//
//   deleteRef[i].addEventListener('click',()=>{
//
//     let parentLi = deleteRef[i].parentNode
//
//     let parentUl=parentLi.parentNode
//
//     parentUl.removeChild(parentLi)
//
//   })
//
// }

for (let i=0; i<deleteRef.length; i++){

  //console.log(deleteRef.length)

  deleteRef[i].addEventListener('click', deleteListItem)

}

// deleteRef[0].addEventListener('click', deleteListItem)

//addElem[0].addEventListener('click', deleteListItem)

let addElem = document.getElementsByClassName('add-item')

// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)
const addListItem = function(e) {
  e.preventDefault();
  const input = this.parentNode.getElementsByTagName('input')[0];
  const text = input.value; // use this text to create a new <li>

  console.log(text)

  //console.log(deleteRef.length)

  // Finish function here

  // need to access ul from div

  const mainElem = this.parentNode.parentNode

  const ulElem = mainElem.getElementsByTagName('ul')[0]

  //console.log(ulElem)

  const liElem = document.createElement('li')

  const spanElem = document.createElement('span')

  spanElem.textContent=text

  const aElem = document.createElement('a')

  aElem.className="delete"

  const link = document.createTextNode('Delete')

  aElem.appendChild(link)

  liElem.appendChild(spanElem)

  liElem.appendChild(aElem)

  liElem.addEventListener('click', doneItem)

  ulElem.append(liElem)

  console.log(deleteRef.length)

};

addElem[0].addEventListener('click', addListItem)

//console.log(deleteRef.length)

// code can add li, but then breaks the delete functionality