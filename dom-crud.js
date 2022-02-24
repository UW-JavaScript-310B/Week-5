// Create a new <a> element containing the text "Buy Now!" 
// with an id of "cta" after the last <p>
const aElement = document.createElement('a');
aElement.innerText = "Buy Now!"
aElement.setAttribute('id', 'cta');
const mainElement = document.getElementsByTagName('main')[0];
mainElement.appendChild(aElement);


// Access (read) the data-color attribute of the <img>,
// log to the console
const image = document.getElementsByTagName('img')[0];
const color = image.getAttribute('data-color');
console.log(color);


// Update the third <li> item ("Turbocharged"), 
// set the class name to "highlight"
const turbocharged = document.getElementsByTagName('li')[2];
  turbocharged.classList.add('highlight');


// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")
const paragraph = document.getElementsByTagName('p')[0];
mainElement.removeChild(paragraph);
