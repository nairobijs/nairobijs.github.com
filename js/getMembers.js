$(function(){
	var url = "https://api.github.com/orgs/nairobijs/members";
	
	$.ajax({
		dataType: "json",
		method: 'GET',
		url: url,
		success: function(data){
			for(var i = 0; i < data.length; i++){
				console.log(data[i]);
				$('#members').append(
					'<li>' + data[i].login + 
					'<img src="' + data[i].avatar_url + '">' +
					'</li>');
			}
		}
    });
})

function displayMembers(data){
	console.log(data);
}

function requestJSON(url, callback) {
    
}
