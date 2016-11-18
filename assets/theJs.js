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

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var x = document.getElementsByClassName("projectTitle");
    if (n > x.length){
      slideIndex = 1
    }
    else if (n < 1){
      slideIndex = x.length
    };
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block";
    var y = document.getElementsByClassName("projectDescribe");
    if (n > y.length){
      slideIndex = 1
    }
    else if (n < 1){
      slideIndex = y.length
    };
    for (i = 0; i < y.length; i++) {
        y[i].style.display = "none"; 
    }
    y[slideIndex-1].style.display = "block";
    var z = document.getElementsByClassName("project");
    if (n > z.length){
      slideIndex = 1
    }
    else if (n < 1){
      slideIndex = z.length
    };
    for (i = 0; i < z.length; i++) {
        z[i].style.display = "none"; 
    }
    z[slideIndex-1].style.display = "block"; 
}

$("#prevArrow").click(function(){
    plusDivs(-1)
});

$("#nextArrow").click(function(){
  plusDivs(1)
});

var picIndex = 1;
showPics(picIndex);

function plusPics(n) {
  showPics(picIndex += n);
}

function currentPic(n) {
  showPics(picIndex = n);
}

function showPics(n) {
  var pics = document.getElementsByClassName("ffimage");
  var dots = document.getElementsByClassName("dot");
  if (n > pics.length) {picIndex = 1} 
  if (n < 1) {picIndex = pics.length}
  for (i = 0; i < pics.length; i++) {
      pics[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  pics[picIndex-1].style.display = "block"; 
  dots[picIndex-1].className += " active";
}

$(".prev").click(function(){
    plusPics(-1)
});

$(".next").click(function(){
    plusPics(1)
});

$(".dot").click(function(){
    currentPic(n)
});

})