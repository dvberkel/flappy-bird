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
        this.draw_pipe_down(canvas, context, frame, frame_index, timeline);
        this.draw_pipe_up(canvas, context, frame, frame_index, timeline);
    };
    Pipe.prototype.draw_pipe_down = function(canvas, context, frame, frame_index, timeline){
        var pipe_image = pipe_image_asset.image;
        var pipe_down = pipe_down_asset.image;
        var delta = frame.bird.vx * frame_index;
        var x = this.x - delta;
        var y = this.y - this.options.pipe_gap - this.options.pipe_top_height;
        context.drawImage(pipe_image, x, 0, pipe_image.width, y);
        context.drawImage(pipe_down, x, y, pipe_down.width, this.options.pipe_top_height);
    };
    Pipe.prototype.draw_pipe_up = function(canvas, context, frame, frame_index, timeline){
        var pipe_up = pipe_up_asset.image;
        var pipe_image = pipe_image_asset.image;
        var delta = frame.bird.vx * frame_index;
        var x = this.x - delta;
        var y = this.y + this.options.pipe_gap;
        context.drawImage(pipe_image, x, y, pipe_image.width, canvas.height - y);
        context.drawImage(pipe_up, x, y, pipe_up.width, this.options.pipe_top_height);
    };
})(codefest = codefest || {});
