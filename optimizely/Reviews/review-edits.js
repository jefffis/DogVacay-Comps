/*
1 - Ability to launch quickly 
2- Launch as A/B test - potential new format(s) for reviews 
3 - Dimensions of review can translate to action for Host (longer term vision)
     * Dimensions filter up to the 'Overall Review': 
     ---  Cleanliness (of home if Boarding/ Daycare) 
     ---  Communication (before/ during vacay)
     ---  Accuracy (listing is what the Guest expected)
     ---  Arrival (pick up/ drop off coordination) 
     * Plan to repeat (Y/N or Range of likelihood to repeat 1-10)
     * Private note to DV team
4 - Simple, Guest can complete in under 5 min.
5 - Future consideration - add Tipping element
*/

var customRatings = '<hr/><h3>Cleanliness</h3><p>Of the Hosts&rsquo;s home</p><div class="dv-review-list not-reviewed"><label><input type="radio" name="ratings[cleanliness]" data-review value="1" class="dv-review-1-star"/><span></span></label><label><input type="radio" name="ratings[cleanliness]" data-review value="2" class="dv-review-2-star"/><span></span></label><label><input type="radio" name="ratings[cleanliness]" data-review value="3" class="dv-review-3-star"/><span></span></label><label><input type="radio" name="ratings[cleanliness]" data-review value="4" class="dv-review-4-star"/><span></span></label><label><input type="radio" name="ratings[cleanliness]" data-review value="5" class="dv-review-5-star"/><span></span></label></div><hr/><h3>Communication</h3><p>Before &amp; during the Vacay</p><div class="dv-review-list not-reviewed"><label><input type="radio" name="ratings[communication]" data-review value="1" class="dv-review-1-star"/><span></span></label><label><input type="radio" name="ratings[communication]" data-review value="2" class="dv-review-2-star"/><span></span></label><label><input type="radio" name="ratings[communication]" data-review value="3" class="dv-review-3-star"/><span></span></label><label><input type="radio" name="ratings[communication]" data-review value="4" class="dv-review-4-star"/><span></span></label><label><input type="radio" name="ratings[communication]" data-review value="5" class="dv-review-5-star"/><span></span></label></div><hr/><h3>Accuracy</h3><p>Listing is what you were expecting</p><div class="dv-review-list not-reviewed"><label><input type="radio" name="ratings[accuracy]" data-review value="1" class="dv-review-1-star"/><span></span></label><label><input type="radio" name="ratings[accuracy]" data-review value="2" class="dv-review-2-star"/><span></span></label><label><input type="radio" name="ratings[accuracy]" data-review value="3" class="dv-review-3-star"/><span></span></label><label><input type="radio" name="ratings[accuracy]" data-review value="4" class="dv-review-4-star"/><span></span></label><label><input type="radio" name="ratings[accuracy]" data-review value="5" class="dv-review-5-star"/><span></span></label></div><hr/><h3>Arrival</h3><p>Pick-up &amp; drop-off coordination</p><div class="dv-review-list not-reviewed"><label><input type="radio" name="ratings[arrival]" data-review value="1" class="dv-review-1-star"/><span></span></label><label><input type="radio" name="ratings[arrival]" data-review value="2" class="dv-review-2-star"/><span></span></label><label><input type="radio" name="ratings[arrival]" data-review value="3" class="dv-review-3-star"/><span></span></label><label><input type="radio" name="ratings[arrival]" data-review value="4" class="dv-review-4-star"/><span></span></label><label><input type="radio" name="ratings[arrival]" data-review value="5" class="dv-review-5-star"/><span></span></label></div>',
	styles = '[data-auto=reservation-review-form]{margin:2rem 0 1rem}#recommend-dogvacay{padding-top:.75rem}#signupform label{display:block;padding:0;cursor:default}#signupform label b{font-size:18px;line-height:1.2}#signupform label br{display:none}#signupform label i{display:block;padding:.25rem 0 .75rem;font-style:normal;line-height:1.4}#content h3{color:#666}#content h3+p{margin:.25rem 0 1rem;color:#666;font-size:13px;line-height:1.2}#content .dv-review-list{margin:0 0 0 -2px;padding:0}#content .dv-review-list label{display:inline-block;margin-bottom:0;padding-bottom:0;border:0;list-style:none}#content .dv-review-list input{position:absolute;left:-9999px}#content .dv-review-list span{display:inline-block;position:relative;height:30px;width:30px;background:url(https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Star_Gold-128.png) center no-repeat;background-size:30px;cursor:pointer}#content .dv-review-list span:active{opacity:.65}#content .dv-review-list .active{cursor:default}#content .dv-review-list .active:active{opacity:1}#content .dv-review-list span:before{display:block;position:absolute;top:0;left:0;z-index:1;height:100%;width:100%;background:#fff;opacity:.75;content:"";transition:background .25s ease-in-out}#content .dv-review-1-star label:nth-child(-n+1) span:before,#content .dv-review-2-star label:nth-child(-n+2) span:before,#content .dv-review-3-star label:nth-child(-n+3) span:before,#content .dv-review-4-star label:nth-child(-n+4) span:before,#content .dv-review-5-star label:nth-child(-n+5) span:before{background:0 0}#content .dv-review-list.has-error,#public-note-container.has-error{position:relative}#content .dv-review-list.has-error:after,#public-note-container.has-error:after{display:block;margin-top:.5rem;color:red;font-size:13px;content:"Please rate this section."}#public-note-container.has-error:after{margin:0 0 .5rem}#public-note-container.has-error textarea{border-color:red}',
	overtallRating = 0;

$('[data-auto="review-rating-list"]').hide();
$('.reviewstars').remove(); // remove this so I can append a custom input for the built review score
$('#signupform').prepend('<input type="hidden" name="ratings[overall]" id="dv-overall-ratings" />');
// $('[data-auto="review-rating-list"]').after('<h1>Review &amp; Rate</h1>');
$('br', 'label').remove();

// var publicText = $('b', '[data-auto="reservation-review-form"]').text(),
// 	replaced = publicText.replace('Public Host Feedback - How did  ', 'Public Feedback: how did ');

// $('b', '[data-auto="reservation-review-form"]').text(replaced);
// $('#signupform > div:nth-child(4) > label > b').text('Private Feedback: ONLY be seen by DogVacay');

$('head').append('<style>' + styles + '</style>');
$('#recommend-dogvacay').after(customRatings);

// add star ratings
$('span', '.dv-review-list').on('click', function() {
	$('span', '.dv-review-list').removeClass('active');
	$(this).parents('.dv-review-list').attr('class', 'dv-review-list').addClass($(this).prev('input').attr('class'));
	$(this).addClass('active');
	createTotalScore($(this).val());
});

$('#public-note').on('blur', function() {
	if($(this).parent().hasClass('has-error') && $(this).val() !== '') {
		$(this).parent().removeClass('has-error');
	}
});

function createTotalScore(val) {
	setTimeout(function(){
		var overtallRatingTotal = 0;
		$('input[data-review]:checked', 'body').each(function() {
			overtallRatingTotal += parseInt($(this).val(), 10);
			overtallRating = (overtallRatingTotal / $('input[data-review]:checked', 'body').length).toFixed(2);
			console.log(overtallRating);
			$('#dv-overall-ratings').val(overtallRating);
		});
	}, 0);
}

function validateReviews(el) {
	el.addClass('has-error');
	window.scrollTo(0, $('.has-error:first').offset().top - 50);
}

// require all ratings
$('button.submit').on('click', function() {
	if($('.not-reviewed').length || $('#public-note').val() === '') {
		if($('.not-reviewed').length) validateReviews($('.not-reviewed'));

		if($('#public-note').val() === '') validateReviews($('#public-note-container'));

		return false;
	}
});