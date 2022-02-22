// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"
const weatherHeader = document.getElementById("weather-head");
weatherHeader.innerHTML = "February 10 Weather Forecast, Seattle";
weatherHeader.addEventListener("click");

// Change the styling of every element with class "sun" to set the color to "orange"
const sunsByGet = document.getElementsByClassName("sun");
for (let index = 0; index < sunsByGet.length; index++) {
  sunsByGet.item(index).style.color = "blue";
}

// const suns = document.querySelectorAll(".sun");
// suns.forEach((element) => {
//   element.style.color = "orange";
// });

// Change the class of the second <li> from to "sun" to "cloudy"
//jquery
// const allSunElements = document.querySelectorAll(".sun");
// allSunElements[1].className = "cloudy";
const secondSunElement = document.querySelector("ul li")[1];
secondSunElement.className = "cloudy";
//TODO figure out how to get JQuery to work for nth element
//SHould be similar to this const thirdListItem = document.querySelector("ul li:nth-child(2)");
