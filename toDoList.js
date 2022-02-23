// If an li element is clicked, toggle the class "done" on the <li>

let liRef = document.getElementsByTagName('li')

for (let i=0; i<liRef.length; i++){

  liRef[i].addEventListener('click',()=>{

    if (liRef[i]){
      liRef[i].className='done'
    }

  })

}

// If a delete link is clicked, delete the li element / remove from the DOM

let deleteRef = document.getElementsByClassName('delete')

for (let i=0; i<deleteRef.length; i++){

  deleteRef[i].addEventListener('click',()=>{

    let parentLi = deleteRef[i].parentNode

    let parentUl=parentLi.parentNode

    parentUl.removeChild(parentLi)

  })

}

let addElem = document.getElementsByClassName('add-item')

// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)
const addListItem = function(e) {
  e.preventDefault();
  const input = this.parentNode.getElementsByTagName('input')[0];
  const text = input.value; // use this text to create a new <li>

  console.log(text)

  // Finish function here

  // need to access ul from div

  const mainElem = this.parentNode.parentNode

  const ulElem = mainElem.getElementsByTagName('ul')[0]

  console.log(ulElem)

  const liElem = document.createElement('li')

  const spanElem = document.createElement('span')

  spanElem.textContent=text

  const aElem = document.createElement('a')

  aElem.className="delete"

  const link = document.createTextNode('Delete')

  aElem.appendChild(link)

  liElem.appendChild(spanElem)

  liElem.appendChild(aElem)

  ulElem.append(liElem)

};

addElem[0].addEventListener('click', addListItem)

// code can add li, but then breaks the delete functionality