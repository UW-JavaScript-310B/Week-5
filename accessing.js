// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"
// get a handle on the  element to be changed
const h2Node = document.getElementById('weather-head');
//change text attribute of the element
h2Node.innerHTML = 'February 10 Weather Forecast, Seattle';
// Change the styling of every element with class "sun" to set the color to "orange"
//get the array of all elements with sun styling class
const liSun = document.querySelectorAll('.sun')
//for each element in the array, change the style color to orange
liSun.forEach(v => {v.style.color = 'orange'});

// Change the class of the second <li> from to "sun" to "cloudy"
//get the array of all <li> elements
const liArr = document.querySelectorAll('li');
//change the styling class name of the second <li> to "cloudy"
liArr[1].className = 'cloudy';