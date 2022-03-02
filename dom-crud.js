// Create a new <a> element containing the text "Buy Now!" 
// with an id of "cta" after the last <p>
let anchorEl = document.createElement('a');
let anchorText = document.createTextNode('Buy Now!');
anchorEl.appendChild(anchorText);
anchorEl.setAttribute("id", "cta");
const body = document.getElementsByTagName('body')[0];
body.appendChild(anchorEl);

// Access (read) the data-color attribute of the <img>,
// log to the console
let imgEl = document.getElementsByTagName('img')[0];
console.log(imgEl.dataset.color);

// Update the third <li> item ("Turbocharged"), 
// set the class name to "highlight"
let liEl = document.getElementsByTagName("li")[2];
liEl.setAttribute("class", "highlight");

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")
let mainEl = document.getElementsByTagName("main")[0];
let pEl = document.getElementsByTagName("p")[0];
mainEl.removeChild(pEl);
