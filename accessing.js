// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"
document.getElementById("weather-head").innerText = "February 10 Weather Forecast, Seattle";

// Change the styling of every element with class "sun" to set the color to "orange"
// Get all elements that have classname = 'sun'
const sunEls = document.getElementsByClassName('sun');
// Convert sunEls to array sunElArray
const sunElArray = Array.from(sunEls);
// Set color = 'orange' for these elements
sunElArray.forEach((el) => {
  el.style.color = 'orange';
});

// Change the class of the second <li> from "sun" to "cloudy"
sunEls[1].className = 'cloudy';
