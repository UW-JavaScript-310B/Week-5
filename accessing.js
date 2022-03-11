// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"
document.getElementById("weather-head").innerHTML = "February 10 Weather Forecast, Seattle"
// Change the styling of every element with class "sun" to set the color to "orange"
let elements = document.getElementsByClassName("sun")
for (i = 0; i < elements.length; i++)
{
    elements[i].style.color = 'orange'
}
// Change the class of the second <li> from to "sun" to "cloudy"
let uList = document.getElementById("weather")
uList.getElementsByTagName("li")[1].className = "cloudy"
