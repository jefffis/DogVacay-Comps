function nextDay(x){
	var now = new Date();
	now.setDate(now.getDate() + (x+(7-now.getDay())) % 7);
	return now.getFullYear() + '-' + (now.getMonth() + 1 < 10 ? '0' + (now.getMonth() + 1) : now.getMonth() + 1) + '-' + now.getDate();
}
// next Friday
// nextDay(5);
// next Sunday
// nextDay(0);

$.ajax({
	url: '/account/calendar/availability',
	type: 'POST',
	data: {startDate: nextDay(5),endDate: nextDay(0),confirmed: true},
	async: false,
	timeout: 4000
}).done(function(data){
	// TODO
	console.log(data);
});