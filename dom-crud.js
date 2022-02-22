// Create a new <a> element containing the text "Buy Now!" 
// with an id of "cta" after the last <p>
let newAElement = document.createElement('a');
let newAElementText = document.createTextNode("Buy Now!");
newAElement.appendChild(newAElementText);
newAElement.setAttribute('id', 'cta');
let lastP = document.querySelectorAll('p')[0];
lastP.after(newAElement);


// Access (read) the data-color attribute of the <img>,
// log to the console
let imgElements = document.getElementsByTagName('img');
let imgElement = imgElements[0];
console.log(imgElement.dataset.color);


// Update the third <li> item ("Turbocharged"), 
// set the class name to "highlight"
let thirdLi = document.querySelectorAll('li')[2];
thirdLi.className = 'highlight';


// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")
let mainElement = document.querySelectorAll('main')[0];
mainElement.removeChild(lastP);