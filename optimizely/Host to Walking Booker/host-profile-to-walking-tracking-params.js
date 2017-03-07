// for coupon code traffic
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// FB walk code
var fromFBAd = getUrlParameter('sid') === '711' && getUrlParameter('cid') === '002' && getUrlParameter('aid') === '001' ||
getUrlParameter('sid') === '711' && getUrlParameter('cid') === '002' && getUrlParameter('aid') === '002' ||
getUrlParameter('sid') === '711' && getUrlParameter('cid') === '002' && getUrlParameter('aid') === '003' ||
getUrlParameter('sid') === '711' && getUrlParameter('cid') === '002' && getUrlParameter('aid') === '004' ||
getUrlParameter('sid') === '711' && getUrlParameter('cid') === '003' && getUrlParameter('aid') === '001' ||
getUrlParameter('sid') === '711' && getUrlParameter('cid') === '003' && getUrlParameter('aid') === '002' ||
getUrlParameter('sid') === '711' && getUrlParameter('cid') === '002' && getUrlParameter('aid') === '005' ? true : false;

if(fromFBAd) {
    $('h1', '#dv-cta-wrapper').html('Free walk with code <span>FBWALK20</span>');
    $('body').addClass('has-promo-code');
    document.cookie = 'dv_ondemand_walking_promo=fb; expires=; path=/';
    showCta();
}

// email walk code
var fromEmail = getUrlParameter('utm_sid') === '300' && getUrlParameter('utm_cid') === '004' && getUrlParameter('utm_aid') === '1577' ||
getUrlParameter('utm_sid') === '300' && getUrlParameter('utm_cid') === '004' && getUrlParameter('utm_aid') === '1578' ||
getUrlParameter('utm_sid') === '300' && getUrlParameter('utm_cid') === '004' && getUrlParameter('utm_aid') === '1579' ||
getUrlParameter('utm_sid') === '300' && getUrlParameter('utm_cid') === '004' && getUrlParameter('utm_aid') === '1580' ||
getUrlParameter('utm_sid') === '300' && getUrlParameter('utm_cid') === '004' && getUrlParameter('utm_aid') === '1581' ||
getUrlParameter('utm_sid') === '300' && getUrlParameter('utm_cid') === '004' && getUrlParameter('utm_aid') === '1582' ||
getUrlParameter('utm_sid') === '300' && getUrlParameter('utm_cid') === '004' && getUrlParameter('utm_aid') === '1583' ||
getUrlParameter('utm_sid') === '300' && getUrlParameter('utm_cid') === '004' && getUrlParameter('utm_aid') === '1584' ||
getUrlParameter('utm_sid') === '300' && getUrlParameter('utm_cid') === '004' && getUrlParameter('utm_aid') === '1585' ||
getUrlParameter('utm_sid') === '300' && getUrlParameter('utm_cid') === '004' && getUrlParameter('utm_aid') === '1586' ||
getUrlParameter('utm_sid') === '300' && getUrlParameter('utm_cid') === '004' && getUrlParameter('utm_aid') === '1585' ||
getUrlParameter('utm_sid') === '300' && getUrlParameter('utm_cid') === '004' && getUrlParameter('utm_aid') === '1592' ||
getUrlParameter('utm_sid') === '300' && getUrlParameter('utm_cid') === '004' && getUrlParameter('utm_aid') === '1593' ||
getUrlParameter('utm_sid') === '300' && getUrlParameter('utm_cid') === '004' && getUrlParameter('utm_aid') === '1594' ||
getUrlParameter('utm_sid') === '300' && getUrlParameter('utm_cid') === '004' && getUrlParameter('utm_aid') === '1595'  ? true : false;

if(fromEmail) {
    $('h1', '#dv-cta-wrapper').html('Free walk with code <span>DVWALK20</span>');
    $('body').addClass('has-promo-code');
    document.cookie = 'dv_ondemand_walking_promo=email; expires=; path=/';
    showCta();
}

var fromEmail2 = getUrlParameter('utm_sid') === '300' && getUrlParameter('utm_cid') === '004' && getUrlParameter('utm_aid') === '1599' ||
getUrlParameter('utm_sid') === '300' && getUrlParameter('utm_cid') === '004' && getUrlParameter('utm_aid') === '1600' ||
getUrlParameter('utm_sid') === '300' && getUrlParameter('utm_cid') === '004' && getUrlParameter('utm_aid') === '1601'  ? true : false;

if(fromEmail2) {
    $('h1', '#dv-cta-wrapper').html('Free walk with code <span>WALKING20</span>');
    $('body').addClass('has-promo-code');
    document.cookie = 'dv_ondemand_walking_promo=email2; expires=; path=/';
    showCta();
}

// SEM walk code
if(getUrlParameter('sid') === '066' && getUrlParameter('cid') === '001' && getUrlParameter('aid') === '001') {
    $('h1', '#dv-cta-wrapper').html('Free walk with code <span>GWALK20</span>');
    $('body').addClass('has-promo-code');
    document.cookie = 'dv_ondemand_walking_promo=sem; expires=; path=/';
    showCta();
}

function showCta() {
    setTimeout(function() {
        $('#dv-cta').addClass('shown');
    }, 500);
}

function showChat(time) {
  setTimeout(function() {
    (function(o,l,a,r,k,y){if(o.olark)return; r="script";y=l.createElement(r);r=l.getElementsByTagName(r)[0]; y.async=1;y.src="//"+a;r.parentNode.insertBefore(y,r); y=o.olark=function(){k.s.push(arguments);k.t.push(+new Date)}; y.extend=function(i,j){y("extend",i,j)}; y.identify=function(i){y("identify",k.i=i)}; y.configure=function(i,j){y("configure",i,j);k.c[i]=j}; k=y._={s:[],t:[+new Date],c:{},l:a}; })(window,document,"static.olark.com/jsclient/loader.js");
    olark.identify('3883-419-10-1869');
  }, time);
}
if(!DV.Global.isMobile) showChat(5000);

// console.log('this is running v1');