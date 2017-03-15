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
getUrlParameter('sid') === '711' && getUrlParameter('cid') === '002' && getUrlParameter('aid') === '005' ||
getUrlParameter('sid') === '711' && getUrlParameter('cid') === '004' && getUrlParameter('aid') === '001' || 
getUrlParameter('sid') === '711' && getUrlParameter('cid') === '005' && getUrlParameter('aid') === '001' || 
getUrlParameter('sid') === '711' && getUrlParameter('cid') === '006' && getUrlParameter('aid') === '001' || 
getUrlParameter('sid') === '711' && getUrlParameter('cid') === '007' && getUrlParameter('aid') === '001' || 
getUrlParameter('sid') === '711' && getUrlParameter('cid') === '008' && getUrlParameter('aid') === '001' || 
getUrlParameter('sid') === '711' && getUrlParameter('cid') === '009' && getUrlParameter('aid') === '001' || 
getUrlParameter('sid') === '711' && getUrlParameter('cid') === '010' && getUrlParameter('aid') === '001' ? true : false;

if(fromFBAd) {
    // $('h1', '#dv-cta-wrapper').html('Free walk with code <span>FBWALK20</span>');
    // $('body').addClass('has-promo-code');
    document.cookie = 'dv_ondemand_walking_promo=fb; expires=; domain=.dogvacay.com; path=/';
    document.cookie = 'dv_ondemand_walking_promo_code=FBWALK20; expires=; domain=.dogvacay.com; path=/';
    adjustCTAForCoupon();
}

// email walk code
var fromEmail = getUrlParameter('sid') === '300' && getUrlParameter('cid') === '004' && getUrlParameter('aid') === '1577' ||
getUrlParameter('sid') === '300' && getUrlParameter('cid') === '004' && getUrlParameter('aid') === '1578' ||
getUrlParameter('sid') === '300' && getUrlParameter('cid') === '004' && getUrlParameter('aid') === '1579' ||
getUrlParameter('sid') === '300' && getUrlParameter('cid') === '004' && getUrlParameter('aid') === '1580' ||
getUrlParameter('sid') === '300' && getUrlParameter('cid') === '004' && getUrlParameter('aid') === '1581' ||
getUrlParameter('sid') === '300' && getUrlParameter('cid') === '004' && getUrlParameter('aid') === '1582' ||
getUrlParameter('sid') === '300' && getUrlParameter('cid') === '004' && getUrlParameter('aid') === '1583' ||
getUrlParameter('sid') === '300' && getUrlParameter('cid') === '004' && getUrlParameter('aid') === '1584' ||
getUrlParameter('sid') === '300' && getUrlParameter('cid') === '004' && getUrlParameter('aid') === '1585' ||
getUrlParameter('sid') === '300' && getUrlParameter('cid') === '004' && getUrlParameter('aid') === '1586' ||
getUrlParameter('sid') === '300' && getUrlParameter('cid') === '004' && getUrlParameter('aid') === '1585' ||
getUrlParameter('sid') === '300' && getUrlParameter('cid') === '004' && getUrlParameter('aid') === '1592' ||
getUrlParameter('sid') === '300' && getUrlParameter('cid') === '004' && getUrlParameter('aid') === '1593' ||
getUrlParameter('sid') === '300' && getUrlParameter('cid') === '004' && getUrlParameter('aid') === '1594' ||
getUrlParameter('sid') === '300' && getUrlParameter('cid') === '004' && getUrlParameter('aid') === '1595'  ? true : false;

if(fromEmail) {
    // $('h1', '#dv-cta-wrapper').html('Free walk with code <span>DVWALK20</span>');
    // $('body').addClass('has-promo-code');
    document.cookie = 'dv_ondemand_walking_promo=email; expires=; domain=.dogvacay.com; path=/';
    document.cookie = 'dv_ondemand_walking_promo_code=DVWALK20; expires=; domain=.dogvacay.com; path=/';
    adjustCTAForCoupon();
}

var fromEmail2 = getUrlParameter('sid') === '300' && getUrlParameter('cid') === '004' && getUrlParameter('aid') === '1599' ||
getUrlParameter('sid') === '300' && getUrlParameter('cid') === '004' && getUrlParameter('aid') === '1600' ||
getUrlParameter('sid') === '300' && getUrlParameter('cid') === '004' && getUrlParameter('aid') === '1601' ||
getUrlParameter('sid') === '300' && getUrlParameter('cid') === '004' && getUrlParameter('aid') === '1610' ||
getUrlParameter('sid') === '300' && getUrlParameter('cid') === '004' && getUrlParameter('aid') === '1611' ||
getUrlParameter('sid') === '300' && getUrlParameter('cid') === '004' && getUrlParameter('aid') === '1612' ||
getUrlParameter('sid') === '300' && getUrlParameter('cid') === '004' && getUrlParameter('aid') === '1613'  ? true : false;

if(fromEmail2) {
    // $('h1', '#dv-cta-wrapper').html('Free walk with code <span>FIRSTWALK</span>');
    // $('body').addClass('has-promo-code');
    document.cookie = 'dv_ondemand_walking_promo=email2; expires=; domain=.dogvacay.com; path=/';
    document.cookie = 'dv_ondemand_walking_promo_code=FIRSTWALK; expires=; domain=.dogvacay.com; path=/';
    adjustCTAForCoupon();
}

var fromUnbouce = getUrlParameter('ubc') === '310' || getUrlParameter('ubc') === 'G314' || getUrlParameter('ubc') === 'FB314' ? true : false;

if(fromUnbouce) {
    // var code = 'FIRSTWALK';
    // if(getUrlParameter('ubc') === 'G314') code = 'GWALK20';
    // if(getUrlParameter('ubc') === 'FB314') code = 'FBWALK20';
    // $('h1', '#dv-cta-wrapper').html('Free walk with code <span>' + code + '</span>');
    // $('body').addClass('has-promo-code');
    document.cookie = 'dv_ondemand_walking_promo=unbounce; expires=; domain=.dogvacay.com; path=/';
    if(getUrlParameter('ubc') === 'G314') {
        document.cookie = 'dv_ondemand_walking_promo_code=GWALK20; expires=; domain=.dogvacay.com; path=/';
    } else if(getUrlParameter('ubc') === 'FB314') {
        document.cookie = 'dv_ondemand_walking_promo_code=FBWALK20; expires=; domain=.dogvacay.com; path=/';
    } else {
        document.cookie = 'dv_ondemand_walking_promo_code=FIRSTWALK; expires=; domain=.dogvacay.com; path=/';
    }
    adjustCTAForCoupon();
}

// SEM walk code
if(getUrlParameter('sid') === '066' && getUrlParameter('cid') === '001' && getUrlParameter('aid') === '001') {
    // $('h1', '#dv-cta-wrapper').html('Free walk with code <span>GWALK20</span>');
    // $('body').addClass('has-promo-code');
    document.cookie = 'dv_ondemand_walking_promo=sem; expires=; domain=.dogvacay.com; path=/';
    document.cookie = 'dv_ondemand_walking_promo_code=GWALK20; expires=; domain=.dogvacay.com; path=/';
    adjustCTAForCoupon();
}

// new lander function -- 3/10/17
function adjustCTAForCoupon() {
    $('h2', '#dv-hero-content').addClass('has-coupon').html('Free 30-minute walk!');
    $('h2', '#dv-scrolled-div-content').addClass('has-coupon').html('Free 30-minute walk!');
}

// function showChat(time) {
//   setTimeout(function() {
//     (function(o,l,a,r,k,y){if(o.olark)return; r="script";y=l.createElement(r);r=l.getElementsByTagName(r)[0]; y.async=1;y.src="//"+a;r.parentNode.insertBefore(y,r); y=o.olark=function(){k.s.push(arguments);k.t.push(+new Date)}; y.extend=function(i,j){y("extend",i,j)}; y.identify=function(i){y("identify",k.i=i)}; y.configure=function(i,j){y("configure",i,j);k.c[i]=j}; k=y._={s:[],t:[+new Date],c:{},l:a}; })(window,document,"static.olark.com/jsclient/loader.js");
//     olark.identify('3883-419-10-1869');
//   }, time);
// }
// if(!DV.Global.isMobile) showChat(5000);

// console.log('this is running v1');