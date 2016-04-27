(function($){
    var assets = {
        'bird': new codefest.Asset('assets/bird.png'),
        'ceiling': new codefest.Asset('assets/ceiling.png'),
        'font_big_0': new codefest.Asset('assets/font_big_0.png'),
        'font_big_1': new codefest.Asset('assets/font_big_1.png'),
        'font_big_2': new codefest.Asset('assets/font_big_2.png'),
        'font_big_3': new codefest.Asset('assets/font_big_3.png'),
        'font_big_4': new codefest.Asset('assets/font_big_4.png'),
        'font_big_5': new codefest.Asset('assets/font_big_5.png'),
        'font_big_6': new codefest.Asset('assets/font_big_6.png'),
        'font_big_7': new codefest.Asset('assets/font_big_7.png'),
        'font_big_8': new codefest.Asset('assets/font_big_8.png'),
        'font_big_9': new codefest.Asset('assets/font_big_9.png'),
        'font_small_0': new codefest.Asset('assets/font_small_0.png'),
        'font_small_1': new codefest.Asset('assets/font_small_1.png'),
        'font_small_2': new codefest.Asset('assets/font_small_2.png'),
        'font_small_3': new codefest.Asset('assets/font_small_3.png'),
        'font_small_4': new codefest.Asset('assets/font_small_4.png'),
        'font_small_5': new codefest.Asset('assets/font_small_5.png'),
        'font_small_6': new codefest.Asset('assets/font_small_6.png'),
        'font_small_7': new codefest.Asset('assets/font_small_7.png'),
        'font_small_8': new codefest.Asset('assets/font_small_8.png'),
        'font_small_9': new codefest.Asset('assets/font_small_9.png'),
        'land': new codefest.Asset('assets/land.png'),
        'medal_bronze': new codefest.Asset('assets/medal_bronze.png'),
        'medal_gold': new codefest.Asset('assets/medal_gold.png'),
        'medal_platinum': new codefest.Asset('assets/medal_platinum.png'),
        'medal_silver': new codefest.Asset('assets/medal_silver.png'),
        'pipe-down': new codefest.Asset('assets/pipe-down.png'),
        'pipe': new codefest.Asset('assets/pipe.png'),
        'pipe-up': new codefest.Asset('assets/pipe-up.png'),
        'replay': new codefest.Asset('assets/replay.png'),
        'scoreboard': new codefest.Asset('assets/scoreboard.png'),
        'sky': new codefest.Asset('assets/sky.png'),
        'splash': new codefest.Asset('assets/splash.png'),
        'thumb': new codefest.Asset('assets/thumb.png')
    };

    var Display = $.Display = function(canvas, context){
        this.canvas = canvas;
        this.context = context;
    };
    Display.prototype.draw = function(frame, frame_index){
        frame_index = frame_index || 0;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.draw_sky(frame, frame_index);
        this.draw_land(frame, frame_index);
        this.draw_bird(frame, frame_index);
    };
    Display.prototype.draw_bird = function(frame, frame_index){
        var bird = assets['bird'].image;
        var w = bird.width;
        var h = bird.height/4;
        var flap = Math.floor(frame_index / 10) % 4;
        this.context.drawImage(bird, 0, h * flap, w, h, frame.bird.x, frame.bird.y, w, h);
    };
    Display.prototype.draw_land = function(frame, frame_index){
        var land = assets['land'].image;
        var w = land.width;
        var h = land.height;
        var offset = frame.bird.x % w;
        [0, 1, 2].forEach(function(tile_index){
            this.context.drawImage(land, tile_index * w - offset, this.canvas.height - h);
        }.bind(this));
    };
    Display.prototype.draw_sky = function(frame, frame_index){
        var land = assets['sky'].image;
        var w = land.width;
        var h = land.height;
        var x_offset = frame.bird.x % w;
        var y_offset = assets['land'].image.height;
        [0, 1, 2, 3].forEach(function(tile_index){
            this.context.drawImage(land, tile_index * w - x_offset, this.canvas.height - y_offset - h);
       }.bind(this));
    };
})(codefest = codefest || {});
