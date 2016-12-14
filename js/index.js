$(function(){
 //initiate popup
$(window).on('load',function(){
 $('.popup').css('right','20px');
})

//to close the popup
$('.close').click(function(){
  $('.popup').css('right','-420px');//$('.popup').hide() can be used to avoid animation
})


//making the button template
var button_id = ['h','n','b','r','g','p'],
buttonTemplate = _.template("<button id='<%= btn %>' class='btn btn-default'>\"<%= btn %>\" set</button>&nbsp;"),
content ='';
//iterate to make all buttons
_.each(button_id,function(btn,index,button_id){
content += buttonTemplate({
  btn : btn
});
});

$("#firstButton").html(content);//end of buttonTemplate

//popup template 
noImage=['1','2','3','4'];
const startTag = "<div class='col-md-6'>",endTag = "</div>",
labelContent = "<div class='label_c pull-left'><h5><b>Cotton white Dresses</b></h5>see more</div>";
imageTemplate = _.template("<img id='<%= u %>' src='images/r<%= imgNo %>.jpg' class='img-responsive pull-left img-width'>");
imageContent =""+startTag;

//iterate to make hte imageContent
_.each(noImage,function(imgNo,index,noImage){
  if(imgNo == 3){
imageContent += labelContent + endTag + startTag;
  }
  if(imgNo == 4){
  imgNo = 1;//since there is no fourth image,sets to 1
}
imageContent += imageTemplate({
imgNo : imgNo,
u : index + 1 //sets the id for the image
})

});//end of iteration

imageContent += labelContent + endTag;//finishing the content

$('.popup-area').html(imageContent);//end of popupTemplate

var path="images/";
// template for p1
const pContent = "<div class='col-md-6 col-md-offset-3'><img class='img-responsive pull-left' src='"+path+"p1.jpg' >"+ labelContent +endTag;


//to change image dynamically
$('button').on('click',function(){
  if(this.id == 'p'){
    $('.popup-area').html(pContent);
  }else{
    $('.popup-area').html(imageContent); //to remove the pContent if it is there
      //changing the path of the image
      for (i = 0; i <= noImage.length; i++) {
          if(i != 4) 
          $("#"+i+"").attr('src',path+this.id+i+".jpg");
          else
          $("#"+i+"").attr('src',path+this.id+"1.jpg");
        }
  }
 
});

})