
/*viewport hack for mobile browsers that hide elements behind the navigation bar */

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
/* end of hack */

const themeSwitch = document.querySelectorAll('#themeSwitch, #themSwitchFloating');

themeSwitch.forEach(item => {
  item.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
    item.classList.toggle('active-lang');
    if (document.body.classList.contains('light-theme')) {
      switchOnLight();
      localStorage.setItem("rajatasusual-theme", "light");
    } else {
      switchOffLight();
      localStorage.setItem("rajatasusual-theme", "dark");
    }
  })
});

let theme = localStorage.getItem('rajatasusual-theme');
if (theme != null && theme == 'light') {
  document.body.classList.toggle('light-theme');
  document.body.classList.toggle('dark-theme');
  themeSwitch.forEach(item => {
    item.classList.toggle('active-lang');
  });
  switchOnLight();
}

function switchOnLight() {
  $('#headerImage').attr('src', '/img/logo/redwood.png');
  $('#bannerImage').attr('src', '/img/logo/light_animated.gif');

  $('#top_bg').attr('src', '/img/logo/white.png');
  $('#banner').attr('src', '/img/logo/white.png');
  $('#floaterImage').attr('src', '/img/icons/light_menu.png');
  $('#infoFloaterImage').attr('src', '/img/logo/white.png');
}

function switchOffLight() {
  $('#headerImage').attr('src', '/img/logo/gold.png');
  $('#bannerImage').attr('src', '/img/logo/dark_animated.gif');

  $('#top_bg').attr('src', '/img/logo/black.png');
  $('#banner').attr('src', '/img/logo/black.png');
  $('#floaterImage').attr('src', '/img/icons/black_menu.png');
  $('#infoFloaterImage').attr('src', '/img/logo/black.png');
}

$(function () {

  "use strict";

  // swup js
  const options = {
    containers: ["#swup"],
    animateHistoryBrowsing: true
  };

  const swup = new Swup(options);

  // scrollbar
  Scrollbar.use(OverscrollPlugin);
  Scrollbar.init(document.querySelector('#scrollbar'), {
    damping: 0.05,
    renderByPixel: true,
    continuousScrolling: true,
  });

  var scrollBar2Exists = document.querySelector('#scrollbar2') !== null;

  if (scrollBar2Exists) {
    Scrollbar.init(document.querySelector('#scrollbar2'), {
      damping: 0.05,
      renderByPixel: true,
      continuousScrolling: true,
    });

    // page loading
    $(document).ready(function () {
      anime({
        targets: '.preloader .preloader-content',
        opacity: [0, 1],
        delay: 200,
        duration: 600,
        easing: 'linear',
        complete: function (anim) {

        }
      });
      anime({
        targets: '.preloader',
        opacity: [1, 0],
        delay: 2200,
        duration: 400,
        easing: 'linear',
        complete: function (anim) {
          $('.preloader').css('display', 'none');
        }
      });
    });

    var bar = new ProgressBar.Line(preloader, {
      strokeWidth: 1.7,
      easing: 'easeInOut',
      duration: 1400,
      delay: 750,
      trailWidth: 1.7,
      svgStyle: {
        width: '100%',
        height: '100%'
      },
      step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + ' %');
      }
    });

    bar.animate(1);

    // counters
    anime({
      targets: '.counter-frame',
      opacity: [0, 1],
      duration: 800,
      delay: 2300,
      easing: 'linear',
    });

    anime({
      targets: '.counter',
      delay: 1300,
      opacity: [1, 1],
      complete: function (anim) {
        $('.counter').each(function () {
          $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
          }, {
            duration: 2000,
            easing: 'linear',
            step: function (now) {
              $(this).text(Math.ceil(now));
            }
          });
        });
      }
    });

    // progressbars
    var bar = new ProgressBar.Circle(circleprog1, {
      strokeWidth: 7,
      easing: 'easeInOut',
      duration: 1400,
      delay: 2500,
      trailWidth: 7,
      step: function (state, circle) {
        circle.setText('C2');
      }
    });

    bar.animate(1);

    var bar = new ProgressBar.Circle(circleprog2, {
      strokeWidth: 7,
      easing: 'easeInOut',
      duration: 1400,
      delay: 2600,
      trailWidth: 7,
      step: function (state, circle) {
        circle.setText('C2');
      }
    });

    bar.animate(1);

    var bar = new ProgressBar.Circle(circleprog3, {
      strokeWidth: 7,
      easing: 'easeInOut',
      duration: 1400,
      delay: 2700,
      trailWidth: 7,
      step: function (state, circle) {
        circle.setText('A1');
      }
    });

    bar.animate(0.4);

    var bar = new ProgressBar.Line(lineprog1, {
      strokeWidth: 1.72,
      easing: 'easeInOut',
      duration: 1400,
      delay: 2800,
      trailWidth: 1.72,
      svgStyle: {
        width: '100%',
        height: '100%'
      },
      step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + ' %');
      }
    });

    bar.animate(.85);

    var bar = new ProgressBar.Line(lineprog2, {
      strokeWidth: 1.72,
      easing: 'easeInOut',
      duration: 1400,
      delay: 2900,
      trailWidth: 1.72,
      svgStyle: {
        width: '100%',
        height: '100%'
      },
      step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + ' %');
      }
    });

    bar.animate(.75);

    var bar = new ProgressBar.Line(lineprog3, {
      strokeWidth: 1.72,
      easing: 'easeInOut',
      duration: 1400,
      delay: 3000,
      trailWidth: 1.72,
      svgStyle: {
        width: '100%',
        height: '100%'
      },
      step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + ' %');
      }
    });

    bar.animate(.80);

    var bar = new ProgressBar.Line(lineprog4, {
      strokeWidth: 1.72,
      easing: 'easeInOut',
      duration: 1400,
      delay: 3100,
      trailWidth: 1.72,
      svgStyle: {
        width: '100%',
        height: '100%'
      },
      step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + ' %');
      }
    });

    bar.animate(.80);

    var bar = new ProgressBar.Line(lineprog5, {
      strokeWidth: 1.72,
      easing: 'easeInOut',
      duration: 1400,
      delay: 3200,
      trailWidth: 1.72,
      svgStyle: {
        width: '100%',
        height: '100%'
      },
      step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + ' %');
      }
    });

    bar.animate(1);
  }



  // Contact form
  $('.input').keyup(function () {
    if ($(this).val()) {
      $(this).addClass('active');
    } else {
      $(this).removeClass('active');
    }
  });

  $("#form").submit(function () {
    $.ajax({
      type: "POST",
      url: "/mail.php",
      data: $(this).serialize()
    }).done(function () {

      var tl = anime.timeline({
        easing: 'easeOutExpo',
      });

      tl
        .add({
          targets: '.submit',
          opacity: 0,
          scale: .5,
        })
        .add({
          targets: '.success',
          scale: 1,
          height: '45px',
        })
    });
    return false;
  });

  // portfolio filter
  $('.filter a').on('click', function () {
    $('.filter .current').removeClass('current');
    $(this).addClass('current');

    var selector = $(this).data('filter');
    $('.grid').isotope({
      filter: selector
    });
    return false;
  });

  // masonry Grid
  $('.grid').isotope({
    filter: '*',
    itemSelector: '.grid-item',
    transitionDuration: '.6s',
  });

  // slider blog
  var swiper = new Swiper('.blog-slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 1400,
    autoplay: {
      delay: 4000,
    },
    autoplaySpeed: 5000,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.blog-swiper-next',
      prevEl: '.blog-swiper-prev',
    },
    breakpoints: {
      1500: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 1,
      },
    },
  });

  $('[data-fancybox="gallery"]').fancybox({
    animationEffect: "zoom-in-out",
    animationDuration: 600,
    transitionDuration: 1200,
    buttons: [
      "zoom",
      "share",
      "slideShow",
      "thumbs",
      "close"
    ],
  });

  $('[data-fancybox="avatar"]').fancybox({
    animationEffect: "zoom-in-out",
    animationDuration: 600,
    transitionDuration: 1200,
    buttons: [
      "zoom",
      "close"
    ],
  });

  $('[data-fancybox="recommendation"]').fancybox({
    animationEffect: "zoom-in-out",
    animationDuration: 600,
    transitionDuration: 1200,
    buttons: [
      "zoom",
      "slideShow",
      "thumbs",
      "close",
    ],
  });

  $.fancybox.defaults.hash = false;

  $('.map-overlay').on('click', function () {
    $(this).addClass('active');
  });

  $('.info-bar-btn, .info-float-image').on('click', function () {
    $('.info-bar').toggleClass('active');
    $('.menu-bar-btn').toggleClass('disabled');
  });

  $('.menu-bar-btn').on('click', function () {
    $('.menu-bar-btn , .menu-bar').toggleClass("active");
    $('.info-bar-btn').toggleClass('disabled');
  });

  $('.info-bar-btn , .menu-bar-btn, .info-float-image').on('click', function () {
    $('.content').toggleClass('active');
  });

  $('.curtain , .mobile-top-bar').on('click', function () {
    $('.menu-bar-btn , .menu-bar , .info-bar, .info-float-image , .content , .menu-bar-btn , .info-bar-btn').removeClass('active , disabled');
  });

  $('.menu-item').on('click', function () {
    if ($(this).hasClass('menu-item-has-children')) {
      $(this).children('.sub-menu').toggleClass('active');
    } else {
      $('.menu-bar-btn , .menu-bar , .info-bar , .content , .menu-bar-btn , .info-bar-btn, .info-float-image').removeClass('active , disabled');

      //making the menu item selected as active and adding subsequent label to division
      $('.main-menu .menu-item').removeClass('current-menu-item');
      $(this).addClass('current-menu-item');
      $('.current-page').text($('.current-menu-item a').text());
    }
  });

  $('.buttons-frame').on('click', function () {
    var target = $(this).children()[0].pathname;
    $('.main-menu .menu-item').removeClass('current-menu-item');
    $('.main-menu .menu-item a').each(function () {
      if ($(this)[0].pathname === target) {
        $(this).parent().addClass('current-menu-item');
        return;
      }
    });
    $('.current-page').text($('.current-menu-item a').text());
  });

  $('.current-page').text($('.current-menu-item a').text());

  // reinit
  document.addEventListener("swup:contentReplaced", function () {

    Scrollbar.use(OverscrollPlugin);
    Scrollbar.init(document.querySelector('#scrollbar'), {
      damping: 0.05,
      renderByPixel: true,
      continuousScrolling: true,
    });
    var scrollBar2Exists = document.querySelector('#scrollbar2') !== null;

    if (scrollBar2Exists) {
      Scrollbar.init(document.querySelector('#scrollbar2'), {
        damping: 0.05,
        renderByPixel: true,
        continuousScrolling: true,
      });
    }

    $("#form").submit(function () {
      $.ajax({
        type: "POST",
        url: "/mail.php",
        data: $(this).serialize()
      }).done(function () {

        var tl = anime.timeline({
          easing: 'easeOutExpo',
        });

        tl
          .add({
            targets: '.submit',
            opacity: 0,
            scale: .5,
          })
          .add({
            targets: '.success',
            scale: 1,
            height: '45px',
          })
      });
      return false;
    });

    // Masonry Grid
    $('.grid').isotope({
      filter: '*',
      itemSelector: '.grid-item',
      transitionDuration: '.6s',
    });

    $('.filter a').on('click', function () {
      $('.filter .current').removeClass('current');
      $(this).addClass('current');

      var selector = $(this).data('filter');
      $('.grid').isotope({
        filter: selector
      });
      return false;
    });

    anime({
      targets: '.counter-frame',
      opacity: [0, 1],
      duration: 800,
      delay: 300,
      easing: 'linear',
    });

    $('.counter').each(function () {
      $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
      }, {
        duration: 2000,
        easing: 'linear',
        step: function (now) {
          $(this).text(Math.ceil(now));
        }
      });
    });

    // slider blog
    var swiper = new Swiper('.blog-slider', {
      slidesPerView: 3,
      spaceBetween: 30,
      speed: 1400,
      autoplay: {
        delay: 4000,
      },
      autoplaySpeed: 5000,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.blog-swiper-next',
        prevEl: '.blog-swiper-prev',
      },
      breakpoints: {
        1500: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 1,
        },
      },
    });

    $('[data-fancybox="gallery"]').fancybox({
      animationEffect: "zoom-in-out",
      animationDuration: 600,
      transitionDuration: 1200,
      buttons: [
        "zoom",
        "slideShow",
        "thumbs",
        "close"
      ],
    });

    $('[data-fancybox="recommendation"]').fancybox({
      animationEffect: "zoom-in-out",
      animationDuration: 600,
      transitionDuration: 1200,
      buttons: [
        "zoom",
        "slideShow",
        "thumbs",
        "close",
      ],
    });

    $.fancybox.defaults.hash = false;

  })

});
