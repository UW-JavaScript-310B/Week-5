// Attach one listener that will detect clicks on any of the <td>
// elements.  Should update that element's innerHTML to be the
// x, y coordinates of the mouse at the time of the click
document.addEventListener('click', e => {
    if (e.target.tagName === 'TD' ) {
        e.target.textContent = `X: ${e.clientX}, Y: ${e.clientY}`
    }
    else {
        location.reload();
    }
})