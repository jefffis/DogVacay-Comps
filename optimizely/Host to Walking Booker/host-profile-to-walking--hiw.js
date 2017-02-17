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
	styles = '#dv-header div:nth-child(1),.dv-site-banner{margin:auto}#dv-cta .dv-button,body{font-family:"Helvetica Neue",Arial,sans-serif!important}body{max-width:100%!important;background:#F6F6F1!important}.dv-header__content{text-align:center}.dv-nav{display:none!important}.dv-profile-booking-cta:nth-of-type(n+2),.dv-selected-service-rate{display:none}.dv-header__left-content{float:none;width:100%;padding:0}.dv-logo__img{height:25px;width:144px;background-size:contain}#dv-cta .dv-button{padding:.5rem 0!important;font-size:20px!important;line-height:1.5!important;transition:none!important}#dv-cta .dv-input-date__picker{padding:.75rem;border:1px solid #ccc;box-shadow:0 1px 2px #efefef inset;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;font-size:16px}#dv-cta .dv-input-date__picker:-moz-placeholder,#dv-cta .dv-input-date__picker:-ms-input-placeholder,#dv-cta .dv-input-date__picker::-moz-placeholder,#dv-cta .dv-input-date__picker::-webkit-input-placeholder{color:#777}#dv-cta .dv-input-date .dv-icon{left:auto;right:1rem;margin:.85rem 0 0 .75rem;color:#999}#dv-cta .dv-booking-section{margin-bottom:15px}#dv-cta .dv-free-cancellation{display:block;padding-top:10px;color:#777;font-size:13px;line-height:1;text-align:left}#dv-cta h1{margin:0 0 15px;font-size:24px;text-align:left}#dv-cta h1 span{color:#777;font-size:17px;font-weight:400}.cal-1 .fine-print{display:none!important}#dv-cta-wrapper,[data-profile-reservation]{padding:0 20px}#dv-content-wrapper-outer{min-height:100%;height:auto;background:#fff}@media screen and (min-height:600px){#dv-content{margin-top:70px}#dv-content-wrapper-outer{min-height:calc(100% - 56px)}}@media screen and (min-height:740px){#dv-content-wrapper-outer{height:calc(100% - 56px);min-height:calc(100% - 56px)}}@media screen and (min-width:350px) and (min-height:800px){#dv-content{margin-top:0}}@media screen and (min-width:415px){#dv-cta-wrapper,[data-profile-reservation]{max-width:320px;margin:auto}}@media screen and (min-width:702px){#dv-content-wrapper-outer{position:relative;overflow-x:hidden;max-width:700px;margin:auto;border-left:1px solid #E8E5E0;border-right:1px solid #E8E5E0}}',
  originalStyles = '#dv-header div:nth-child(1),*{padding:0}*{margin:0;border:0;box-sizing:border-box}.cf:after,.cf:before{content:" ";display:table}.cf:after{clear:both}html{font:400 100%/1.5 "Helvetica Neue",Arial,sans-serif;color:#2A494B}#dv-cta-button,h1{font-weight:700;text-align:center}h1,small{line-height:1.2}#dv-header,header{position:relative;z-index:3;padding:1rem 0 .9rem;border-bottom:1px solid #E8E5E0;box-shadow:0 1px 2px rgba(0,0,0,.1)}.dv-card:nth-child(1),.dv-dog img{box-shadow:0 0 0 2px #fff,0 2px 3px rgba(0,0,0,.15)}#dv-header img,header img{display:block;max-height:20px;margin:auto}#dv-header div:nth-child(2){display:none}h1{max-width:80vw;margin:auto auto 3.5rem;font-size:24px}.dv-slide{position:relative;top:0;left:0;transition:left .25s ease-in-out}.dv-slide:nth-child(2),.dv-slide:nth-child(3){display:none;position:absolute;top:0;width:100%;opacity:0}.dv-slide:nth-child(1){z-index:3}.dv-slide:nth-child(2){z-index:2}.dv-slide:nth-child(3){z-index:1}#dv-content.pos-2 .dv-slide:nth-child(1){left:calc(-100% - 20vw)}#dv-content.pos-2 .dv-slide:nth-child(2){display:block;opacity:1;animation:fadeIn .25s ease-in-out}#dv-content.pos-2-out .dv-slide:nth-child(2){display:block;opacity:1;animation:fadeOut .25s ease-in-out}#dv-content.pos-3 .dv-slide:nth-child(1),#dv-content.pos-3 .dv-slide:nth-child(2){display:block;left:calc(-100% - 20vw);opacity:1}#dv-content.pos-3 .dv-slide:nth-child(3){display:block;opacity:1;animation:fadeIn .25s ease-in-out}#dv-content.pos-3-out .dv-slide:nth-child(3){display:block;opacity:1;animation:fadeOut .25s ease-in-out}.dv-slide p{text-align:center}.dv-slide img{display:block;max-height:175px;margin:-25px auto 1.5rem;border-radius:6px}.dv-map{position:relative;max-width:320px;margin:auto}.dv-dog img{position:absolute;top:-15px;right:-8px;max-width:80px;margin:auto}#dv-content{position:relative;top:0;left:0;margin-top:6vh}#dv-walker-cards{position:relative;height:150px;margin-bottom:1.5rem}.dv-card{display:none;opacity:0;position:absolute;height:150px;width:250px;background:url(/pug/img/corp/lander/walking-howitworks/walker.jpg) center no-repeat;background-size:cover;border-radius:6px;transform:translate(20px,0)}.dv-card:nth-child(1){z-index:3}.dv-card.loaded{display:block;opacity:1;transform:translate(0,0);animation:slideIn .25s ease-in-out}.dv-card:nth-child(2){top:-15px;left:50%;z-index:2;background:url(/pug/img/corp/lander/walking-howitworks/walker-2.jpg) center no-repeat;background-size:cover;margin-left:-125px;box-shadow:0 0 0 2px #fff}.dv-card:nth-child(1):before,.dv-card:nth-child(2):before,.dv-card:nth-child(3):before{left:0;width:100%;content:"";position:absolute;display:block}.dv-card:nth-child(3){top:-30px;right:0;z-index:1;background:url(/pug/img/corp/lander/walking-howitworks/walker-3.jpg) center no-repeat;background-size:cover}.dv-card:nth-child(2):before,.dv-card:nth-child(3):before{top:0;height:100%;background:rgba(255,255,255,.75)}.dv-card:nth-child(1):before{bottom:0;z-index:4;height:40%;background:linear-gradient(to bottom,rgba(0,0,0,0) 0,rgba(0,0,0,.5) 100%);border-radius:0 0 6px 6px}.dv-card:nth-child(1) h2{position:absolute;bottom:1rem;left:1rem;z-index:5;background:url(/pug/img/corp/lander/walking-howitworks/star.png) bottom left repeat-x;background-size:13px;margin:0;padding-bottom:.75rem;color:#fff;font-size:17px}#dv-slide-state{margin:1rem auto 2rem;text-align:center}#dv-slide-state li{display:inline-block;height:10px;width:10px;background:#D8D8D8;border-radius:100%}#dv-slide-state li:nth-of-type(n+2){margin-left:8px}#dv-slide-state .active{background:#254747}#dv-cta{padding:0 0 20px}#dv-cta-button{display:block;background:#EC6350;margin:auto auto 10px;padding:.5rem 0;border-radius:4px;color:#fff;cursor:pointer;font-size:20px;line-height:1.5;text-decoration:none}#dv-cta-button:active{background:#B13737;color:rgba(255,255,255,.75)}#dv-cta-button.submitted{position:relative;cursor:progress}#dv-cta-button.submitted:after,#dv-cta-button.submitted:before{position:absolute;content:"";display:block}#dv-cta-button.submitted:before{top:50%;left:50%;z-index:2;height:1rem;width:1rem;margin-top:calc(-.5rem - 1px);margin-left:calc(-.5rem - 1px);border-top:2px solid #fff;border-left:2px solid #fff;border-bottom:2px solid rgba(255,255,255,.5);border-right:2px solid rgba(255,255,255,.5);border-radius:100%;animation:rotate .75s infinite linear}#dv-cta-button.submitted:after{left:0;top:0;z-index:1;height:100%;width:100%;background:#B13737;border-radius:4px}small{display:block;margin:auto;color:#777;font-size:13px}#dv-cta-button,#dv-walker-cards,small{max-width:320px;margin-left:auto;margin-right:auto}#dv-before-submit.hide{opacity:0;animation:fadeOut .25s ease-in-out}#dv-after-submit{display:none;position:relative;left:50%;opacity:0;max-width:320px;margin:auto}#dv-after-submit.show{display:block;left:0;opacity:1;animation:fadeContentIn .25s ease-in-out}#dv-after-submit img{display:block;max-width:200px;margin:auto auto 1.5rem}#dv-after-submit h1{margin:auto;font-size:20px;text-align:left}#dv-after-submit p{max-width:80vw;margin:1.5rem auto auto;font-size:15px;line-height:1.5}#dv-after-submit a{color:#0F748C}@media screen and (max-width:349px){#dv-content,#dv-cta{padding-left:1.5rem;padding-right:1.5rem}#dv-cta{padding-bottom:1.5rem}.dv-map{max-width:80vw}.dv-slide img{max-width:100%}.dv-dog img{max-width:80px}}@media screen and (min-width:350px){#dv-header,header{background:#fff}#dv-header img,header img{max-height:25px}}@media screen and (min-width:350px) and (min-height:700px){#dv-cta{position:absolute;left:0;bottom:0;width:100%}}@media screen and (min-width:350px) and (min-height:800px){body,html{height:100%}#dv-content-wrapper-outer{display:table;width:100%;background:#fff}#dv-content-wrapper{display:table-cell;padding-top:2rem;padding-bottom:2rem;vertical-align:middle}}@media screen and (min-width:702px){html{height:100%;background:#F6F6F1}h1{font-size:27px}#dv-content-wrapper{overflow-x:hidden}}@keyframes fadeIn{0%{display:none;opacity:0}100%{display:block;opacity:1}}@keyframes slideIn{0%{display:none;opacity:0;transform:translate(20px,0)}100%{display:block;opacity:1;transform:translate(0,0)}}@keyframes fadeOut{0%{display:block;opacity:1}100%{display:none;opacity:0}}@keyframes fadeContentIn{0%{display:none;left:50%;opacity:0}100%{display:block;left:0;opacity:1}}@keyframes rotate{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}';

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

// $('head').append('<link rel="stylesheet" href="https://rawgithub.com/jefffis/DogVacay-Comps/master/optimizely/Host%20to%20Walking%20Booker/host-profile-to-walking--hiw--original.css" type="text/css" media="screen" />');
$('head').append('<style>' + originalStyles + '</style>');
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