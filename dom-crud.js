// Create a new <a> element containing the text "Buy Now!"
// with an id of "cta" after the last <p>
const aTag = document.createElement("a");
aTag.setAttribute("id", "cta");
aTag.innerText = "Buy Now!";
const pTag = document.getElementsByTagName("p")[0];
pTag.appendChild(aTag);

// Access (read) the data-color attribute of the <img>,
// log to the console
const imageTag = document.getElementsByTagName("img")[0];
const dataColor = imageTag.dataset.color;
console.log(dataColor);

// Update the third <li> item ("Turbocharged"),
// set the class name to "highlight"
const thirdListElement = document.querySelector("ul li:nth-child(2)");
thirdListElement.setAttribute("class", "highlight");

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")
const mainElement = document.getElementsByTagName("main")[0];
const paragraphElement = document.getElementsByTagName("p")[0];
mainElement.removeChild(paragraphElement);
