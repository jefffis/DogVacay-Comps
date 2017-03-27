// tracking stuff
function getCook(cookiename) {
	var cookiestring=RegExp(""+cookiename+"[^;]+").exec(document.cookie);
	return unescape(!!cookiestring ? cookiestring.toString().replace(/^[^=]+./,"") : "");
}
function addPixel(src) {
	var img = new Image();  
	img.setAttribute('visibility', 'hidden');
	img.setAttribute('position', 'absolute');
	img.src = src;
}

addPixel("/pxl/v1/3pd/opt?visitor_id=" + getCook('visitorid')+ "&test_name=2017_03_27_mobile_srp_distance_tag&variant_name=test_distance_tag&page_name=search_results");

$('.dv-mweb-search-item', 'body').each(function(e){
	var displayDistanceFactor = Math.max((DV.Search.json.results[e].searchSpecificProperties.distanceFactor).toFixed(1), 0.1),
		displayNeighborhood = $(this).find('.dv-search-info-window__location').text(),
		mileOrMiles = displayDistanceFactor === 1 ? 'mile' : 'miles';

	$(this).find('.dv-search-info-window__location').html(displayNeighborhood + '<br>' + displayDistanceFactor + ' ' + mileOrMiles + ' away');
});

window.$(document).ajaxComplete(function(event, xhr, settings) {
	var url = settings.url;

	if(url.indexOf('/ajax/dog') !== -1 || url.indexOf('/ajax/browse') !== -1) {
		var resultsObject = JSON.parse(xhr.responseText);

		$.each(resultsObject.results, function(e){
			var id = resultsObject.results[e].id,
				displayDistanceFactor = Math.max((resultsObject.results[e].searchSpecificProperties.distanceFactor).toFixed(1), 0.1),
				displayNeighborhood = $('[data-host-id="' + id + '"]').find('.dv-search-info-window__location').text(),
				mileOrMiles = displayDistanceFactor === 1 ? 'mile' : 'miles';

			$('[data-host-id="' + id + '"]').find('.dv-search-info-window__location').html(displayNeighborhood + '<br>' + displayDistanceFactor + ' ' + mileOrMiles + ' away');
		});
	}
});

console.log('this is running, v8');