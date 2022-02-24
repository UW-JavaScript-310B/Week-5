// Attach one listener that will detect clicks on any of the <td>
// elements.  Should update that element's innerHTML to be the
// x, y coordinates of the mouse at the time of the click
document.querySelector("table").addEventListener("click", (e) => console.log(e.target.innerText = `(${e.clientX}, ${e.clientY})`));