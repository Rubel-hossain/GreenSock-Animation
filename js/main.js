(function($) {
    
	var img = $('img');
    var h2 = $("h2");
    var h1 = $("h1");
    var intro = $(".intro");
    var ListItem = $("ul li");
    var buttons = $("button"); 
    var lt = new TimelineLite();

    lt
    .from(h1,0.3,{ y: -15,autoAlpha: 0, ease: Power1.easeOut},)
    .add("intro")
    .from(intro, 1 , { y: -15,autoAlpha: 0, ease: Power1.easeOut})
    .from(img, 1 , { y: -15,autoAlpha: 0, ease: Power1.easeOut})
    .from(h2, 1 , { y: -15,autoAlpha: 0, ease: Power1.easeOut})
    .from(ListItem, 1 , { y: -15,autoAlpha: 0, ease: Power1.easeOut})
    .staggerFromTo(buttons, 0.2, 
        {autoAlpha: 0, cycle: { x: [50,-50]}, scale: [1.1,-.8]},
        {autoAlpha: 1, x: -20, ease: Power1.easeOut},
        0.1);


    $("#btnPlay").on("click", function(){
        lt.play();
    });
    $("#btnPause").on("click", function(){
        lt.pause();
    });
    $("#btnResume").on("click", function(){
        lt.resume();
    });
    $("#btnReverse").on("click", function(){
        lt.reverse();
    });

    $("#btnSpeedUp").on("click", function(){
        lt.timeScale(10);
    });
    $("#btnSpeedDown").on("click", function(){
        lt.timeScale(0.5);
    });
    $("#btnSeek").on("click", function(){
        lt.seek(1);
    });
    $("#btnProgress").on("click", function(){
        lt.progress(0.5);
    });
    $("#btnRestart").on("click", function(){
        lt.restart();
    });


})(jQuery);