var cta = document.getElementById('cta'),
	chat = document.querySelectorAll('.chat'),
	startTime = 500,
	chatUiDelay = 1500,
	ctaUidelay = (startTime + chatUiDelay) * (chat.length - 1);

function showCTA(el, time, ctx) {
	setTimeout(function() {
		el.className += ' fade-in';
	}, time);
}

showCTA(cta, ctaUidelay, true);

function showChatUi(el) {
	setTimeout(function() {
		Array.prototype.forEach.call(chat, function(el, e){
			showCTA(el, chatUiDelay * e, false);
		});
	}, startTime);
}

showChatUi(chat);