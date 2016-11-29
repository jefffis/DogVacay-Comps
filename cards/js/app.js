$(function(){
	var hiddenCardShow = $('#dv-help-cards-show'),
		hiddenCardsInd = $('.hide');

	hiddenCardShow.on('click', function(){
		delayUX(hiddenCardsInd, $(this));
	});

	function delayUX(el1, el2) {
		setTimeout(function() {
			el1.each(function(){
				$(this).removeClass('hide');
			});
			el2.parent().parent().remove();
		}, 215);
	}	
});