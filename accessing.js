// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"
let day = document.getElementById("weather-head");
day.innerHTML = "February 10 Weather Forecast, Seattle"
// Change the styling of every element with class "sun" to set the color to "orange"
let elementColor = document.querySelectorAll('.sun');
elementColor.forEach((element) => element.style.color = 'orange');
// Change the class of the second <li> from to "sun" to "cloudy"
let sunToCloud = document.getElementsByTagName('li')[1];
sunToCloud.className = 'cloudy';
sunToCloud.removeAttribute("style");