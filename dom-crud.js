// Create a new <a> element containing the text "Buy Now!" 
// with an id of "cta" after the last <p>

const newEl = document.createElement('a');
const newTxtNode = document.createTextNode('Buy Now!');
newEl.appendChild(newTxtNode);
newEl.setAttribute('id', 'cta')

const body = document.getElementsByTagName('main')[0];
body.appendChild(newEl);


// Access (read) the data-color attribute of the <img>,
// log to the console

const readAtt = document.getElementsByTagName('img')[0];
const readColor = readAtt.getAttribute('data-color');
console.log(readColor);

// Update the third <li> item ("Turbocharged"), 
// set the class name to "highlight"

const tuboChanged = document.getElementsByTagName('li')[2];
tuboChanged.className = 'highlight';

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")

const lastPara = document.getElementsByTagName('p')[0];
lastPara.remove();
