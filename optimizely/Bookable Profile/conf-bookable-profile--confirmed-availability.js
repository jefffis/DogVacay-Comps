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

var today = new Date(),
	todaysDate = today.getDay(),
	isThisWeek = todaysDate >= 1 && todaysDate <= 3 ? true : false,
	getNextFriday,
	getNextSunday,
	localStorageName = 'dv-host-has-confirmed-availability';

//
//
//
//
// for CA this week
//
//
//
//
function nextDayWithYear(x){
	var now = new Date();
	now.setDate(now.getDate() + (x+(7-now.getDay())) % 7);
	return now.getFullYear() + '-' + (now.getMonth() + 1 < 10 ? '0' + (now.getMonth() + 1) : now.getMonth() + 1) + '-' + now.getDate();
}
function nextDayWithoutYear(x){
	var now = new Date();
	now.setDate(now.getDate() + (x+(7-now.getDay())) % 7);
	return (now.getMonth() + 1) + '/' + now.getDate();
}

//
//
//
//
// for CA next week
//
//
//
//
function nextWeekWithYear(x){
    var today = new Date(),
    	offsetDay;

	nextweekFriday = new Date(today.getFullYear(), today.getMonth(), today.getDate()+7+x);
    return nextweekFriday.getFullYear() + '-' + (nextweekFriday.getMonth() + 1 < 10 ? '0' + (nextweekFriday.getMonth() + 1) : nextweekFriday.getMonth() + 1) + '-' + nextweekFriday.getDate();
}
function nextWeekWithoutYear(x){
    var today = new Date(),
    	offsetDay;

	nextweekFriday = new Date(today.getFullYear(), today.getMonth(), today.getDate()+7+x);
    return (nextweekFriday.getMonth() + 1) + '/' + nextweekFriday.getDate();
}

switch(todaysDate) {
	case 4:
		getNextFriday = 1; // today is thursday, 5 - 4 = 1 to get Friday
		getNextSunday = 3; // today is thursday, 7 - 4 = 3 to get Sunday
	break;
	case 5:
		getNextFriday = 0; // today is friday, 5 - 5 = 0 to get Friday
		getNextSunday = 2; // today is friday, 7 - 5 = 2 to get Sunday
	break;
	case 6:
		getNextFriday = -1; // today is saturday, 5 - 6 = -1 to get Friday
		getNextSunday = 1; // today is saturday, 7 - 6 = 1 to get Sunday
	break;
	case 0:
		getNextFriday = -2; // today is sunday, 5 - 7 = -2 to get Friday
		getNextSunday = 0; // today is sunday, 7 - 7 = 0 to get Sunday
	break;
	default:
		getNextFriday = 0; // in case any requests come in blank
		getNextSunday = 0; // in case any requests come in blank
	break;
}

var confirmForFriday = isThisWeek ? nextDayWithYear(5) : nextWeekWithYear(getNextFriday),
	confirmForSunday = isThisWeek ? nextDayWithYear(0) : nextWeekWithYear(getNextSunday),
	friday = isThisWeek ? nextDayWithoutYear(5) : nextWeekWithoutYear(getNextFriday),
	sunday = isThisWeek ? nextDayWithoutYear(5) : nextWeekWithoutYear(getNextSunday);

function setConfirmedAvailability(startDateToConfirm, endDateToConfirm, confirmedStatus) {
	// console.log(startDateToConfirm, endDateToConfirm, confirmedStatus);
	setTimeout(function() {
		$.ajax({
			url: '/account/calendar/availability',
			type: 'POST',
			data: {startDate: startDateToConfirm,endDate: endDateToConfirm,confirmed: confirmedStatus},
			async: true,
			timeout: 4000
		}).done(function(data){
			localStorage.setItem(localStorageName, confirmedStatus);
			$('#dv-checkable-buttons', 'body').remove();
			$('#dv-checkable', 'body').addClass('complete');
			if(confirmedStatus) {
				$('#dv-confirm-title', 'body').html('Great; we&rsquo;ll elevate your profile in search!');
				$('#dv-checkable-microcopy', 'body').html('Continue getting this benefit by replying to our weekly texts &amp; keep your <a href="/calendar" target="_blank">Calendar</a> updated.').addClass('show');
			} else {
				$('#dv-confirm-title', 'body').text('Thanks for the heads up!');
				$('#dv-checkable-microcopy', 'body').html('We&rsquo;ll ask you again ' + (isThisWeek ? 'next' : 'the following') + ' Monday. Manage your <a href="/calendar" target="_blank">Calendar</a>').addClass('show');
			}
		});
	}, 750);
}

// // tracking stuff
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

// var isPendingDashboard = window.location.pathname === '/account/dashboard' && $('.dv-panel-account-approval-status').length ? true : false,
var isPendingDashboard = window.location.pathname === '/account/dashboard' ? true : false, // REVERT BACK TO ABOVE FOR LIVE
	isSignUpConf = window.location.pathname === '/signup/host' && window.location.hash === '#/confirmation' ? true : false,
	isProfileConf = window.location.pathname === '/account/profile' && window.location.hash === '#/confirmation' ? true : false,
	confHeaderText = isPendingDashboard ? 'Your profile is being reviewed now.' : 'Great job! Your profile is being reviewed now.',
	confUi = '<div id="dv-application-conf-screen"><div id="dv-conf-message"><h1>' + confHeaderText + '<span>You will hear back from us within 24 hours.</span></h1></div><div class="dv-conf-next-steps"><h2>Set yourself up for success. Here&rsquo;s what to do next:</h2></div></div>',
	pendingUi = '<div class="dv-conf-next-steps"><h3>Check Profile Status</h3><p>Visit your <a href="/account/messages">Messages</a> &amp; check for a Concierge message, or check your status on your <a href="/account/profile">Profile</a> anytime.</p></div>',
	nextStepsAfterConfirm = '<ul><li>Complete <a href="https://dogvacay.com/dvu/course-101" target="_blank" data-bookable-profile-link="dv101">DogVacay University 101</a><small>Only takes 5 minutes</small></li><li>Complete <a href="https://dogvacay.com/dvu/course-102" target="_blank" data-bookable-profile-link="dv102">DogVacay University 102</a><small>Only takes 5 minutes</small></li><li>Submit free <a href="https://support.dogvacay.com/hc/en-us/articles/207407823-What-is-the-Background-Checked-badge-and-how-do-I-earn-it-" target="_blank" data-bookable-profile-link="backgroundCheck">Background Check</a></li></ul>',
	nextStepsBeforeConfirm = '<ul><li id="dv-checkable"><span id="dv-confirm-title">Confirm your availability ' + (isThisWeek ? 'this' : 'next') + ' weekend (Fri, ' + friday + ' &ndash; Sun, ' + sunday + ')</span><div id="dv-checkable-buttons"><button type="button" data-available>I&rsquo;m available</button><button type="button">Unavailable</button></div><small id="dv-checkable-microcopy"></small></li><li>Complete <a href="https://dogvacay.com/dvu/course-101" target="_blank" data-bookable-profile-link="dv101">DogVacay University 101</a> and <a href="https://dogvacay.com/dvu/course-102" target="_blank" data-bookable-profile-link="dv102">102</a><small>Only takes 5 minutes</small></li><!--<li>Complete <a href="https://dogvacay.com/dvu/course-102" target="_blank" data-bookable-profile-link="dv102">DogVacay University 102</a><small>Only takes 5 minutes</small></li>--><li>Submit free <a href="https://support.dogvacay.com/hc/en-us/articles/207407823-What-is-the-Background-Checked-badge-and-how-do-I-earn-it-" target="_blank" data-bookable-profile-link="backgroundCheck">Background Check</a></li></ul>',
	styles = '#dv-application-conf-screen{max-width:600px;margin:30px auto}#dv-conf-message{background:#d7efdf;margin:30px auto;padding:1rem;border-radius:4px;text-align:center}#dv-conf-message h1{margin:0;font-size:18px;font-weight:700;line-height:1.2}#dv-conf-message span{display:block;padding-top:5px;font-size:15px;font-weight:400}.dv-conf-next-steps{background:#fff;padding:30px;border-radius:4px;line-height:1.4}.dv-conf-next-steps:nth-of-type(n+2){margin-top:30px}.dv-conf-next-steps h2{margin:0;font-size:20px;font-weight:700;line-height:1.2}.dv-conf-next-steps h3{margin:0;font-size:17px;font-weight:700;line-height:1.2}.dv-conf-next-steps p{margin:15px auto auto;font-size:15px;line-height:1.5}.dv-conf-next-steps ul{margin:20px auto auto;padding:0;font-size:18px}.dv-conf-next-steps li{position:relative;list-style:none;padding-left:1rem}.dv-conf-next-steps li:before{display:block;position:absolute;top:0;left:0;content:"•";font-size:20px}.dv-conf-next-steps li:nth-of-type(n+2){margin-top:20px}.dv-conf-next-steps small{display:block;padding-top:2px;color:#777;font-size:13px;font-weight:400}.dv-conf-next-steps a{text-decoration:underline}',
	caStyles = '#dv-checkable.complete{display:block;margin:0 -30px;padding:0 45px 20px;border-bottom:1px solid #E8E5E0}#dv-checkable.complete:before{top:2px;left:20px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAaCAMAAADsW95KAAABLFBMVEUAAAD///+AgIBVVVVAgIArVVVAYGA5VVUuXV07Tk4wUFAtS0srVVU2UVEzTU0uUVEsTk4xTk4uUlIxSlItS0ssUFArTk4uTk4tSk8rSlAvTk4tS0srTEwuS0srS04uTEwtS0srS0srSk4tTEwtSk0tSU0rTEwsSk0rS0sqTEwsS04rSk0rS0srS00rSUwsSk0rSkwsS00rS00rSUssSkwqSUsrSkwrSkwrS0wrSkwqSUwrSkwrSkwqSksqSkwqSksrSUwqSksrSkwqSkwrSUwrSksrSkwrSksqSUwqSUwrSksqSUwrSUwrSUwrSUsrSksqSksrSUwqSUwrSksrSkwrSUwqSkwrSkwqSUsqSkwrSUwrSUsqSUsqSUsrSkwrSUsrSkwqSkwqSUsqSUuERizbAAAAY3RSTlMAAQIDBAYICQsNEBESExQWFxocHyIjJCctMDEzNj1BQ0RHSEpPUFRWWFtcZGZqbG5ye4KEhouNlJqbnaGoqa+wsru9wsPFyczNztLU2Nvc3eDi5efo6evv8fLz9Pf4+fr8/f6GlcwcAAAA80lEQVR4AYXT5VpCQRjE8UEEBTvE7g5EERW7u8EOBeb+70EB53DQs8vv4/v899M+A7ux9IoPFc1myM0AKlhk3l4INlWrLDqph1lgizINo9A+ZaMaJs1nlGUfTDquFeUWYNRzr+prBo7RRC3cBl9UvQ3DEc3yuBElk5+qHvvgiPPHZRtkPqvqthPiT7Ig1YWiJcp5CxwxHZ/6C6/WKAdhlETudH4fB4I7lO0g3Fov+CszFz6kJP0oV3dESVHi+Kdml39ko/DgX2eZjwl4S9DleQAmsRwl3Q2zKf3QVTtshl6Zd9oEu94H7cMucqO12TWM+ODtG8sYcubjM866AAAAAElFTkSuQmCC) no-repeat center;background-size:100%;height:18px;width:18px;content:""}#dv-checkable-buttons{padding-top:5px}#dv-checkable-buttons button{position:relative;background:white;outline:none;padding:.2rem .75rem .25rem;border:1px solid #0f748c;border-radius:4px;color:#0f748c;cursor:pointer;font-size:16px;font-weight:bold;font-family:inherit}#dv-checkable-buttons button:active,#dv-checkable-buttons button:focus{background:#0f748c;color:white}#dv-checkable-buttons button:nth-of-type(2){margin-left:20px}#dv-checkable-microcopy{display:none;font-size:16px}#dv-checkable-microcopy.show{display:block}#dv-checkable-buttons button.selected:before{display:block;position:absolute;top:calc(50% + 1px);left:50%;z-index:2;height:1rem;width:1rem;margin-top:calc(-.5rem - 1px);margin-left:calc(-.5rem - 1px);border-top:2px solid white;border-left:2px solid white;border-bottom:2px solid rgba(255, 255, 255, 0.5);border-right:2px solid rgba(255, 255, 255, 0.5);border-radius:100%;content:"";animation:rotate .75s infinite linear}#dv-checkable-buttons button.selected:after{display:block;position:absolute;left:0;top:0;z-index:1;height:100%;width:100%;background:#0f748c;margin-top:0;border-radius:2px;content:""}#dv-checkable-buttons button:disabled{opacity:.25;cursor:default;}#dv-checkable-buttons button.selected:disabled{opacity:1}@keyframes rotate{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}',
	hasConfirmedAvailability = localStorage.getItem(localStorageName) ? true : false;

function removeMain() {
	$('head').append('<style>' + styles + caStyles + '</style>');
	$('#dv-footer').hide();
	$('.dv-nav:first').hide();
	$('.u-module-spacing-large').hide();
}

function confUpdates(insertElement, isProfileConf) {
	if(isProfileConf) $('#dv-header').next('div').hide();
	$('.dv-registration').hide();
	$('#dv-header').after(insertElement);
}

function pendUpdates(insertElement, insertPendingElement) {
	$('.page-wrapper').append(confUi);
	$('#dv-application-conf-screen', 'body').append(insertPendingElement);
	$('.dv-conf-next-steps:first').append(hasConfirmedAvailability ? nextStepsAfterConfirm : nextStepsBeforeConfirm);
}

// both versions
if(isSignUpConf || isProfileConf || isPendingDashboard) {
	removeMain();
}
// for conf screen
if(isSignUpConf || isProfileConf) {
	confUpdates(confUi, isProfileConf);
	addPixel('/pxl/v1/3pd/opt?visitor_id=' + readCookie('visitorid') + '&test_name=2017_03_17_host_signup_confirmation_pending_ca&variant_name=test_host_signup_confirmation_ca&page_name=signup_host_confirmation');
}
// for dashboard
if(isPendingDashboard) {
	pendUpdates(confUi, pendingUi);
	addPixel('/pxl/v1/3pd/opt?visitor_id=' + readCookie('visitorid') + '&test_name=2017_03_17_host_signup_confirmation_pending_ca&variant_name=test_host_signup_pending_ca&page_name=dashboard_host');
}

$('[data-bookable-profile-link]', 'body').click(function() {
	var typeOfLink = $(this).data('bookable-profile-link');
    addPixel('/pxl/v1?visitor_id=' + readCookie('visitorid') + '&event_type=click&event_data=name|bookable_profile_attribute_opt&type|link&page_name=dashboard_host&value=' + $(this).attr("href"));
});

$('button', '#dv-checkable-buttons').click(function() {
	var isAvailable = $(this).data('available') !== undefined ? true : false,
		isAvailableTracking  = isAvailable ? 'available' : 'unavailable',
		isConfOrDashboard = isSignUpConf || isProfileConf ? 'signup_host_confirmation' : 'dashboard_host';

	$(this).addClass('selected').parent().find('button').prop('disabled', true);
	setConfirmedAvailability(confirmForFriday, confirmForSunday, isAvailable);
	addPixel('/pxl/v1?event_type=user_selection&event_data=name|confirmed_availability_opt;type|button;value|' + isAvailableTracking + ';start_date|' + confirmForFriday + ';end_date|' + confirmForSunday + '&page_name=' + isConfOrDashboard);
});

// for SPA
$(window).bind('popstate', function() {

	var isPendingDashboard = window.location.pathname === '/account/dashboard' && $('.dv-panel-account-approval-status').length ? true : false,
		isSignUpConf = window.location.pathname === '/signup/host' && window.location.hash === '#/confirmation' ? true : false,
		isProfileConf = window.location.pathname === '/account/profile' && window.location.hash === '#/confirmation' ? true : false;

	// both versions
	if(isSignUpConf || isProfileConf || isPendingDashboard) {
		removeMain();
	}
	// for conf screen
	if(isSignUpConf || isProfileConf) {
		confUpdates(confUi, isProfileConf);
		addPixel('/pxl/v1/3pd/opt?visitor_id=' + readCookie('visitorid') + '&test_name=2017_03_17_host_signup_confirmation_pending_ca&variant_name=test_host_signup_confirmation_ca&page_name=signup_host_confirmation');
	}
	// for dashboard
	if(isPendingDashboard) {
		pendUpdates(confUi, pendingUi);
		addPixel('/pxl/v1/3pd/opt?visitor_id=' + readCookie('visitorid') + '&test_name=2017_03_17_host_signup_confirmation_pending_ca&variant_name=test_host_signup_pending_ca&page_name=dashboard_host');
	}

});

console.log('this is running, v4');