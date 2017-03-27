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

addPixel("/pxl/v1/3pd/opt?visitor_id=" + getCook('visitorid')+ "&test_name=2017_03_27_mobile_srp_clean_filters&variant_name=test_clean_filters&page_name=search_results");

$('.dv-mweb-section__sub-header:first', '#search-filter-modal').remove();
$('#select-box-service', '#search-filter-modal').remove();
$('.dv-mweb-section__sub-header:first', '#search-filter-modal').remove();
$('#search-filter-modal-dates', '#search-filter-modal').remove();
$('.dv-pet-age-checkbox', '#search-filter-modal').remove();
$('.dv-pet-more-options-checkbox__label--instant-book', '#search-filter-modal').text('Accepts Instant Book');
$('#search-filter-modal > div.dv-mweb-search-filter-modal__body > div.dv-pet-budget-slider > div.dv-slider.dv-pet-budget-slider__slider > div.dv-pet-budget-slider__slider__bar > div > div > div > div.noUi-origin.noUi-connect').remove();
$('.dv-column__slider-label--left').remove();

var header = $('.dv-mweb-section__sub-header:first').clone();

$('#search-filter-modal > div.dv-mweb-search-filter-modal__body > div.dv-pet-more-options-checkbox.dv-mweb-search-filter__section > div.dv-mweb-section__sub-header').remove();
$('#search-filter-modal > div.dv-mweb-search-filter-modal__body > div.dv-pet-budget-slider > div.dv-mweb-section__sub-header > span').text('Max budget per dog');
$('#search-filter-modal > div.dv-mweb-search-filter-modal__body > div.dv-pet-more-options-checkbox.dv-mweb-search-filter__section > div > div:nth-child(5)').before('<div id="dv-sitter-info" class="dv-faux-header"></div>');
$('#dv-sitter-info').before('<div id="dv-dog-info" class="dv-faux-header"></div>');
$('#dv-sitter-info').append(header);
$('span', '#dv-sitter-info').text('About the Sitter');
$('#dv-dog-info').append('<div class="dv-mweb-section__sub-header"> <span class="dv-mweb-section--bold-text">About your Dog</span> </div><div class="dv-pet-more-options-checkbox__body"> <div class="dv-checkbox dv-checkbox--clearfix dv-checkbox--large"> <input type="checkbox" name="dog_age" id="age_puppy" value="1" class="dv-button--toggle__input"> <label for="age_puppy" class="dv-pet-more-options-checkbox__label">My dog is less than 2 years old</label> </div><div class="dv-checkbox dv-checkbox--clearfix dv-checkbox--large"> <input type="checkbox" name="dog_age" id="age_senior" value="3" class="dv-button--toggle__input"> <label for="age_senior" class="dv-pet-more-options-checkbox__label">My dog is a senior</label> </div></div>');

var styles = '#search-filter-modal .dv-pet-budget-slider__slider__bar{width:100% !important}#search-filter-modal .dv-column__slider{padding-left:0 !important;padding-right:5rem !important}#search-filter-modal .dv-slider .noUi-connect{background:#999 !important;border:0 !important}#search-filter-modal .dv-pet-budget-slider .dv-slider .noUi-handle{top:-12px !important;border:0 !important;border-radius:100% !important;box-shadow:0 0 0 1px white !important}#search-filter-modal .noUi-origin.noUi-connect,#search-filter-modal .dv-column__slider-label--left{display:none !important}#search-filter-modal .dv-slider .noUi-target{border:0 !important;border-radius:2px !important}#search-filter-modal .dv-slider .noUi-origin{border-radius:2px !important}#search-filter-modal .noUi-base{max-width:320px !important}#dv-dog-info{margin:2rem 0 -.5rem}#dv-sitter-info{margin:2rem 0 1rem}';

$('head').append('<style id="dv-mweb-srp">' + styles + '</style>');

console.log('this is running, v1');