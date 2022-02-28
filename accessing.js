// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"
const weatherHeader = document.getElementById("weather-head");
weatherHeader.innerHTML = "February 10 Weather Forecast, Seattle";

// Change the styling of every element with class "sun" to set the color to "orange"
const sunsByGet = document.getElementsByClassName("sun");
for (let index = 0; index < sunsByGet.length; index++) {
  sunsByGet.item(index).style.color = "orange";
}

//Change the class of the second <li> from to "sun" to "cloudy"
const secondSunElement = document.querySelector("ul li:nth-child(2)");
secondSunElement.className = "cloudy";
