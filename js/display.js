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
        this.initialize();
    };
    Display.prototype.initialize = function(){
        this.context.fillStyle = '#4ec0ca';
    };
    Display.prototype.draw = function(timeline){
        var frame = timeline.peek();
        var frame_index = timeline.current;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.draw_sky(frame, frame_index);
        this.draw_pipes(frame, frame_index, timeline);
        this.draw_ceiling(frame, frame_index);
        this.draw_land(frame, frame_index);
        this.draw_future_birds(timeline);
        this.draw_bird(frame, frame_index);
    };
    Display.prototype.draw_bird = function(frame, frame_index, drift){
        var bird = assets['bird'].image;
        var w = bird.width;
        var h = bird.height/4;
        var flap = Math.floor(frame_index / 10) % 4;
        var offset = drift? frame.bird.vx * frame_index: 0;
        this.context.drawImage(bird, 0, h * flap, w, h, this.canvas.width/2 + offset, frame.bird.y, w, h);
    };
    Display.prototype.draw_future_birds = function(timeline){
        var future = timeline.future();
        if (future.length > 0) {
            this.context.save();
            this.context.globalAlpha = 0.1;
            timeline.future().forEach(function(frame, frame_index){
                this.draw_bird(frame, frame_index, true);
            }.bind(this));
            this.context.restore();
        }
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
    Display.prototype.draw_pipes = function(frame, frame_index, timeline){
        var pipe_top_height = 25;
        var pipe_gap = 40;
        var pipe_up = assets['pipe-up'].image;
        var pipe_image = assets['pipe'].image;
        var pipe_down = assets['pipe-down'].image;
        var delta = frame.bird.vx * frame_index;
        timeline.pipes.forEach(function(pipe){
            this.context.drawImage(pipe_image, 0, 0, pipe_image.width, pipe_image.height, pipe.x - delta, 0, pipe_image.width, pipe.y - pipe_gap);
            this.context.drawImage(pipe_image, 0, 0, pipe_image.width, pipe_image.height, pipe.x - delta, pipe.y + pipe_gap, pipe_image.width, this.canvas.height - pipe.y + pipe_gap);
           this.context.drawImage(pipe_down, 0, 0, pipe_down.width, pipe_down.height, pipe.x - delta, pipe.y - pipe_gap - pipe_top_height, pipe_down.width, pipe_top_height);
            this.context.drawImage(pipe_up, 0, 0, pipe_up.width, pipe_up.height, pipe.x - delta, pipe.y + pipe_gap, pipe_up.width, pipe_top_height);
                    }.bind(this));
    };
    Display.prototype.draw_sky = function(frame, frame_index){
        var sky = assets['sky'].image;
        var w = sky.width;
        var h = sky.height;
        var x_offset = frame.bird.x % w;
        var y_offset = assets['land'].image.height;
        [0, 1, 2, 3].forEach(function(tile_index){
            this.context.drawImage(sky, tile_index * w - x_offset, this.canvas.height - y_offset - h);
       }.bind(this));
    };
    Display.prototype.draw_ceiling = function(frame, frame_index){
        var ceiling = assets['ceiling'].image;
        var w = ceiling.width;
        var h = ceiling.height;
        var offset = frame.bird.x % w;
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach(function(tile_index){
            this.context.drawImage(ceiling, tile_index * w - offset, 0);
        }.bind(this));
    };
})(codefest = codefest || {});
