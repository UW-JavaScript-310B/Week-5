// Create a new <a> element containing the text "Buy Now!" 
// with an id of "cta" after the last <p>
let cta = document.createElement("a");
cta.innerText = "Buy Now!";
document.querySelector("p").after(cta);

// Access (read) the data-color attribute of the <img>,
// log to the console
console.log(document.querySelector("img").getAttribute("data-color"));

// Update the third <li> item ("Turbocharged"), 
// set the class name to "highlight"
document.querySelector("ul li:nth-child(3)").className = "highlight";

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")
document.querySelector("p").remove();