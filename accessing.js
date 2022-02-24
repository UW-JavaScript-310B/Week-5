// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"

const weatherChange = document.getElementById("weather-head");
weatherChange.innerHTML = "February 10 Weather Forecast, Seattle";

// Change the styling of every element with class "sun" to set the color to "orange"

const sunElements = document.getElementsByClassName("sun");
for (var i = 0; i < sunElements.length; i++) {
    console.log('second element', sunElements)
    sunElements[i].style.color = 'orange';
}

// Change the class of the second <li> from to "sun" to "cloudy"
const sunClass = document.querySelector('li.sun')
sunClass.className = 'cloudy';
