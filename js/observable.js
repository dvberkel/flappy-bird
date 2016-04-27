(function($){
    var Observable = $.Observable = function(){
        this.observersFor = {};
    };
    Observable.prototype.on = function(event, observer){
        (this.observersFor[event] = this.observersFor[event] || []).push(observer);
    };
    Observable.prototype.emit = function(event){
        var args = Array.prototype.slice.call(arguments, 1);
        (this.observersFor[event] || []).forEach(function(observer){
            observer.apply(this, args);
        }.bind(this));
    };
})(codefest = codefest || {});
