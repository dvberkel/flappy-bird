(function($){
    $.extend = function(){
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
    };

})(codefest = codefest || {});
