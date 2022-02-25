// Create a new <a> element containing the text "Buy Now!" 
// with an id of "cta" after the last <p>

// get the array of all the <p> elements
const pElment = document.querySelectorAll('p');
// get the handle of the last <p> element
const lastP = pElment[pElment.length - 1];

//create a new element <a>
const aElement = document.createElement('a');
//set the id of the new element to cta
aElement.setAttribute('id','cta');
// create a text node 'Buy Now'
const aTextNode = document.createTextNode('Buy Now');
// append the new text node to <a> element
aElement.appendChild(aTextNode);

//add new element to the  last <p> element
lastP.appendChild(aElement);

// Access (read) the data-color attribute of the <img>,
// log to the console
// get the handle on <img> tag
const imgElement = document.querySelector('img');
// access the data-color attribute of the <img> tag
const imgColor = imgElement.getAttribute('data-color');
// write the attribute to console
console.log(`image color: ${imgColor}`);
// Update the third <li> item ("Turbocharged"), 
// set the class name to "highlight"
//get the array of all <li> tags
const liArr = document.querySelectorAll('li')
//set the classname of the 3 item in the array to "highlight"
liArr[2].className = 'highlight';
// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")
// get a handle on the main element
const mainElement = document.getElementsByTagName('main')[0];
//remove the child node of main element
mainElement.removeChild(lastP);
