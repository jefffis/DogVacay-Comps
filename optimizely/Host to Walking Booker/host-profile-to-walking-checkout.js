// for coupon code traffic
function getCook(cookiename) {
	var cookiestring=RegExp(""+cookiename+"[^;]+").exec(document.cookie);
	return unescape(!!cookiestring ? cookiestring.toString().replace(/^[^=]+./,"") : "");
}

var couponCode = '<div id="dv-coupon">Use code <code id="dv-walk-code"></code> for your free walk.<small>Limit one per customer, not valid in all zip codes.</small></div>',
	coupoCodeStyles = '#dv-coupon{padding:.5rem;text-align:center;background:#0f748c;color:#fff;font-size:16px}#dv-coupon code{text-transform:uppercase;font-weight:700;letter-spacing:1px;border-bottom:1px dotted;font-family:inherit}#dv-coupon small{color:#fff;font-size:11px;opacity:.75;display:block;max-width:320px;margin-left:auto;margin-right:auto}';

// FB walk code
if(getCook('dv_ondemand_walking_promo') === 'fb') {
  $('#dv-header').before(couponCode);
  $('#dv-walk-code').text('FBWALK20');
  $('head').append('<style>' + coupoCodeStyles + '</style>');
  $('body').addClass('has-promo-code');
}

// SEM walk code
if(getCook('dv_ondemand_walking_promo') === 'sem') {
  $('#dv-header').before(couponCode);
  $('#dv-walk-code').text('GWALK20');
  $('head').append('<style>' + coupoCodeStyles + '</style>');
  $('body').addClass('has-promo-code');
}

// email walk code
if(getCook('dv_ondemand_walking_promo') === 'email') {
  $('#dv-header').before(couponCode);
  $('#dv-walk-code').text('DVWALK20');
  $('head').append('<style>' + coupoCodeStyles + '</style>');
  $('body').addClass('has-promo-code');
}

// modal walk code
if(getCook('dv_ondemand_walking_promo') === 'modal') {
  $('#dv-header').before(couponCode);
  $('#dv-walk-code').text('WALK20');
  $('head').append('<style>' + coupoCodeStyles + '</style>');
  $('body').addClass('has-promo-code');
}

// tracking stuff
function addPixel(src) {
	var img = new Image();  
	img.setAttribute('visibility', 'hidden');
	img.setAttribute('position', 'absolute');
	img.src = src;
}

addPixel('/pxl/v1?event_type=pageview&event_data=pageload|1&page_name=payment_info_walking');

var timePicker = '<div class="row"><div class="columns"><div id="dv-time-picker" class="cf"><label><input type="radio" name="dv-walk-time" value="0"/><span>9am-11am</span></label><label><input type="radio" name="dv-walk-time" value="1"/><span>11am-1pm</span></label><label><input type="radio" name="dv-walk-time" value="2"/><span>1pm-3pm</span></label><label><input type="radio" name="dv-walk-time" value="3"/><span>3pm-5pm</span></label> <label><input type="radio" name="dv-walk-time" value="3"/><span>5pm-7pm</span></label></div></div></div><hr />',
	styles = '.cf:after,.cf:before{content:" ";display:table}.cf:after{clear:both}input[name=dv-walk-time]{position:absolute;left:-9999px}#dv-time-picker{font:400 100%/1.5 "Helvetica Neue",Arial,sans-serif;width:calc(100% + 4px)}#dv-time-picker span{display:block;float:left;width:20%;background:#fff;padding:.5rem 0;border:1px solid #888;box-shadow:0 1px 0 rgba(0,0,0,.025);color:#444;cursor:pointer;font-family:inherit;font-size:13px;text-align:center}#dv-time-picker span:active{background:rgba(0,0,0,.0025)}#dv-time-picker label:nth-of-type(1) span{border-radius:4px 0 0 4px}#dv-time-picker label:last-of-type span{border-radius:0 4px 4px 0}#dv-time-picker label:nth-of-type(n+2) span{margin-left:-1px}#dv-time-picker input:checked+span{position:relative;z-index:1;border-color:#69bbc0;box-shadow:0 0 0 1px #69bbc0 inset;color:#2a494b;font-weight:700}.dv-pet-info{padding:.5rem .075rem 0}[data-interaction-message-view] hr:nth-of-type(1){border:0!important}@media screen and (max-width:450px){#dv-time-picker span{padding:.65rem 0;font-size:12px}}@media screen and (max-width:410px){#dv-time-picker{width:100%}#dv-time-picker span{float:none;width:100%;padding:.75rem 0}#dv-time-picker label:nth-of-type(1) span{border-radius:4px 4px 0 0}#dv-time-picker label:last-of-type span{border-radius:0 0 4px 4px}#dv-time-picker label:nth-of-type(n+2) span{margin-top:-1px;margin-left:0}}',
	timeChosen = '',
	messageBody = '',
	cardDetached = false,
	card;

// main col
$('.page-header').html('We&rsquo;re finding you a walker near you now');
$('.section-header', '[data-interaction-pet-view]').text('My Dogs');
$('.section-header', '[data-interaction-message-view]').text('Walk Time & Dog Notes');
$('.section-header').each(function(e) {
	var text = $(this).text();
	$(this).text((e + 1) + '. ' + text);
});
$('.ck-fine-print').text('This helps us contact you more easily');
$('.interaction-subtitle-text', '[data-interaction-message-view]').text('Dog Notes');
$('[data-reservation-request-payment-information-message]').html('You won&rsquo;t be charged until after your walk.');

// textarea
// var message = $('.ck-textarea').detach();
// $('.ck-textarea[name="message"]').hide();
// $('[data-interaction-pet-list-view]').after(message);
// $('.ck-textarea', '[data-interaction-pet-view]').before('<label class="ck-label" style="padding-top: 0;">Dog Notes<label>');
$('.ck-textarea').attr('placeholder', 'Any notes or details you want to share about your dog(s) with your walker.');
// $('.ck-textarea', 'body').attr('name', 'faux-message');
// $('body').append(hiddenMessage);

$('head').append('<style>' + styles + '</style>');
$('[data-interaction-message-view]', 'body').append(timePicker);

// functions
$('input', '#dv-time-picker').click(function() {
	var value = $(this).next('span').text();

	timeChosen = value;
	// console.log(timeChosen);
	// appendTimeToMessage();
});
$('.interaction-cta').click(function() {
	var addTime = $('.ck-textarea').val() !== '' && $('input:checked', '#dv-time-picker').length ? true : false;

	if(addTime) appendTimeToMessage();
});
// $('.ck-textarea').blur(function() {
// 	messageBody = $(this).val() !== '' ? $(this).val() : ''; // set to empty string if nothing in here
// 	appendTimeToMessage();
// });

function appendTimeToMessage() {
	message = $('.ck-textarea').val();
	// timeIsChosen = $('input:checked', '#dv-time-picker').length ? true : false;

	// if(!timeIsChosen) {
	// 	$('.ck-textarea').val(message);
	// 	return;
	// }

	// $('.ck-textarea').val(message + '\n\n' + 'Time chosen: ' + timeChosen);
	DV.Events.trigger('message:metadata', "\n\n\nTime chosen: " + timeChosen);

	// $('.ck-textarea').val(message + timeChosen);
	// console.log('Message:' + '\n' + message + '\n\n' + 'Time chosen: ' + timeChosen);
}

function reinsertCard() {
	// console.log(card);
	if(!cardDetached) {
		$('.media', 'body').remove();
		$('hr:first', '.detail-body').remove();
		$('dd:nth-of-type(n+3)', '[data-reservation-request-detail-invoice-view]').remove();
		$('dt:nth-of-type(n+3)', '[data-reservation-request-detail-invoice-view]').remove();
		$('.ck-dl.dl--inline:nth-child(2)', '.detail-body').remove();
		// card updates
		$('dt:nth-child(1)', '.ck-dl.dl--inline:first').text('30-minute walk');
		$('dd:nth-child(2)', '.ck-dl.dl--inline:first').text('$20');
		card = $('[data-reservation-request-detail-view]').detach();
		cardDetached = true;
	}
	$('.request-detail-column').append(card);
	$('dt:nth-child(1)', '.ck-dl.dl--inline:first').text('30-minute walk');
	$('dd:nth-child(2)', '.ck-dl.dl--inline:first').text('$20');
	$('.request-detail-column div:nth-child(1) > dl:nth-child(1) dt:nth-of-type(n+3)').hide();
	$('.request-detail-column div:nth-child(1) > dl:nth-child(1) dd:nth-of-type(n+3)').hide();
}

window.$(document).ajaxComplete(function(event, xhr, settings) {
	var url = settings.url;
	if(url.indexOf('/reservation/invoice') !== -1) reinsertCard();
});

// console.log('THIS IS RUNNING, v21');









