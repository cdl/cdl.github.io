function randomHue() {
	var hue = Math.floor(Math.random()*360);
	return hue;
}

var hue = randomHue();
var saturation = 0.74;
var lightness = 0.43;
var alpha = 1;

var color = jQuery.Color({ hue: hue, saturation: saturation, lightness: lightness, alpha: 1.0 });
var firstColor = color.lightness(0.13);

$(document).ready(function(){
	$('div.avatar,h1,p,nav').hide();
});

$(window).load(function(){
	$('body').css('background-color', 'hsl('+hue+','+0.13+','+lightness+')');

	$('body').animate({
		backgroundColor: color
	}, 500, function() {
		$('div.avatar').fadeIn(300);
		$('h1').fadeIn(350);
		$('mark').css('color', $(this).css('background-color'));
		$('p').fadeIn(400);
		$('nav').fadeIn(450);
	});
});