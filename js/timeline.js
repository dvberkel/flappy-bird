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

    var ceiling = 16;
    var canvas_height = 480;
    var land_height = 112;
    var ground = canvas_height - land_height;
    var bird_radius = 96/4;
    var Timeline = $.Timeline = function(initial_frame, options){
        this.options = extend(options,
                              { 'gravity': -0.1, dv: 5.0 },
                              { 'ceiling': ceiling, 'ground': ground, 'r': bird_radius }
                             );
        this.frames = [initial_frame];
        this.pipes = [];
        this.current = 0;
    };
    Timeline.prototype.next = function(flapped, back_in_time){
        var frame = this.frames[this.current];
        if (back_in_time) {
            this.current = Math.max(this.current - 1, 0);
            return;
        }
        if (frame.crashed) {return;}
        if (flapped & this.current + 1 < this.frames.length) {
            this.frames = this.frames.slice(0, this.current + 1);
        }
        if (this.current + 1 >= this.frames.length){
            var dv = flapped ? this.options.dv: 0;
            var vx = frame.bird.vx;
            var vy = frame.bird.vy - this.options.gravity - dv;
            var x = frame.bird.x + vx;
            var y = frame.bird.y + vy;
            var crashed = y < this.options.ceiling || (y + this.options.r) > this.options.ground;
            var next = {
                'crashed': crashed,
                'bird': {
                    'x': x,
                    'y': y,
                    'vx': vx,
                    'vy': vy
                }
            };
            this.frames.push(next);
        }
        this.current++;
    };
    Timeline.prototype.peek = function(){
        return this.frames[this.current];
    };
    Timeline.prototype.future = function(){
        return this.frames.slice(this.current + 1);
    };
})(codefest = codefest || {});
