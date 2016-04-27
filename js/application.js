(function(codefest){
    console.log('Get Ready!');

    var canvas = document.getElementById('viewport');
    canvas.width = 640;
    canvas.height = 480;
    var context = canvas.getContext('2d');
    context.fillRect(0, 0, 640, 480);

    var image = new Image();
    image.src = 'assets/bird.png';
    image.onload = function(){
        context.drawImage(image, 0, 0);
    };
})(codefest = codefest || {});
