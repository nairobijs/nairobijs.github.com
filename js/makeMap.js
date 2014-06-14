var map = L.map('map', {scrollWheelZoom: false}).setView([-1.297782, 36.791982], 17);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 18,
    scrollWheelZoom: false
}).addTo(map);

var nds = L.marker([-1.297782, 36.791982]).addTo(map);
var ihub = L.marker([-1.298468, 36.790768]).addTo(map);
					
ihub.bindPopup('<a href="http://ihub.co.ke">'
					+ '<b>iHub</b>'
					+ '</a>'
					+ '<p>We meet here on once a month</p>').openPopup();
