// Create a new <a> element containing the text "Buy Now!" 
// with an id of "cta" after the last <p>
const a = document.createElement('a');

a.setAttribute('id','cta');

a.innerHTML='Buy Now!';

const para = document.getElementsByTagName('p')[0];

para.after(a);

console.log(para);
console.log(a);
// Access (read) the data-color attribute of the <img>,
// log to the console
const image = document.getElementsByTagName('img')[0];

const data = image.getAttribute('data-color');

console.log(data);



// Update the third <li> item ("Turbocharged"), 
// set the class name to "highlight"
const list = document.getElementsByTagName('li');

console.log(list[2]);

list[2].classList.add('highlight');

const thirdLi = list[2];

console.log(thirdLi);
// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")

const main = document.getElementsByTagName('main');

para.remove(a);
