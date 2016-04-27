(function(codefest){
    console.log('Get Ready!');

    var canvas = document.getElementById('viewport');
    canvas.width = 640;
    canvas.height = 480;
    var context = canvas.getContext('2d');
    context.fillRect(0, 0, canvas.width, canvas.height);

    var assets = [
        new codefest.Asset('assets/bird.png'),
        new codefest.Asset('assets/ceiling.png'),
        new codefest.Asset('assets/font_big_0.png'),
        new codefest.Asset('assets/font_big_1.png'),
        new codefest.Asset('assets/font_big_2.png'),
        new codefest.Asset('assets/font_big_3.png'),
        new codefest.Asset('assets/font_big_4.png'),
        new codefest.Asset('assets/font_big_5.png'),
        new codefest.Asset('assets/font_big_6.png'),
        new codefest.Asset('assets/font_big_7.png'),
        new codefest.Asset('assets/font_big_8.png'),
        new codefest.Asset('assets/font_big_9.png'),
        new codefest.Asset('assets/font_small_0.png'),
        new codefest.Asset('assets/font_small_1.png'),
        new codefest.Asset('assets/font_small_2.png'),
        new codefest.Asset('assets/font_small_3.png'),
        new codefest.Asset('assets/font_small_4.png'),
        new codefest.Asset('assets/font_small_5.png'),
        new codefest.Asset('assets/font_small_6.png'),
        new codefest.Asset('assets/font_small_7.png'),
        new codefest.Asset('assets/font_small_8.png'),
        new codefest.Asset('assets/font_small_9.png'),
        new codefest.Asset('assets/land.png'),
        new codefest.Asset('assets/medal_bronze.png'),
        new codefest.Asset('assets/medal_gold.png'),
        new codefest.Asset('assets/medal_platinum.png'),
        new codefest.Asset('assets/medal_silver.png'),
        new codefest.Asset('assets/pipe-down.png'),
        new codefest.Asset('assets/pipe.png'),
        new codefest.Asset('assets/pipe-up.png'),
        new codefest.Asset('assets/replay.png'),
        new codefest.Asset('assets/scoreboard.png'),
        new codefest.Asset('assets/sky.png'),
        new codefest.Asset('assets/splash.png'),
        new codefest.Asset('assets/thumb.png'),
    ];
    var index = 0;
    function draw(){
        var image = assets[index].image;
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.drawImage(image, canvas.width/2 - image.width/2, canvas.height/2 - image.height/2);
    };

    draw();
    window.next = function(){
        index = (index + 1) % assets.length;
        draw();
    };
    document.getElementsByTagName('body')[0].addEventListener('keypress', window.next);
})(codefest = codefest || {});
