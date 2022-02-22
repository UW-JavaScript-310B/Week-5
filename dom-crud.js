// Create a new <a> element containing the text "Buy Now!" 
// with an id of "cta" after the last <p>
const para = document.getElementsByTagName('p');
const anchor = document.createElement('a');
    anchor.innerText = 'Buy Now!';
    anchor.id = "cta";

    document.getElementById('new').append(anchor);
   
// Access (read) the data-color attribute of the <img>,
// log to the console
const img = document.getElementsByTagName('img');
console.log(img[0].dataset.color);
// Update the third <li> item ("Turbocharged"), 
// set the class name to "highlight"
let allList = document.querySelectorAll('li');
allList[2].innerText = '"Turbocharged"';
allList[2].classList.add('highlight');
// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")

//para[0].style.display = 'none';
let main = document.getElementsByTagName('main')[0];
let p = main.getElementsByTagName("p");
p = Array.from(p);
main.removeChild(p[p.length - 1]);