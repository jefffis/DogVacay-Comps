var slides = document.getElementById('content'),
	slidesSwipe = new Hammer(slides),
	pos = 0;

slidesSwipe.on('swipeleft', function(ev) {
	if(pos === 0) {
		slides.classList = 'pos-2';
	}else if(pos === 1){
		slides.classList = 'pos-3';
	}else {
		return;
	}
	pos++;
	// console.log(pos);
	setUIState(pos + 1);
});

slidesSwipe.on('swiperight', function(ev) {
	if(pos === 1) {
		slides.classList = '';
	}else if(pos === 2){
		slides.classList = 'pos-2';
	}else {
		return;
	}
	pos--;
	setUIState(pos + 1);
});

function setUIState(pos) {
	var uiState = $('#dv-slide-state');

	setTimeout(function() {
		uiState.find('li').removeClass('active');
		uiState.find('li:nth-child(' + pos + ')').addClass('active');
	}, 250);
}