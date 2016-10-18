$(window).load(function() {
	
	function load_title() {

		$('#title-name').css("visibility", "visible").addClass(' animated fadeInDownBig');
		$('#title-wd').css("visibility", "visible").addClass(' animated fadeInUpBig');
	}

	setTimeout(load_title, 300);
})