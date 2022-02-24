// Given the <body> element as variable body,
// access the <main> node and log to the console.
const body = document.querySelector('body');

console.log(body.childNodes)
const text = body.firstChild;
const main = text.nextSibling;
console.log(main);

// Given the <ul> element as variable ul,
// access <body>  and log to the console.
const ul = document.querySelector('ul');
const ulMain = ul.parentElement;
const ulBody = ulMain.parentElement;
console.log(ulBody);

// Given the <p> element as var p,
// access the 3rd <li>  and log to the console.
const p = document.querySelector('p');
const pUl = p.previousElementSibling;
const pLi = pUl.childNodes[5];
console.log(pLi);