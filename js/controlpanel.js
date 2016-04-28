(function($){
    var charCodeFor = {
        'r': 114
    };

    var ControlPanel = $.ControlPanel = function(){
        document.body.addEventListener('keypress', this.receiver.bind(this));
        this.reset();
        this.pressed = false;
        this.charCode = undefined;
    };
    ControlPanel.prototype.reset = function(){
        this.pressed = false;
        this.charCode = undefined;
    };
    ControlPanel.prototype.receiver = function(event){
        this.pressed = true;
        this.charCode = event.charCode;
    };
    ControlPanel.prototype.spacePressed = function(){
        return this.pressed && this.charCode === 32;
    };
    ControlPanel.prototype.isPressed = function(key){
        return this.pressed && this.charCode === charCodeFor[key];
    };
})(codefest = codefest || {});
