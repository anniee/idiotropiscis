// HIDDEN_VALUES = ['<img src='frog.jpg'>, x, x, o, o]



var card_flip = function() {
	// replace card with hidden value
	$('#one').replaceWith("<div>x</div>");
}

$('#one').on('click', card_flip);

// $("#one").html("Hi");     // sets HTML
