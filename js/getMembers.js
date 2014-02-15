$(function(){
	var $loading = $('#loading');
	var $members = $('#members').hide();
	
	// ajax request for github members
	var url = "https://api.github.com/orgs/nairobijs/members";
	$.ajax({
		dataType: "json",
		method: 'GET',
		url: url,
		success: displayMembers,
		error: function(){
			$loading.fadeOut('slow');
			$('h1 .text-center').after('<p class="text-center">Something went wrong :(</p>');
		}
    });
    
    // loading spinner with ridiculous amount of options
    var opts = {
            lines: 10, // The number of lines to draw
            length: 100, // The length of each line
            width: 50, // The line thickness
            radius: 20, // The radius of the inner circle
            corners: 1, // Corner roundness (0..1)
            rotate: 0, // The rotation offset
            color: '#000', // #rgb or #rrggbb
            speed: 1, // Rounds per second
            trail: 60, // Afterglow percentage
            shadow: false, // Whether to render a shadow
            hwaccel: false, // Whether to use hardware acceleration
            className: 'spinner', // The CSS class to assign to the spinner
            zIndex: 2e9, // The z-index (defaults to 2000000000)
            top: 25, // Top position relative to parent in px
            left: 25 // Left position relative to parent in px
        };
	var target = document.getElementById('loading');
	var spinner = new Spinner(opts).spin(target);
	
	// show while waiting for ajax
    $(document).bind('ajaxStart', function(){
        $loading.show();
    }).bind('ajaxStop', function(){
		// fade out spinner, fade in <ul>
        $loading.fadeOut('slow');
        $members.fadeIn(400);  
    });
});

// callback for successful ajax request
function displayMembers(members){
	$.each(members, function(index, member){
		var memberData = {
			username: member.login,
			url: member.html_url,
			gravatar: member.avatar_url
		};
		
		// template <li> for each member
		var template = '<li class=\'list-group-item\'>' +
			'<div class="row">' +
			'<div class="thumbnail col-md-1">' +
			'<img class="img-responsive img-thumbnail" src="{{gravatar}}">' +
			'</div>' +
			'<div class="col-md-3">' +
			'<h2><a href="{{url}}">{{username}}</a></h2>' +
			'</div>'
			'</div>' +
			'</li>';
		var html = Mustache.to_html(template, memberData);
		$('#members').append(html);
	});
}
