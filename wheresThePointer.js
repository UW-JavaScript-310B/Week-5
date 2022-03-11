// Attach one listener that will detect clicks on any of the <td>
// elements.  Should update that element's innerHTML to be the
// x, y coordinates of the mouse at the time of the click
const wheresThePointer = function(e)
{
    e.stopPropagation()
    if (e.target.tagName === 'TD')
    {
        e.target.innerHTML = `${e.clientX},${e.clientY}`
    }
}

let tableElement = document.getElementsByTagName('table')[0]
tableElement.addEventListener('click', wheresThePointer)