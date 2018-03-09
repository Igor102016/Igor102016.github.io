$(document).ready(function(){

	// Preloader

	$(window).load(function() {
	    setTimeout(function() {
	      $('#preloader').fadeOut('slow', function() {});
	    }, 1000);

	  });


	// Header scroll button

	$('.scroll-down-button a').on('click', function(event) {
		event.preventDefault();
		$('html, body').animate({ scrollTop: $('#header').outerHeight() }, 800);
		return false;
	});

	// Slider

    $('.slider').slick({
  		slidesToShow: 1,
  		  slidesToScroll: 1,
  		  responsive: [
  		     {
  		       breakpoint: 768,
  		       settings: {
  		         arrows: false,
  		         dots: true
  		       }
  		     }
  		 ]
    });

    // Filtering gallery

    var section_height = $('.our-latest-work').height();
  	$('.filter').on('click', 'a', function(event) {
  		event.preventDefault();

  		$('.our-latest-work').css('height', section_height + 'px');
  		var filter_item = $(this).attr('class');
  		var clear_filter = 'all';

  		if (filter_item !=clear_filter) {
  			$('.gallery-item').fadeOut();
  			$('.gallery-item').filter('.' + filter_item).fadeIn();
  		} else {
  			$('.gallery-item').fadeIn();
  		}

  	})


	// Mobile menu

	$('.mobile-search-trigger').on('click', function(event) {
		event.preventDefault();
	  	$('.search').slideToggle();
	  	$('.mobile-search-trigger').toggleClass('fade-element');
	});

	$(document).on('click', '.mobile-menu-icon', function() {
		$('#mySidenav').css('width', '250px');
		$('.mobile-menu-icon').css('display', 'none');
		$('.overlay').css('display', 'block');
	});
	$(document).on('click', '.closebtn', function() {
		$('#mySidenav').css('width', '0');
		$('.mobile-menu-icon').css('display', 'block');
		$('.overlay').css('display', 'none');
	});

	  // Scroll animations

  	$('h2, h2 + p').animated('fadeInRight');
  	$('.what-we-do-item').animated('bounceIn');
  	$('.gallery-item').animated('zoomIn');

  	$('.clients').waypoint(function() {

  			$('.client-item').each(function(index) {
  			var ths = $(this);
  			setInterval(function() {
  				ths.addClass('on');
  			}, 185*index);

  			});
  	}, {
  		offset: '60%'
  	});

	$('.team').waypoint(function() {

	 		$('.team-item').each(function(index) {
	  		var ths = $(this);
	  		setInterval(function() {
	  			ths.removeClass('item-off').addClass('item-on');
	  		}, 85*index);

	  		});

	  }, {
	  	offset: '60%'
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

	// Header menu anchors smooth scroll

	$(document).on("click",".header-menu li a", function(e) {
	    e.preventDefault();
	    var id  = $(this).attr('href'),
	    top = $(id).offset().top;
	    $('body,html').animate({scrollTop: top}, 1500);
	});

});

