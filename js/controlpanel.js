(function($){
    var keyCodeFor = {
        'r': 82
    };

    var ControlPanel = $.ControlPanel = function(){
        var body = document.body;
        body.addEventListener('keypress', this.receiver.bind(this));
        body.addEventListener('keydown', this.down.bind(this));
        body.addEventListener('keyup', this.up.bind(this));
        this.reset();
        this.pressed = false;
        this.keyCode = undefined;
        this.currently_down = {};
    };
    ControlPanel.prototype.reset = function(){
        this.pressed = false;
        this.keyCode = undefined;
    };
    ControlPanel.prototype.receiver = function(event){
        this.pressed = true;
        this.keyCode = event.charCode;
    };
    ControlPanel.prototype.spacePressed = function(){
        return this.pressed && this.keyCode === 32;
    };
    ControlPanel.prototype.isDown = function(key){

        return this.currently_down[keyCodeFor[key]];
    };
    ControlPanel.prototype.down = function(event){
        this.currently_down[event.keyCode] = true;
    };
    ControlPanel.prototype.up = function(event){
        delete this.currently_down[event.keyCode];
    };
})(codefest = codefest || {});
