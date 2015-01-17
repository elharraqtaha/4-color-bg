var videoElement = $("#videobcg")[0];


videoElement.play();


var $msg = $('#restartvideo'); 
$msg.css({
    top: (videoElement.offsetTop + ((videoElement.offsetHeight/2) - ($msg.height()/2))),
    left:(videoElement.offsetLeft + ((videoElement.offsetWidth/2) - ($msg.width()/2)))
});






videoElement.onended = function(e) {
    
    $msg.css({
    top: (videoElement.offsetTop + ((videoElement.offsetHeight/2) - ($msg.height()/2))),
    left:(videoElement.offsetLeft + ((videoElement.offsetWidth/2) - ($msg.width()/2)))
    }).addClass("show");
      
    
    var elem="#page-top .pattern";
     $('html,body').animate({
        scrollTop: $(elem).offset().top},
      'slow');
    
    
 };

 $msg.click(function(){
    videoElement.play();
     $msg.removeClass("show");
 });
 