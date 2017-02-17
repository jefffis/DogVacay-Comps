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

var dvPageName = "signup_host_listing_summary";
var testName = "host_description_5_sections";
var variantName = "bau_host_description";
var pxlTrack = "/pxl/v1/3pd/opt?visitor_id=" + readCookie('visitorid') + "&user_id=" + readCookie('uid') + "&test_name=" + testName + "&variant_name=" + variantName + "&page_name=" + dvPageName;

var img = new Image();  
img.setAttribute("visibility", "hidden");
img.setAttribute("position", "absolute");
img.src = pxlTrack;

var q1 = '<div class="dv-form-label dv-textarea-label">Tell guests about yourself</div><div class="dv-input-field__input dv-tooltip-input dv-tooltip-input--bottom"><textarea style="height: auto;" class="dv-textarea dv-input" name="description-opt-1" required="" data-title="About me"></textarea><small class="dv-microcopy-opt">Employment, pet care experience, your pets, other people in your home, etc. (min. 120 characters)</small></div>',
	q2 = '<div class="dv-form-label dv-textarea-label">Tell guests about your home &amp; the pet care services you offer</div><div class="dv-input-field__input dv-tooltip-input dv-tooltip-input--bottom"><textarea style="height: auto;" class="dv-textarea dv-input" name="description-opt-2" required="" data-title="About my home"></textarea><small class="dv-microcopy-opt">Apartment or home, outdoor space, safety and supervision, extra services and rates, etc. (min. 120 characters)</small></div>',
	q3 = '<div class="dv-form-label dv-textarea-label">Tell guests about your neighborhood</div><div class="dv-input-field__input dv-tooltip-input dv-tooltip-input--bottom"><textarea style="height: auto;" class="dv-textarea dv-input" name="description-opt-3" required="" data-title="About my neighborhood"></textarea><small class="dv-microcopy-opt">Nearby dog parks, river walks, busy streets, open land, etc. (min. 120 characters)</small></div>',
	q4 = '<div class="dv-form-label dv-textarea-label">What types of activities will a dog enjoy while staying with you?</div><div class="dv-input-field__input dv-tooltip-input dv-tooltip-input--bottom"><textarea style="height: auto;" class="dv-textarea dv-input" name="description-opt-4" required="" data-title="What to expect"></textarea><small class="dv-microcopy-opt">Cuddles, runs, long walks, where the dog will walk or play, etc. (min. 120 characters)</small></div>',
	q5 = '<div class="dv-form-label dv-textarea-label">Tell guests any special needs or preferences you have</div><div class="dv-input-field__input dv-tooltip-input dv-tooltip-input--bottom"><textarea style="height: auto;" class="dv-textarea dv-input" name="description-opt-5" required="" data-title="Special rules or requests"></textarea><small class="dv-microcopy-opt">Breed, size, behavioral limitations or needs, pick-up/drop-off instructions (min. 120 characters)</small></div>',
	hr = '<div style="height: 15px;"></div>',
	minCharacterLength = 120,
	lsExists = window.localStorage ? true : false,
	hasSeenUI = false;

function setState() {
	$('.dv-question-description', '#question-description').css('display', 'none');

	// console.log($('.dv-textarea-label', 'body').length);

	if(!localStorage.getItem('dv-description-optizations')) setApplicantBucket();

	if($('.dv-textarea-label', 'body').length) return;

	$('#question-description').append(q1 + hr + q2 + hr + q3 + hr + q4 + hr + q5);

	// console.log($('.dv-textarea-label', 'body').length, hasSeenUI);

	setTimeout(function() {
		hasSeenUI = true;
	}, 5000);
}

function setApplicantBucket() {
	localStorage.setItem('dv-description-optizations', 1);
}

function setVal(el, name, val) {
	if (val === '' || !lsExists) return;

	localStorage.setItem(name, val);
	combineVals($('textarea.dv-textarea', 'body'));

	// console.log('setVal fired');
}
function getVal(el, name) {
	el.val(localStorage.getItem(name));
}
function getState(checkState) {
	$('textarea.dv-textarea', 'body').each(function() {
		getVal($(this), $(this).attr('name'));
		if(checkState) checkLength($(this), $(this).val());
	});
	// console.log('getState fired');
}
function updateState() {
	$('textarea.dv-textarea', 'body').blur(function() {
		setVal($(this), $(this).attr('name'), $(this).val());
		checkLength($(this), $(this).val());
	});
	// console.log('updateState fired');
}
function combineVals(el) {
	description = '';
	el.each(function(){
		var title = $(this).data('title'),
			content = $(this).val(),
			lineBreak = '\n',
			lineBreaks = '\n\n',
			allContent = '**' + title + '**' + lineBreak + content + lineBreaks;

		description += allContent;
		$('textarea.dv-question-listing__input').val(description);
		// console.log($('textarea.dv-question-listing__input').val());
	});
}
function checkLength(el, val) {
	if(val.length < minCharacterLength) {
		el.addClass('error');
		el.parent().find('small.dv-textarea-error').remove();
		el.next('small').after('<small class="dv-textarea-error">Please enter at least 120 characters</small>');
	}else{
		el.removeClass('error');
		el.parent().find('small.dv-textarea-error').remove();
	}

	isSubmittable();
}
function isSubmittable() {
	if($('small.dv-textarea-error').length || $('textarea.dv-textarea', 'body').val() === ''){
		$('.dv-button.dv-signup__save').addClass('dv-disabled');
	}else{
		$('.dv-button.dv-signup__save').removeClass('dv-disabled');
	}
}

// set error CSS
var css = '.dv-textarea-error { display: block; margin-top: -9px; color: #ec6350; } textarea.error { border-color: #ec6350; } .dv-microcopy-opt { display: block; margin-top: -4px; margin-bottom: 9px; color: #777; font-size: 14px; line-height: 1.3; }',
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');

style.type = 'text/css';
if (style.styleSheet){
	style.styleSheet.cssText = css;
} else {
	style.appendChild(document.createTextNode(css));
}

head.appendChild(style);

$('.dv-button.dv-signup__save').click(function() {
	// if no localStorage then don't do this
	if(!lsExists || (window.location.pathname === '/account/profile' && !localStorage.getItem('dv-description-optizations'))) return;

	setTimeout(function() {
		setState();
		getState(true);
		updateState();
	}, 0);
});

DV.Events.on('registration:page:save', function() {
	// if no localStorage then don't do this
	if(!lsExists || (window.location.pathname === '/account/profile' && !localStorage.getItem('dv-description-optizations'))) return;

	setTimeout(function() {
		setState();
		getState(hasSeenUI);
		// console.log(hasSeenUI);
		updateState();
	}, 0);
});

// if SPA comes back to Description
$(window).bind('popstate', function() {

	// console.log(localStorage.getItem('dv-description-optizations'));

	if(window.location.pathname === '/account/profile' && !localStorage.getItem('dv-description-optizations')) return;

	if(window.location.hash !== '#/listing-description' || !lsExists) return;

	setTimeout(function() {
		setState();
		getState(hasSeenUI);
		// console.log(hasSeenUI);
		updateState();
	}, 0);
});

$('textarea.dv-textarea', 'body').blur(function() {
	// if no localStorage then don't do this
	if(!lsExists) return;

	setVal($(this), $(this).attr('name'), $(this).val());
	checkLength($(this), $(this).val());
});

setTimeout(function(){

	// console.log(localStorage.getItem('dv-description-optizations'));

	// if no localStorage then don't do this
	if(!lsExists || (window.location.pathname === '/account/profile' && !localStorage.getItem('dv-description-optizations'))) return;

	setState();
	getState(hasSeenUI);
	// console.log(hasSeenUI);
	updateState();
	// console.log('THIS HAS STARTED, v7 prod');
}, 0);