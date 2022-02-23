// Given the <body> element as variable body,
// access the <main> node and log to the console.
const body = document.querySelector('body');
// Access the <main> node
const main = body.firstElementChild;
// Log <main> node to the console
console.log(main);

// Given the <ul> element as variable ul,
// access <body>  and log to the console.
const ul = document.querySelector('ul');
// Access the <body> element from ul (<ul> is a grand child of <body>)
console.log(ul.parentElement.parentElement);

// Given the <p> element as var p,
// access the 3rd <li>  and log to the console.
const p = document.querySelector('p');
// Access the 3rd <li> from <p> element
console.log(p.previousElementSibling.lastElementChild);
