// var slides = document.getElementById('content'),
// 	slidesSwipe = new Hammer(slides),
// 	pos = 0,
// 	content = $('#content');

// slidesSwipe.on('swipeleft', function(ev) {
// 	if(pos === 0) {
// 		content.attr('class', 'pos-2');
// 	}else if(pos === 1){
// 		content.attr('class', 'pos-3');
// 	}else {
// 		return;
// 	}
// 	pos++;
// 	setUIState(pos + 1);
// });

// slidesSwipe.on('swiperight', function(ev) {
// 	if(pos === 1) {
// 		content.attr('class', 'pos-2-out');
// 		removeOutClass(content, '');
// 	}else if(pos === 2){
// 		content.attr('class', 'pos-2 pos-3-out');
// 		removeOutClass(content, 'pos-2');
// 	}else {
// 		return;
// 	}
// 	pos--;
// 	setUIState(pos + 1);
// });

// $('li', '#dv-slide-state').on('click', function() {
// 	if(window.innerWidth < 699 || $(this).hasClass('active')) return;

// 	var position = parseInt($(this).data('pos'), 10);

// 	if(pos === 0 && position === 1) {
// 		content.attr('class', 'pos-2');
// 	}else if(pos === 0 && position === 2) {
// 		content.attr('class', 'pos-3');
// 	}else if(pos === 1 && position === 2) {
// 		content.attr('class', 'pos-3');
// 	}else if(pos === 1 && position === 0) {
// 		content.attr('class', 'pos-2-out');
// 		removeOutClass(content, '');
// 	}else if(pos === 2 && position === 1) {
// 		content.attr('class', 'pos-2 pos-3-out');
// 		removeOutClass(content, 'pos-2');
// 	}else if(pos === 2 && position === 0) {
// 		content.attr('class', 'pos-3-out');
// 		removeOutClass(content, '');
// 	}

// 	pos = position;
// 	setUIState(pos + 1);
// });

var pos = 0,
	content = document.getElementById('content'),
	cta = document.getElementById('cta'),
	ctaButton = document.getElementById('cta-button'),
	cards = document.querySelectorAll('.card');

if(window.innerWidth > 700) {
	var ctaHeight = cta.clientHeight,
		ctaHeightNegative = -Math.abs(ctaHeight / 2);

	content.setAttribute('style', 'margin-top:' + ctaHeightNegative + 'px');
}

function autoScroll(pos) {
	setInterval(function() {
		if(pos === 0) {
			content.setAttribute('class', 'pos-2');
		}else if(pos === 1){
			content.setAttribute('class', 'pos-3');
		}else {
			pos = -1;
			content.setAttribute('class', 'pos-3-out');
			removeOutClass(content, '');
		}
		pos++;
		setUIState(pos + 1);
	}, 5000);
}

function removeOutClass(el, classLeft) {
	setTimeout(function() {
		el.setAttribute('class', classLeft);
	}, 225);
}

function setUIState(pos) {
	var uiState = document.getElementById('dv-slide-state');

	setTimeout(function() {
		uiState.querySelector('li.active').classList = '';
		uiState.querySelector('li:nth-child(' + pos + ')').classList = 'active';
	}, 250);
}

function loadCards(el, time) {
	setTimeout(function() {
		el.classList = 'card loaded';
	}, time);
}

Array.prototype.forEach.call(cards, function(el, e){
	loadCards(el, 750 * e);
});

autoScroll(pos);

ctaButton.onclick = function() {
	e.preventDefault();
	this.className = 'submitted';
}