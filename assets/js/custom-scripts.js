$(document).ready(function () {
  'use strict';

  //===== Poratfolio Style 3 =====*/
  if ($('.port-box3').length > 0) {
    $('.port-box3').on('mousemove',function(e) {
      $('.port-sticky-info').offset({
        left: e.pageX + 2,
        top: e.pageY + 2
      });
    });
  }

  //===== Width =====//
  var width = window.innerWidth;

  //===== Active Class =====//
  $(window).on('hashchange', function() {
    let hash = window.location.hash;
    $('.one-page-nav li a').parent('li').removeClass('active');
    $('.one-page-nav li a[href=\"' + hash + '\"]').parent('li').addClass('active');
  });

  //===== Menu Dropdown =====//
  $(".menu-btn").on("click", function () {
    $(".menu-wrap").addClass("active");
    return false;
  });

  $(".menu-cls-btn").on("click", function () {
    $(".menu-wrap").removeClass("active");
    return false;
  });

  //===== Header Search =====//
  $('.search-btn').on('click', function () {
    $('.search-wrap').addClass('active');
    return false;
  });
  $('.search-cls-btn').on('click', function () {
    $('.search-wrap').removeClass('active');
    return false;
  });

  //===== Wow Animation Setting =====//
  if ($(".wow").length > 0) {
    var wow = new WOW({
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       0,          // default
      mobile:       true,       // default
      live:         true        // default
    }); 

    wow.init();
  }

  //===== Responsive Header =====//
  $('.rspn-mnu-btn').on('click', function () {
    $('.rsnp-mnu').addClass('slidein');
    return false;
  });
  $('.rspn-mnu-cls').on('click', function () {
    $('.rsnp-mnu').removeClass('slidein');
    return false;
  });
  $('.menu-wrap li.menu-item-has-children > a').on('click', function () {
    $(this).parent().siblings('li').children('ul').slideUp();
    $(this).parent().siblings('li').removeClass('active');
    $(this).parent().children('ul').slideToggle();
    $(this).parent().toggleClass('active');
    return false;
  });

  //===== Scrollbar =====//
  if ($('.menu-wrap > ul').length > 0) {
    var ps = new PerfectScrollbar('.menu-wrap > ul');
  }

  //===== Select =====//
  if ($('.lang-slct > select, .slc-wp > select').length > 0) {
    $('.lang-slct > select, .slc-wp > select').selectpicker();
  } 

  //===== Sticky Sidebar =====//
  if(width > 800) {
    if ($('.port-detail-wrap > div.row > div, .blog-detail-wrap > div.row > div').length > 0) {
      $('.port-detail-wrap > div.row > div, .blog-detail-wrap > div.row > div').theiaStickySidebar({
        additionalMarginTop: 60,
        additionalMarginBottom: 60
      });
    }
  }

  //===== Scroll Function =====//
  if ($.isFunction($.fn.onePageNav)) {
    $('.one-page-nav, .one-page-nav2').onePageNav();
  }

  //===== Counter Up =====//
  if ($.isFunction($.fn.counterUp)) {
    $('.counter').counterUp({
      delay: 10,
      time: 2000
    });
  }

  //===== Count Down =====//
  if ($.isFunction($.fn.downCount)) {
    $('.countdown').downCount({
      date: '12/3/2021 12:00:00',
      offset: +5
    });
  }

  //===== LightBox =====//
  if ($.isFunction($.fn.fancybox)) {
    $('[data-fancybox],[data-fancybox="gallery"]').fancybox({});
  }

  //===== Slick Carousel =====//
  if ($.isFunction($.fn.slick)) {

    //=== Team Carousel ===//
    $('.team-caro').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
      fade: true,
      asNavFor: '.team-nav-caro'
    });

    $('.team-nav-caro').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      asNavFor: '.team-caro',
      dots: false,
      arrows: false,
      centerPadding: '0',
      focusOnSelect: true,
      vertical: true,
      responsive: [
      {
        breakpoint: 981,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          vertical: false
        }
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          vertical: false
        }
      }
      ]
    });

    //=== Team Carousel 2 ===//
    $('.team-caro2').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      centerPadding: '0',
      focusOnSelect: true,
      responsive: [
      {
        breakpoint: 981,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true
        }
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
      ]
    });

    //=== Testimonials Carousel ===//
    $('.testi-caro').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      fade: true,
      centerPadding: '0',
      focusOnSelect: true,
      responsive: [
      {
        breakpoint: 981,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      ]
    });

    //=== Price Carousel ===//
    $('.price-caro').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      fade: false,
      centerPadding: '0',
      focusOnSelect: true,
      responsive: [
      {
        breakpoint: 981,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      ]
    });

    //=== Featured Area Carousel ===//
    $('.feat-caro').slick({
      arrows: false,
      initialSlide: 0,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      autoplay: true,
      autoplaySpeed: 5000,
      cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
      speed: 5000,
      draggable: true,
      dots: false,
      pauseOnDotsHover: true,
      pauseOnFocus: false,
      pauseOnHover: false
    });

    //=== Team Carousel 3 ===//
    $('.team-caro3').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
      centerPadding: '0',
      focusOnSelect: true,
      responsive: [
      {
        breakpoint: 981,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
      ]
    });
  }

}); //===== Document Ready Ends =====//

jQuery(window).on('load',function(){
  'use strict';

  //===== Onpage Menu =====//
  var sec_height = $('#about').innerHeight();
  $(window).on('scroll',function () {
    var scroll = $(window).scrollTop();
    if (scroll >= sec_height) {
      $('.one-page-nav2').addClass('active');
    } else {
      $('.one-page-nav2').removeClass('active');
    }
  });

  //===== Popup Script =====//
  function delay(){
    $(".subscribe-popup-wrap").fadeIn();
  };
  window.setTimeout( delay, 3000 );

  $(".popup-cls-btn").on("click", function () {
    $(this).parent().parent().parent().fadeOut();
  });

  //===== Header =====//
  var menu_height = $('header').innerHeight();
  $(window).on('scroll',function () {
    var scroll = $(window).scrollTop();
    if (scroll >= menu_height) {
      $('.sticky-header').addClass('active');
    } else {
      $('.sticky-header').removeClass('active');
    }
  });

  //===== Isotope =====//
  if (jQuery('.fltr-itm').length > 0) {
    if (jQuery().isotope) {
      var jQuerycontainer = jQuery('.masonry'); // cache container
      jQuerycontainer.isotope({
        itemSelector: '.fltr-itm',
        columnWidth: .1
      });
      jQuery('.fltr-btns a').on('click',function () {
        var selector = jQuery(this).attr('data-filter');
        jQuery('.fltr-btns li').removeClass('active');
        jQuery(this).parent().addClass('active');
        jQuerycontainer.isotope({ filter: selector });
        return false;
      });
      jQuerycontainer.isotope('layout'); // layout/layout
    }

    jQuery(window).resize(function () {
      if (jQuery().isotope) {
        jQuery('.masonry').isotope('layout'); // layout/relayout on window resize
      }
    });
  }
});//===== Window onLoad Ends =====//