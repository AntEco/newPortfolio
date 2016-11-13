$(document).ready(function() {

//smooth scrolls to link without changing the url
$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000);
        return false;
        }
      }
    });
  });
//fade in content on landing
$("#helloContent1").fadeIn(2000).promise().done(function() {
    $('#helloContent2').fadeIn(2000);
});

})