var containerWrapper = '<div id="content-wrapper-outer"></div>',
	// container = '<div id="content-wrapper"></div>',
	contentStart = '<div id="content"><div id="before-submit"><h1>We hand-pick the perfect dog walker for you &amp; your pup.</h1><div id="chat-content"><div class="chat cf"><img src="https://static1.dogvacay.com/pug/img/corp/lander/concierge/concierge.jpg"><div class="chat-content">Hi Jan! What type of walk are you looking for?</div></div><div class="chat cf"><img src="https://static1.dogvacay.com/pug/img/corp/lander/concierge/guest.jpg"><div class="chat-content">Heya! Pickles has lots of energy. I’d love to get a long walk to tire her out.</div></div><div class="chat cf"><img src="https://static1.dogvacay.com/pug/img/corp/lander/concierge/concierge.jpg"><div class="chat-content"><span class="chat-thumbs-up"></span>&nbsp;&nbsp;Finding a walker now</div></div></div><div id="cta">',
	contentEnd = '</div></div><div id="after-submit"><img src="https://static1.dogvacay.com/pug/react-dist/dv-app-walking/dist/images/dog-running.gif"><h1>Great, we’re on it!</h1><p>A DogVacay concierge will contact you shortly to finalize your walk.</p><p>In the meantime, <a href="https://dogvacay.com/blog/">read our blog</a>.</p></div></div>',
	styles = '#cta .dv-button,body{font-family:"Helvetica Neue",Arial,sans-serif!important}.dv-profile-booking-cta:nth-of-type(n+2),.dv-selected-service-rate{display:none}.dv-header__content{text-align:center}.dv-header__left-content{float:none;width:100%;padding:0}.dv-site-banner{margin:auto}.dv-logo__img{height:25px;background-size:contain}#before-submit{position:relative!important}#chat-content{margin-bottom:70px!important}#cta{position:absolute!important;z-index:2!important;left:-50px!important;width:calc(100% + 100px)!important;margin-bottom:-10px!important;padding:40px 50px 10px!important}#cta:before{top:-41px!important;height:40px!important;background:linear-gradient(to bottom,rgba(0,0,0,0) 0,rgba(0,0,0,.075) 100%)!important}#cta.fade-in{bottom:-90px!important}#cta .dv-button{padding:.5rem 0!important;font-size:20px!important;line-height:1.5!important;transition:none!important}#cta .dv-input-date__picker{padding:.75rem;border:1px solid #ccc;box-shadow:0 1px 2px #efefef inset;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;font-size:16px}#cta .dv-input-date .dv-icon{left:auto;right:1rem;margin:.85rem 0 0 .75rem;color:#999}#before-submit.hidden:before{display:block;position:absolute;top:0;left:0;z-index:1;height:100%;width:100%;background:#fff;opacity:.5;content:""}#cta .dv-booking-section{margin-bottom:15px}#cta .dv-free-cancellation{display:block;padding-top:10px;color:#777;font-size:13px;line-height:1;text-align:left}#cta h1{margin:0 0 15px;font-size:24px;text-align:left}#cta h1 span{color:#777;font-size:17px;font-weight:400}';

$('.dv-multi-dates').show();
$('.dv-input-date--conjoined').remove();
$('.dv-booking-service').hide();

// var dupedCTAModule = $('.dv-profile-booking-cta:first').detach();

// header
$('.dv-header__right-content').remove();
$('.dv-nav--primary').remove();

// columns
$('#profile-left-top-column').remove();
$('#profile-left-bottom-column').remove();

// right col removals
// $('#profile-right-sidebar').remove();
$('.dv-profile-bookmark').remove();
$('.dv-profile-host-photo').remove();
$('.dv-profile-booking__name').remove();
$('.dv-profile-booking__online-now').remove();
$('.dv-profile-booking__address').remove();
$('.dv-profile-messaging-cta ').remove();
$('.dv-profile-search-link').remove();
$('.dv-profile-booking-notes').remove();
$('.dv-profile-booking').removeAttr('style');
$('#profile-calendar').remove();
$('.dv-profile-credentials').remove();
$('.dv-profile-shield').remove();
$('.dv-profile__service-list-link').remove();
// $('.').remove();
// $('.').remove();

// footer
$('.dv-profile-footer').remove();
$('#dv-footer').remove();

$('head').append('<style>' + styles + '</style>');
$('head').append('<link rel="stylesheet" href="https://static1.dogvacay.com/pug/css/corp/lander/concierge.css?v=5a3b341" type="text/css" media="screen" />');
// $('.dv-profile-booking-module__content').prepend('<div id="content-wrapper-outer">');
// $('.dv-profile-booking-module__content').append('</div>');
// $('#dv-header').after(containerWrapper);
$('.dv-profile-booking').attr('id', 'content-wrapper-outer');
$('.dv-profile-booking__full').attr('id', 'content-wrapper');
// $('#content-wrapper-outer', 'body').prepend('<div id="content-wrapper">');
// $('#content-wrapper-outer', 'body').append('</div>');
// $('#content-wrapper', 'body').append(contentStart + contentEnd);
// $('#cta').append(dupedCTAModule);
// $('.dv-booking-button').find('span[data-button-text]').text('Book my walk now');
// $('.dv-selected-service-rate__price').text('$20');
// $('.dv-selected-service-rate__unit').html('&nbsp;per 30-min walk');
// $('#cta', 'body').prepend('<h1>$20 <span>for a 30-minute walk</span></h1>');

// $('body').append('<script>function showCTA(a,b,c){setTimeout(function(){$("body").find(a).addClass("fade-in")},b)}function hideChatUI(){setTimeout(function(){$("#before-submit","body").addClass("hidden")},4700)}function showChatUi(a){setTimeout(function(){$(".chat","#chat-content").each(function(a){showCTA($(this),1500*a,!1)})},750)}showCTA($("#cta"),4500,!0),showChatUi($(".chat")),hideChatUI(),$(".chat","#chat-content").each(function(a){var b=$(this);setTimeout(function(){b.className+=" fade-in"},1500*a)});</script>');


function showCTA(el, time, ctx) {
  setTimeout(function() {
    $('body').find(el).addClass('fade-in');
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


// $('.dv-profile').append(dupedCTAModule);


// $('.dv-profile-messaging-cta').remove();
// $('#profile-calendar').remove();
// $('.dv-profile-credentials').remove();
// $('.dv-profile-shield').remove();
// $('.dv-profile-booking-notes').remove();
// $('.dv-profile-host-photo').remove();
// $('.dv-profile-bookmark').remove();
// $('.dv-profile-booking__name').remove();
// $('.dv-profile-booking__address').remove();
// $('.dv-profile-booking__review').remove();
// $('.dv-profile-booking__repeat-guest').remove();
// $('.dv-profile__service-list-link').remove();
// $('.dv-profile-booking').removeAttr('style');
// $('.dv-booking-button').find('span[data-button-text]').text('Book my walk now');