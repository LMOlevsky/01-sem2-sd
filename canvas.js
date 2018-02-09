var c = document.getElementById("slate");
var ctx = c.getContext('2d');
var requestID;

var circleAnim = function(){

    stop();
    
    var x = 10;
    var grow = true;
    
    var circle = function(){
	ctx.clearRect(0,0,c.width,c.height);
	ctx.beginPath();
	ctx.arc(c.width/2, c.height/2, x, 0, 2*Math.PI);
	ctx.fillStyle = "red";
	ctx.fill();

	if (grow){
	    x++;
	}
	else{
	    x--;  
	}
	if (x >= c.height/2){
	    grow = false
	}
	if (x <= 0){
	    grow = true;
	}
	
	requestID = window.requestAnimationFrame( circle );
    }

    window.requestAnimationFrame( circle );

}

var screensaverAnim = function(){

    stop();
    
    var x = Math.random()*c.width;
    var y = Math.random()*c.height;
    var down = true;
    var right = true;
    
    var screensaver = function(){
	ctx.clearRect(0,0,c.width,c.height);
	ctx.fillRect(x, y, 20, 20)
	ctx.fillStyle = "red";
	ctx.fill();


	if (down){
	    y+=2;
	}
	else{
	    y-=2;
	}
	if(right){
	    x+=2;
	}
	else{
	    x-=2;
	}

	if(x >= c.width-20 || x <= 0){
	    right = !right;
	}
	if(y >= c.height-20 || y <= 0){
	    down = !down; 
	}	
	
	requestID = window.requestAnimationFrame( screensaver );
    }

    window.requestAnimationFrame( screensaver );

}

var stop = function(){
    window.cancelAnimationFrame(requestID);
}

stopAnim.addEventListener('click', stop);
screensaver.addEventListener('click', screensaverAnim);
circle.addEventListener('click', circleAnim);
