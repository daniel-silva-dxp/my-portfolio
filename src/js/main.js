(function (window) {
  "use strict";
  // All Funtions
  fullscreen();
  preloader(true, "black", "green");
  slide();
  fullscreenLinks();
  scrollAnimate();

  $(window).scroll(function () {
    var scrollTop = $("html, body").scrollTop();
    console.log(scrollTop, $("#about").offset().top);
    animate(scrollTop);
    if (scrollTop >= 718) {
      $(".about .display h1").addClass("showIn");
      $(".about .display .wrap-title > div").addClass("fadeIn");
      $(".about .display .wrap-title p").addClass("fadeIn");
      $(".about-me").addClass("fadeIn");
      $(".about .container .title").addClass("delayFadeIn");
    } else {
      console.log("Bottom");
    }
  });
})(window);

/*------------------
Menu
-------------------*/
function fullscreen() {
  $(".open-menu").removeAttr("disabled");

  $("div.ds-nav--content").on("click", ".open-menu", function () {
    $(this)
      .addClass("close-menu")
      .removeClass("open-menu")
      .attr("disabled", "disabled");
    $(".container").addClass("blur");
    setTimeout(function () {
      $(".close-menu").removeAttr("disabled");
    }, 1100);
    $(".float-nav").show();
    setTimeout(function () {
      $(".float-nav").addClass("active");
    }, 100);
  });
  function fechaMenu() {
    $(".close-menu")
      .removeClass("close-menu")
      .addClass("open-menu")
      .attr("disabled", "disabled");
    $(".float-nav").removeClass("active");
    setTimeout(function () {
      $(".float-nav").hide();
      $(".open-menu").removeAttr("disabled");
    }, 1100);
  }
  $("div.ds-nav--content").on("click", ".close-menu", function () {
    fechaMenu();
  });
  $(".float-nav ul li").on("click", "a", function () {
    fechaMenu();
  });
}
/*----------------------------------------
        PRELOADER
  -----------------------------------------*/
function preloader(immune, background, color) {
  $("body").prepend(
    '<div class="preloader"><span class="loading-bar"></span><i class="radial-loader"></i></div>'
  );
  if (immune == true) {
    $("body > div.preloader").addClass("immune");
  }
  if (background == "white") {
    $("body > div.preloader").addClass("white");
  } else if (background == "black") {
    $("body > div.preloader").addClass("black");
  }
  if (color == "red") {
    $("body > div.preloader span.loading-bar").addClass("red-colored");
    $("body > div.preloader i.radial-loader").addClass("red-colored");
  } else if (color == "blue") {
    $("body > div.preloader span.loading-bar").addClass("blue-colored");
    $("body > div.preloader i.radial-loader").addClass("blue-colored");
  } else if (color == "green") {
    $("body > div.preloader span.loading-bar").addClass("green-colored");
    $("body > div.preloader i.radial-loader").addClass("green-colored");
  } else if (color == "yellow") {
    $("body > div.preloader span.loading-bar").addClass("yellow-colored");
    $("body > div.preloader i.radial-loader").addClass("yellow-colored");
  }
  $(document).ready(function () {
    setTimeout(function () {
      $(".preloader").fadeOut(1000);
    }, 1000);
    setTimeout(function () {
      $(".preloader").remove();
    }, 2000);
  });
}

/*------------------
Slide Cases
-------------------*/
function slide() {
  var slider_capa = new Swiper(".slide-capa-cases", {
      slidesPerView: 2.2,
      spaceBetween: 43,
      loop: !0,
      speed: 800,
      centeredSlides: !0,
      watchSlidesVisibility: !0,
      watchSlidesProgress: !0,
      pagination: { el: ".swiper-count", type: "fraction" },
      navigation: {
        nextEl: ".control-slide .swiper-btn-next",
        prevEl: ".swiper-btn-prev",
      },
    }),
    slider_about = new Swiper(".slide-about-cases", {
      spaceBetween: 40,
      direction: "vertical",
      loop: !0,
      speed: 800,
      pagination: { el: ".swiper-count", type: "fraction" },
      navigation: { nextEl: ".swiper-btn-next", prevEl: ".swiper-btn-prev" },
    }),
    slide_cases_mobile = new Swiper(".slide-cases-mb", {
      slidesPerView: 1.3,
      spaceBetween: 16,
      speed: 600,
      loop: !0,
      pagination: { el: ".swiper-count-mb", type: "fraction" },
      breakpoints: { 320: { slidesPerView: 1.3 }, 991: { slidesPerView: 2.8 } },
    });
}

/*------------------
Fullscreen Links
-------------------*/
function fullscreenLinks() {
  $("a.link").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        { scrollTop: $(hash).offset().top },
        1500,
        function () {
          window.location.hash = "";
        }
      );
    }
  });
}
/*------------------
Scroll Icon animate
-------------------*/
function scrollAnimate() {
  $(".scroll a").mouseover(function (event) {
    $(this).addClass("scroll-top");
    $(this).removeClass("scroll-down");
  });
  $(".scroll a").mouseout(function (event) {
    $(this).addClass("scroll-down");
    $(this).removeClass("scroll-top");
  });
}

function animate(px) {
  if (px >= 422) {
    $(".about header.title").addClass("fade-left--in");
  }
  if (px >= 523) {
    $(".ds-title").addClass("fade-in");
    $(".about-me").addClass("fade-in");
  }
  if (px >= 1055) {
    $(".cases header.title").addClass("fade-left--in");
  }
  if (px >= 1500) {
    $(".slide-cases-mb").addClass("fade-in");
    $(".area-slide").addClass("fade-in");
    $(".control-slide").addClass("fade-in");
  }
}
