// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"

let weatherHead = document.getElementById("weather-head");
weatherHead.innerText = "February 10 Weather Forecast, Seattle";

// Change the styling of every element with class "sun" to set the color to "orange"

let weather = document.getElementById("weather");
let suns = weather.getElementsByClassName("sun");
suns = Array.from(suns);
suns.forEach(sun => {
    sun.style.color = "orange";
});

// Change the class of the second <li> from to "sun" to "cloudy"

let secondLi = weather.querySelector("li:nth-child(2)");
secondLi.className = "cloudy";