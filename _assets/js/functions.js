// mohammed elzanaty
var $window = $(window);
var headerContainerHeight = $(".bird-box").height();

$window.scroll(function() {
  var wScroll = $(this).scrollTop();
  if (wScroll <= headerContainerHeight) {
    $(".logo").css({
      transform: "translate(0px, " + wScroll / 2 + "%)"
    });
    $(".back-bird").css({
      transform: "translate(0px, -" + wScroll / 20 + "%)"
    });
    $(".fore-bird").css({
      transform: "translate(0px, -" + wScroll / 50 + "%)"
    });
  }

  // Landing Element
  var target = $(".clothes-pics").offset().top - $window.height() / 1.5;
  var clothesFigure = $(".clothes-pics figure");
  if (wScroll > target) {
    clothesFigure.each(function(index) {
      setTimeout(function() {
        clothesFigure.eq(index).addClass("is-showing");
      }, 150 * (index + 1));
    });
  }

  //  Mouse movements
  var largeWindowTop = $(".large-window").offset().top;
  if (wScroll > largeWindowTop - $window.height()) {
    let opacity =
      (wScroll - (largeWindowTop - $window.height() / 2)) / (wScroll / 5);
    $(".window-tint").css({
      opacity: opacity
    });

    $(".large-window").css({
      "background-position": "center " + (wScroll - largeWindowTop) + "px"
    });
  }
});

new WOW().init();
