(function($){
    var Asset = $.Asset = function(src){
        $.Observable.call(this);
        var image = this.image = new Image();
        image.src = src;
        image.onload = function(){
            this.emit('ready');
        }.bind(this);
    };
    Asset.prototype = Object.create($.Observable.prototype);
    Asset.prototype.constructor = Asset;
})(codefest = codefest || {});
