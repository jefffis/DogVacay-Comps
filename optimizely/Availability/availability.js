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

addPixel('/pxl/v1?event_type=pageview&event_data=pageload|1&page_name=signup_host_about_you');
addPixel('/pxl/v1/3pd/opt?visitor_id=' + readCookie('visitorid') + '&test_name=2017_03_17_host_signup_weekday_availability&variant_name=test_host_signup_weekday_availability&page_name=signup_host_about_you');

var markup = '<div id="dv-availability"> <h3>Which days of the week are you typically available?</h3> <div id="dv-days-of-week-micro"> <h4>Why do we ask?</h4> <p>Sitters who specifically choose days of the week are 160% more likely to get a booking.</p></div></div>',
	checkMarkup = '<div id="dv-days-of-week" class="clearfix"> <label class="dv-day-of-week"> Monday <input type="checkbox" name="days_available" value="Monday" class="dv-day-of-week-input"/> <span class="dv-day-of-week-check"></span> </label> <label class="dv-day-of-week"> Tuesday <input type="checkbox" name="days_available" value="Tuesday" class="dv-day-of-week-input"/> <span class="dv-day-of-week-check"></span> </label> <label class="dv-day-of-week"> Wednesday <input type="checkbox" name="days_available" value="Wednesday" class="dv-day-of-week-input"/> <span class="dv-day-of-week-check"></span> </label> <label class="dv-day-of-week"> Thursday <input type="checkbox" name="days_available" value="Thursday" class="dv-day-of-week-input"/> <span class="dv-day-of-week-check"></span> </label> <label class="dv-day-of-week"> Friday <input type="checkbox" name="days_available" value="Friday" class="dv-day-of-week-input"/> <span class="dv-day-of-week-check"></span> </label> <label class="dv-day-of-week"> Saturday <input type="checkbox" name="days_available" value="Saturday" class="dv-day-of-week-input"/> <span class="dv-day-of-week-check"></span> </label> <label class="dv-day-of-week"> Sunday <input type="checkbox" name="days_available" value="Sunday" class="dv-day-of-week-input"/> <span class="dv-day-of-week-check"></span></label></div>',
	styles = '#dv-availability{position:relative;margin:0 -20px 20px;padding:0 20px 30px;border-bottom:1px solid #dfe4e5}#dv-availability h3{margin-bottom:15px;font-size:19px;font-weight:bold}#dv-days-of-week{max-width:653px}.dv-day-of-week{display:block;float:left;width:calc(100% / 7);cursor:pointer;font-size:13px;text-align:center}.dv-day-of-week:nth-of-type(n+2){margin-left:-1px}.dv-day-of-week-input{position:absolute;left:-9999px}.dv-day-of-week-check{display:block;position:relative;margin-top:4px;padding:1.1rem 0;border:1px solid #69bbc0}.dv-day-of-week:first-of-type .dv-day-of-week-check{border-radius:4px 0 0 4px}.dv-day-of-week:last-of-type .dv-day-of-week-check{border-radius:0 4px 4px 0}.dv-day-of-week-check:before,.dv-day-of-week-check:after{display:block;position:absolute;top:calc(50% - 1px);left:50%;z-index:1;height:18px;width:18px;margin-top:-9px;margin-left:-9px;border:1px solid #ccc;border-radius:4px;content:""}.dv-day-of-week-check:after{opacity:0;top:1px;z-index:2;height:calc(100% - 2px);margin-top:0;background:white url(https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/checkmark-24-48.png) no-repeat center;background-size:18px;border-color:transparent}.dv-day-of-week-input:checked + .dv-day-of-week-check{box-shadow:0 0 0 1px #69bbc0 inset}.dv-day-of-week-input:checked + .dv-day-of-week-check:after{opacity:1}.dv-day-of-week:active .dv-day-of-week-check{opacity:.65}#dv-days-of-week-micro{margin-top:1rem;color:#777;font-size:13px}#dv-days-of-week-micro h4{display:none;margin-bottom:.5rem;font-size:15px;font-weight:bold}#dv-days-of-week-micro p{margin-bottom:0}@media screen and (min-width: 1024px){.dv-day-of-week{font-size:14px}}@media screen and (min-width: 1200px){#dv-days-of-week-micro{position:absolute;top:0;right:-250px;width:220px;margin-top:0}#dv-days-of-week-micro h4{display:block}}';

function setState() {
	// set options, then hide them
	$('option:nth-child(2)', '#question-hostAvailability__weekdayAvailability').prop('selected', true);
	$('option:nth-child(2)', '#question-hostAvailability__weekendAvailability').prop('selected', true);
	$('#question-hostAvailability__weekdayAvailability').css('display','none');
	$('#question-hostAvailability__weekendAvailability').css('display','none');
	$('.dv-day-of-week').remove();

	// insert content
	$('[data-auto="signup-availability"]').prepend(markup);
	$('#dv-days-of-week-micro').before(checkMarkup);
	$('head').append('<style>' + styles + '</style>');
}

function daysAvailable() {
	$('.dv-day-of-week-input', 'body').click(function() {
		if(!window.localStorage) return;
		var name = $(this).val().toLowerCase(),
			checked = $(this).prop('checked') === true ? 'checked' : 'unchecked';

		setLocalStorage();
		addPixel('/pxl/v1?event_type=user_selection&event_data=name|availability_' + name + ';value|' + checked + '&page_name=signup_host_about_you');
	});
}

setTimeout(function() {
	setState();
	setUiState();
	daysAvailable();	
}, 0);

function setLocalStorage(value, checked) {
	var checkedDates = {};
	
	if($('body').find('.dv-day-of-week-input:checked').length) {
		$('body').find('.dv-day-of-week-input:checked').each(function(i) {
			checkedDates[$(this).val()] = 'checked';
			localStorage.setItem('dv-host-availability', JSON.stringify(checkedDates));
		});
	} else {
		localStorage.removeItem('dv-host-availability');
	}
}
function setUiState() {
	if(!localStorage.getItem('dv-host-availability')) return;
	
	$.each(JSON.parse(localStorage.getItem('dv-host-availability')), function(key, value) {
		$('input[value="' + key + '"]').prop('checked', true);
	});
}

if(localStorage.getItem('dv-host-availability')) setUiState();

// if SPA comes back to About
$(window).bind('popstate', function() {
	if(window.location.hash !== '#/about-you' || !window.localStorage) return;

	setTimeout(function(){
		setState();
		setUiState();
		daysAvailable();
	}, 0);
});

console.log('THIS IS RUNNING, v16');