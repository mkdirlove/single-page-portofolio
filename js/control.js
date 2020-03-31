$(document).ready(function () {

	// <!-- #################### HOME NAVIGATION CONTROL #################### -->
	$('#homeNav').click(function () {

		// Set loading to true by removing hide class
		$('#loading').removeClass('hide');

		// set the time in seconds to show Home page
		setTimeout(function () {

			// Remove active class to link except target link
			$('#aboutNav').removeClass('active');
			$('#educationNav').removeClass('active');
			$('#contactNav').removeClass('active');

			// show Homepage
			$('#home').show();

			// Hide other pages
			$('#about').hide();
			$('#education').hide();
			$('#contact').hide();

			// Change site title
			$('title').text('Sandra Loudez - Portfolio');

			// set all link color to white
			$('.naviagtion-links li a').css('color', '#fff');

			// set the background color of hamburger menu
			$('.burger div').css('background', '#fff');

			// Add active class to the target link
			$('#homeNav').addClass('active');

			// Hide the right grid. NOTE: this is for small/mobile screen
			$('.right-grid').removeClass('displaynone');
		}, 2000);

		// set loading to false
		setTimeout(function () {
			$('#loading').addClass('hide');
		}, 3000);
	});

	// <!-- #################### ABOUT NAVIGATION CONTROL #################### -->

	$('#aboutNav').click(function () {

		// Set loading to true by removing hide class
		$('#loading').removeClass('hide');


		setTimeout(function () {

			// Remove active class to link except target link
			$('#homeNav').removeClass('active');
			$('#educationNav').removeClass('active');
			$('#contactNav').removeClass('active');

			// show About page
			$('#about').show();

			// Hide other pages
			$('#home').hide();
			$('#education').hide();
			$('#contact').hide();

			// Change site title
			$('title').text('About Me - Sandra Loudez');

			// set all link color
			$('.naviagtion-links li a').css('color', '#333');
			$('.naviagtion-links li a').addClass('navlinkcolor');

			// set the background color of hamburger menu
			$('.burger div').css('background', '#333');

			// Add active class to the target link
			$('#aboutNav').addClass('active');

			// Hide the right grid. NOTE: this is for small/mobile screen
			$('.right-grid').addClass('displaynone');
		}, 2000);

		setTimeout(function () {
			$('#loading').addClass('hide');
		}, 3000);

	});

	// <!-- #################### EDUCATION NAVIGATION CONTROL #################### -->
	$('#educationNav').click(function () {
		$('#loading').removeClass('hide');

		// set the time in seconds to show Home page
		setTimeout(function () {

			// Remove active class to link except target link
			$('#aboutNav').removeClass('active');
			$('#homeNav').removeClass('active');
			$('#contactNav').removeClass('active');

			// show Education page
			$('#education').show();

			// Hide other pages
			$('#home').hide();
			$('#about').hide();
			$('#contact').hide();

			// Change site title
			$('title').text('Education - Sandra Loudez');

			// set all link color
			$('.naviagtion-links li a').css('color', '#333');
			$('.naviagtion-links li a').addClass('navlinkcolor');

			// set the background color of hamburger menu
			$('.burger div').css('background', '#333');

			// Add active class to the target link
			$('#educationNav').addClass('active');

			// Hide the right grid. NOTE: this is for small/mobile screen
			$('.right-grid').addClass('displaynone');
		}, 2000);

		setTimeout(function () {
			$('#loading').addClass('hide');
		}, 3000);
	});

	// <!-- #################### CONTACT NAVIGATION CONTROL #################### -->
	$('#contactNav').click(function () {
		$('#loading').removeClass('hide');

		// set the time in seconds to show Home page
		setTimeout(function () {

			// Remove active class to link except target link
			$('#homeNav').removeClass('active');
			$('#educationNav').removeClass('active');
			$('#aboutNav').removeClass('active');

			// show Contact page
			$('#contact').show();

			// Hide other pages
			$('#about').hide();
			$('#home').hide();
			$('#education').hide();

			// Change site title
			$('title').text('Contact - Sandra Loudez');

			// set all link color
			$('.naviagtion-links li a').css('color', '#333');
			$('.naviagtion-links li a').addClass('navlinkcolor');

			// set the background color of hamburger menu
			$('.burger div').css('background', '#333');

			// Add active class to the target link
			$('#contactNav').addClass('active');

			// Hide the right grid. NOTE: this is for small/mobile screen
			$('.right-grid').addClass('displaynone');
		}, 2000);

		setTimeout(function () {
			$('#loading').addClass('hide');
		}, 3000);
	});


	// <!-- ####################  NAVIGATION CONTROL #################### -->
	$('.naviagtion-links li a').click(function () {

		// reset form input css
		$('#email').css('border', '2px solid #ced4da');
		$('#fname').css('border', '2px solid #ced4da');
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

		// assign input value to a variable
		$('#fname').val('');
		$('#email').val('');
		$('#message').val('');

		// Remove css classes from overlay, navigation links and social icons
		$('.overlay').removeClass('overlayshow');
		$('.naviagtion-links').removeClass('navopen');
		$('.social-icons').removeClass('navopen');
	});

	// HAMBURGER MENU
	$('.burger').click(function () {
		$('.overlay').addClass('overlayshow');
		$('.naviagtion-links').addClass('navopen');
		$('.social-icons').addClass('navopen');
	});


	// CLOSE HAMBURGER MENU
	$('.navclose').click(function () {
		$('.overlay').removeClass('overlayshow');
		$('.naviagtion-links').removeClass('navopen');
		$('.social-icons').removeClass('navopen');
	});

	// CLOSE OVERLAY
	$('.overlay').click(function () {
		$(this).removeClass('overlayshow');
		$('.naviagtion-links').removeClass('navopen');
		$('.social-icons').removeClass('navopen');
	});

});