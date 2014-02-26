$(function(){
	$('#calendar').fullCalendar({
		events: 'https://www.google.com/calendar/feeds/uulroen48rg3fr1rj1pstm8jd0%40group.calendar.google.com/public/basic',
		className: 'event',	// CSS class to attach to each event
		height: 400
	});
})
