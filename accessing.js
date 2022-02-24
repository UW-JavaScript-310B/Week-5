// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"
let title = document.getElementById("weather-head");
title.innerHTML = 'February 10 Weather Forecast, Seattle';
 

// Change the styling of every element with class "sun" to set the color to "orange"

// const sunColor = document.querySelectorAll('.sun');
const sunColor = document.querySelectorAll('.sun');
sunColor.forEach((el) => el.style.color = 'orange')

// Change the class of the second <li> from to "sun" to "cloudy"
let sunToCloudy = document.getElementsByTagName('li')[1];
console.log(sunToCloudy);

sunToCloudy.className =  'cloudy';
sunToCloudy.removeAttribute("style")

