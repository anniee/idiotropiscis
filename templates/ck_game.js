var answer_key = {.....}

var turn = 0;

while(answer_key !== {}){
	turn += 1;
	// var user_pick = fill in with jQuery to get the id of card clicked
	var card_flip = function() {
	// replace card with hidden value
		$('#one').replaceWith("<div>x</div>");
	}

	$('#one').on('click', card_flip);


	if(answer_key[user_pick] === answer_key[user_pick2]) {
		// del....
	}

}