$(function(){
	requiredInputs = $('[data-required]'),
	validatableClass = 'validatable';

	requiredInputs.on('focus', function(){
		var validatable = $(this).val() !== '' ? true : false;

		if(validatable){
			$(this).addClass(validatableClass);
		}
	});

	requiredInputs.on('blur', function(){
		var validatable = $(this).hasClass(validatableClass) || $(this).hasClass('bad') ? true : false;

		if(validatable){
			if($(this).val() === ''){
				validateField($(this).val(), $(this), $(this).parents('.rr-label'), true);
			}else{
				validateField($(this).val(), $(this), $(this).parents('.rr-label'), false);
			}
		}
	});

	$('form').on('submit', function(e){
		valid = false;

		requiredInputs.each(function(){
			if($(this).val() === ''){
				validateField($(this).val(), $(this), $(this).parent(), true);
			}else{
				validateField($(this).val(), $(this), $(this).parent(), false);
			}
			var firstErrorPos = $('small.error:first').parent().offset().top - 20;
			window.scroll(0, firstErrorPos);
			$('small.error:first').focus();
		});

		e.preventDefault();
	});

	function validateField(val, el, par, hasError){
		if(!hasError){
			el.next('small.error').remove();
			el.removeClass('bad').addClass('good');
			return;
		}

		var msg = el.data('validation') !== undefined ? el.data('validation') : 'Please enter a value.';

		el.find('small.error').remove();
		el.addClass('bad').removeClass('good');
		el.after('<small class="rr-small error">' + msg + '</small>');
	}

});