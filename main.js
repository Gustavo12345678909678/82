var mouseEvent = "empty";
var lastPositionX, lastPositionY;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

color = "black";
widthLine = 1;

canvas.addEventListener("mousedown", myMouseDown);
function myMouseDown(e)
{


color = document.getElementById("color").value;
widthLine = document.getElementById("widthLine").value;


mouseEvent = "mouseDown"; 
}


canvas.addEventListener("mouseleave", myMouseLeave);
function myMouseLeave(e)
{
    mouseEvent = 'mouseleave';
}

canvas.addEventListener("mouseup", myMouseUp);
function myMouseUp(e)

{
mouseEvent = "mouseUP";
}


canvas. addEventListener( "mousemove", myMouseMove);
function myMouseMove(e)
{
PositionMouseX = e.clientX - canvas.offsetLeft;
PositionMouseY = e.clientY - canvas.offsetTop;

if (mouseEvent == "mouseDown")
 {

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = widthLine;

console.log("Last position of x and y coordinates = ");
console.log("x = " + lastPositionX + "y = " + lastPositionY);
ctx.moveTo(lastPositionX, lastPositionY);

console. log("Current position of x and y coordinates = ");
console.log("x = " + PositionMouseX + "y = " + PositionMouseY);
ctx. lineTo(PositionMouseX, PositionMouseY);
ctx.stroke();
}

lastPositionX = PositionMouseX;
lastPositionY = PositionMouseY;
}

function clearArea()
 {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
     }