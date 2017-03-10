// for coupon code traffic
function getCook(cookiename) {
	var cookiestring=RegExp(""+cookiename+"[^;]+").exec(document.cookie);
	return unescape(!!cookiestring ? cookiestring.toString().replace(/^[^=]+./,"") : "");
}

var couponCode = '<div id="dv-coupon">Use code <code id="dv-walk-code"></code> for your free walk.<small>Limit one per customer, not valid in all zip codes.</small></div>',
	coupoCodeStyles = '#dv-coupon{padding:.5rem;text-align:center;background:#0f748c;color:#fff;font-size:16px}#dv-coupon code{text-transform:uppercase;font-weight:700;letter-spacing:1px;border-bottom:1px dotted;font-family:inherit}#dv-coupon small{color:#fff;font-size:11px;opacity:.75;display:block;max-width:320px;margin-left:auto;margin-right:auto}',
	couponCodeText = '';

// FB walk code
if(getCook('dv_ondemand_walking_promo') === 'fb') {
	couponCodeText = 'FBWALK20';
}

// SEM walk code
if(getCook('dv_ondemand_walking_promo') === 'sem') {
	couponCodeText = 'GWALK20';
}

// email walk code
if(getCook('dv_ondemand_walking_promo') === 'email') {
	couponCodeText = 'DVWALK20';
}

// email2 walk code
if(getCook('dv_ondemand_walking_promo') === 'email2') {
	couponCodeText = 'FIRSTWALK';
}

// unbounce walk code
if(getCook('dv_ondemand_walking_promo') === 'unbounce') {
	couponCodeText = 'FIRSTWALK';
}

// modal walk code
if(getCook('dv_ondemand_walking_promo') === 'modal') {
	couponCodeText = 'WALK20';
}

// tracking stuff
function addPixel(src) {
	var img = new Image();  
	img.setAttribute('visibility', 'hidden');
	img.setAttribute('position', 'absolute');
	img.src = src;
}

addPixel('/pxl/v1?event_type=pageview&event_data=pageload|1&page_name=payment_info_walking');

var markup = '<h2 class="section-header">2. Walk Time &amp; Dog Notes</h2><div class="row"><div class="columns"><div id="dv-container"><h3>What day?</h3><label class="dv-date-picker"><input type="text" id="dv-date-selector" placeholder="Select Date"></label><p style="margin-top: 8px; color: #777; font-size: 13px !important"><strong>Need more than one?</strong> Let us know in the notes section below.</p><div id="dv-time-picker" class="cf"><h3>What time?</h3><label><input type="radio" name="dv-walk-time" value="0"><span>9am-11am</span></label><label><input type="radio" name="dv-walk-time" value="1"><span>11am-1pm</span></label><label><input type="radio" name="dv-walk-time" value="2"><span>1pm-3pm</span></label><label><input type="radio" name="dv-walk-time" value="3"><span>3pm-5pm</span></label> <label><input type="radio" name="dv-walk-time" value="3"><span>5pm-7pm</span></label></div><h3>Dog Notes</h3>',
	styles = '.cf:before,.cf:after{content:" ";display:table}.cf:after{clear:both}.dv-date-picker{display:block;position:relative;cursor:pointer}.dv-date-picker:active{opacity:.65}.dv-date-picker:after{display:block;position:absolute;top:0;right:0;height:100%;width:3rem;background:url(https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/calendar-128.png) no-repeat center;background-size:18px;opacity:.5;content:""}.dv-date-picker input{display:block;width:100%;padding:.75rem;border:1px solid #ccc;border-radius:4px;box-shadow:0 2px 0 #efefef;outline:none;cursor:pointer;font-family:inherit;font-size:16px;-webkit-appearance:none}.dv-date-picker input:focus{border-color:#69BBC0}input[name="dv-walk-time"]{position:absolute;left:-9999px}#dv-time-picker{margin-top:20px;margin-bottom:20px}#dv-container h3{margin:0 0 5px;font-size:16px;font-weight:normal}#dv-time-picker span{display:block;float:left;width:20%;background:white;padding:.5rem 0;border:1px solid #ccc;box-shadow:0 1px 0 rgba(0,0,0,0.025);color:#444;cursor:pointer;font-family:inherit;font-size:13px;text-align:center}#dv-time-picker span:active{background:rgba(0,0,0,0.0025)}#dv-time-picker label:nth-of-type(1) span{border-radius:4px 0 0 4px}#dv-time-picker label:last-of-type span{border-radius:0 4px 4px 0}#dv-time-picker label:nth-of-type(n+2) span{margin-left:-1px}#dv-time-picker input:focus + span{position:relative;z-index:1;outline:1px dotted}#dv-time-picker input:checked + span{position:relative;z-index:1;outline:none;border-color:#69bbc0;box-shadow:0 0 0 1px #69bbc0 inset;color:#2a494b;font-weight:bold}@media screen and (max-width: 450px){#dv-time-picker span{padding:.65rem 0;font-size:12px}}@media screen and (max-width: 410px){#dv-time-picker{width:100%}#dv-time-picker span{float:none;width:100%;padding:.75rem 0;font-size:16px}#dv-time-picker label:nth-of-type(1) span{border-radius:4px 4px 0 0}#dv-time-picker label:last-of-type span{border-radius:0 0 4px 4px;box-shadow:0 2px 0 #efefef}#dv-time-picker label:nth-of-type(n+2) span{margin-top:-1px;margin-left:0}}',
	pikdayStyles = '.pika-single{z-index:9999;display:block;position:relative;color:#333;background:#fff;border:1px solid #ccc}.pika-single:before,.pika-single:after{display:block;position:absolute;top:-10px;left:10px;z-index:10000;border-bottom:10px solid #ccc;border-left:10px solid transparent;border-right:10px solid transparent;content:""}.pika-single:after{top:-9px;z-index:10001;border-bottom-color:white}.pika-single:before,.pika-single:after{content:" ";display:table}.pika-single:after{clear:both}.pika-single{*zoom:1}.pika-single.is-hidden{display:none}.pika-single.is-bound{position:absolute;box-shadow:0 1px 2px rgba(0, 0, 0,.1), 0 2px 3px rgba(0, 0, 0,.05)}.pika-lendar{float:left;width:260px;max-width:100%}.pika-title{position:relative;background:#fff;text-align:center}.pika-label{display:inline-block;position:relative;z-index:9999;overflow:hidden;margin:0;padding:5px 3px;font-size:14px;line-height:20px;font-weight:bold;background-color:#fff}.pika-title select{cursor:pointer;position:absolute;z-index:9998;margin:0;left:0;top:5px;filter:alpha(opacity=0);opacity:0}.pika-prev,.pika-next{display:block;cursor:pointer;position:relative;outline:none;border:0;padding:0;width:20px;height:30px;text-indent:20px;white-space:nowrap;overflow:hidden;background-color:transparent;background-position:center center;background-repeat:no-repeat;background-size:75% 75%;opacity:.5}.pika-prev:hover,.pika-next:hover{opacity:1}.pika-prev,.is-rtl .pika-next{float:left;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAeCAYAAAAsEj5rAAAAUklEQVR42u3VMQoAIBADQf8Pgj+OD9hG2CtONJB2ymQkKe0HbwAP0xucDiQWARITIDEBEnMgMQ8S8+AqBIl6kKgHiXqQqAeJepBo/z38J/U0uAHlaBkBl9I4GwAAAABJRU5ErkJggg==)}.pika-next,.is-rtl .pika-prev{float:right;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAeCAYAAAAsEj5rAAAAU0lEQVR42u3VOwoAMAgE0dwfAnNjU26bYkBCFGwfiL9VVWoO+BJ4Gf3gtsEKKoFBNTCoCAYVwaAiGNQGMUHMkjGbgjk2mIONuXo0nC8XnCf1JXgArVIZAQh5TKYAAAAASUVORK5CYII=)}.pika-prev.is-disabled,.pika-next.is-disabled{cursor:default;opacity:.2}.pika-select{display:inline-block;*display:inline}.pika-table{width:100%;background:white;border-collapse:collapse;border-spacing:0;border:0}.pika-table th,.pika-table td{width:14.285714285714286%;padding:0}.pika-table th{border-bottom:1px solid #ccc;color:#777;font-size:13px;line-height:25px;font-weight:normal;text-align:center}td{text-align:center}.is-empty{background:#efefef}.pika-button{cursor:pointer;display:block;box-sizing:border-box;-moz-box-sizing:border-box;outline:none;border:0;margin:0;width:100%;padding:1rem .5rem;color:#2A494B;font-size:14px;line-height:15px;background:white}.pika-week{font-size:11px;color:#999}.is-selected .pika-button{color:#fff;background:#0F748C}.is-startrange .pika-button{color:#fff;background:#6CB31D}.is-endrange .pika-button{color:#fff;background:#33aaff}.is-disabled .pika-button,.is-outside-current-month .pika-button{pointer-events:none;cursor:default;color:#999;opacity:.3}.pika-button:hover{color:#fff;background:#0f748c}.pika-table abbr{border-bottom:none;cursor:default}',
	script = 'var picker=new Pikaday({field:document.getElementById("dv-date-selector"),firstDay:1,format:"MMMM DD, YYYY",formatStrict:false,minDate:new Date,maxDate:new Date(2018,12,31),yearRange:[2017,2018]});document.getElementById("dv-date-selector").onclick=function(){picker.show()};',
	dateSelected = '',
	timeSelected = '',
	messageBody = '',
	cardDetached = false,
	card;

$('head').append('<style>' + styles + '</style>');
$('head').append('<style>' + pikdayStyles + '</style>');
$('.ck-textarea').attr('placeholder', 'Any notes or details you want to share about your dog(s) with your walker.');
// main col
$('.page-header').html('We&rsquo;re finding you a walker near you now');
$('.section-header', '[data-interaction-pet-view]').text('My Dogs');
$('.section-header', '[data-interaction-message-view]').text('Walk Time & Dog Notes');
$('.section-header').each(function(e) {
	var text = $(this).text();
	$(this).text((e + 1) + '. ' + text);
});
$('.ck-fine-print').text('This helps us contact you more easily');
$('[data-reservation-request-payment-information-message]').html('You won&rsquo;t be charged until after your walk.');
$('[data-interaction-message-view]').prepend(markup);
$('h2:nth-of-type(2)', '[data-interaction-message-view]').remove();
$('p.interaction-subtitle-text', '[data-interaction-message-view]').remove();
$('[data-reservation-request-disclaimer]').html('By clicking "Send Request", you agree to the <a target="_blank" href="/terms">Terms of Service</a>.');
$.getScript("https://rawgit.com/dbushell/Pikaday/master/pikaday.js", function(){
	$('body').append('<script>' + script + '</script>');
});
$('#dv-date-selector', 'body').change(function() {
	dateSelected = $(this).val();
	dateAndTime();
});
$('input[name=dv-walk-time]', 'body').click(function() {
	var value = $(this).next('span').text();
	timeSelected = value;
	dateAndTime();
});

function dateAndTime() {
	// console.log('Date: ' + dateSelected + ', Time: ' + timeSelected);
	if(dateSelected !== '' && timeSelected !== '') $('small.error', '#dv-container').remove();
}

// functions
$('.interaction-cta').click(function(e) {

	if(dateSelected === '' || timeSelected === '') {
		$('small.error', '#dv-container').remove();
		$('#dv-container', 'body').prepend('<small class="error" style="display: block; font-size: 14px; margin-bottom: 10px; color: red;">Please choose a date & time</small>');
		return false;
	}

	if($('.ck-textarea').val() !== '') appendTimeToMessage();

});

function appendTimeToMessage() {
	message = $('.ck-textarea').val();

	DV.Events.trigger('message:metadata', "\n\n\nDay: " + dateSelected + "\n\n\nTime: " + timeSelected);
}

function reinsertCard() {
	if(!cardDetached) {
		$('.media', 'body').remove();
		$('hr:first', '.detail-body').remove();
		$('dd:nth-of-type(n+2)', '[data-reservation-request-detail-invoice-view]').remove();
		$('dt:nth-of-type(n+2)', '[data-reservation-request-detail-invoice-view]').remove();
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
	$('#reservation_request_coupon_form', 'body').html('<div class="row"> <div class="columns large-8"> <input type="text" id="reservation_request_coupon_form_coupon_code" class="ck-input" name="coupon_code" value=""> </div><div class="columns large-4"> <button type="submit" class="button" data-reservation-request-apply-coupon=""> Apply <span class="ck-loader"></span> </button> </div></div>');
	$('#reservation_request_coupon_form_coupon_code').val(couponCodeText);
}

window.$(document).ajaxComplete(function(event, xhr, settings) {
	var url = settings.url;
	if(url.indexOf('/reservation/invoice') !== -1) reinsertCard();
});

console.log('THIS IS RUNNING, v27');









