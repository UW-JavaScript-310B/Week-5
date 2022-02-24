// Given the <body> element as variable body,
// access the <main> node and log to the console.
const body = document.querySelector('body');
const bodyChild = body.children[0];
console.log(bodyChild)
// Given the <ul> element as variable ul,
// access <body>  and log to the console.
const ul = document.querySelector('ul');
const bodyElement = ul.closest('body');
console.log(bodyElement);

// Given the <p> element as var p,
// access the 3rd <li>  and log to the console.
const p = document.querySelector('p');
const siblingUl = p.previousElementSibling;
const child = siblingUl.lastElementChild;
console.log(child)
