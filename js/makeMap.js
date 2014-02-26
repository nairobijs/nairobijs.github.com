var map = L.map('map').setView([-1.297782, 36.791982], 17);

L.tileLayer('http://{s}.tile.cloudmade.com/2515f952e6c3418488627c3e24cd773b/997/256/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 18
}).addTo(map);

var nds = L.marker([-1.297782, 36.791982]).addTo(map);
var ihub = L.marker([-1.298468, 36.790768]).addTo(map);

nds.bindPopup('<a href="http://nairobidevschool.org">'
					+ '<b>Nairobi Dev School</b>'
					+ '</a>'
					+ '<p>We meet here on Tuesdays</p>').openPopup();
					
ihub.bindPopup('<a href="http://ihub.co.ke">'
					+ '<b>iHub</b>'
					+ '</a>'
					+ '<p>We meet here on once a month</p>');
