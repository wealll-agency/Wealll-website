(function ($) {
  var banner_swiper = new Swiper(".gnt-banner-slider", {
    Infinity: true,
    effect: "fade",
    autoplay: true,
    draggable: true,
    speed: 2000,
    scrollbar: { el: ".swiper-scrollbar.banner-scrollbar", draggable: true },
    pagination: { el: ".swiper-pagination.banner-pagination", clickable: true },
  });
  jQuery(document).ready(function ($) {
    $(".f-link .f-title h4").on("click", function () {
      // Find the closest .f-link and then toggle the ul inside it
      $(this).closest(".f-link").find("ul").slideToggle();
    });
  });
})(jQuery);
