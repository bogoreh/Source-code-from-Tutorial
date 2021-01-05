var can=document.getElementById("Newcanvas");
var Jctx=can.getContext("2d");
Jctx.moveTo(10,10); //x-axis, y-axis
Jctx.lineTo(200,400);
Jctx.strokeStyle="blue";
Jctx.stroke();