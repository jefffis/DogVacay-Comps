$(function() {

	var cta = $('#cta'),
		// chatContent = $('#chat-content'),
		chat = $('.chat');

	function showCTA(el, time, ctx) {
		setTimeout(function() {
			// if(ctx) fadeChat();
			el.addClass('fade-in');
		}, time);
	}

	showCTA(cta, 5500, true);

	// function fadeChat() {
	// 	setTimeout(function() {
	// 		$('#chat-content').addClass('fade-out');
	// 	}, 751);
	// }

	function showChatUi(el) {
		setTimeout(function() {
			el.each(function(e) {
				showCTA($(this), 1500 * e, false);
				console.log(e);
			});
		}, 1500);
	}
	
	showChatUi(chat);

});