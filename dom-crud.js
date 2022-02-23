// Create a new <a> element containing the text "Buy Now!" 
// with an id of "cta" after the last <p>
const lastParagraph = document.querySelector('p');

let lastAddition = document.createElement('a');
lastAddition.setAttribute('id', 'cta');
lastAddition.textContent = 'Buy Now!';
lastParagraph.after(lastAddition);

// Access (read) the data-color attribute of the <img>,
// log to the console
const imgDataColor = document.querySelector('img').getAttribute('data-color'); 
console.log(imgDataColor);

// Update the third <li> item ("Turbocharged"), 
// set the class name to "highlight"
const itemsInList = document.querySelectorAll('ul li');
itemsInList[2].setAttribute('class', 'highlight');

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")
lastParagraph.remove()