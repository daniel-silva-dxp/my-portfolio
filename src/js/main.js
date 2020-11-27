(function (window) {
  "use strict";
  // All Funtions
  Fullscreen();
  Slide();
  preloader(true, "black", "green");
})(window);

/*------------------
Menu
-------------------*/
function Fullscreen() {
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

function Slide() {
  var lastUpdate = new Date();
  window.addEventListener("wheel", function (e) {
    var thisUpdate = new Date();
    if (thisUpdate - lastUpdate < 750) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    lastUpdate = thisUpdate;

    var numBlocks = $("[data-slide]").length,
      $curBlock = $("[data-slide].active"),
      curBlockNum = $curBlock.data("slide");

    var delta = e.deltaY;
    if (delta < 0) {
      //scroll up

      if (curBlockNum != 1) {
        var $prevBlock = $curBlock.prev(),
          prevBlockNum = $prevBlock.data("slide");

        $curBlock.removeClass("active prev-slide").addClass("next-slide");
        $prevBlock.addClass("active").removeClass("prev-slide next-slide");
      }
    } else if (delta > 0) {
      //scroll down

      if (curBlockNum < numBlocks) {
        var $nextBlock = $curBlock.next(),
          nextEffect = $nextBlock.data("effect");

        $curBlock.removeClass("active next-slide").addClass("prev-slide");
        $nextBlock.addClass("active").removeClass("prev-slide next-slide");
      }
    }
  });
}
