// Given the <body> element as variable body,
// access the <main> node and log to the console.
const body = document.querySelector('body');
let main = body.querySelector('main');
console.log(main);
// Given the <ul> element as variable ul,
// access <body>  and log to the console.
const ul = document.querySelector('ul');
const ulParent = ul.parentElement.parentNode; 
console.log(ulParent);

// Given the <p> element as var p,
// access the 3rd <li>  and log to the console.
const p = document.querySelector('p');
const ulEle = p.previousElementSibling;
 console.log(ulEle.children[2]);
 console.log(`accessing 3rd li element: `+ ulEle.children[2].innerText);