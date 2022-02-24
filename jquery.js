// Change the class of the second <li> from to "sun" to "cloudy"
$(document).ready(
    function(){
        let x = $('#weather li:nth-child(2)')
        x.attr('class', 'cloudy')
    }
);