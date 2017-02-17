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

var bgcQ = '<div class="dv-panel__section" data-auto="signup-backgroundCheck"> <div id="question-backgroundCheck"><div class="dv-input-field dv-question-backgroundCheck"> <div class="dv-form-label ">Background checks are a part of the application process. Do you agree to submit a background check?</div><div class="dv-input-field__input"> <ul class="dv-button-group dv-button-group--expanded"> <li class="dv-button-group__item"> <div class="dv-button--toggle dv-button--toggle--large "> <input id="backgroundCheck-1" type="radio" name="backgroundCheck" value="Yes" class="dv-button--toggle__input" data-auto="profile-backgroundCheck-1"> <label for="backgroundCheck-1" class="dv-button--toggle__label">Yes</label> </div></li><li class="dv-button-group__item"> <div class="dv-button--toggle dv-button--toggle--large "> <input id="backgroundCheck-0" type="radio" name="backgroundCheck" value="No" class="dv-button--toggle__input" data-auto="profile-backgroundCheck-0"> <label for="backgroundCheck-0" class="dv-button--toggle__label">No</label> </div></li></ul> </div></div></div></div>';

$('[data-auto="signup-over18"]').after(bgcQ);

$('input', '#question-backgroundCheck').click(function() {
	addPixel('/pxl/v1/3pd/opt?visitor_id=' + readCookie('visitorid') + '&user_id=' + readCookie('uid') + '&event_type=click&test_name=background_check_host_application&variant_name=test_bgc_question&page_name=signup_host_about_you&value=' + $(this).val());
});

// test onLoad
addPixel('/pxl/v1/3pd/opt?visitor_id=' + readCookie('visitorid') + '&user_id=' + readCookie('uid') + '&test_name=background_check_host_application&variant_name=test_bgc_question&page_name=signup_host_about_you');

// bau onLoad
addPixel('/pxl/v1/3pd/opt?visitor_id=' + readCookie('visitorid') + '&user_id=' + readCookie('uid') + '&test_name=background_check_host_application&variant_name=bau_bgc_question&page_name=signup_host_about_you');