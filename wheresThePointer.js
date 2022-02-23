// Attach one listener that will detect clicks on any of the <td>
// elements.  Should update that element's innerHTML to be the
// x, y coordinates of the mouse at the time of the click

const cells = document.querySelectorAll('td')
cells.forEach(e => e.addEventListener('click', function(e) {
    console.log("clicked");
    let x = e.pageX;
    let y = e.pageY;
    this.innerHTML = `(${x}, ${y})`;
}));
