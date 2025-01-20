$(document).ready(function () {
  $(".footer-links-wrapper .col h3").on("click", function (e) {
    if ($(window).width() < 768) {
      let footerLinks = $(this).next("ul");

      if (footerLinks.is(":visible")) {
        footerLinks.slideUp();
      } else {
        footerLinks.slideDown();
      }
      $(this).toggleClass("expanded");
    }
  });
});
