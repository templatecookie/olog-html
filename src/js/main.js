$(document).ready(function () {
  //seletor
  $('select').niceSelect();

  // Sticky Menu
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 5) {
			$(".header-bottom").removeClass("sticky");
		} else {
			$(".header-bottom").addClass("sticky");
		}
	});
  
  //testimonial_slider
  $('.features-active').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 2000,
    prevArrow: '.features-wrapper .prev-arrow',
    nextArrow: '.features-wrapper .next-arrow',
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  //Customersreview Slider
  $('.customersreview-active').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    autoplaySpeed: 2000,
    prevArrow: '.customersreview-wrapper .prev-arrow',
    nextArrow: '.customersreview-wrapper .next-arrow',
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  
  //Number Picker
  $(".wan-spinner-4").WanSpinner({
    inputWidth: 100
  }).css("border-color", "#C0392B");


  //Product Details Slider
  $("#exzoom").exzoom({
    // thumbnail nav options
    "navWidth": 60,
    "navHeight": 60,
    "navItemNum": 5,
    "navItemMargin": 7,
    "navBorder": 0,
    // autoplay
    "autoPlay": false,
    // autoplay interval in milliseconds
    "autoPlayTimeout": 2000

  });


  //Active size
  $('#sizes li').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
  });


  //Active color
  $('#colors li').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
  });


	// sticky menu 
  var $window = $(window);
  var $fh = $('header')

// Sticky Menu
  $window.on('scroll', function () {
      var $offset = $(this).scrollTop();
      if ($offset > .5) {
          $fh.addClass('sticky');
      } else {
          $fh.removeClass('sticky');
      }
  });


  // scrollToTop
  $.scrollUp({
    scrollName: 'scrollUp', // Element ID
    topDistance: '300', // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: 'fade', // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: '<i class="fas fa-angle-up"></i>', // Text for element
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });


});
