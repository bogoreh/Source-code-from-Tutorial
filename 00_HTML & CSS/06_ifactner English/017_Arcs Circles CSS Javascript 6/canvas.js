var can=document.getElementById("Newcanvas");
var Jctx=can.getContext("2d");
Jctx.moveTo(10,10); //x-axis, y-axis
Jctx.lineTo(200,400);
Jctx.strokeStyle="red";
Jctx.lineWidth=10; 
Jctx.stroke();

Jctx.moveTo(200,400);  //x-axis, y-axis
Jctx.lineTo(390,10);
Jctx.stroke();

Jctx.moveTo(390,10);  //x-axis, y-axis
Jctx.lineTo(10,10);
Jctx.stroke();

// tutorial Lines with CSS JavaScript 6

var can2=document.getElementById("Newcanvas2");
var Jctx2=can2.getContext("2d");
// arc(x-y,r,start,stop)
Jctx2.beginPath();
Jctx2.arc(200,200,100,0,8);
Jctx2.stroke();