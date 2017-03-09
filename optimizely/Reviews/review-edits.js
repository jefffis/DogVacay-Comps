function addPixel(src) {
	var img = new Image();  
	img.setAttribute('visibility', 'hidden');
	img.setAttribute('position', 'absolute');
	img.src = src;
}
function getCookie(cookiename) {
	var cookiestring=RegExp(""+cookiename+"[^;]+").exec(document.cookie);
	return unescape(!!cookiestring ? cookiestring.toString().replace(/^[^=]+./,"") : "");
}

$('#signupform > div:nth-child(4) > label > b').text('Private Feedback: only seen by DogVacay');
$('#private-note').css('height', '185px');

var reservationId = $('[data-auto="review-rating-info-id"]').text(),
	hostName = $('[data-auto="review-rating-info-host"]').text(),
	privateReview = $('#signupform > div:nth-child(4)').detach(),
	likelyRebook = $('#recommend-dogvacay').detach(),
	likelyText = $('#recommend-dogvacay > label > b').text('How likely are you to book again with them?'),
	publicFeedback = $('#signupform > div:nth-child(3) > label > b'),
	publicFeedbackText = publicFeedback.text(),
	reviewIdInput = $('[name="reservation_id"]').detach(),
	overallRatings = '<h2>Public Feedback</h2><h3>How would you rate your overall experience?</h3><p>1 = Poor, 5 = Excellent (public)</p><div class="dv-review-list not-reviewed"><label><input type="radio" name="ratings[overall]" data-overall-review value="1" class="dv-review-1-star"/><span></span></label><label><input type="radio" name="ratings[overall]" data-overall-review value="2" class="dv-review-2-star"/><span></span></label><label><input type="radio" name="ratings[overall]" data-overall-review value="3" class="dv-review-3-star"/><span></span></label><label><input type="radio" name="ratings[overall]" data-overall-review value="4" class="dv-review-4-star"/><span></span></label><label><input type="radio" name="ratings[overall]" data-overall-review value="5" class="dv-review-5-star"/><span></span></label></div>',
	customRatings = '<hr style="border-top: 1px solid #ccc; margin: 30px -80px 30px 0;" /><h2>Private Feedback</h2><p>Your answers below will only be shown to DogVacay.</p><h3>Responsiveness</h3><p>Did ' + hostName + ' respond quickly and professionally to all of your messages and/ or calls?</p><div class="dv-review-list _not-reviewed"><label><input type="radio" name="responsiveness_rating" data-review value="1" class="dv-review-1-star"/><span></span></label><label><input type="radio" name="responsiveness_rating" data-review value="2" class="dv-review-2-star"/><span></span></label><label><input type="radio" name="responsiveness_rating" data-review value="3" class="dv-review-3-star"/><span></span></label><label><input type="radio" name="responsiveness_rating" data-review value="4" class="dv-review-4-star"/><span></span></label><label><input type="radio" name="responsiveness_rating" data-review value="5" class="dv-review-5-star"/><span></span></label></div><hr/><h3>Safety &amp; Care</h3><p>Did ' + hostName + ' provide high-quality service and follow your care instructions?</p><div class="dv-review-list _not-reviewed"><label><input type="radio" name="safety_rating" data-review value="1" class="dv-review-1-star"/><span></span></label><label><input type="radio" name="safety_rating" data-review value="2" class="dv-review-2-star"/><span></span></label><label><input type="radio" name="safety_rating" data-review value="3" class="dv-review-3-star"/><span></span></label><label><input type="radio" name="safety_rating" data-review value="4" class="dv-review-4-star"/><span></span></label><label><input type="radio" name="safety_rating" data-review value="5" class="dv-review-5-star"/><span></span></label></div><hr/><h3>Profile Accuracy</h3><p>Did ' + hostName + '&rsquo;s service or home environment match your expectations from the sitter&rsquo;s profile?</p><div class="dv-review-list _not-reviewed"><label><input type="radio" name="accuracy_rating" data-review value="1" class="dv-review-1-star"/><span></span></label><label><input type="radio" name="accuracy_rating" data-review value="2" class="dv-review-2-star"/><span></span></label><label><input type="radio" name="accuracy_rating" data-review value="3" class="dv-review-3-star"/><span></span></label><label><input type="radio" name="accuracy_rating" data-review value="4" class="dv-review-4-star"/><span></span></label><label><input type="radio" name="accuracy_rating" data-review value="5" class="dv-review-5-star"/><span></span></label></div><hr/><h3>Pick Up &amp; Drop Off</h3><p>Did ' + hostName + ' provide a punctual, professional and convenient pickup and/ or drop off experience?</p><div class="dv-review-list _not-reviewed"><label><input type="radio" name="pickup_rating" data-review value="1" class="dv-review-1-star"/><span></span></label><label><input type="radio" name="pickup_rating" data-review value="2" class="dv-review-2-star"/><span></span></label><label><input type="radio" name="pickup_rating" data-review value="3" class="dv-review-3-star"/><span></span></label><label><input type="radio" name="pickup_rating" data-review value="4" class="dv-review-4-star"/><span></span></label><label><input type="radio" name="pickup_rating" data-review value="5" class="dv-review-5-star"/><span></span></label></div><hr/><h3>Photo Updates</h3><p>Did ' + hostName + '&rsquo;s photo updates meet your expectations?</p><div class="dv-review-list _not-reviewed"><label><input type="radio" name="photo_rating" data-review value="1" class="dv-review-1-star"/><span></span></label><label><input type="radio" name="photo_rating" data-review value="2" class="dv-review-2-star"/><span></span></label><label><input type="radio" name="photo_rating" data-review value="3" class="dv-review-3-star"/><span></span></label><label><input type="radio" name="photo_rating" data-review value="4" class="dv-review-4-star"/><span></span></label><label><input type="radio" name="photo_rating" data-review value="5" class="dv-review-5-star"/><span></span></label></div><hr />',
	styles = '[data-auto="reservation-review-form"]{margin:2rem 0 1rem}#recommend-dogvacay{padding-top:.75rem}#signupform label{display:block;padding:0;cursor:default}#signupform label b{font-size:17px;line-height:1.2}#signupform label br{display:none}#signupform label i{display:block;padding:.25rem 0 .75rem;font-style:normal;line-height:1.4}#content hr{color:#888;height:0;padding:5px 0;border:0}#content h2{background:none;padding-left:0;color:#999;font-family:"Helvetica Neue", sans-serif;font-size:27px;letter-spacing:normal}#content h3{font-size:17px}#content h3,#content b{color:#111}#content h3 + p{margin:.25rem 0 1rem;color:#111;font-size:13px;line-height:1.2}#content .dv-review-list{margin:0 0 0 -2px;padding:0}#content .dv-review-list label{display:inline-block;margin-bottom:0;padding-bottom:0;border:0;list-style:none}#content .dv-review-list input{position:absolute;left:-9999px}#content .dv-review-list span{display:inline-block;position:relative;height:30px;width:30px;background:url(/pug/img/corp/lander/walking-howitworks/star.png) no-repeat center;background-size:30px;cursor:pointer}#content .dv-review-list span:active{opacity:.65}#content .dv-review-list .active{cursor:default}#content .dv-review-list .active:active{opacity:1}#content .dv-review-list span:before{display:block;position:absolute;top:0;left:0;z-index:1;height:100%;width:100%;background:white;opacity:.75;content:"";transition:background .25s ease-in-out}#content .dv-review-1-star label:nth-child(-n+1) span:before,#content .dv-review-2-star label:nth-child(-n+2) span:before,#content .dv-review-3-star label:nth-child(-n+3) span:before,#content .dv-review-4-star label:nth-child(-n+4) span:before,#content .dv-review-5-star label:nth-child(-n+5) span:before{background:transparent}#content .dv-review-list.has-error,#public-note-container.has-error{position:relative}#content .dv-review-list.has-error:after,#public-note-container.has-error:after{display:block;margin-top:.5rem;color:red;font-size:13px;content:"Please rate this section."}#public-note-container.has-error:after{margin:0 0 .5rem;content:"Please add your review of " attr(data-host-name) "."}#public-note-container.has-error textarea{border-color:red}',
	landPxl = '/pxl/v1?event_type=pageview&event_data=pageload|1;reservation_id|' + reservationId.substr(1) + '&page_name=review_reservation',
	testNamepxl = '/pxl/v1/3pd/opt?visitor_id=' + getCookie('visitorid') + '&dv_hasL=' + getCookie('dv_hasL') + '&test_name=2017_03_06_host_review_private_rating&variant_name=test_host_review_score_5_sections&page_name=review_reservation',
	submitPxl = '/pxl/v1?event_type=submit&event_data=name|submit;type|button;reservation_id|' + reservationId.substr(1) + '&page_name=review_reservation';

// when page loads
addPixel(landPxl);
addPixel(testNamepxl);

// adjust layout
$('#public-note-container').attr('data-host-name', hostName);
$('.contentimg').remove();
var card = $('h3.grey').detach();
$('#reviewform').css({'float':'right','position':'relative','left':'-30px'});
$('#content').addClass('clearfix').prepend(card);
$('h3.grey').css({'float':'left','width':'250px'});
$('#content > h3 > div > p').remove();
$('.dashboardbluebox15').css({'padding':'0','font-size':'14px','border':'0','background':'none','box-shadow':'none'})

$('[data-auto="review-rating-list"]').remove();
$('br', 'label').remove();

$('head').append('<style>' + styles + '</style>');
$('#signupform').prepend(reviewIdInput);
$('[data-auto="reservation-review-form"]').after('<hr /><div id="private"></div>');
$('#signupform').prepend(overallRatings);
$('#private').append(likelyRebook);
$('#private').append('<hr />');
$('#private').append(privateReview);
$('#private').prepend(customRatings);

// change private feedback text
$('#private > div:nth-child(2) > label > b').text('Private Feedback: only seen by DogVacay');

// change public text
publicFeedbackText = publicFeedbackText.replace('*', '');
publicFeedbackText = publicFeedbackText.replace('Public Host Feedback - ', '');
publicFeedback.text(publicFeedbackText);

// add star ratings
$('span', '.dv-review-list').click(function() {
	$('span', '.dv-review-list').removeClass('active');
	$(this).parents('.dv-review-list').attr('class', 'dv-review-list').addClass($(this).prev('input').attr('class'));
	$(this).addClass('active');
	if($(this).prev('input').data('overall-review') !== undefined) {
		addPixel('/pxl/v1?event_type=user_selection&event_data=name|overall_rating;type|stars;value|' + $(this).prev('input').val() + ';reservation_id|' + reservationId.substr(1) + '&page_name=review_reservation');
	} else {
		addPixel('/pxl/v1?event_type=user_selection&event_data=name|' + $(this).prev('input').attr('name') + ';type|stars;value|' + $(this).prev('input').val() + ';reservation_id|' + reservationId.substr(1) + '&page_name=review_reservation');
	}
});

$('#public-note').blur(function() {
	if($(this).parent().hasClass('has-error') && $(this).val() !== '') {
		$(this).parent().removeClass('has-error');
	}
});

function validateReviews(el) {
	el.addClass('has-error');
	window.scrollTo(0, $('.has-error:first').offset().top - 100);
}

// require all ratings
$('button.submit').click(function() {
	if($('.not-reviewed').length || $('#public-note').val() === '') {
		if($('.not-reviewed').length) validateReviews($('.not-reviewed'));

		if($('#public-note').val() === '') validateReviews($('#public-note-container'));

		return false;
	}
	addPixel(submitPxl);
});

console.log('this is running, v7');