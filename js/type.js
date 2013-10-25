$(document).ready(function() {
	setInterval ('animatedCursor()', 200);
	type();
});

function animatedCursor() {
	$('#cursor').animate({
		opacity: "0"
	}, 'slow', 'swing').animate({
		opacity: "1"
	}, 'slow', 'swing');
}

function type() {
	var name = "subnormal",
		namelength = name.length,
		namey = $('#name').text(), //current text displayed
		namelength2 = namey.length;
	while(namelength2 < namelength) {
		switch (namelength2) {
			case 1:
				setTimeout(function(){$('#name').append("u");},2000);
				break;
			case 2:
				setTimeout(function(){$('#name').append("b");},2075);
				break;
			case 3:
				setTimeout(function(){$('#name').append("n");},2150);
				break;
			case 4:
				setTimeout(function(){$('#name').append("o");},2225);
				break;
			case 5:
				setTimeout(function(){$('#name').append("r");},2300);
				break;
			case 6:
				setTimeout(function(){$('#name').append("m");},2375);
				break;
			case 7:
				setTimeout(function(){$('#name').append("a");},2450);
				break;
			case 8:
				setTimeout(function(){$('#name').append("l");},2525);
				break;
		}
		namelength2++;
	}
}