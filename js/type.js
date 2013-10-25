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
				setTimeout(function(){$('#name').append("u");},1500);
				break;
			case 2:
				setTimeout(function(){$('#name').append("b");},1575);
				break;
			case 3:
				setTimeout(function(){$('#name').append("n");},1650);
				break;
			case 4:
				setTimeout(function(){$('#name').append("o");},1725);
				break;
			case 5:
				setTimeout(function(){$('#name').append("r");},1800);
				break;
			case 6:
				setTimeout(function(){$('#name').append("m");},1875);
				break;
			case 7:
				setTimeout(function(){$('#name').append("a");},1950);
				break;
			case 8:
				setTimeout(function(){$('#name').append("l");},2025);
				break;
		}
		namelength2++;
	}
}