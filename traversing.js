// Given the <body> element as variable body,
// access the <main> node and log to the console.
const body = document.querySelector('body');
const getMainNode = body.getElementsByClassName('main');
console.log(getMainNode);

// other solution
const getMainNode1 = body.children[0];
console.log(getMainNode1);

// Given the <ul> element as variable ul,
// access <body>  and log to the console.
const ul = document.querySelector('ul');
const getBody = ul.parentElement.parentElement;
console.log(getBody);

// Given the <p> element as var p,
// access the 3rd <li>  and log to the console.
const p = document.querySelector('p');
const getThirdLi = p.previousElementSibling.children[2];
console.log(getThirdLi);