$(document).ready(function() {

	$('menu').click(function() {

		$(this).toggleclass('fa-times');

		$('header').toggleclass('toggle'); 

	});

	$('window').on('scroll load', function() {

		$('menu').removeclass('fa-times');

		$('header').removeclass('toggle');

		if($(window).scrollTop()>0) {
			$('.top').show();

		} else {
			$('.top').show();
		}

	});

	//smooth scrolling 

	$('a[href*="#"]').on('click',function(e) {

		e.preventDefault();

		$('html, body').animate({

			scrollTop : $($(this).attr('href')).top,
			},
			500,
			'linear',
			);

	});


});