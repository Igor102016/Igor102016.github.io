$(document).ready(function(){

	// Header menu anchors smooth scroll

	$(document).on("click",".nav-menu li a", function(e) {
	    e.preventDefault();
	    var id  = $(this).attr('href'),
	    top = $(id).offset().top;
	    $('body,html').animate({scrollTop: top}, 700);
	});

	// Slider
	//
	$('.main-slider').slick({
		slidesToShow: 1,
		infinite: true,
		arrows: true,
		responsive: [
		    {
		      breakpoint: 720,
		      settings: {
		        arrows: false
		      }
		    }
	   ]
	});

	// Modal control

	$(document).on('click', '[data-toggle="modals"]', function(e){

	  	e.preventDefault();
		var el_selector = $(this).attr('data-target');
	  	$(el_selector).fadeIn();

	});

	$(document).on('click', '.modals .close-modal', function(e){

	  	e.preventDefault();
	  	$(this).closest('.modals').fadeOut();

	});

	// Mobile button toggle

	$('.mob-menu-icon').on('click' , function() {
		$(this).toggleClass('open');
		$('.nav-menu').slideToggle();
	});
});

