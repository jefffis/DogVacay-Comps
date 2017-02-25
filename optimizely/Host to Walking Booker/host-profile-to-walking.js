// tracking stuff
var walkingLandPxl = '/pxl/v1?event_type=pageview&event_data=pageload|1&page_name=profile_host_walking',
	walkingClickDates = '/pxl/v1?event_type=click&event_data=name|select_dates; type|button&page_name=profile_host_walking',
	walkingClickRRAndDatesShow = '/pxl/v1?event_type=display&event_data=name|calendar; type|overlay&page_name=profile_host_walking',
	walkingClickRR = '/pxl/v1?event_type=click&event_data=name|request_my_walk; type|button&page_name=profile_host_walking',
	// walkingSignupModalShown = '',
	walkingContinueSignupButton = '/pxl/v1?event_type=submit&event_data=name|signup;result|success or result|error; type_button&page_name=profile_host_walking',
	walkingFacebookSignupButton = '/pxl/v1?event_type=click&event_data=name|signup_connect_with_facebook; type|button&page_name=profile_host_walking',
	// walkingLoginModalShown = '',
	walkingContinueLoginButton = '/pxl/v1?event_type=submit&event_data=name|login;result|success or result|error; type|button&page_name=profile_host_walking',
	walkingFacebookLoginButton = '/pxl/v1?event_type=click&event_data=name|login_connect_with_facebook; type|button&page_name=profile_host_walking',
	walkingDatesDone = '/pxl/v1?event_type=user_selection&event_data=name|select_dates; type|overlay&page_name=profile_host_walking';

function addPixel(src) {
	var img = new Image();  
	img.setAttribute('visibility', 'hidden');
	img.setAttribute('position', 'absolute');
	img.src = src;
}

// when page loads
addPixel(walkingLandPxl);

// when clicking dates
$('.dv-input-date__picker', '#cta').click(function() {
	addPixel(walkingClickDates);
});

// when click done in calendar view
$('.dwb', '.dw-calendar').click(function() {
	addPixel(walkingDatesDone);
});

// when clicking RR & date shows
$('.dv-booking-button', '#cta').click(function() {
	var datesExist = $('.dv-input-date__picker', '#cta').val() !== '' ? true : false;
	// console.log(datesExist);
	if(datesExist) {
		addPixel(walkingClickRR);
		// console.log('dates');
		return;
	}

	addPixel(walkingClickRRAndDatesShow);
	// console.log('no dates');
});

// click continue in signup
$('button.continue-button', '[data-express-flow-signup]').click(function() {
	addPixel(walkingContinueSignupButton);
});
// click facebook in signup
$('img.btn-hover', '[data-express-flow-signup]').click(function() {
	addPixel(walkingFacebookSignupButton);
});

// click continue in login
$('button.continue-button', '[data-express-flow-login]').click(function() {
	addPixel(walkingContinueLoginButton);
});
// click facebook in login
$('img.btn-hover', '[data-express-flow-login]').click(function() {
	addPixel(walkingFacebookLoginButton);
});


var containerWrapper = '<div id="content-wrapper-outer"></div>',
	container = '<div id="content-wrapper"></div>',
	contentStart = '<div id="content"><div id="before-submit"><h1>We hand-pick the perfect dog walker for you &amp; your pup.</h1><div id="chat-content"><div class="chat cf"><img src="https://static1.dogvacay.com/pug/img/corp/lander/concierge/concierge.jpg"><div class="chat-content">Hi Jan! What type of walk are you looking for?</div></div><div class="chat cf"><img src="https://static1.dogvacay.com/pug/img/corp/lander/concierge/guest.jpg"><div class="chat-content">Heya! Pickles has lots of energy. I’d love to get a long walk to tire her out.</div></div><div class="chat cf"><img src="https://static1.dogvacay.com/pug/img/corp/lander/concierge/concierge.jpg"><div class="chat-content"><span class="chat-thumbs-up"></span>&nbsp;&nbsp;Finding a walker now</div></div></div><div id="cta">',
	contentEnd = '</div></div><div id="after-submit"><img src="https://static1.dogvacay.com/pug/react-dist/dv-app-walking/dist/images/dog-running.gif"><h1>Great, we’re on it!</h1><p>A DogVacay concierge will contact you shortly to finalize your walk.</p><p>In the meantime, <a href="https://dogvacay.com/blog/">read our blog</a>.</p></div></div>',
	styles = '#dv-header div:nth-child(1),.dv-site-banner{margin:auto}#cta .dv-button,body{font-family:"Helvetica Neue",Arial,sans-serif!important}body{max-width:100%!important}.dv-header__content{text-align:center}.dv-nav{display:none!important}.dv-header__left-content{float:none;width:100%;padding:0}.dv-logo__img{height:25px;width:144px;background-size:contain}.dv-profile-booking-cta:nth-of-type(n+2){display:none}#before-submit{position:relative!important}#chat-content{margin-bottom:70px!important}#cta{position:absolute!important;z-index:2!important;left:-50px!important;width:calc(100% + 100px)!important;margin-bottom:-10px!important;padding:30px 50px 10px!important}#before-submit.hidden:before,#cta:before{position:absolute;content:""}#cta:before{display:block;top:-41px!important;left:-20px;height:40px!important;width:calc(100% + 40px);background:linear-gradient(to bottom,rgba(0,0,0,0) 0,rgba(0,0,0,.075) 100%)!important}#cta.fade-in{bottom:-90px!important}#cta .dv-button{padding:.5rem 0!important;font-size:20px!important;line-height:1.5!important;transition:none!important}#cta .dv-input-date__picker{padding:.75rem;border:1px solid #ccc;box-shadow:0 1px 2px #efefef inset;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;font-size:16px}#cta .dv-input-date__picker:-moz-placeholder,#cta .dv-input-date__picker:-ms-input-placeholder,#cta .dv-input-date__picker::-moz-placeholder,#cta .dv-input-date__picker::-webkit-input-placeholder{color:#777}#cta .dv-input-date .dv-icon{left:auto;right:1rem;margin:.85rem 0 0 .75rem;color:#999}.dv-selected-service-rate{display:none}#before-submit.hidden:before{display:block;top:0;left:0;z-index:1;height:100%;width:100%;background:#fff;opacity:.5}#cta .dv-booking-section{margin-bottom:15px}#cta .dv-free-cancellation{display:block;padding-top:10px;color:#777;font-size:13px;line-height:1;text-align:left}#cta h1{margin:0 0 15px;font-size:24px;text-align:left}#cta h1 span{color:#777;font-size:17px;font-weight:400}.cal-1 .fine-print{display:none!important}@media screen and (max-width:1000px){#cta .dv-profile-booking-cta{padding:0!important}}@media screen and (min-width:501px) and (max-width:600px){#cta{margin-bottom:5px!important}}@media screen and (max-width:500px){#cta{margin-bottom:20px!important}}@media screen and (min-width:350px) and (max-width:600px){#cta.fade-in{bottom:-120px!important}#chat-content{margin-bottom:100px!important}}@media screen and (max-width:599px){#cta .dv-input-date .dv-icon{margin-top:1rem}}@media screen and (min-width:1202px){#content-wrapper-outer{position:relative;overflow-x:hidden;max-width:1200px;margin:auto;border-left:1px solid #E8E5E0;border-right:1px solid #E8E5E0}}@media screen and (max-width:349px){body{background:#fff!important}#cta{position:fixed!important;left:0!important;width:100%!important;margin-bottom:0!important;padding:1.5rem!important}#cta.fade-in{bottom:0!important}}@media screen and (max-width:599px) and (min-width:350px){#content-wrapper-outer{background:url(https://raw.githubusercontent.com/jefffis/DogVacay-Comps/master/walking/hiw/img/map-santa-monica-mweb.jpg) center no-repeat!important;background-size:cover}}@media screen and (min-width:600px){#content-wrapper-outer{background:url(https://raw.githubusercontent.com/jefffis/DogVacay-Comps/master/walking/hiw/img/map-santa-monica.jpg) center no-repeat!important;background-size:cover}}';

$('.dv-multi-dates').show();
$('.dv-input-date--conjoined').remove();
$('.dv-booking-service').hide();

var dupedCTAModule = $('.dv-profile-booking:first').detach();

// header
$('.dv-header__right-content').remove();
$('.dv-nav--primary').remove();

// columns
$('#profile-left-top-column').remove();
$('#profile-left-bottom-column').remove();

// right col removals
$('#profile-right-sidebar').remove();

// footer
$('.dv-profile-footer').remove();
$('#dv-footer').remove();

$('head').append('<style>' + styles + '</style>');
$('head').append('<link rel="stylesheet" href="https://static1.dogvacay.com/pug/css/corp/lander/concierge.css?v=5a3b341" type="text/css" media="screen" />');
$('#dv-header').after(containerWrapper);
$('#content-wrapper-outer', 'body').append(container);
$('#content-wrapper', 'body').append(contentStart + contentEnd);
$('#cta').append(dupedCTAModule);

// remove after re-inserting
$('.dv-profile-booking').removeAttr('style');
$('.dv-profile-bookmark', 'body').remove();
$('.dv-profile-host-photo', 'body').remove();
$('.dv-profile-booking__name', 'body').remove();
$('.dv-profile-booking__address', 'body').remove();
$('.dv-profile-messaging-cta ', 'body').remove();
$('.dv-profile-search-link', 'body').remove();
$('.dv-profile-booking-notes', 'body').remove();
$('.dv-profile__service-list-link', 'body').remove();
$('.dv-profile-booking__online-now', 'body').remove();
$('.dv-profile-booking', 'body').removeAttr('class');

$('.dv-free-cancellation').text('Upon request, DogVacay will match you with a certified walker.');
$('.dv-selected-service-rate__price').text('$20');
$('.dv-selected-service-rate__unit').html('&nbsp;per 30-min walk');
$('#cta', 'body').prepend('<h1>$20 <span>for a 30-minute walk</span></h1>');

$('.dv-input-date__picker', '#cta').attr('placeholder', 'Select Date');

// for coupon code traffic
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

var couponCode = '<div id="dv-coupon">Use code <code id="dv-walk-code"></code> for your free walk.<small>Limit one per customer, not valid in all zip codes.</small></div>',
  coupoCodeStyles = '#dv-coupon{padding:.5rem;text-align:center;background:#0f748c;color:#fff}#dv-coupon code{text-transform:uppercase;font-weight:700;letter-spacing:1px;border-bottom:1px dotted}#dv-coupon small{color:#fff;font-size:11px;opacity:.75}';

// FB walk code
var fBAd = getUrlParameter('sid') === '711' && getUrlParameter('cid') === '002' && getUrlParameter('aid') === '001' ||
getUrlParameter('sid') === '711' && getUrlParameter('cid') === '002' && getUrlParameter('aid') === '002' ||
getUrlParameter('sid') === '711' && getUrlParameter('cid') === '002' && getUrlParameter('aid') === '003' ? true : false;

if(fBAd) {
  $('#dv-header').before(couponCode);
  $('#dv-walk-code').text('FBWALK20');
  $('head').append('<style>' + coupoCodeStyles + '</style>');
  $('body').addClass('has-promo-code');
  document.cookie = 'dv_ondemand_walking_promo=fb; expires=; path=/';
}

// SEM walk code
if(getUrlParameter('sid') === '066' && getUrlParameter('cid') === '001' && getUrlParameter('aid') === '001') {
  $('#dv-header').before(couponCode);
  $('#dv-walk-code').text('GWALK20');
  $('head').append('<style>' + coupoCodeStyles + '</style>');
  $('body').addClass('has-promo-code');
  document.cookie = 'dv_ondemand_walking_promo=sem; expires=; path=/';
}

window.$(document).ajaxComplete(function(event, xhr, settings) {
	var url = settings.url;
	if(url.indexOf('/api/host/') !== -1) $('[data-button-text]', '.dv-booking-button').text('Request my walk');
});

// nothing runs below here -- this is concatenated and included above
function showCTA(el, time, ctx) {
  setTimeout(function() {
    $('body').find(el).addClass('fade-in');
    $('.dv-booking-button', 'body').find('span[data-button-text]').text('Request my walk');
  }, time);
}

function hideChatUI() {
  setTimeout(function() {
    $('#before-submit', 'body').addClass('hidden');
  }, 4750);
}

function showChatUi(el) {
  setTimeout(function() {
    $('.chat', '#chat-content').each(function(e) {
		showCTA($(this), 1500 * e, false);
    });
  }, 750);
}

showCTA($('#cta'), 4500, true);
showChatUi($('.chat'));
hideChatUI();

$('.chat', '#chat-content').each(function(e) { var $that = $(this); setTimeout(function(){ $that.className += ' fade-in'; },1500 * e);});

function showChat(time) {
  setTimeout(function() {
    (function(o,l,a,r,k,y){if(o.olark)return; r="script";y=l.createElement(r);r=l.getElementsByTagName(r)[0]; y.async=1;y.src="//"+a;r.parentNode.insertBefore(y,r); y=o.olark=function(){k.s.push(arguments);k.t.push(+new Date)}; y.extend=function(i,j){y("extend",i,j)}; y.identify=function(i){y("identify",k.i=i)}; y.configure=function(i,j){y("configure",i,j);k.c[i]=j}; k=y._={s:[],t:[+new Date],c:{},l:a}; })(window,document,"static.olark.com/jsclient/loader.js");
    olark.identify('3883-419-10-1869');
  }, time);
}

showChat(5000);

// console.log('THIS IS RUNNING, v8');