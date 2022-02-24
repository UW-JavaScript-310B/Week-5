// Create a new <a> element containing the text "Buy Now!" 
// with an id of "cta" after the last <p>
const createEl = document.createElement('a', {'id': 'cta'});
const newText = document.createTextNode('Buy Now!');
createEl.appendChild(newText);

const targetBody = document.getElementsByTagName('body')[0];
targetBody.appendChild(createEl);

// Access (read) the data-color attribute of the <img>,
// log to the console
const carImg = document.getElementsByTagName('img')[0];
const colorImg = carImg.dataset.color;
console.log(colorImg);

// Update the third <li> item ("Turbocharged"), 
// set the class name to "highlight"
document.getElementsByTagName('li')[2].setAttribute('class', 'highlight')

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")

const mainEl = document.getElementsByTagName('main')[0];
const targetP = document.getElementsByTagName('p')[0];
mainEl.removeChild(targetP);