var c = document.getElementById("slate");
var ctx = c.getContext('2d');
var requestID;
var x = 0;

var growCircle = function(){
    ctx.clearRect(0,0,500,500);
    ctx.beginPath();
    ctx.arc(c.width/2, c.height/2, x, 0, 2*Math.PI);
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.fillStyle = "red";
    ctx.fill();

    x=x+0.5;
    requestID = window.requestAnimationFrame( growCircle );
}

var stopGrowth = function(){
    window.cancelAnimationFrame(requestID);
}

var clearScreen = function(){
    ctx.clearRect(0,0,c.width,c.height)
}

//window.requestAnimationFrame( growCircle );

stop.addEventListener('click', stopGrowth);
clear.addEventListener('click', clearScreen);

