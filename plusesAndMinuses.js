// When a user clicks the + element, the count should increase by 1 on screen.
let counter =0

let incRef = document.getElementById('increment')

let decRef = document.getElementById('decrement')

let divRef = document.getElementById('counter')

incRef.addEventListener('click', ()=>{
    counter++;
    console.log(counter)
    divRef.innerText=counter;
})

// When a user clicks the – element, the count should decrease by 1 on screen.

//
decRef.addEventListener('click', ()=>{
    counter--;
    console.log(counter)
    divRef.innerText=counter;
})
