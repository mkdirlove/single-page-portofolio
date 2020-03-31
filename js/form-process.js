$(document).ready(function () {

	// set form error text to red
	$('#form-error').css('color', 'red');

	$(document).on('submit', '#my-form', function (event) {
		event.preventDefault();

		// assign input value to a variable
		var fullname = $('#fname').val();
		var email = $('#email').val();
		var message = $('#message').val();

		// reset form input css
		$('#fname').css('border', '2px solid #ced4da');
		$('#email').css('border', '2px solid #ced4da');
		$('#message').css('border', '2px solid #ced4da');

		// add and remove css classes for alert danger
		$('.alertdanger').addClass('hide');
		$('.alertdanger').removeClass('bounceOutRight');
		$('.alertdanger').removeClass('bounceInRight');

		// add and remove css classes for alert success
		$('.alertsuccess').addClass('hide');
		$('.alertsuccess').removeClass('bounceOutRight');
		$('.alertsuccess').removeClass('bounceInRight');

		// remove css classes for form input
		$('.fErr input').removeClass('shake');
		$('.eErr input').removeClass('shake');
		$('.mErr textarea').removeClass('shake');
		$('.form-error').removeClass('shake');

		// Form validations
		if (fullname.length == 0 || email.length == 0 || message.length == 0) {

			// Remove or Add classes to alert error
			$('.alertdanger').removeClass('hide');
			$('.alertdanger').addClass('bounceInRight');

			// error text
			$('#form-error').text('Fill out all fields');

			// set form input css border to red
			$('#fname').css('border', '2px solid red');
			$('#email').css('border', '2px solid red');
			$('#message').css('border', '2px solid red');

			// Add a shake class 
			$('.fErr input').addClass('shake');
			$('.eErr input').addClass('shake');
			$('.mErr textarea').addClass('shake');
			return false;

			// E-mail validation
		} else if (!validateEmail(email)) {
			// Error text
			$('#form-error').text('Invalid email Address');

			// set form input css border to red
			$('#fname').css('border', '2px solid red');
			$('#email').css('border', '2px solid #ced4da');
			$('#message').css('border', '2px solid #ced4da');

			// Add a shake class 
			$('.eErr input').addClass('shake');
			$('.fErr input').removeClass('shake');
			$('.mErr textarea').removeClass('shake');

			// Remove or Add classes to alert error
			$('.alertdanger').removeClass('hide');
			$('.alertdanger').addClass('bounceInRight');
			return false;
		} else {
			// If no error,
			// show loeding
			$('#loading').removeClass('hide');

			// reset form input css
			$('#fname').css('border', '2px solid #ced4da');
			$('#email').css('border', '2px solid #ced4da');
			$('#message').css('border', '2px solid #ced4da');

			setTimeout(function () {

				// Hide loading
				$('#loading').addClass('hide');

				// empty the form fields after sumit
				$('#fname').val('');
				$('#email').val('');
				$('#message').val('');

				// add and remove css classes for alert danger
				$('.alertdanger').addClass('hide');
				$('.alertdanger').removeClass('bounceOutRight');
				$('.alertdanger').removeClass('bounceInRight');

				// add and remove css classes for alert success
				$('.alertsuccess').removeClass('hide');
				$('.alertsuccess').removeClass('bounceOutRight');
				$('.alertsuccess').addClass('bounceInRight');
				$('#form-success').text('Message sent Successfully');

				// remove css shake class
				$('.fErr input').removeClass('shake');
				$('.eErr input').removeClass('shake');
				$('.mErr textarea').removeClass('shake');
				$('.form-error').removeClass('shake');
				return true;
			}, 3000);

		}
	});

	$('.alert-close').click(function () {
		// add and remove css classes for alert danger
		$('.alertdanger').addClass('bounceOutRight');
		$('.alertdanger').removeClass('bounceInRight');

		// add and remove css classes for alert success
		$('.alertsuccess').addClass('bounceOutRight');
		$('.alertsuccess').removeClass('bounceInRight');
	});
});

// Function for email validation format
function validateEmail(email) {
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	return emailReg.test(email);
}