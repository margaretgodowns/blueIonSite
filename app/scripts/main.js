$(document).ready(function(){

  $(".col-md-4").find("a").click(function(){
    event.preventDefault();
    $(this).parent().siblings().toggleClass("hidden");
  })

});
