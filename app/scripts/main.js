$(document).ready(function(){

  $(".blogSection").find("a").click(function(){
    event.preventDefault();
    $(".blogSection").siblings().toggleClass("hidden");

    //if/then statement?
  });


  $(".skateboard").tooltip({
    "placement":"top",
  });
});
