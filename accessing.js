// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"
let wHead = document.getElementById("weather-head");
wHead.innerText = "February 10 Weather Forecast, Seattle"

// Change the styling of every element with class "sun" to set the color to "orange"

// This works, and allows class change below
let classSun1 = document.querySelectorAll('.sun'); // returns list
classSun1.forEach((element) => element.style.color = "orange");

/* // This also works, but disallows class change below.
let classSun2 = document.getElementsByClassName("sun"); // returns obj.
for (let key in classSun2) {
    classSun2[key].style.color = "orange";
} */

 
// Change the class of the second <li> from to "sun" to "cloudy"
// Kevin suggests looking into css selectors like nth-child
let firstListItemOfClassSun = document.querySelectorAll("li.sun")[0];
firstListItemOfClassSun.className = "cloudy"; 