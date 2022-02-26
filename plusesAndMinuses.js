// When a user clicks the + element, the count should increase by 1 on screen.
// When a user clicks the – element, the count should decrease by 1 on screen.
let counter = 0;
document.getElementById('link-One').addEventListener('click',function(e) {
    counter++;
    console.log(`${counter}`);
    document.getElementById("count").innerHTML = counter;
});
document.getElementById('link-two').addEventListener('click',function(e) {
    counter--;
    console.log(`${counter}`);
    document.getElementById("count").innerHTML = counter;
});