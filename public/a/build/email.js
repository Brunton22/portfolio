var validator = require('validator');

	$('.form-button').on('click', function(){

		var con_email_add = $('#email').val();
		var con_name = $('#name').val();
		var con_message = $('#message').val();

		var valid = validator.isEmail(con_email_add);

		if ( (con_email_add == '') || (con_name == '') || (con_message == '') ){

		}

		else {

			if (valid != true){
				$('.invalid-error').show();
			}

			else {
				$('.email-sending').show();
				$('.non-r-alert-error').hide();
				$.get("../../../send", {from:con_email_add,name:con_name,text:con_message}, function(data){
					if (data == 'sent') {
						$('#email').val('');
						$('#name').val('');
						$('#message').val('');

						$('.email-sending').hide();
						$('.email-sent').show();
					}
					else if (data == 'error') {
						$('.email-sending').hide();
						$('.email-failed').show();

					}
				});
			};
		};
	});