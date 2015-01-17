var videoElement = $("#videobcg")[0];


videoElement.play();

videoElement.onended = function(e) {
    alert("isfinished");
    var elem="#page-top .pattern";

       $('html,body').animate({
        scrollTop: $(elem).offset().top},
        'slow');
 };