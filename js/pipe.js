(function($){
    var pipe_up_asset = new $.Asset('assets/pipe-up.png');
    var pipe_image_asset = new $.Asset('assets/pipe.png');
    var pipe_down_asset = new $.Asset('assets/pipe-down.png');

    var Pipe = $.Pipe = function(x, y, options){
        this.options = $.extend(options || {}, {
            'pipe_top_height': 25,
            'pipe_gap': 40
        });
        this.x = x;
        this.y = y;
    };
    Pipe.prototype.draw = function(canvas, context, frame, frame_index, timeline){
        var bb = this.bounding_box(canvas, context, frame, frame_index, timeline);
        this.draw_pipe_down(context, bb.down);
        this.draw_pipe_up(context, bb.up);
    };
    Pipe.prototype.bounding_box = function(canvas, context, frame, frame_index, timeline){
        var delta = frame.bird.vx * frame_index;
       return {
           'down': {
               x: this.x - delta,
               y: 0,
               w: pipe_image_asset.image.width,
               h: this.y - this.options.pipe_gap
           },
           'up': {
               x: this.x - delta,
               y: this.y + this.options.pipe_gap,
               w: pipe_image_asset.image.width,
               h: canvas.height - (this.y + this.options.pipe_gap)
           }
        };
    };
    Pipe.prototype.draw_pipe_down = function(context, bb){
        var pipe_image = pipe_image_asset.image;
        var pipe_down = pipe_down_asset.image;
        context.drawImage(pipe_image, bb.x, bb.y, bb.w, bb.h);
        context.drawImage(pipe_down, bb.x, bb.h - this.options.pipe_top_height, bb.w, this.options.pipe_top_height);
    };
    Pipe.prototype.draw_pipe_up = function(context, bb){
        var pipe_up = pipe_up_asset.image;
        var pipe_image = pipe_image_asset.image;
        context.drawImage(pipe_image, bb.x, bb.y, bb.w, bb.h);
        context.drawImage(pipe_up, bb.x, bb.y, bb.w, this.options.pipe_top_height);
    };
})(codefest = codefest || {});
