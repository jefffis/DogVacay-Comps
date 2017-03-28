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

var notificationText = $.trim($('.dv-account-list-item', '#dv-dashboard-notifications').text()),
	isPendingNotification = notificationText.indexOf('pending') !== -1 ? true : false;

if($('#dv-dashboard-notifications').length && isPendingNotification) updateAlerts();

function updateAlerts() {
	addPixel("/pxl/v1/3pd/opt?visitor_id=" + getCook('visitorid')+ "&test_name=2017_03_27_host_dashboard_notification_ui&variant_name=test_alert_badge_ui&page_name=dashboard_host");
	$('.right', '#dv-dashboard-notifications').remove();
	$('#dv-dashboard-notification-none', '#dv-dashboard-notifications').remove();
	var text = $.trim($('.dv-account-list-item', '#dv-dashboard-notifications').text()),
		strippedText = text.replace('You have ', ''),
		numberOfRequests = strippedText.replace(' pending requests.', ''),
		numberOfRequests = numberOfRequests.replace(' pending request.', ''),
		styles = '#dv-dashboard-notifications{position:relative;background:#FEF8E7;padding:1.5rem 2rem 1.35rem 4.25rem;box-shadow:0 0 0 1px rgba(0,0,0,0.1) inset}#svg{position:absolute;top:50%;left:.65rem;z-index:1;height:3.5rem;width:3.5rem;margin-top:-1.75rem}#svg:before{display:block;position:absolute;top:.5rem;right:.25rem;z-index:2;height:1.25rem;width:1.25rem;background:#ec6350;border:1px solid #FEF8E7;border-radius:100%;color:white;content:attr(data-num);font-size:11px;line-height:20px;text-align:center}#dv-dashboard-notifications svg{height:3.5rem;width:3.5rem}#bell{fill:#2a494b}#dv-dashboard-notifications a{float:right;font-weight:bold;text-decoration:underline}#dv-dashboard-notifications u{border-bottom:1px dotted #999;text-decoration:none}@media screen and (max-width:680px){#dv-dashboard-notifications span{display:none}}',
		bellSvg = '<div id="svg" data-num="' + numberOfRequests + '"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 128 128" style="enable-background:new 0 0 128 128;" xml:space="preserve"><path id="bell" d="M93.9,82.6c-1.8-5.1-4.4-7.5-6.2-9.2c-1.8-1.7-2.7-2.5-2.7-5.4V50.4c0-7.2-3.2-12.8-9.2-16.1c-1.7-0.9-3.4-1.6-4.9-2c-0.9-1.8-3-4.3-6.8-4.3c-3.7,0-6,2.4-7,4.3c-1.6,0.5-3.3,1.1-5,2.1c-6,3.4-9.2,8.9-9.2,16.1V68c0,2.9-0.9,3.7-2.7,5.4c-1.9,1.7-4.4,4.1-6.2,9.2c-0.8,2.3-1.1,6,0.7,8.6c0.9,1.3,2.6,2.8,5.9,2.8H53c0.3,5.7,5.1,10.3,10.9,10.3c5.8,0,10.6-4.5,10.9-10.3h12.4c3.3,0,5-1.5,5.9-2.8C95,88.6,94.7,85,93.9,82.6z M63.9,99.2c-3,0-5.6-2.3-5.9-5.3h11.8C69.5,96.9,67,99.2,63.9,99.2z"/></svg></div>';
	$('.dv-account-list-item', '#dv-dashboard-notifications').remove();
	$('div', '#dv-dashboard-notifications').remove();
	$('head').append('<style>' + styles + '</style>');
	$('#dv-dashboard-notifications').html(bellSvg + '<span>Guests are interested! You have </span><u>' + strippedText.substring(0, strippedText.length-1) + '</u>. <a href="/messages">Respond Now</a>');

	if(/Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ) {
		$('span', '#dv-dashboard-notifications').remove();
		$('#svg').attr('data-num', '').css('left', '.85rem');
		$('a', '#dv-dashboard-notifications').css('font-size', '23px');
		$('u', '#dv-dashboard-notifications').css('border-bottom', '0');
		$('#dv-dashboard-notifications').css('padding-left', '5rem');
	}

	$('a', '#dv-dashboard-notifications').click(function(e) {
		e.preventDefault();
		addPixel('/pxl/v1?event_type=click&event_data=name|respond_now_rr_pending;type|link&page_name=dashboard_host');
		location.href = $(this).attr('href');
	});

}

console.log('this is running, v6');