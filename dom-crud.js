// Create a new <a> element containing the text "Buy Now!" 
// with an id of "cta" after the last <p>

const aTag = document.createElement('a');

aTag.setAttribute('id','cta');

aTag.innerHTML='Buy Now!';

const para = document.getElementsByTagName('p')[0];

para.after(aTag);



// Access (read) the data-color attribute of the <img>,
// log to the console

let carImg = document.getElementsByTagName('img')[0];

let dataSet = carImg.getAttribute('data-color');

console.log(dataSet)

// Update the third <li> item ("Turbocharged"), 
// set the class name to "highlight"

const listItems = document.getElementsByTagName('li');

const thirdLi = listItems[2];

thirdLi.setAttribute('class','highlight');


// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")
const main = document.getElementsByTagName('main')[0];
console.log(main.childNodes);

main.removeChild(para);