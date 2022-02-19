// When a user clicks the + element, the count should increase by 1 on screen.
// When a user clicks the – element, the count should decrease by 1 on screen.


//create a main element inside the body for the counter and buttons
let mainEl = document.createElement("main")
mainEl.setAttribute("id", "main-section");

// Get the reference element for the script element
let scriptEl = document.getElementById("lastEl")

// Get the parent element
let parentEl = scriptEl.parentNode

// Insert the new main element into the body before the script
parentEl.insertBefore(mainEl, scriptEl)


//create a button for adding
const addButton = document.createElement('button');
addButton.setAttribute("id", "add");
addButton.innerHTML = "+";
mainEl.appendChild(addButton);


//create a button for subtracting
const subtractButton = document.createElement('button');
subtractButton.setAttribute("id", "subtract");
subtractButton.innerHTML = "-";
mainEl.appendChild(subtractButton);


//create a div for the counter and assign it an id of "counter"
const divEl = document.createElement('div');
divEl.setAttribute("id", "counter");
mainEl.appendChild(divEl);

//add counter to the page
let counter = 0;
divEl.innerHTML = `Total Count is ${counter}`;

//create event to add a 1 when add button is clicked
const addEl = document.getElementById('add');

addEl.addEventListener('click', () => {
    {
        counter++;
    }
    console.log(counter);
    divEl.innerHTML = `Total Count is ${counter}`;


})

//create event to subtrace a 1 when subtract button is clicked

const subtractEl = document.getElementById('subtract');

subtractEl.addEventListener('click', () => {
    {
        counter--;
    }
    console.log(counter);
    divEl.innerHTML = `Total Count is ${counter}`;

})