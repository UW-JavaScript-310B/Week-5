// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"

const weatherHeader = document.getElementById("weather-head")
weatherHeader.textContent='February 10 Weather Forecast, Seattle'


// Change the styling of every element with class "sun" to set the color to "orange"

const sunClasses = document.querySelectorAll('.sun')

sunClasses.forEach((thing)=>thing.style.color = 'orange')

// Change the class of the second <li> from to "sun" to "cloudy"

const secondSun = document.querySelectorAll('.sun')[1]

secondSun.className='cloudy'