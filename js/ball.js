function createBall(ctx, canvasSize){
    var ball = {
        x: canvasSize.w/2,
        y: 40,   
        vx: 0,
        vy: 0, 
        userPull: 0,
        radius: 25,
        color: '#2e7d32',
        render: function () {
            // NOTE: Optimizar, no renderiza cuando no se ve la bola 
            //if(this.y > canvasSize.h + this.radius){ return; }
            //if(this.x > canvasSize.w + this.radius){ return; }
    
            ctx.font = "15px Arial";
            ctx.save()
            ctx.translate(this.x, this.y);
            var txt ="vx: " + this.vx.toFixed(2) + " vy: " + this.vy.toFixed(2);
            ctx.fillText(txt,10,50);
            ctx.restore()
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.fillStyle = this.color;
            ctx.fill();
        },
        update: function(){
            this.vy += (window.gravity - this.userPull);
            this.x += this.vx;
            this.y += this.vy;
            if (this.y + this.vy > canvasSize.h|| this.y + this.vy < 0) {
                this.vy *= -1.0;
            }
            if (this.x + this.vx > canvasSize.w || this.x + this.vx < 0) {
                this.vx *= -1.0;
            }
        }
    };
    return ball;
}
