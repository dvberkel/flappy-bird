(function($){
    var pipe_up_asset = new $.Asset('assets/pipe-up.png');
    var pipe_image_asset = new $.Asset('assets/pipe.png');
    var pipe_down_asset = new $.Asset('assets/pipe-down.png');

    var Pipe = $.Pipe = function(x, y){
        this.x = x;
        this.y = y;
    };
    Pipe.prototype.draw = function(canvas, context, frame, frame_index, timeline){
        var pipe_top_height = 25;
        var pipe_gap = 40;
        var pipe_up = pipe_up_asset.image;
        var pipe_image = pipe_image_asset.image;
        var pipe_down = pipe_down_asset.image;
        var delta = frame.bird.vx * frame_index;
        context.drawImage(pipe_image, 0, 0, pipe_image.width, pipe_image.height, this.x - delta, 0, pipe_image.width, this.y - pipe_gap);
        context.drawImage(pipe_image, 0, 0, pipe_image.width, pipe_image.height, this.x - delta, this.y + pipe_gap, pipe_image.width, canvas.height - this.y + pipe_gap);
        context.drawImage(pipe_down, 0, 0, pipe_down.width, pipe_down.height, this.x - delta, this.y - pipe_gap - pipe_top_height, pipe_down.width, pipe_top_height);
        context.drawImage(pipe_up, 0, 0, pipe_up.width, pipe_up.height, this.x - delta, this.y + pipe_gap, pipe_up.width, pipe_top_height);
    };
})(codefest = codefest || {});
