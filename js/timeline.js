(function($){
    var Timeline = $.Timeline = function(initial_frame){
        this.frames = [initial_frame];
        this.current = 0;
    };
    Timeline.prototype.next = function(){
        var frame = this.frames[this.current];
        var next = {
            'bird': {
                'x': frame.bird.x + frame.bird.vx,
                'y': frame.bird.y + frame.bird.vy,
                'vx': frame.bird.vx,
                'vy': frame.bird.vy
            }
        };
        this.frames.push(next);
        this.current++;
    };
    Timeline.prototype.peek = function(){
        return this.frames[this.current];
    };
})(codefest = codefest || {});
