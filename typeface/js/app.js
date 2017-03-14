$(function() {
	var scrollPos,
		narrow = $(window).innerWidth < 600;
	$('#dv-floating-button').on('click', function() {
		if(narrow) $(this).hide();
		$(this).blur();
		$('#dv-list').addClass('shown');
		scrollPos = $(window).scrollTop();
		if(narrow) hideUi();
	});
	$('span', '#dv-list').on('click', function() {
		if($(this).hasClass('active')) return;

		if($(this).hasClass('close')) {
			$('#dv-list').removeClass('shown');
			$('#dv-floating-button').show();
			return;
		}
		
		$('span', '#dv-list').removeClass('active');
		$(this).addClass('active');
		$('html').removeAttr('class').addClass($(this).attr('class'));
		if(narrow) $('#dv-list').removeClass('rel');
		if(narrow) $('.hidable').show();
		showUi();
	});
	$('.close', '#dv-list').on('click', function() {
		if(narrow) $('#dv-list').removeClass('rel');
		if(narrow) $('.hidable').show();
		showUi();
	});
	function hideUi() {
		setTimeout(function() {
			$('.hidable').hide();
			$('#dv-list').addClass('rel');
			$('body').addClass('list-shown');
		}, 251);
	}
	function showUi() {
		if(narrow) $('body').removeClass('list-shown');
		setTimeout(function() {
			window.scroll(0, scrollPos);
			$('#dv-list').removeClass('shown');
		}, 0);
		setTimeout(function() {
			if(narrow) $('#dv-floating-button').show();
		}, 251);
	}
});