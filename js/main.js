$(function() {
	//ScrollTo
	$('#about').click(function(){
		$.scrollTo('#aboutLocation', 800, {});
	});
	
	//home-page header slide down
	$('.jumbotron').animate({
		height: 'show', 
	}, 1100, 'swing');
	
	$('.slide').fadeIn(2000);
	
})

