// tracking stuff
function addPixel(src) {
	var img = new Image();  
	img.setAttribute('visibility', 'hidden');
	img.setAttribute('position', 'absolute');
	img.src = src;
}

// Push optimizely variation data to internal tracking
function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
    }
    return 0;
}

var isPendingDashboard = window.location.pathname === '/account/dashboard' && $('.dv-panel-account-approval-status').length ? true : false,
	isSignUpConf = window.location.pathname === '/signup/host' && window.location.hash === '#/confirmation' ? true : false,
	isProfileConf = window.location.pathname === '/account/profile' && window.location.hash === '#/confirmation' ? true : false,
	confHeaderText = isPendingDashboard ? 'Your profile is being reviewed now.' : 'Great job! Your profile is being reviewed now.',
	confUi = '<div id="dv-application-conf-screen"><div id="dv-conf-message"><h1>' + confHeaderText + '<span>You will hear back from us within 24 hours.</span></h1></div><div class="dv-conf-next-steps"><h2>Almost there—what to do next:</h2><ul><li>Complete <a href="https://dogvacay.com/dvu/course-101" target="_blank" data-bookable-profile-link="dv101">DogVacay University 101</a><small>Only takes 5 minutes</small></li><li>Complete <a href="https://dogvacay.com/dvu/course-102" target="_blank" data-bookable-profile-link="dv102">DogVacay University 102</a><small>Only takes 5 minutes</small></li><li>Submit free <a href="https://support.dogvacay.com/hc/en-us/articles/207407823-What-is-the-Background-Checked-badge-and-how-do-I-earn-it-" target="_blank" data-bookable-profile-link="backgroundCheck">Background Check</a></li></ul></div></div>',
	pendingUi = '<div class="dv-conf-next-steps"><h3>Check Profile Status</h3><p>Visit your <a href="/account/messages">Messages</a> &amp; check for a Concierge message, or check your status on your <a href="/account/profile">Profile</a> anytime.</p></div>',
	styles = '#dv-application-conf-screen{max-width:600px;margin:30px auto}#dv-conf-message{background:#d7efdf;margin:30px auto;padding:1rem;border-radius:4px;text-align:center}#dv-conf-message h1{margin:0;font-size:18px;font-weight:700;line-height:1.2}#dv-conf-message span{display:block;padding-top:5px;font-size:15px;font-weight:400}.dv-conf-next-steps{background:#fff;padding:30px;border-radius:4px;line-height:1.4}.dv-conf-next-steps:nth-of-type(n+2){margin-top:30px}.dv-conf-next-steps h2{margin:0;font-size:20px;font-weight:700;line-height:1.2}.dv-conf-next-steps h3{margin:0;font-size:17px;font-weight:700;line-height:1.2}.dv-conf-next-steps p{margin:15px auto auto;font-size:15px;line-height:1.5}.dv-conf-next-steps ul{margin:20px auto auto;padding:0;font-size:18px}.dv-conf-next-steps li{position:relative;list-style:none;padding-left:1rem}.dv-conf-next-steps li:before{display:block;position:absolute;top:0;left:0;content:"•";font-size:20px}.dv-conf-next-steps li:nth-of-type(n+2){margin-top:20px}.dv-conf-next-steps small{display:block;padding-top:2px;color:#777;font-size:13px;font-weight:400}.dv-conf-next-steps a{text-decoration:underline}';

function removeMain() {
	$('head').append('<style>' + styles + '</style>');
	$('#dv-footer').hide();
	$('.dv-nav:first').hide();
	$('.u-module-spacing-large').hide();
}

function confUpdates(insertElement, isProfileConf) {
	console.log(isProfileConf);
	if(isProfileConf) $('#dv-header').next('div').hide();
	$('.dv-registration').hide();
	$('#dv-header').after(insertElement);
}

function pendUpdates(insertElement, insertPendingElement) {
	$('.page-wrapper').append(confUi);
	$('#dv-application-conf-screen', 'body').append(insertPendingElement);
}

// both versions
if(isSignUpConf || isProfileConf || isPendingDashboard) {
	removeMain();
}
// for conf screen
if(isSignUpConf || isProfileConf) {
	confUpdates(confUi, isProfileConf);
	// addPixel(); add in string for test page_load for confirmation URL
}
// for dashboard
if(isPendingDashboard) {
	pendUpdates(confUi, pendingUi);
	// addPixel(); add in string for test page_load for confirmation URL
}

$('[data-bookable-profile-link]', 'body').click(function() {
	var typeOfLink = $(this).data('bookable-profile-link');
	// addPixel(); add in string for test click even URL with typeOfLink appended to it
});

// for SPA
$(window).bind('popstate', function() {

	var isPendingDashboard = window.location.pathname === '/account/dashboard' && $('.dv-panel-account-approval-status').length ? true : false,
		isSignUpConf = window.location.pathname === '/signup/host' && window.location.hash === '#/confirmation' ? true : false,
		isProfileConf = window.location.pathname === '/account/profile' && window.location.hash === '#/confirmation' ? true : false;

	// console.log(isSignUpConf, isPendingDashboard, isProfileConf, location.pathname, location.hash);

	// both versions
	if(isSignUpConf || isProfileConf || isPendingDashboard) {
		removeMain();
	}
	// for conf screen
	if(isSignUpConf || isProfileConf) {
		confUpdates(confUi, isProfileConf);
		// addPixel(); add in string for test page_load for confirmation URL
	}
	// for dashboard
	if(isPendingDashboard) {
		pendUpdates(confUi, pendingUi);
		// addPixel(); add in string for test page_load for confirmation URL
	}

});

console.log('this is running, v8');