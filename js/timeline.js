(function($){
    function extend(){
        var result = {};
        Array.prototype.slice.call(arguments, 0).forEach(function(options){
            options = options || {};
            for(var key in options) {
                if (!(key in result)) {
                    result[key] = options[key];
                }
            }
        });
        return result;
    }

    var Timeline = $.Timeline = function(initial_frame, options){
        this.options = extend(options, { 'gravity': -0.1, dv: 5.0 });
        this.frames = [initial_frame];
        this.current = 0;
    };
    Timeline.prototype.next = function(flapped){
        var frame = this.frames[this.current];
        var dv = flapped ? this.options.dv: 0;
        var vx = frame.bird.vx;
        var vy = frame.bird.vy - this.options.gravity - dv;
        var x = frame.bird.x + vx;
        var y = frame.bird.y + vy;
        var next = {
            'bird': {
                'x': x,
                'y': y,
                'vx': vx,
                'vy': vy
            }
        };
        this.frames.push(next);
        this.current++;
    };
    Timeline.prototype.peek = function(){
        return this.frames[this.current];
    };
})(codefest = codefest || {});
