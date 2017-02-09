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

$('li', '#dv-slide-state').on('click', function() {
	if(window.innerWidth < 649 || $(this).hasClass('active')) return;

	var position = parseInt($(this).data('pos'), 10);

	if(pos === 0 && position === 1) {
		content.attr('class', 'pos-2');
	}else if(pos === 0 && position === 2) {
		content.attr('class', 'pos-3');
	}else if(pos === 1 && position === 2) {
		content.attr('class', 'pos-3');
	}else if(pos === 1 && position === 0) {
		content.attr('class', 'pos-2-out');
		removeOutClass(content, '');
	}else if(pos === 2 && position === 1) {
		content.attr('class', 'pos-2 pos-3-out');
		removeOutClass(content, 'pos-2');
	}else if(pos === 2 && position === 0) {
		content.attr('class', 'pos-3-out');
		removeOutClass(content, '');
	}

	pos = position;
	setUIState(pos + 1);
});

if(window.innerWidth > 650) {
	var ctaHeight = $('#cta').height(),
		ctaHeightNegative = ctaHeight / 2;
	$('#content').css('margin-top', -Math.abs(ctaHeightNegative));
	console.log(ctaHeight, ctaHeightNegative);
}

function removeOutClass(el, classLeft) {
	setTimeout(function() {
		el.attr('class', classLeft);
	}, 225);
}

function setUIState(pos) {
	var uiState = $('#dv-slide-state');

	setTimeout(function() {
		uiState.find('li').removeClass('active');
		uiState.find('li:nth-child(' + pos + ')').addClass('active');
	}, 250);
}

$('.card').each(function(e){
	loadCards($(this), 750 * e);
});

function loadCards(el, time) {
	setTimeout(function() {
		el.addClass('loaded');
	}, time);
}