$(function(){
	requiredInputs = $('[data-required]'),
	requiredFauxInputs = $('[data-required-faux]'),
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

	// requiredInputs.on('blur', function(){
	// 	var validatable = $(this).hasClass(validatableClass) || $(this).hasClass('bad') ? true : false;

	// 	if(validatable){
	// 		if($(this).val() === ''){
	// 			validateField($(this).val(), $(this), $(this).parents('.rr-label'), true);
	// 		}else{
	// 			validateField($(this).val(), $(this), $(this).parents('.rr-label'), false);
	// 		}
	// 	}
	// });

	$('[data-faux-label]').on('focus', function(){
		$(this).parents('.rr-faux-input').addClass('focussed');
	});
	$('[data-faux-label]').on('blur', function(){
		$(this).parents('.rr-faux-input').removeClass('focussed');
	});

	$('.rr-textarea').on('keyup', function() {
		textAreaAdjust(this);
	});

	$('form').on('submit', function(e){
		var valid = false,
			bothInvalid = false;

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

		requiredFauxInputs.each(function(){
			var years = $(this).parents('.rr-faux-input').find('.rr-yrs').val(),
				months = $(this).parents('.rr-faux-input').find('.rr-mos').val();

			if(bothInvalid) return;

			if(years === '' || months === ''){
				bothInvalid = true;
				validateFauxFields($(this).val(), $(this), $(this).parents('.rr-faux-input'), true);
			}else{
				validateFauxFields($(this).val(), $(this), $(this).parents('.rr-faux-input'), false);
			}
		});

		e.preventDefault();
	});

	function validateFauxFields(val, el, par, hasError){
		if(!hasError){
			par.next('small.error').remove();
			par.removeClass('bad').addClass('good');
			return;
		}

		var msg = el.data('validation') !== undefined ? el.data('validation') : 'Please enter a value.';

		par.next('small.error').remove();
		par.addClass('bad').removeClass('good');
		par.after('<small class="rr-small error">' + msg + '</small>');
	}

	function validateField(val, el, par, hasError){
		if(!hasError){
			el.next('small.error').remove();
			el.removeClass('bad').addClass('good');
			return;
		}

		var msg = el.data('validation') !== undefined ? el.data('validation') : 'Please enter a value.';

		el.next('small.error').remove();
		el.addClass('bad').removeClass('good');
		el.after('<small class="rr-small error">' + msg + '</small>');
	}

	function textAreaAdjust(o) {
		o.style.height = "1px";
		o.style.height = (1+o.scrollHeight)+"px";
	}

});