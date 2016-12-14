$(function(){
 //initiate
$(window).on('load',function(){
 $('.popup').css('right','20px');
})

//to close the popup
$('.close').click(function(){
  $('.popup').css('right','-420px');//$('.popup').hide() can be used to avoid animation
})
var path="images/";
//to chANGE image
$('button').on('click',function(){
  srcs1 = path+this.id+"1.jpg";//getting the id to set path to  image/{id}1.jpg
  srcs2 = path+this.id+"2.jpg";
  srcs3 = path+this.id+"3.jpg";
  $("#1").attr("src",srcs1); $("#4").attr("src",srcs1);
  $("#2").attr("src",srcs2);
  $("#3").attr("src",srcs3);

})

})