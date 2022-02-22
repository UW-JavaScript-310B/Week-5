// When a user clicks the + element, the count should increase by 1 on screen.
// When a user clicks the – element, the count should decrease by 1 on screen.
let plusBtn = document.createElement('button');
plusBtn.id= 'plus';
plusBtn.innerText = '+';


let minusBtn = document.createElement('button');
minusBtn.id= 'minus';
minusBtn.innerText = '-';

document.getElementById('container').append(plusBtn);
document.getElementById('container').append(minusBtn);

let header = document.getElementById('header');
let counter = 0;

header.innerText =counter;

plusBtn.addEventListener('click', ()=>{

    counter++;
    header.innerText = counter;
})
minusBtn.addEventListener('click',()=>{
    if(counter<=0){
        alert('Counter is negative!')
    }
    counter--;
    header.innerText = counter;
})
