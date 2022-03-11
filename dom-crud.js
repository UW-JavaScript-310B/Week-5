// Create a new <a> element containing the text "Buy Now!" 
// with an id of "cta" after the last <p>
let aNode = document.createElement("a")
aNode.id = "cta"
aNode.appendChild(document.createTextNode("Buy Now!"))
let paraGraphs = document.getElementsByTagName("p")
let lastPara =  paraGraphs[paraGraphs.length - 1]
lastPara.parentNode.insertBefore(aNode, lastPara.nextSibling)


// Access (read) the data-color attribute of the <img>,
// log to the console
let imgNodes = document.getElementsByTagName("img")

console.log(imgNodes[0].getAttribute("data-color"))

// Update the third <li> item ("Turbocharged"), 
// set the class name to "highlight"
let liElements = document.getElementsByTagName("li")
liElements[2].className = "highlight"


// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")
lastPara.parentNode.removeChild(lastPara)