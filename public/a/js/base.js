$(document).ready(function() {

	var menu_click = 0;
	console.log(menu_click);

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

		setTimeout(change_menu_current, 500);

		var scrolltop = $(window).scrollTop();
		var topofheader = $(".title").offset().top;
		var div_about_height = $('.about-section').height();
		var div_pfolio_height = $('.portfolio-section').height();
		var div_contact_height = $('.contact-section').height();

		//change current class on menu

		function change_menu_current() {

			if ( menu_click == 0 ) {

			    if ( $(window).scrollTop() > (topofheader - 250) ) {
					
					$('.current').removeClass('current');
			       	$('#aboutlink').addClass('current');
			    }

			    if ( $(window).scrollTop() > (topofheader + div_about_height + div_pfolio_height - 350) ) {
					
					$('.current').removeClass('current');
			       	$('#portfoliolink').addClass('current');
			    }

			    if ( $(window).scrollTop() > (topofheader + div_about_height + div_pfolio_height + div_contact_height - 100) ) {
					
					$('.current').removeClass('current');
			       	$('#contactlink').addClass('current');
			    }
			};

		};

	    //header on scroll

	    if ( $('.phone-menu').css('display') == 'none' ) {

	    	var div_title_height = $('.title').height();

	    	if ( $(window).scrollTop() > (topofheader + div_title_height - 50) ) {
	       		$('.navbar-default').css({
	       			'background': '#191919'
	   			});
	   		}

	    	else {
	    		$('.navbar-default').css('background', 'transparent');    
	    	}

		};
	});

	//Click/Scroll Function

	function goToByScroll(id){

		var menu_click = 1;
		console.log(menu_click)
		setTimeout( menu_click_off, 1000);

		id = id.replace("link", "");

		$('html,body').animate({
		scrollTop: $("#"+id).offset().top},
		'slow');

		function menu_click_off() {
			var menu_click = 0;
		}

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