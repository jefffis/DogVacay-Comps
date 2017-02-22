var hostNumber,
	allHosts = DV.Search.json.results.length;

// all data is in DV.Search.json.results[x].profile object
$('.dv-host-list-item').off('click').on('click', function(e) {
	e.preventDefault();
	
	hostNumber = parseInt($(this).data('index'), 10) - 1;
	
	var hostData = DV.Search.json.results[hostNumber];
	
	console.log(hostNumber, typeof hostNumber);
	insertAndShowModal(hostData.profile.name.first + ' ' + hostData.profile.name.last + '.', 'https://static1.dogvacay.com/thumb/16_9_640/' + hostData.profile.boardingImage, hostData.profile.description, hostNumber - 1, allHosts);
});

$('body').on('click', '#dv-quick-view-next-host', function(){
	// if(hostNumber === allHosts) {
	// 	hostNumber = -1;
	// }
	hostNumber++;
	changeHost(hostNumber);
	console.log(hostNumber);
});

$('body').on('click', '#dv-quick-view-prev-host', function(){
	// if(hostNumber === 0) {
	// 	hostNumber = allHosts + 1;
	// }
	hostNumber--;
	changeHost(hostNumber);
	console.log(hostNumber);
});

function insertAndShowModal(title, image, details, hostNumber, allHosts) {
	var styles = '#dv-quick-view,#dv-quick-view-wrapper{display:table;height:100%;width:100%}#dv-quick-view-wrapper{position:fixed;top:0;left:0;z-index:100000;background:rgba(0,0,0,.5)}#dv-quick-view{display:table-cell;vertical-align:middle}#dv-quick-view-content{max-width:500px;background:#fff;margin:auto;padding:2rem}',
		quickViewHtml = '<div id="dv-quick-view-content"><h1 id="dv-quick-view-title"></h1><div id="dv-quick-view-image-wrapper"><img id="dv-quick-view-image" /></div><div id="dv-quick-view-content-details"></div><button id="dv-quick-view-prev-host" type="button">Previous Host</button><button id="dv-quick-view-next-host" type="button">Next Host</button></div>'
	
	$('head').append('<style>' + styles + '</style>');
	$('body').append('<div id="dv-quick-view-wrapper"></div>');
	$('#dv-quick-view-wrapper', 'body').append('<div id="dv-quick-view"></div>');
	$('#dv-quick-view', 'body').append(quickViewHtml);
	$('#dv-quick-view-title', 'body').text(title);
	$('#dv-quick-view-image', 'body').attr('src', image);
	$('#dv-quick-view-content-details', 'body').html(details);

	removeModal();
}
function changeHost(hostNumber) {
	var hostData = DV.Search.json.results[hostNumber],
		title = hostData.profile.name.first + ' ' + hostData.profile.name.last + '.',
		image = 'https://static1.dogvacay.com/thumb/16_9_640/' + hostData.profile.boardingImage,
		details = hostData.profile.description;

	$('#dv-quick-view-title', 'body').text(title);
	$('#dv-quick-view-image', 'body').attr('src', image);
	$('#dv-quick-view-content-details', 'body').html(details);
}
function showPreviousHost(hostNumber, allHosts) {
	var hostData = DV.Search.json.results[hostNumber],
		title = hostData.profile.name.first + ' ' + hostData.profile.name.last + '.',
		image = 'https://static1.dogvacay.com/thumb/16_9_640/' + hostData.profile.boardingImage,
		details = hostData.profile.description;

	$('#dv-quick-view-title', 'body').text(title);
	$('#dv-quick-view-image', 'body').attr('src', image);
	$('#dv-quick-view-content-details', 'body').html(details);
}

function removeModal() {
	$('#dv-quick-view-wrapper', 'body').on('click', function(e) {
		if($(e.target).is('#dv-quick-view')) $('#dv-quick-view-wrapper', 'body').remove();
	});
}