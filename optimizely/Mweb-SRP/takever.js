// tracking stuff
function getCook(cookiename) {
	var cookiestring=RegExp(""+cookiename+"[^;]+").exec(document.cookie);
	return unescape(!!cookiestring ? cookiestring.toString().replace(/^[^=]+./,"") : "");
}
function addPixel(src) {
	var img = new Image();  
	img.setAttribute('visibility', 'hidden');
	img.setAttribute('position', 'absolute');
	img.src = src;
}

addPixel("/pxl/v1/3pd/opt?visitor_id=" + getCook('visitorid')+ "&test_name=2017_03_23_mobile_srp_context_takeover&variant_name=test_context_takeover&page_name=search_results");
// TODO: adjust date & name

var heroImageUrl = "s3.amazonaws.com/dogvacay-media/optimizely/beau.jpg",
	heroSizeWidth = Math.min(3000, Math.round((window.innerWidth * window.devicePixelRatio))),
	heroSizeHeight = Math.min(3000, Math.round((window.innerHeight * window.devicePixelRatio))),
	scaleyUrl = "https://i.scaley.io/",
	markup = '<div id="dv-takeover"><img src="https://static1.dogvacay.com/pug/img/common/logo/logo-white-2x.png"/><div id="dv-takeover-content"><h1>Find your perfect pet sitter.</h1><button type="button">Get Started</button><p>Millions of nights &bull; 60,000 sitters &bull; 8,000 cities</p></div></div>',
	styles = '.dv-hide-content > *{display:none}.dv-hide-content > #dv-takeover{display:block}#dv-takeover{position:fixed;top:0;left:0;width:100%;z-index:10000;background:url(' + scaleyUrl + heroSizeWidth + "x" + heroSizeHeight + "-jpg-q50/" + heroImageUrl + ') no-repeat center;background-size:100%;padding:2rem 1.5rem}#dv-takeover.fade-out{animation:fadeOut .35s ease-in-out;top:-100vh;opacity:0}#dv-takeover:before{display:block;position:absolute;top:0;left:0;z-index:0;height:100%;width:100%;background:rgba(0, 0, 0, 0.45);content:""}#dv-takeover img{display:block;position:relative;z-index:1;max-height:30px;margin:auto}#dv-takeover-content{position:relative;top:50%;left:0;z-index:1;color:white;text-align:center}#dv-takeover-content h1{font-size:35px;line-height:1.2}#dv-takeover-content p{font-size:13px;font-weight:bold}#dv-takeover-content button{display:block;position:relative;width:100%;background:#EC6350;margin:1rem auto;padding:.65rem 0;border:0;border-radius:4px;color:white;cursor:pointer;font-size:20px;font-weight:bold;line-height:1.5;text-align:center;text-decoration:none}#dv-takeover-content button:active{background:#B13737;color:rgba(255, 255, 255, 0.75)}@keyframes fadeOut{0%{opacity:1;top:0;}100%{opacity:0;top:-100vh;}}';

$('head').append('<style>' + styles + '</style>');
if($('#dv-takeover').length) $('#dv-takeover').remove();
$('body').prepend(markup).addClass('dv-hide-content');
$('#dv-takeover').height(window.innerHeight);

var negHeight = -$('#dv-takeover-content').height() / 2;

$('#dv-takeover-content').css('margin-top', negHeight);
$('button', '#dv-takeover-content').click(function() {
	removeTakeover();
});
function removeTakeover() {
	setTimeout(function() {
		$('#dv-takeover').addClass('fade-out');
		$('body').removeClass('dv-hide-content');
	}, 221);
	setTimeout(function() {
		$('#dv-takeover').remove();
	}, 572);
}

// console.log('this is running, v3');