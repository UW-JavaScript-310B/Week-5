// Given the <body> element as variable body,
// access the <main> node and log to the console.
const body = document.querySelector('body');
const test = body.firstChild;
const main = test.nextSibling;

console.log(main)
// Given the <ul> element as variable ul,
// access <body>  and log to the console.
const ul = document.querySelector('ul');
const parentUl = ul.parentNode;
const parentMain = parentUl.parentNode;
console.log(parentMain);

// Given the <p> element as var p,
// access the 3rd <li>  and log to the console.
const p = document.querySelector('p');
const pSibling = p.previousElementSibling;
const ulChildren = pSibling.childNodes[5];
console.log(pSibling);
console.log(ulChildren);