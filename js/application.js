(function(codefest){
    console.log('Get Ready!');

    var canvas = document.getElementById('viewport');
    canvas.width = 640;
    canvas.height = 480;
    var context = canvas.getContext('2d');
    context.fillRect(0, 0, canvas.width, canvas.height);

    var frame = {
        "bird": {
            "x": canvas.width/2,
            "y": canvas.height/2,
            "vx": 1,
            "vy": 0
        }
    };
    var timeline = window.timeline = new codefest.Timeline(frame);
    var display = new codefest.Display(canvas, context);

    var flapped = false;
    document.getElementsByTagName('body')[0].addEventListener('keypress', function(){
        flapped = true;
    });
    var tick = function(){
        display.draw(timeline);
        timeline.next(flapped);
        requestAnimationFrame(tick);
        flapped = false;
    };
    tick();
})(codefest = codefest || {});
