$(function() {
	var scrollPos;
	$('#dv-floating-button').on('click', function() {
		$(this).hide();
		$('#dv-list').addClass('shown');
		scrollPos = $(window).scrollTop();
		hideUi();
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
		$('#dv-list').removeClass('rel');
		$('.hidable').show();
		showUi();
	});
	$('.close', '#dv-list').on('click', function() {
		$('#dv-list').removeClass('rel');
		$('.hidable').show();
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
		$('body').removeClass('list-shown');
		setTimeout(function() {
			window.scroll(0, scrollPos);
			$('#dv-list').removeClass('shown');
		}, 0);
		setTimeout(function() {
			$('#dv-floating-button').show();
		}, 251);
	}
});