// Attach one listener that will detect clicks on any of the <td>

let tableRef = document.getElementsByTagName('td')

//tableRef is a collection

for (let i=0; i<tableRef.length; i++){

    tableRef[i].addEventListener('click',(event)=>{
        console.log(`x= ${event.x}, y=${event.y}`)
        tableRef[i].innerText=`${event.x}, ${event.y}`
    })

}

// elements.  Should update that element's innerHTML to be the

// x, y coordinates of the mouse at the time of the click
