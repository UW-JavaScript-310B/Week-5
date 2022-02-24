// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"

    let header = document.querySelector('h1');

    header.innerHTML = 'February 10 Weather Forecast, Seattle';

// Change the styling of every element with class "sun" to set the color to "orange"

    let sun = document.querySelectorAll('.sun');
    function toOrange(sunItem){
        sunItem.style.color = 'orange';
    };
    sun.forEach(toOrange);

// Change the class of the second <li> from to "sun" to "cloudy"

    let listItems = document.getElementsByTagName('li');

    listItems[1].className = 'cloudy';
