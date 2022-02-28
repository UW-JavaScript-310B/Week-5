// Given the <body> element as variable body,
// access the <main> node and log to the console.
const body = document.querySelector("body");
const main = body.children[0];
console.log(main);

// Given the <ul> element as variable ul,
// access <body>  and log to the console.
const ul = document.querySelector("ul");
const bodyNode = ul.parentNode;
console.log(bodyNode);

// Given the <p> element as var p,
// access the 3rd <li>  and log to the console.
const p = document.querySelector("p");
const pSibling = p.previousElementSibling;
console.log(pSibling);
const thirdElement = pSibling.children[2];
console.log(thirdElement);
