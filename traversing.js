// Given the <body> element as variable body,
// access the <main> node and log to the console.
const body = document.querySelector('body');

const mainElement = body.getElementsByTagName('main')[0]

console.log(mainElement)

// Given the <ul> element as variable ul,
// access <body>  and log to the console.
const ul = document.querySelector('ul');

let ulMain = ul.parentNode

let bodyElem = ulMain.parentNode

console.log(bodyElem)

// Given the <p> element as var p,
// access the 3rd <li>  and log to the console.
const p = document.querySelector('p');

const ulElem = p.previousElementSibling
console.log(ulElem.children[2].outerText)
