// Attach one listener that will detect clicks on any of the <td>
// elements.  Should update that element's innerHTML to be the
// x, y coordinates of the mouse at the time of the click

const elList = document.getElementsByTagName('td');
for (let i = 0; i < elList.length; i++) {
    elList[i].addEventListener('click', function (e) {
        console.log("here is e", e)
        elList[i].innerHTML = `x: ${e.clientX}, y: ${e.clientY}`
    });
};
