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

  gsap.registerPlugin(ScrollTrigger);
  const sections = document.querySelectorAll(".scroll-section");

  sections.forEach((section, index) => {
    gsap.fromTo(
      section,
      { x: index % 2 === 0 ? "-30%" : "30%" },
      {
        x: "30%", // End position
        scrollTrigger: {
          trigger: section,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
      }
    );
  });
})(jQuery);
