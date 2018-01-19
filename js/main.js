(function () {
    console.log("Hola");
    
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var canvasSize = {w:canvas.width, h: canvas.height};

    window.gravity =  0.1;
    var ball = createBall(ctx, canvasSize);

    function update() {
        ctx.clearRect(0,0, canvasSize.w, canvasSize.h);
        ball.update();
        ball.render();
    };
    setInterval(update, 20)

    document.getElementById("faster").onclick = function(){
        ball.vx *= 1.1;
        ball.vy *= 1.1;
    }
    
    document.getElementById("slower").onclick = function(){
        ball.vx *= 0.9;
        ball.vy *= 0.9;
    }

    document.onkeydown = function(e) {
        if(e.keyCode == 32){
          ball.userPull = 0.3;
        }
      }
      
    document.onkeyup = function(e) {
        if (e.keyCode == 32) {
            ball.userPull = 0;
        }
    };

})();