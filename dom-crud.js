// Create a new <a> element containing the text "Buy Now!" 
// with an id of "cta" after the last <p>
// Create a new <a> element
const aEl = document.createElement('a');
// Set attribute 'cta' for this element
aEl.setAttribute('id','cta');
// Create a new textnode for this element
const aTxt = document.createTextNode('Buy Now!');
// Add the textnode to <a> element
aEl.appendChild(aTxt);
// Get main element
const mainEl = document.getElementsByTagName('main')[0];
// Add <a> element as a child to main element
mainEl.appendChild(aEl);

// Access (read) the data-color attribute of the <img>,
// log to the console
const carImg = document.getElementsByTagName('img')[0];
const carColor = carImg.dataset.color;
console.log(carColor);

// Update the third <li> item ("Turbocharged"), 
// set the class name to "highlight"
// Get all <li> element 
const liCollection = document.getElementsByTagName('li');
liCollection[2].className = "highlight";

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")
// Get the <p> element
const para = document.getElementsByTagName('p')[0];
// Remove this element from main element
mainEl.removeChild(para);
