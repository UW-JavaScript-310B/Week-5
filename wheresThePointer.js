// Attach one listener that will detect clicks on any of the <td>
// elements.  Should update that element's innerHTML to be the
// x, y coordinates of the mouse at the time of the click
document.querySelectorAll('td')
.forEach(e => e.addEventListener("mousedown", function(e) {
    // Here, `this` refers to the element the event was hooked on
    console.log("clicked");
    let x = e.clientX;
    let y = e.clientY;
    this.innerHTML = `(${x}, ${y})`;
}));
