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
    document.cookie = 'dv_ondemand_walking_promo=fb; expires=; domain=.dogvacay.com; path=/';
    document.cookie = 'dv_ondemand_walking_promo_code=FBWALK20; expires=; domain=.dogvacay.com; path=/';
    adjustCTAForCoupon(true);
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
    document.cookie = 'dv_ondemand_walking_promo=email; expires=; domain=.dogvacay.com; path=/';
    document.cookie = 'dv_ondemand_walking_promo_code=DVWALK20; expires=; domain=.dogvacay.com; path=/';
    adjustCTAForCoupon(true);
}

var fromEmail2 = getUrlParameter('sid') === '300' && getUrlParameter('cid') === '004' && getUrlParameter('aid') === '1599' ||
getUrlParameter('sid') === '300' && getUrlParameter('cid') === '004' && getUrlParameter('aid') === '1600' ||
getUrlParameter('sid') === '300' && getUrlParameter('cid') === '004' && getUrlParameter('aid') === '1601' ||
getUrlParameter('sid') === '300' && getUrlParameter('cid') === '004' && getUrlParameter('aid') === '1610' ||
getUrlParameter('sid') === '300' && getUrlParameter('cid') === '004' && getUrlParameter('aid') === '1611' ||
getUrlParameter('sid') === '300' && getUrlParameter('cid') === '004' && getUrlParameter('aid') === '1612' ||
getUrlParameter('sid') === '300' && getUrlParameter('cid') === '004' && getUrlParameter('aid') === '1613' ||
getUrlParameter('sid') === '300' && getUrlParameter('cid') === '004' && getUrlParameter('aid') === '1628' ? true : false;

if(fromEmail2) {
    document.cookie = 'dv_ondemand_walking_promo=email2; expires=; domain=.dogvacay.com; path=/';
    if(getUrlParameter('aid') === '1628') {
        document.cookie = 'dv_ondemand_walking_promo_code=DVSPRING; expires=; domain=.dogvacay.com; path=/';
        adjustCTAForCoupon(false, '50%'); // if the discount is not 100%
    } else {
        document.cookie = 'dv_ondemand_walking_promo_code=FIRSTWALK; expires=; domain=.dogvacay.com; path=/';
        adjustCTAForCoupon(true);
    }
}

var fromUnbouce = getUrlParameter('ubc') === '310' || 
getUrlParameter('ubc') === 'G314' || 
getUrlParameter('ubc') === 'FB314' ||
getUrlParameter('ubc') === 'E317' ? true : false;

if(fromUnbouce) {
    document.cookie = 'dv_ondemand_walking_promo=unbounce; expires=; domain=.dogvacay.com; path=/';
    if(getUrlParameter('ubc') === 'G314') {
        document.cookie = 'dv_ondemand_walking_promo_code=GWALK20; expires=; domain=.dogvacay.com; path=/';
    } else if(getUrlParameter('ubc') === 'FB314') {
        document.cookie = 'dv_ondemand_walking_promo_code=FBWALK20; expires=; domain=.dogvacay.com; path=/';
    } else {
        document.cookie = 'dv_ondemand_walking_promo_code=FIRSTWALK; expires=; domain=.dogvacay.com; path=/';
    }
    adjustCTAForCoupon(true);
}

// SEM walk code
if(getUrlParameter('sid') === '066' && getUrlParameter('cid') === '001' && getUrlParameter('aid') === '001') {
    document.cookie = 'dv_ondemand_walking_promo=sem; expires=; domain=.dogvacay.com; path=/';
    document.cookie = 'dv_ondemand_walking_promo_code=GWALK20; expires=; domain=.dogvacay.com; path=/';
    adjustCTAForCoupon(true);
}

// SMS walk code
if(getUrlParameter('utm_medium') === 'sms1') {
    document.cookie = 'dv_ondemand_walking_promo=sms; expires=; domain=.dogvacay.com; path=/';
    document.cookie = 'dv_ondemand_walking_promo_code=FIRSTWALK; expires=; domain=.dogvacay.com; path=/';
    adjustCTAForCoupon(true);
}

// new lander function -- 3/10/17
function adjustCTAForCoupon(isFullPriceDiscount, discountPercent) {
    if(isFullPriceDiscount) {
        $('h2', '#dv-hero-content').addClass('has-coupon').html('Free 30-minute walk!');
        $('h2', '#dv-scrolled-div-content').addClass('has-coupon').html('Free 30-minute walk!');
    } else {
        $('h2', '#dv-hero-content').addClass('has-coupon').html(discountPercent + ' off your next walk');
        $('h2', '#dv-scrolled-div-content').addClass('has-coupon').html(discountPercent + ' off your next walk');
    }
}