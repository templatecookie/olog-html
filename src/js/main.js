$(document).ready(function () {

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
  
  //seletor
  $('select').niceSelect();

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

  //Number Picker
  $(".wan-spinner-4").WanSpinner({
    inputWidth: 100
  }).css("border-color", "#C0392B");

  //Active size
  $('#sizes li').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
  });

  //Active color
  $('#colors li').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
  });


});
