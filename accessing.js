// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"
const headline = document.getElementById('weather-head')

headline.innerText = 'February 10 Weather Forecast, Seattle'

// Change the styling of every element with class "sun" to set the color to "orange"
const sunEls = document.querySelectorAll('.sun')
sunEls.forEach((el) => el.style.color = 'orange')

// Change the class of the second <li> from to "sun" to "cloudy"
const secLi = document.getElementsByTagName('li');
secLi[1].innerText = "cloudy";