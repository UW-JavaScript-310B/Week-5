// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"
const header = document.getElementById('weather-head');
    header.innerText = "February 10 Weather Forecast, Seattle";

// Change the styling of every element with class "sun" to set the color to "orange"
 const sunPl = document.querySelectorAll('.sun');

 sunPl.forEach((s) => s.style.color = "orange");

// Change the class of the second <li> from to "sun" to "cloudy"
const liSecond = document.querySelectorAll('li')[1];
 liSecond.className = "cloudy";
