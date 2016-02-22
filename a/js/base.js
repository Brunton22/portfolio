$(document).ready(function() {

	$('.menu-list').on('click', function(){

		$('.menu-list').removeClass('current');
		$(this).addClass('current');

	})

	//validate email

	function validateEmail(email) { 

		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    	
    	return re.test(email);
    }

	//contact email

	$('.form-button').on('click', function() {

		$('.alert').hide();

		var name = $('.name-form').val();
		var email = $('.email-form').val();
		var message = $('.message-form').val();

		if (name == "") {

			$('.name-error').show();
		}

		else if (email == "") {

			$('.no-email-error').show();
		}

		else if (message == "") {

			$('.no-message-error').show();
		}

		else {
  			if (validateEmail(email)) {
    			
    			$.ajax({
    				type: 'POST',
    				url: 'a/php/email.php',
    				data: {m_name: name, m_email: email, m_message: message },
    				success: function(data){
    					
    					$('.contact').val('');
    				}
    			})

  			} 

  			else {
    			
    			$('.invalid-error').show();
  			}
  			
  			return false;
		}

	})

	//portfolio items flip

	$('.portfolio-item-phone').flip();
	$('.front').css('position', 'relative');

	$('.portfolio-item-phone').on('click', function(){
		$(this).find('.portfolio-info-btn').hide().toggleClass('fa-info-circle fa-arrow-circle-left').delay(500).fadeIn();
	})

	//scroll class change

	$(window).scroll(function() {

		if ($('.portfolio-item-phone').css('display') == 'none') {   
		    var scroll = $(window).scrollTop();

		    if (scroll >= 500) {

		       $('.current').removeClass('current');
		       $('#aboutlink').addClass('current');

		    }

		    if (scroll >= 950) {

		    	$('.current').removeClass('current');
		    	$('#portfoliolink').addClass('current');
		    }

		    if (scroll >= 1650) {

		    	$('.current').removeClass('current');
		    	$('#contactlink').addClass('current');
		    }
		}
	});

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

	$(".logo").click(function(e) { 
	// Prevent a page reload when a link is pressed
	e.preventDefault(); 
	// Call the scroll function
	goToByScroll($(this).attr("id"));           
	});
})