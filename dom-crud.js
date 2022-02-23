// Create a new <a> element containing the text "Buy Now!" 
// with an id of "cta" after the last <p>

//append to main

const aElem = document.createElement('a')

const link = document.createTextNode("Buy Now!")

aElem.appendChild(link)

aElem.id="cta"

const mainElem = document.getElementsByTagName('main')[0]

mainElem.appendChild(aElem)

// Access (read) the data-color attribute of the <img>,
// log to the console

const imgElem = document.getElementsByTagName('img')[0]

const imgColor = imgElem.dataset.color

console.log(imgColor)

// Update the third <li> item ("Turbocharged"), 
// set the class name to "highlight"

const liElements = document.getElementsByTagName('li')
liElements[2].className='highlight'

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")

const pElem = document.getElementsByTagName('p')[0]

mainElem.removeChild(pElem)