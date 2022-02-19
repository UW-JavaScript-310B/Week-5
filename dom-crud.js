// Create a new <a> element containing the text "Buy Now!" 
// with an id of "cta" after the last <p>


// const aEl = document.createElement( "a" );

// // aEl.innerHTML = "Buy Now!";
// aEl.innerText = "Buy Now!";
// aEl.setAttribute("id","cta");


// const mainEl = document.getElementsByTagName( "main" );
// aEl.appendChild(mainEl);

const aEl = document.createElement('a');
aEl.innerText = "Buy Now!";
aEl.setAttribute("id","cta");
const main = document.getElementsByTagName('main')[0];
main.appendChild(aEl);


// Access (read) the data-color attribute of the <img>,
// log to the console
const carImg = document.getElementsByTagName('img')[0];
const carColor = carImg.getAttribute('data-color');
console.log(carColor);


// Update the third <li> item ("Turbocharged"), 
// set the class name to "highlight"
const listItem = document.getElementsByTagName('li')[2];
listItem.classList.add('highlight');

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")
let pEl = document.getElementsByTagName('p')[0];
main.removeChild(pEl);



