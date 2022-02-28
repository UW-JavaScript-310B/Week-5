// Attach one listener that will detect clicks on any of the <td>
// elements.  Should update that element's innerHTML to be the
// x, y coordinates of the mouse at the time of the click
const updateTable = function (event) {
  var items = this.getElementsByTagName("td");
  event.target.innerHTML = `${event.x}, ${event.y}`;
};

const cells = document.querySelectorAll("tr");

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", updateTable);
}
