$(document).ready(function() {

	$('.menu-list').on('click', function(){

		$('.menu-list').removeClass('current');
		$(this).addClass('current');

	});

	//load header image
	$(".title").load(function() {
  		alert('loaded');
	})

	//show menu phone

	$('.phone-menu').on('click', function(){
		$('.menu-header').slideToggle('slow');
	})

	$(window).scroll(function() {

		var scrolltop = $(window).scrollTop();
		var portfolioOffset = $('#portfolio').offset().top;
		var portfoliodist = (portfolioOffset - scrolltop + 700);

	    if (scrolltop < portfoliodist) {

	       $('.current').removeClass('current');
	       $('#aboutlink').addClass('current');

	    }

	    if (scrolltop >= portfoliodist) {

	    	$('.current').removeClass('current');
	    	$('#portfoliolink').addClass('current');
	    }

	    if (scrolltop >= 1650) {

	    	$('.current').removeClass('current');
	    	$('#contactlink').addClass('current');
	    }

	});

	//Click/Scroll Function

	function goToByScroll(id){

		id = id.replace("link", "");

		$('html,body').animate({
		scrollTop: $("#"+id).offset().top},
		'slow');
		}

	$(".menu-list").click(function(e) {

		if ($('.menu-list').css('float') == 'none') {

			$('.menu-header').slideToggle();

		}
	// Prevent a page reload when a link is pressed
		e.preventDefault(); 
	// Call the scroll function
		goToByScroll($(this).attr("id"));           
		});

		$(".logo").click(function(e) { 
	// Prevent a page reload when a link is pressed
		e.preventDefault(); 
	// Call the scroll function
		goToByScroll($(this).attr("id"));           
	});

})