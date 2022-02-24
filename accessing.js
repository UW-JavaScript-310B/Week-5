// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"
const weatherHead = document.getElementById('weather-head');
weatherHead.innerHTML = 'February 10 Weather Forecast, Seattle'
// Change the styling of every element with class "sun" to set the color to "orange"
    
// To acces class it creates an array meaning that we have to loop throug it, to acces the array[i]
let classes = document.getElementsByClassName("sun")
console.log(classes)
for(let i =0; i<classes.length; i++){
    classes[i].setAttribute('style', 'color:orange')
}
// Change the class of the second <li> from to "sun" to "cloudy"
// see Jquery.js file
const child2 = document.querySelector('#weather :nth-child(2)');
child2.setAttribute('name', 'I_also_did_it_in_Vanilla_JS')
