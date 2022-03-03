// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"
const weather = document.getElementById('weather-head');
weather.innerHTML = 'February 10 Weather Forecast, Seattle';

// Change the styling of every element with class "sun" to set the color to "orange"
const changeColor = function(className) {
    const color = document.querySelectorAll('.sun');
    className = color;
    for (let i = 0; i < className.length; i++) {
        className[i].style.color = 'orange'
    }
};
changeColor();

// Change the class of the second <li> from to "sun" to "cloudy"

const color = document.querySelectorAll('.sun');
color[1].classList.replace('sun', 'cloudy');
console.log(color[1]);
