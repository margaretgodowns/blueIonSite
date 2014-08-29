$(document).ready(function(){

  $(".blogSection").find("a").click(function(){
    event.preventDefault();
    $(this).closest(".blogSection").siblings().toggleClass("hidden");
    $(this).closest(".blogSection").toggleClass("expand");


  });

  $(document).ready(function() {
    $(document).scroll(function () {
        var scroll = $(this).scrollTop();
        var topDist = $(".container-fluid").position();
        if (scroll > topDist.top) {
            $('.topMenu').css({"position":"fixed","top":"0"});
        } else {
            $('.topMenu').css({"position":"static","top":"auto", "z-index": "500"});
        }
    });
});

  $(".sk8tNews").click(function(){
    event.preventDefault();
    console.log("working");
    $("html, body").animate({
      scrollTop: $(".news").offset().top
    } )
  });

  $(".skateBoarders").click(function(){
    event.preventDefault();
    console.log("working");
    $("html, body").animate({
      scrollTop: $(".skateboarders").offset().top
    } )
  });

  $(".boardDesign").click(function(){
    event.preventDefault();
    console.log("working");
    $("html, body").animate({
      scrollTop: $(".boards").offset().top
    } )
  });

  $(".contact").click(function(){
    event.preventDefault();
    console.log("working");
    $("html, body").animate({
      scrollTop: $(".contactUs").offset().top
    } )
  });


  $(".skateboard").tooltip({
    "placement":"top",
    "html": true,
  });
});
