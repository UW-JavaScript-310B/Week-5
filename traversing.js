// Given the <body> element as variable body,
// access the <main> node and log to the console.
const body = document.querySelector('body');
const main = document.getElementsByTagName('main')[0];
console.log(main);

// Given the <ul> element as variable ul,
// access <body>  and log to the console.
const ul = document.querySelector('ul');
const parentNode = ul.parentNode.parentNode;
console.log(parentNode);

// Given the <p> element as var p,
// access the 3rd <li>  and log to the console.
const p = document.querySelector('p');
const li = document.getElementsByTagName('li')[2];
console.log(li);