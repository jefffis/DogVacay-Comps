$(function() {
	$('#dv-floating-button').on('click', function() {
		$('#dv-list').addClass('shown');
	});
	$('span', '#dv-list').on('click', function() {
		if($(this).hasClass('active')) return;
		
		$('span', '#dv-list').removeClass('active');
		$(this).addClass('active');
		$('html').removeAttr('class').addClass($(this).attr('class'));
		$('#dv-list').removeClass('shown');
	});
});