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

    let parentItem=parentLi.parentNode

    parentItem.removeChild(parentLi)

    //deleteRef[i].remove

    //deleteRef[i].className='done'

  })

}



// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)
const addListItem = function(e) {
  e.preventDefault();
  const input = this.parentNode.getElementsByTagName('input')[0];
  const text = input.value; // use this text to create a new <li>

  // Finish function here
};
