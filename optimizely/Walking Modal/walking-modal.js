var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

var walkingModalHtmlTabletUp = '<div id="dv-walking-modal-wrapper"><div id="dv-walking-modal"><div id="dv-walking-modal-left"></div><div id="dv-walking-modal-right"></div></div></div>',
	walkingModalHtmlMobile = '<div id="dv-walking-modal"><div id="dv-walking-modal-left"></div></div>',
	walkingModalIntroContent = '<h1><strong>NEW!</strong> Dog Walking, when you need it.</h1><p>More flexibility in your life, more fun for your dog.</p><div id="dv-cta"><a href="###" id="dv-cta-button">Request my FREE walk</a><small>Pick the date &amp; time, then we match you with a certified walker and take care of the rest.</small></div>',
	walkingHowItWorksContent = '<div id="dv-content"><div class="dv-slide" id="slide-1"><h1>Get matched with a certified walker.</h1><div id="dv-walker-cards"><div class="dv-card"><h2>Tanya Z.</h2></div><div class="dv-card"></div><div class="dv-card"></div></div><p>We&rsquo;ll find you the perfect one</p></div><div class="dv-slide" id="slide-2"><h1>Our free lock box lets your walker in.</h1><img src="https://static1.dogvacay.com/pug/img/corp/lander/walking-howitworks/lock.jpg" alt="Free, secure lock box"><p>Simple, secure access</p></div><div class="dv-slide" id="slide-3"><h1>Get updates on your pup &amp; the walk.</h1><div class="dv-map"><img src="https://static1.dogvacay.com/pug/img/corp/lander/walking-howitworks/my-walk-map-sm.png" alt="See your dogs walk"><div class="dv-dog"><img src="/pug/img/corp/lander/walking-howitworks/dog.jpg"></div></div><p>Stay in the know</p></div></div></div><ul id="dv-slide-state"><li class="active"></li><li></li><li></li></ul>',
	styles = '#dv-cta-button,#dv-slide-state,.dv-slide p{text-align:center}#dv-cta-button,#dv-walking-modal-left>h1{font-weight:700}.is-not-mobile #dv-content,.no-overflow{overflow:hidden}.no-overflow{height:100%;width:100%}#dv-walking-modal-wrapper{position:fixed;top:0;left:0;z-index:1000000;height:100%;width:100%;background:rgba(0,0,0,.5)}#dv-walking-modal{position:absolute;bottom:-100%;left:50%;z-index:1000001;width:950px;background:#fff;margin-left:-475px;padding:5rem 5rem 3rem;border-radius:4px 4px 0 0;box-shadow:0 -1px 2px rgba(0,0,0,.1),0 -2px 3px rgba(0,0,0,.05);transition:bottom .25s ease-in-out}.dv-card:nth-child(1),.dv-dog img{box-shadow:0 0 0 2px #fff,0 2px 3px rgba(0,0,0,.15)}#dv-walking-modal.shown{bottom:0}#dv-walking-modal-left>p{line-height:1.3}#dv-walking-modal-left strong{color:#69BBC0}#dv-cta-button{display:block;max-width:260px;background:#EC6350;margin:25px 0 10px;padding:.5rem 0;border-radius:4px;color:#fff;cursor:pointer;font-size:20px;line-height:1.5;text-decoration:none}#dv-cta-button:active{background:#B13737;color:rgba(255,255,255,.75)}#dv-cta-button.submitted{position:relative;cursor:progress}#dv-cta-button.submitted:after,#dv-cta-button.submitted:before{position:absolute;content:"";display:block}#dv-cta-button.submitted:before{top:50%;left:50%;z-index:2;height:1rem;width:1rem;margin-top:calc(-.5rem - 1px);margin-left:calc(-.5rem - 1px);border-top:2px solid #fff;border-left:2px solid #fff;border-bottom:2px solid rgba(255,255,255,.5);border-right:2px solid rgba(255,255,255,.5);border-radius:100%;animation:rotate .75s infinite linear}#dv-cta-button.submitted:after{left:0;top:0;z-index:1;height:100%;width:100%;background:#B13737;border-radius:4px}#dv-content,.dv-slide{position:relative}#dv-cta small{display:block;max-width:300px;margin:0;color:#777;font-size:13px;line-height:1.2}.dv-slide{top:0;left:0;min-height:300px;transition:left .25s ease-in-out}.dv-slide:nth-child(2),.dv-slide:nth-child(3){display:none;position:absolute;top:0;width:100%;opacity:0}.dv-slide:nth-child(1){z-index:3}.dv-slide:nth-child(2){z-index:2}.dv-slide:nth-child(3){z-index:1}#dv-content.pos-2 .dv-slide:nth-child(1){left:calc(-100% - 20vw)}#dv-content.pos-2 .dv-slide:nth-child(2){display:block;opacity:1;animation:fadeIn .25s ease-in-out}#dv-content.pos-2-out .dv-slide:nth-child(2){display:block;opacity:1;animation:fadeOut .25s ease-in-out}#dv-content.pos-3 .dv-slide:nth-child(1),#dv-content.pos-3 .dv-slide:nth-child(2){display:block;left:calc(-100% - 20vw);opacity:1}#dv-content.pos-3 .dv-slide:nth-child(3){display:block;opacity:1;animation:fadeIn .25s ease-in-out}#dv-content.pos-3-out .dv-slide:nth-child(3){display:block;opacity:1;animation:fadeOut .25s ease-in-out}.dv-slide img{display:block;max-height:175px;margin:25px auto 1.5rem;border-radius:6px}.dv-map{position:relative;max-width:280px;margin:auto}.dv-map img{margin:28px auto}.dv-dog img{position:absolute;top:-15px;right:-8px;max-width:80px;margin:auto}#dv-walker-cards{position:relative;height:150px;max-width:300px;margin:35px auto 15px}.dv-card{display:none;opacity:0;position:absolute;height:150px;width:250px;background:url(/pug/img/corp/lander/walking-howitworks/walker.jpg) center no-repeat #2A494B;background-size:cover;border-radius:6px;transform:translate(20px,0)}.dv-card:nth-child(1){z-index:3}.dv-card.loaded{display:block;opacity:1;transform:translate(0,0);animation:slideIn .25s ease-in-out}.dv-card:nth-child(2){top:-15px;left:50%;z-index:2;background:url(/pug/img/corp/lander/walking-howitworks/walker-2.jpg) center no-repeat #2A494B;background-size:cover;margin-left:-125px;box-shadow:0 0 0 2px #fff}.dv-card:nth-child(1):before,.dv-card:nth-child(2):before,.dv-card:nth-child(3):before{display:block;left:0;width:100%;content:"";position:absolute}.dv-card:nth-child(3){top:-30px;right:0;z-index:1;background:url(/pug/img/corp/lander/walking-howitworks/walker-3.jpg) center no-repeat #2A494B;background-size:cover}.dv-card:nth-child(2):before,.dv-card:nth-child(3):before{top:0;height:100%;background:rgba(255,255,255,.75)}.dv-card:nth-child(1):before{bottom:0;z-index:4;height:40%;background:linear-gradient(to bottom,rgba(0,0,0,0) 0,rgba(0,0,0,.5) 100%);border-radius:0 0 6px 6px}.dv-card:nth-child(1) h2{position:absolute;bottom:1rem;left:1rem;z-index:5;background:url(/pug/img/corp/lander/walking-howitworks/star.png) bottom left repeat-x;background-size:13px;margin:0;padding-bottom:.75rem;color:#fff;font-size:17px}#dv-slide-state{margin:1rem auto 2rem}#dv-slide-state li{display:inline-block;height:10px;width:10px;background:#D8D8D8;border-radius:100%}#dv-slide-state li:nth-of-type(n+2){margin-left:8px}#dv-slide-state .active{background:#254747}.is-not-mobile #dv-walking-modal-left{max-width:370px;float:left}.is-not-mobile #dv-walking-modal-right{max-width:300px;float:right;padding-top:1rem;text-align:center}.is-not-mobile #dv-walking-modal-left h1{margin:50px 0 25px;font-size:40px;line-height:41px}.is-not-mobile #dv-walking-modal-right h1{font-size:24px;font-weight:700;line-height:1.2}.is-not-mobile #dv-walking-modal-left p{font-size:24px}@keyframes fadeIn{0%{display:none;opacity:0}100%{display:block;opacity:1}}@keyframes slideIn{0%{display:none;opacity:0;transform:translate(20px,0)}100%{display:block;opacity:1;transform:translate(0,0)}}@keyframes fadeOut{0%{display:block;opacity:1}100%{display:none;opacity:0}}@keyframes fadeContentIn{0%{display:none;left:50%;opacity:0}100%{display:block;left:0;opacity:1}}@keyframes rotate{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}';

function insertModalWrapper(isMobile) {
	var deviceTypeClass = isMobile ? 'is-mobile' : 'is-not-mobile';
	$('head').append('<style>' + styles + '</style>');
	if(isMobile) {
		$('body').append(walkingModalHtmlMobile);
	}else{
		$('body').append(walkingModalHtmlTabletUp);
		$('#dv-walking-modal-right').html(walkingHowItWorksContent);
	}
	$('body').addClass('no-overflow ' + deviceTypeClass);
	$('#dv-walking-modal-left').html(walkingModalIntroContent);
	setTimeout(function() {
		$('#dv-walking-modal').addClass('shown');
	}, 0);
}

insertModalWrapper(isMobile.any());

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

setTimeout(function(){
	Array.prototype.forEach.call(cards, function(el, e){
	  loadCards(el, 750 * e);
	});
	autoScroll(pos);
}, 500);

// function showChat(time) {
//   setTimeout(function() {
//     (function(o,l,a,r,k,y){if(o.olark)return; r="script";y=l.createElement(r);r=l.getElementsByTagName(r)[0]; y.async=1;y.src="//"+a;r.parentNode.insertBefore(y,r); y=o.olark=function(){k.s.push(arguments);k.t.push(+new Date)}; y.extend=function(i,j){y("extend",i,j)}; y.identify=function(i){y("identify",k.i=i)}; y.configure=function(i,j){y("configure",i,j);k.c[i]=j}; k=y._={s:[],t:[+new Date],c:{},l:a}; })(window,document,"static.olark.com/jsclient/loader.js");
//     olark.identify('3883-419-10-1869');
//   }, time);
// }

// showChat(5000);






