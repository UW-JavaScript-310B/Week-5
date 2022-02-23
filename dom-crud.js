// Create a new <a> element containing the text "Buy Now!" 
// with an id of "cta" after the last <p>
const newDiv = document.createElement('a');
const newContent = document.createTextNode("Buy Now!");
newDiv.appendChild(newContent);
newDiv.id = "cta";
newDiv.title = "";
newDiv.href = "";
document.body.appendChild(newDiv);

// Access (read) the data-color attribute of the <img>,
// log to the console
const carimg = document.getElementsByTagName('img')[0];
const pop = carimg.dataset.color;
console.log(pop);

// Update the third <li> item ("Turbocharged"), 
// set the class name to "highlight"
var list = document.getElementsByTagName("li");
list[2].className = 'highlight';

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")
const mainEl = document.getElementsByTagName('main')[0];
let removeEl = mainEl.removeChild('p');
mainEl.replaceChild(p,);
