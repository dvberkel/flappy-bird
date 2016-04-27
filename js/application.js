(function(codefest){
    console.log('Get Ready!');

    var canvas = document.getElementById('viewport');
    canvas.width = 640;
    canvas.height = 480;
    var context = canvas.getContext('2d');
    context.fillRect(0, 0, canvas.width, canvas.height);

    var bird = new codefest.Asset('assets/bird.png');
    bird.on('ready', function(){
        context.drawImage(this.image, 0, 0);
    });
})(codefest = codefest || {});
