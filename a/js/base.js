$(document).ready(function() {

	$('.menu-list').on('click', function(){

		$('.menu-list').removeClass('current');
		$(this).addClass('current');

	})

	//Click/Scroll Function

	function goToByScroll(id){
		id = id.replace("link", "");

		$('html,body').animate({
		scrollTop: $("#"+id).offset().top},
		'slow');
		}

	//$(".nav_menu_div > ul > li > a").click(function(e) { 
	$(".header-text").click(function(e) { 
	// Prevent a page reload when a link is pressed
	e.preventDefault(); 
	// Call the scroll function
	goToByScroll($(this).attr("id"));           
	});

	$(".rsvp_ow_link").click(function(e) { 
	// Prevent a page reload when a link is pressed
	e.preventDefault(); 
	// Call the scroll function
	goToByScroll($(this).attr("id"));           
	});

})