$(document).ready(function() {

	var menu_click = 0;

	$('.menu-list').on('click', function(){

		$('.menu-list').removeClass('current');
		$(this).addClass('current');

	});

	//show menu phone

	$('.phone-menu').on('click', function() {

		var scrolltop = $(window).scrollTop();
		var topofheader = $(".title").offset().top;
		var div_title_height = $('.title').height();

		if ( $('.menu-header').css('display') == 'block') {
			
			if ( scrolltop > (topofheader + div_title_height - 50) ) {

				$('.navbar-default').css({
		       		'background': 'rgb(15, 15, 15)'
		   		});
		   	}

		   	else {

		   		function hide_navbar_bg () {
		   			$('.navbar-default').css({
		       			'background': 'transparent'
		   			});
		   		}

		   		setTimeout(hide_navbar_bg, 350)
		   	}
		}

		else {
			$('.navbar-default').css({
	       		'background': 'rgb(15, 15, 15)'
	   		});
		}

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

			    if ( scrolltop > (topofheader - 250) ) {
					
					$('.current').removeClass('current');
			       	$('#aboutlink').addClass('current');
			    }

			    if ( scrolltop > (topofheader + div_about_height + div_pfolio_height - 450) ) {
					
					$('.current').removeClass('current');
			       	$('#portfoliolink').addClass('current');
			    }

			    if ( scrolltop > (topofheader + div_about_height + div_pfolio_height + div_contact_height - 100) ) {
					
					$('.current').removeClass('current');
			       	$('#contactlink').addClass('current');
			    }
			};

		};

	    //header on scroll

    	var div_title_height = $('.title').height();

	    if ( scrolltop > (topofheader + div_title_height - 50) ) {

	    	$('.navbar-default').css({
	       		'background': 'rgb(15, 15, 15)'
	   		});
	   	}

	    else {
	    	if ( ($('.phone-menu').css('display') == 'block') && ( $('.menu-header').css('display') == 'block') ) {
	    		
	    		$('.navbar-default').css('background', 'rgb(15, 15, 15)');
	    	}

	    	else {
	    		$('.navbar-default').css('background', 'transparent');
	    	}    
	    }

	});

	//Click/Scroll Function

	function goToByScroll(id){

		var menu_click = 1;
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