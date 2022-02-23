// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"
const link = document.getElementById('weather-head');
link.innerText = 'February 10 Weather Forecast, Seattle';

// Change the styling of every element with class "sun" to set the color to "orange"
const sunlink = document.querySelectorAll('.sun');
sunlink.forEach((el)=> el.style.color = 'orange');

// Change the class of the second <li> from to "sun" to "cloudy"
var list = document.getElementsByTagName("li");
list[2].className = 'cloudy';