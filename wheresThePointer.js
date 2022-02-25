// Attach one listener that will detect clicks on any of the <td>
// elements.  Should update that element's innerHTML to be the
// x, y coordinates of the mouse at the time of the click


//This function will capture x,y coordinates of the pointer 
// and then display its value inside <td> tag
function clickHandler(tdCell, Event) {
    // Here, `this` refers to the element the event was hooked on
    //let td = tdCell.target
    let x = Event.clientX;
    let y = Event.clientY;
    let coords = `${x}, ${y}`;
    tdCell.innerHTML = coords;

}

//get an array of all <td> tags
let tdArr = document.querySelectorAll('td');

//for each <td> tag, attach listener
// that captures Mouse Click event
// and call clickHandler function
// in response to the event

tdArr.forEach(cell => cell.addEventListener("click", function(e)
{
    clickHandler(cell, e);
}
));



