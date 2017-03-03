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
getUrlParameter('sid') === '711' && getUrlParameter('cid') === '003' && getUrlParameter('aid') === '002' ? true : false;

if(fromFBAd) {
    $('h1', '#dv-cta-wrapper').html('Free walk with code <span>FBWALK20</span>');
    $('body').addClass('has-promo-code');
    document.cookie = 'dv_ondemand_walking_promo=fb; expires=; path=/';
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
getUrlParameter('utm_sid') === '300' && getUrlParameter('utm_cid') === '004' && getUrlParameter('utm_aid') === '1586'  ? true : false;

if(fromEmail) {
    $('h1', '#dv-cta-wrapper').html('Free walk with code <span>DVWALK20</span>');
    $('body').addClass('has-promo-code');
    document.cookie = 'dv_ondemand_walking_promo=email; expires=; path=/';
}

// SEM walk code
if(getUrlParameter('sid') === '066' && getUrlParameter('cid') === '001' && getUrlParameter('aid') === '001') {
    $('h1', '#dv-cta-wrapper').html('Free walk with code <span>GWALK20</span>');
    $('body').addClass('has-promo-code');
    document.cookie = 'dv_ondemand_walking_promo=sem; expires=; path=/';
}

// console.log('this is running v1');