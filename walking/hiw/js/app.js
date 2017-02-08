var slides = document.getElementById('content'),
	slidesSwipe = new Hammer(slides),
	pos = 0,
	content = $('#content');

slidesSwipe.on('swipeleft', function(ev) {
	if(pos === 0) {
		content.attr('class', 'pos-2');
	}else if(pos === 1){
		content.attr('class', 'pos-3');
	}else {
		return;
	}
	pos++;
	setUIState(pos + 1);
});

slidesSwipe.on('swiperight', function(ev) {
	if(pos === 1) {
		content.attr('class', 'pos-2-out');
		removeOutClass(content, '');
	}else if(pos === 2){
		content.attr('class', 'pos-2 pos-3-out');
		removeOutClass(content, 'pos-2');
	}else {
		return;
	}
	pos--;
	setUIState(pos + 1);
});

function removeOutClass(el, classLeft) {
	setTimeout(function() {
		el.attr('class', classLeft);
	}, 250);
}

function setUIState(pos) {
	var uiState = $('#dv-slide-state');

	setTimeout(function() {
		uiState.find('li').removeClass('active');
		uiState.find('li:nth-child(' + pos + ')').addClass('active');
	}, 250);
}

$('.card').each(function(e){
	loadCards($(this), 500 * e);
});

function loadCards(el, time) {
	setTimeout(function() {
		el.addClass('loaded');
	}, time);
}