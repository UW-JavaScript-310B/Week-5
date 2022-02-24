let counter = 0

// When a user clicks the + element, the count should increase by 1 on screen.
const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const counterDiv = document.getElementById('total');

addButton.addEventListener('click', () => {
    {
        counter++;
    }
    counterDiv.innerHTML = `Total Count: ${counter}`;


})
// When a user clicks the – element, the count should decrease by 1 on screen.
subtractButton.addEventListener('click', () => {
    {
        counter--;
    }
    counterDiv.innerHTML = `Total Count: ${counter}`;


})