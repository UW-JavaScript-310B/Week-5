// Attach one listener that will detect clicks on any of the <td>
// elements.  Should update that element's innerHTML to be the
// x, y coordinates of the mouse at the time of the click
const tbody = document.getElementsByTagName('tbody')[0];
// Table body click event
tbody.addEventListener('click', e => {
  let td = e.target;
  td.innerHTML = `${e.clientX}; ${e.clientY}`;
});