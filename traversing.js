// Given the <body> element as variable body,
// access the <main> node and log to the console.
const body = document.querySelector('body');

const main = body.getElementsByTagName('main');
    
console.log(main);

// Given the <ul> element as variable ul,
// access <body>  and log to the console.
const ul = document.querySelector('ul');
    const ulBody = ul.parentNode.parentNode;
    console.log(ulBody);

// Given the <p> element as var p,
// access the 3rd <li>  and log to the console.
const p = document.querySelector('p');

const findSibling = p.previousElementSibling;

const findThirdLi = findSibling.getElementsByTagName('li')[2];
    console.log(findThirdLi);
