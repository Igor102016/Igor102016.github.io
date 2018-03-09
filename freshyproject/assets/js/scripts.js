$(document).ready(function(){

   $('.product_slider').slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  autoplay: false,
	  autoplaySpeed: 6000,
	  responsive: [
    	{
      breakpoint: 1200,
      settings: {
      	arrows: false,
        centerPadding: '60px',
        slidesToShow: 3,
        slidesToScroll: 3,
        centerMode: true,
        infinite: true,
        dots: true
        }
      },
      {
        breakpoint: 830,
        settings: {
        arrows: false,
        centerPadding: '60px',
        slidesToShow: 2,
        slidesToScroll: 3,
        centerMode: true,
        infinite: true,
        dots: true
        }
    }]
	});
   $(document).on('click', 'header ul li.menu-icon', function() {
   		$('header ul li:not(.header_button)').toggleClass("mobile_menu");
   		$('header ul li').css('text-align', 'right');
   })

   var top_show = 500;
   var delay = 1000;

  $(document).scroll( function() {

     if ($(this).scrollTop() > top_show) {
            $('.top-button').fadeIn();
        } else {
            $('.top-button').fadeOut();
        }

   });

  $(document).on("click", ".top-button", function() {

        $('body, html').animate({
            scrollTop: 0
        }, delay);

    });



});
