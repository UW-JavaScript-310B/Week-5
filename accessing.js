// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"
document.getElementById("weather-head").innerHTML = "February 10 Weather Forecast, Seattle";
// Change the styling of every element with class "sun" to set the color to "orange"
let els = document.getElementsByClassName("sun");
Array.prototype.forEach.call(els, function(el) {
    el.style.color  = "orange";
});
// Change the class of the second <li> from to "sun" to "cloudy"
document.getElementsByClassName("sun")[0].className = "cloudy";
