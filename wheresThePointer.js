// Attach one listener that will detect clicks on any of the <td>
// elements.  Should update that element's innerHTML to be the
// x, y coordinates of the mouse at the time of the click
const updateStuff = function (event) {
  //   //TODO - fix this. We are logging to the wrong cell
  var items = this.getElementsByTagName("td");
  //   //clear cell data
  //   for (let i = 0; i < items.length; i++) {
  //     for (let j = 0; j < items.length; j++) {
  //       this.innerHTML = "";
  //     }
  //   }

  items[0].innerHTML = `${event.x}, ${event.y}`;
};

const cells = document.querySelectorAll("tr");

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", updateStuff);
}
