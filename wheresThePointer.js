// Attach one listener that will detect clicks on any of the <td>
// elements.  Should update that element's innerHTML to be the
// x, y coordinates of the mouse at the time of the click

const getPointerClick = document.getElementsByTagName('tbody')[0];
console.log(getPointerClick);

getPointerClick.addEventListener('click', eventHandler);

function eventHandler(e) {
    coordinateX = e.clientX;
    coordinateY = e.clientY;
    mouseCoordinates = (`${coordinateX} ${coordinateY}`);
    let tdInnerHtml = e.target.innerHTML;
    console.log(td);
    if (mouseCoordinates) {
        tdInnerHtml = mouseCoordinates;
        console.log(tdInnerHtml)
    }
};