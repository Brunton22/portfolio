$(window).load(function() {
	
	function load_title() {

		$('.top-rectangles').css("visibility", "visible").addClass('animated slideInDown');
		$('.title-desc-both').css("visibility", "visible").addClass(' animated lightSpeedIn');
	}

	setTimeout(load_title, 300);
})