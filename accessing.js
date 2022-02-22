// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"
let header2 = document.getElementById("weather-head");
header2.innerText = "February 10 Weather Forecast, Seattle";

// Change the styling of every element with class "sun" to set the color to "orange"
let sunClassElement = document.querySelectorAll(".sun");
sunClassElement.forEach((sun)=>{
    sun.style.color = "orange";
})
// Change the class of the second <li> from to "sun" to "cloudy"
let allLi = document.querySelectorAll("li");
allLi[1].classList.remove('sun');
allLi[1].classList.add('cloudy');