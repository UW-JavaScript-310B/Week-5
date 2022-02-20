// Create a new <a> element containing the text "Buy Now!" 
// with an id of "cta" after the last <p>

let cta = document.createElement("a");
cta.innerText = "Buy Now!";
cta.id = "cta";
let main = document.getElementsByTagName("main")[0];
main.appendChild(cta);

// Access (read) the data-color attribute of the <img>,
// log to the console

let image = document.getElementsByTagName("img")[0];
console.log(image.dataset.color);

// Update the third <li> item ("Turbocharged"), 
// set the class name to "highlight"

let ul = document.getElementsByTagName("ul")[0];
let li = ul.querySelector("li:nth-child(3)");
li.className = "highlight";

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")

let p = main.getElementsByTagName("p");
p = Array.from(p);
main.removeChild(p[p.length - 1]);