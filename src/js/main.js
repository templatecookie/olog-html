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
});
