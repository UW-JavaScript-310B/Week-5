// Attach one listener that will detect clicks on any of the <td>
// elements.  Should update that element's innerHTML to be the
// x, y coordinates of the mouse at the time of the click

const clickDetect = document.getElementsByTagName('tbody')[0];

clickDetect.addEventListener('click', function(e) {
    let x = e.pageX;
    let y = e.pageY;
    let coordinates = `${x}, ${y}`;

    e.target.innerHTML = coordinates;
} )

