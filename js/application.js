(function(codefest){
    console.log('Get Ready!');

    var canvas = document.getElementById('viewport');
    canvas.width = 640;
    canvas.height = 480;
    var context = canvas.getContext('2d');
    context.fillRect(0, 0, canvas.width, canvas.height);

    var frame = window.frame = {
        "bird": {
            "x": canvas.width/2,
            "y": canvas.height/2,
            "vx": 1,
            "vy": 0
        }
    };

    var frame_index = 0;
    var display = new codefest.Display(canvas, context);

    var tick = function(){
        display.draw(frame, frame_index++);
        requestAnimationFrame(tick);
    };
    tick();
})(codefest = codefest || {});
