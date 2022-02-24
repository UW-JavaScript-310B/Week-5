// Given the <body> element as variable body,
// access the <main> node and log to the console.

const body = document.querySelector('body');
const mainEl = body.querySelector('main');
console.log(mainEl);

// // Given the <ul> element as variable ul,
// // access <body>  and log to the console.

const ul = document.querySelector('ul');
const bodyEl = ul.closest('body');
console.log(bodyEl);

// // Given the <p> element as var p,
// // access the 3rd <li>  and log to the console.

const p = document.querySelector('p');
const ulEl = p.previousElementSibling;
const ulList = ulEl.children;
const liEl = ulList[2].innerHTML;
console.log(liEl);