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

    var BirdArtist = function(drift){
        this.bird = assets['bird'].image;
        this.w = this.bird.width;
        this.h = this.bird.height/4;
        this.drift = drift;
    };
    BirdArtist.prototype.draw = function(canvas, context, frame, frame_index, timeline){
        var flap = Math.floor(frame_index / 10) % 4;
        var offset = this.drift ? frame.bird.vx * frame_index: 0;
        context.drawImage(this.bird,
                          0, this.h * flap, this.w, this.h,
                          canvas.width/2 + offset, frame.bird.y, this.w, this.h);
    };

    var FutureBirdsArtist = function(){
        this.birdArtist = new BirdArtist(true);
    };
    FutureBirdsArtist.prototype.draw = function(canvas, context, frame, frame_index, timeline){
        var future = timeline.future();
        if (future.length > 0) {
            context.save();
            context.globalAlpha = 0.1;
            future.forEach(function(frame, frame_index){
                this.birdArtist.draw(canvas, context, frame, frame_index, timeline);
            }.bind(this));
            context.restore();
        }
    };

    function range(up_to){
        var result = [];
        for (var index = 0; index < up_to; index++){
            result.push(index);
        }
        return result;
    }

    var TiledArtist = function(asset, repeat, y_offset){
        this.image = asset.image;
        this.w = this.image.width;
        this.h = this.image.height;
        this.range = range(repeat);
        this.y_offset = y_offset || 0;
    };
    TiledArtist.prototype.draw = function(canvas, context, frame, frame_index, timeline){
        var x_offset = frame.bird.vx * frame_index % this.w;
        this.range.forEach(function(tile_index){
            context.drawImage(this.image,
                              tile_index * this.w - x_offset,
                              this.y_offset - this.h);
        }.bind(this));
    };

    var PipeArtist = function(){
        /* wait for it */
    };
    PipeArtist.prototype.draw = function(canvas, context, frame, frame_index, timeline){
        timeline.pipes.forEach(function(pipe){
            pipe.draw(canvas, context, frame, frame_index, timeline);
       });
    };

    var Display = $.Display = function(canvas, context){
        this.canvas = canvas;
        this.context = context;
        this.artists = [];
        this.initialize();
    };
    Display.prototype.initialize = function(){
        this.context.fillStyle = '#4ec0ca';
        this.artists.push(new TiledArtist(assets['sky'], 4, this.canvas.height - assets['land'].image.height));
        this.artists.push(new PipeArtist());
        this.artists.push(new TiledArtist(assets['ceiling'], 11, assets['ceiling'].image.height));
        this.artists.push(new TiledArtist(assets['land'], 3, this.canvas.height));
        this.artists.push(new FutureBirdsArtist());
        this.artists.push(new BirdArtist());
    };
    Display.prototype.draw = function(timeline){
        var frame = timeline.peek();
        var frame_index = timeline.current;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.artists.forEach(function(artist){
            artist.draw(this.canvas, this.context, frame, frame_index, timeline);
        }.bind(this));
    };
})(codefest = codefest || {});
