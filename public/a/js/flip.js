$(window).load(function(){

	$.getScript( "a/js/portfolio.min.js", function(){

		$('.portfolio-item-phone').flip();
		$('.front').css('position', 'relative');
		$('.back').css('height', '94%');

		$('.portfolio-item-phone').on('click', function(){
			$(this).find('.portfolio-info-btn').hide().toggleClass('fa-info-circle fa-arrow-circle-left').delay(500).fadeIn();
		});
	});
	$.getScript( "a/js/contact_form.min.js", function(){
		$.getScript( "a/js/email.min.js");	
	});

});