var can=document.getElementById("Newcanvas");
var Jctx=can.getContext("2d");
Jctx.moveTo(10,10); //x-axis, y-axis
Jctx.lineTo(200,400);
Jctx.strokeStyle="red";
Jctx.lineWidth=10; // tutorial Lines with CSS JavaScript 5
Jctx.stroke();

Jctx.moveTo(200,400);  //x-axis, y-axis
Jctx.lineTo(390,10);
Jctx.stroke();

Jctx.moveTo(390,10);  //x-axis, y-axis
Jctx.lineTo(10,10);
Jctx.stroke();