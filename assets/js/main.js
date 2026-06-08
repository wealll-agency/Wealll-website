(function ($) {
  "use strict";

  var $win = $(window),
    $header = $("header");
  var scrolledClass = "scrolled";

  function onScroll() {
    if ($win.scrollTop() > 80) {
      $header.addClass(scrolledClass);
      $(".mini-logo").removeClass("d-none");
      $(".brand-full").addClass("d-none");
    } else {
      $header.removeClass(scrolledClass);
      $(".mini-logo").addClass("d-none");
      $(".brand-full").removeClass("d-none");
    }
  }

  onScroll();
  $win.on("scroll resize", onScroll);

  

  
})(jQuery);


