(function(codefest){
    console.log('Get Ready!');

    var canvas = document.getElementById('viewport');
    canvas.width = 640;
    canvas.height = 480;
    var context = canvas.getContext('2d');
    context.fillRect(0, 0, canvas.width, canvas.height);

    var frame = window.frame = {
        "bird": {
            "x": canvas.width/2,
            "y": canvas.height/2,
            "vx": 1,
            "vy": 0
        }
    };
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

    function draw(frame, frame_index){
        frame_index = frame_index || 0;
        var bird = assets[0].image;
        context.fillRect(0, 0, canvas.width, canvas.height);
        var w = bird.width;
        var h = bird.height/4;
        var flap = Math.floor(frame_index / 10) % 4;
        context.drawImage(bird, 0, h * flap, w, h, frame.bird.x, frame.bird.y, w, h);
    };

    var frame_index = 0;
    var tick = function(){
        draw(frame, frame_index++);
        requestAnimationFrame(tick);
    };
    tick();
})(codefest = codefest || {});
