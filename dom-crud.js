// Create a new <a> element containing the text "Buy Now!" 
// with an id of "cta" after the last <p>

const aElement = document.createElement('a', { 'id': 'cta' });
const aElementText = document.createTextNode('Buy Now!');

aElement.appendChild(aElementText);
const body = document.getElementsByTagName('body')[0];
body.appendChild(aElement);

// Access (read) the data-color attribute of the <img>,
// log to the console
const getImg = document.getElementsByTagName('img')[0];
const getImgDataColor = getImg.getAttribute('data-color');
console.log(getImgDataColor);

// Update the third <li> item ("Turbocharged"), 
// set the class name to "highlight"
const getThirdLi = document.getElementsByTagName('li')[2]
getThirdLi.classList.add('highlight');

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")
const getLastPar = document.getElementsByTagName('p')[0];
getLastPar.remove();