// Given the <body> element as variable body,
// access the <main> node and log to the console.
// get the handle of the <body> tag
const body = document.querySelector('body');
// get the handle of the <main> tag which is a child of <main> tag
const main = body.children;
//write to console
console.log(main);
// Given the <ul> element as variable ul,
// access <body>  and log to the console.
const ul = document.querySelector('ul');
const bodyElement = ul.parentElement.parentElement;
console.log(bodyElement);
// Given the <p> element as var p,
// access the 3rd <li>  and log to the console.
//get the handle of the <p> tag  element
const p = document.querySelector('p');
//get the handle of the previous sibling element which is <ul> tag
const ulElement = p.previousElementSibling;
//write the last child of the <ul> tag
console.log(ulElement.lastElementChild);
