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
Jctx2.arc(200,200,100,0,2*Math.PI);
Jctx2.strokeStyle="green";
Jctx2.lineWidth=5;
Jctx2.stroke();

Jctx2.beginPath();
Jctx2.arc(100,100,50,0,2*Math.PI);
Jctx2.stroke();

Jctx2.beginPath();
Jctx2.arc(300,100,50,0,2*Math.PI);
Jctx2.stroke();

Jctx2.beginPath();
Jctx2.arc(170,150,20,0,2*Math.PI);
Jctx2.stroke();

Jctx2.beginPath();
Jctx2.arc(240,150,20,0,2*Math.PI);
Jctx2.stroke();

Jctx2.moveTo(200,200);  //x-axis, y-axis
Jctx2.lineTo(200,160);
Jctx2.stroke();

Jctx2.beginPath();
Jctx2.arc(200,250,20,0,1*Math.PI);
Jctx2.stroke();