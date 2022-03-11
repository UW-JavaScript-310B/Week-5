// When a user clicks the + element, the count should increase by 1 on screen.
let count = 0
//let plus = document.getElementById("plus")
document.getElementById("plus").addEventListener("click", function ()
{count++;
    console.log(count)
document.getElementById("count").innerText = count.toString()})
// When a user clicks the – element, the count should decrease by 1 on screen.
document.getElementById("minus").addEventListener("click", function ()
{count--;
    console.log(count)
    document.getElementById("count").innerText = count.toString()})