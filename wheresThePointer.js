// Attach one listener that will detect clicks on any of the <td>
// elements.  Should update that element's innerHTML to be the
// x, y coordinates of the mouse at the time of the click

const table = document.getElementsByTagName("table")[0];
console.log(table);

table.addEventListener("click", function (e) {
    e.target.innerHTML = `${e.clientX}, ${e.clientY}`;
})