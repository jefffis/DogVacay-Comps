// // tracking stuff
// var walkingLandPxl = '/pxl/v1?event_type=pageview&event_data=pageload|1&page_name=profile_host_walking',
// 	walkingClickDates = '/pxl/v1?event_type=click&event_data=name|select_dates; type|button&page_name=profile_host_walking',
// 	walkingClickRRAndDatesShow = '/pxl/v1?event_type=display&event_data=name|calendar; type|overlay&page_name=profile_host_walking',
// 	walkingClickRR = '/pxl/v1?event_type=click&event_data=name|request_my_walk; type|button&page_name=profile_host_walking',
// 	// walkingSignupModalShown = '',
// 	walkingContinueSignupButton = '/pxl/v1?event_type=submit&event_data=name|signup;result|success or result|error; type_button&page_name=profile_host_walking',
// 	walkingFacebookSignupButton = '/pxl/v1?event_type=click&event_data=name|signup_connect_with_facebook; type|button&page_name=profile_host_walking',
// 	// walkingLoginModalShown = '',
// 	walkingContinueLoginButton = '/pxl/v1?event_type=submit&event_data=name|login;result|success or result|error; type|button&page_name=profile_host_walking',
// 	walkingFacebookLoginButton = '/pxl/v1?event_type=click&event_data=name|login_connect_with_facebook; type|button&page_name=profile_host_walking',
// 	walkingDatesDone = '/pxl/v1?event_type=user_selection&event_data=name|select_dates; type|overlay&page_name=profile_host_walking';

// function addPixel(src) {
// 	var img = new Image();  
// 	img.setAttribute('visibility', 'hidden');
// 	img.setAttribute('position', 'absolute');
// 	img.src = src;
// }

// // when page loads
// addPixel(walkingLandPxl);

// // when clicking dates
// $('.dv-input-date__picker', '#dv-cta').click(function() {
// 	addPixel(walkingClickDates);
// });

// // when click done in calendar view
// $('.dwb', '.dw-calendar').click(function() {
// 	addPixel(walkingDatesDone);
// });

// // when clicking RR & date shows
// $('.dv-booking-button', '#dv-cta').click(function() {
// 	var datesExist = $('.dv-input-date__picker', '#dv-cta').val() !== '' ? true : false;
// 	// console.log(datesExist);
// 	if(datesExist) {
// 		addPixel(walkingClickRR);
// 		// console.log('dates');
// 		return;
// 	}

// 	addPixel(walkingClickRRAndDatesShow);
// 	// console.log('no dates');
// });

// // click continue in signup
// $('button.continue-button', '[data-express-flow-signup]').click(function() {
// 	addPixel(walkingContinueSignupButton);
// });
// // click facebook in signup
// $('img.btn-hover', '[data-express-flow-signup]').click(function() {
// 	addPixel(walkingFacebookSignupButton);
// });

// // click continue in login
// $('button.continue-button', '[data-express-flow-login]').click(function() {
// 	addPixel(walkingContinueLoginButton);
// });
// // click facebook in login
// $('img.btn-hover', '[data-express-flow-login]').click(function() {
// 	addPixel(walkingFacebookLoginButton);
// });


var containerWrapper = '<div id="dv-content-wrapper-outer"></div>',
	container = '<div id="dv-content-wrapper"></div>',
	contentStart = '<div id="dv-before-submit"><div id="dv-content"><div class="dv-slide" id="slide-1"><h1>Get matched with a certified walker.</h1><div id="dv-walker-cards"><div class="dv-card"><h2>Tanya Z.</h2></div><div class="dv-card"></div><div class="dv-card"></div></div><p>We&rsquo;ll find you the perfect one</p></div><div class="dv-slide" id="slide-2"><h1>Our free lock box lets your walker in.</h1><img src="https://static1.dogvacay.com/pug/img/corp/lander/walking-howitworks/lock.jpg" alt="Free, secure lock box"><p>Simple, secure access</p></div><div class="dv-slide" id="slide-3"><h1>Get updates on your pup &amp; the walk.</h1><div class="dv-map"><img src="https://static1.dogvacay.com/pug/img/corp/lander/walking-howitworks/my-walk-map-sm.png" alt="See your dogs walk"><div class="dv-dog"><img src="/pug/img/corp/lander/walking-howitworks/dog.jpg"></div></div><p>Stay in the know</p></div></div><ul id="dv-slide-state"><li class="active"></li><li></li><li></li></ul><div id="dv-cta"><div id="dv-cta-wrapper"><h1>$20 <span>for a 30-minute walk</span></h1>',
	contentEnd = '</div></div>',
	styles = '#dv-header div:nth-child(1),.dv-site-banner{margin:auto}#dv-cta .dv-button,body{font-family:"Helvetica Neue",Arial,sans-serif!important}body{max-width:100%!important;background:#F6F6F1!important}.dv-header__content{text-align:center}.dv-nav{display:none!important}.dv-profile-booking-cta:nth-of-type(n+2),.dv-selected-service-rate{display:none}.dv-header__left-content{float:none;width:100%;padding:0}.dv-logo__img{height:25px;width:144px;background-size:contain}#dv-cta .dv-button{padding:.5rem 0!important;font-size:20px!important;line-height:1.5!important;transition:none!important}#dv-cta .dv-input-date__picker{padding:.75rem;border:1px solid #ccc;box-shadow:0 1px 2px #efefef inset;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;font-size:16px}#dv-cta .dv-input-date__picker:-moz-placeholder,#dv-cta .dv-input-date__picker:-ms-input-placeholder,#dv-cta .dv-input-date__picker::-moz-placeholder,#dv-cta .dv-input-date__picker::-webkit-input-placeholder{color:#777}#dv-cta .dv-input-date .dv-icon{left:auto;right:1rem;margin:.85rem 0 0 .75rem;color:#999}#dv-cta .dv-booking-section{margin-bottom:15px}#dv-cta .dv-free-cancellation{display:block;padding-top:10px;color:#777;font-size:13px;line-height:1;text-align:left}#dv-cta h1{margin:0 0 15px;font-size:24px;text-align:left}#dv-cta h1 span{color:#777;font-size:17px;font-weight:400}.cal-1 .fine-print{display:none!important}#dv-cta-wrapper,[data-profile-reservation]{padding:0 20px}@media screen and (min-width:415px){#dv-cta-wrapper,[data-profile-reservation]{max-width:320px;margin:auto}}@media screen and (min-width:350px) and (min-height:568px){#dv-content-wrapper{position:relative;top:-6rem}}@media screen and (min-width:350px) and (min-height:800px){#dv-content-wrapper{position:static}}@media screen and (min-width:702px){#dv-content-wrapper-outer{position:relative;overflow-x:hidden;max-width:700px;margin:auto;border-left:1px solid #E8E5E0;border-right:1px solid #E8E5E0}}';

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

$('head').append('<link rel="stylesheet" href="https://rawgithub.com/jefffis/DogVacay-Comps/master/optimizely/Host%20to%20Walking%20Booker/host-profile-to-walking--hiw--original.css" type="text/css" media="screen" />');
$('head').append('<style>' + styles + '</style>');
$('#dv-header').after(containerWrapper);
$('#dv-content-wrapper-outer', 'body').append(container);
$('#dv-content-wrapper', 'body').append(contentStart + contentEnd);
$('#dv-cta').append(dupedCTAModule);

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
$('.dv-profile-booking__review', 'body').remove();
$('.dv-dot-spacer', 'body').remove();
$('.dv-profile-booking__repeat-guest', 'body').remove();
$('.dv-selected-service-rate', 'body').remove();

$('.dv-free-cancellation').text('Upon request, DogVacay will match you with a certified walker.');
// $('.dv-selected-service-rate__price').text('$20');
// $('.dv-selected-service-rate__unit').html('&nbsp;per 30-min walk');
// $('#dv-cta', 'body').prepend('<h1>$20 <span>for a 30-minute walk</span></h1>');

$('.dv-input-date__picker', '#dv-cta').attr('placeholder', 'Select Date');

window.$(document).ajaxComplete(function(event, xhr, settings) {
	var url = settings.url;
	if(url.indexOf('/api/host/') !== -1) $('[data-button-text]', '.dv-booking-button').text('Request my walk');
});

// functions
var pos = 0,
    content = $('#dv-content', 'body'),
    cta = $('#dv-cta', 'body'),
    ctaButton = $('#dv-cta-button', 'body'),
    cards = $('.dv-card', 'body'),
    stopUiCalls = false;

function autoScroll(pos) {
  setInterval(function() {
    if(pos === 0) {
      content.attr('class', 'pos-2');
    }else if(pos === 1){
      content.attr('class', 'pos-3');
    }else {
      pos = -1;
      content.attr('class', 'pos-3-out');
      removeOutClass(content, '');
    }
    pos++;
    setUIState(pos + 1);
  }, 5000);
}

function removeOutClass(el, classLeft) {
  setTimeout(function() {
    el.attr('class', classLeft);
  }, 225);
}

function setUIState(pos) {
  if(stopUiCalls) return;
  var uiState = document.getElementById('dv-slide-state');

  setTimeout(function() {
    uiState.querySelector('li.active').classList.remove('active');
    uiState.querySelector('li:nth-child(' + pos + ')').classList.add('active');
  }, 250);
}

function loadCards(el, time) {
  setTimeout(function() {
    el.classList.add('loaded');
  }, time);
}

function showNext(elHide, elShow) {
  setTimeout(function() {
    elHide.className = 'hide';
  }, 500);
  setTimeout(function() {
    elHide.parentNode.removeChild(elHide);
    elShow.className = 'show';
  }, 750);
}

Array.prototype.forEach.call(cards, function(el, e){
  loadCards(el, 750 * e);
});

autoScroll(pos);

console.log('THIS IS RUNNING, v1');