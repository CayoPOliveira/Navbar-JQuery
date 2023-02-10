$(document).ready(()=>{
  $('.sub-btn').on("click", function(){
    $(this).next(".sub-menu").slideToggle();
    $(this).find(".dropdown").toggleClass("rotate");
  })

  $(".menu-btn").on("click", function(){
    $(".side-bar").addClass("active");
    $(".menu-btn").hide();
  })

  $(".close-btn").on("click", function(){
    $(".side-bar").removeClass("active");
    $(".menu-btn").show();
  })
})