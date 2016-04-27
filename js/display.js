(function($){
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

    var Display = $.Display = function(canvas, context){
        this.canvas = canvas;
        this.context = context;
    };
    Display.prototype.draw = function(frame, frame_index){
        frame_index = frame_index || 0;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.draw_bird(frame, frame_index);
    };
    Display.prototype.draw_bird = function(frame, frame_index){
        var bird = assets[0].image;
        var w = bird.width;
        var h = bird.height/4;
        var flap = Math.floor(frame_index / 10) % 4;
        this.context.drawImage(bird, 0, h * flap, w, h, frame.bird.x, frame.bird.y, w, h);
    };
})(codefest = codefest || {});
