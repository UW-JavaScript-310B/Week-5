// Create a new <a> element containing the text "Buy Now!" 
// with an id of "cta" after the last <p>

const newP = document.createElement('p');
const newAEl = document.createElement("a");
const aText = document.createTextNode("Buy Now!");
    newAEl.setAttribute('href', "");
    newAEl.appendChild(aText);
    newP.setAttribute('id', 'cta');
    newP.appendChild(newAEl);
    

    //const newP = document.createElement("p");
    //newP.setAttribute('id', 'cta');
    //newP.appendChild(newAEl);

 const firstP = document.getElementsByTagName('p')[0];
    firstP.parentNode.insertBefore(newP, firstP);
    
    
// Access (read) the data-color attribute of the <img>,
// log to the console

const imgCol = document.getElementsByTagName('img')[0];
const col = imgCol.dataset.color;
console.log(`${col}`);

// Update the third <li> item ("Turbocharged"), 
// set the class name to "highlight"

const liThird = document.getElementsByTagName('li')[2];
    liThird.setAttribute('class', 'highlight');

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")

firstP.parentNode.removeChild(firstP);
