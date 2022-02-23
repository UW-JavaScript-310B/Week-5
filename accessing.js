// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"
document.getElementById('weather-head').textContent = 'February 10 Weather Forecast, Seattle';

// Change the styling of every element with class "sun" to set the color to "orange"
const weatherObservation = document.querySelectorAll('#weather .sun');
weatherObservation.forEach( entry => entry.setAttribute('style', 'color: orange;'));

// Change the class of the second <li> from to "sun" to "cloudy"
// STUDENT NOTE: Nothing says for us to change back the color... so I'm leaving as it is.
weatherObservation[1].setAttribute('class', 'cloudy');