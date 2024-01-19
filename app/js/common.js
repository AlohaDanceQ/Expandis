$(function () {

  $('.header__burger').click(function (event) {
    $('.header__burger,.header__mobile').toggleClass('active');
    $('body').toggleClass('lock');
  });

  $('.work-slider').slick({})
  var helpers = {
    addZeros: function (n) {
      return (n < 10) ? '0' + n : '' + n;
    }
  };

  function sliderInit() {
    var $slider = $('.works__slider');
    $slider.each(function () {
      var $sliderParent = $(this).parent();
      $(this).slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        speed: 800,
        responsive: [
          {
            breakpoint: 1250,
            settings: {
              slidesToShow: 1,
            }
          },
        ]
      });

      if ($(this).find('.works__slide').length > 1) {
        $(this).siblings('.slides-numbers').show();
      }

      $(this).on('afterChange', function (event, slick, currentSlide) {
        $sliderParent.find('.slides-numbers .slide-active').html(helpers.addZeros(currentSlide + 1));
      });

      var sliderItemsNum = $(this).find('.slick-slide').not('.slick-cloned').length;
      $sliderParent.find('.slides-numbers .total').html(helpers.addZeros(sliderItemsNum));

    });

    //   $('.slick-next').on('click', function () {
    //     console.log('test');
    //     $('.slider-holder').slick('slickGoTo', 5);
    // });
  };

  sliderInit();

  if (window.innerWidth <= 1250) {


    function sliderBlogInit() {
      var $slider = $('.blog__items');
      $slider.each(function () {
        var $sliderParent = $(this).parent();
        $(this).slick({
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          arrows: true,
          speed: 800,
          responsive: [
            {
              breakpoint: 750,
              settings: {
                slidesToShow: 1,
                dots: true,
              }
            },
          ]
        });

        if ($(this).find('.blog__item').length > 1) {
          $(this).siblings('.slides-numbers').show();
        }

        $(this).on('afterChange', function (event, slick, currentSlide) {
          $sliderParent.find('.slides-numbers .slide-active').html(helpers.addZeros(currentSlide + 1));
        });

        var sliderItemsNum = $(this).find('.slick-slide').not('.slick-cloned').length;
        $sliderParent.find('.slides-numbers .total').html(helpers.addZeros(sliderItemsNum));

      });

      //   $('.slick-next').on('click', function () {
      //     console.log('test');
      //     $('.slider-holder').slick('slickGoTo', 5);
      // });
    };

    sliderBlogInit();
  }

  $(document).scroll(function (e) {
    $(window).scrollTop() > 50 ? $('.header').addClass('header-bg') : $('.header').removeClass('header-bg');
  });

});

jQuery(function ($) {
  $('a[href*="#"]').on('click.smoothscroll', function (e) {
    var hash = this.hash, _hash = hash.replace(/#/, ''), theHref = $(this).attr('href').replace(/#.*/, '');
    if (theHref && location.href.replace(/#.*/, '') != theHref) return;
    var $target = _hash === '' ? $('body') : $(hash + ', a[name="' + _hash + '"]').first();
    if (!$target.length) return;
    e.preventDefault();
    $('html, body').stop().animate({ scrollTop: $target.offset().top - 0 }, 800, 'swing', function () {
      window.location.hash = hash;
    });
  });
});


window.addEventListener('load', function () {
  //preloader script
  let preloaderConteiner = document.querySelector('.preloader-conteiner');
  let app = document.querySelector('.app')
  setTimeout(() => {
    preloaderConteiner.classList.add('hidePreloader')
    app.style.display = "block"

  }, 200)
});