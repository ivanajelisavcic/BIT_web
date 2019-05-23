$('ul li:first').css('border-bottom', '3px solid red');
$('ul li').css('text-transform', 'uppercase');
$('ul li.active').css('color', 'blue');

var middle = Math.ceil(($('ul li').length / 2)); // returns a number

$('ul li').eq(middle - 1).css('background-color', 'yellow');
