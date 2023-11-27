"use strict";

(function ($) {
  "use strict";

  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });
  /* ----------------------------------------------------------- */

  /*  Fixed header
  /* ----------------------------------------------------------- */

  $(window).on('scroll', function () {
    var window_top = $(window).scrollTop() + 1;

    if (window_top > 50) {
      $('.site-navigation').addClass('menu_fixed header-white animated fadeInDown');
    } else {
      $('.site-navigation').removeClass('menu_fixed header-white animated fadeInDown');
    }
  });
  $(window).on('scroll', function () {
    var window_top = $(window).scrollTop() + 1;

    if (window_top > 50) {
      $('.scroll-to-top').addClass('reveal');
    } else {
      $('.scroll-to-top').removeClass('reveal');
    }
  }); // Counter

  $(document).on('ready', function () {
    $(".navbar-nav a,.js-scroll-trigger").on('click', function (event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function () {
          window.location.hash = hash;
        });
      } // End if

    });
  });


  // $('.testimonials-slides').owlCarousel({
  //   loop: true,
  //   dots: true,
  //   nav: false,
  //   center: true,
  //   autoplayHoverPause: true,
  //   autoplay: true,
  //   autoplayTimeout: 6000,
  //   responsiveClass: true,
  //   margin: 10,
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     576: {
  //       items: 1
  //     },
  //     768: {
  //       items: 1
  //     },
  //     1000: {
  //       items: 1
  //     },
  //     1200: {
  //       items: 3
  //     }
  //   }
  // });

  function toggleIcon(e) {
    $(e.target).prev('.panel-heading').find(".more-less").toggleClass('fa-minus fa-plus');
  }

  // $('.panel-group').on('hidden.bs.collapse', toggleIcon);
  // $('.panel-group').on('shown.bs.collapse', toggleIcon);
  /* ---------------------------------------------
         Contact Form
  --------------------------------------------- */

  var form = $('.contact__form'),
      message = $('.contact__msg'),
      form_data; // Success function

  function done_func(response) {
    message.fadeIn().removeClass('alert-danger').addClass('alert-success');
    message.text(response);
    setTimeout(function () {
      message.fadeOut();
    }, 2000);
    form.find('input:not([type="submit"]), textarea').val('');
  } // fail function


  function fail_func(data) {
    message.fadeIn().removeClass('alert-success').addClass('alert-success');
    message.text(data.responseText);
    setTimeout(function () {
      message.fadeOut();
    }, 2000);
  }

  form.submit(function (e) {
    e.preventDefault();
    form_data = $(this).serialize();
    $.ajax({
      type: 'POST',
      url: form.attr('action'),
      data: form_data
    }).done(done_func).fail(fail_func);
  });

  
})(jQuery);