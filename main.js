var MouseEvent = "empty";
var lastPostionOfX, lastPostionOfY;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "grey";
widthOfLine = 12;
canvas.addEventListener("mousedown" , PenDown);
function PenDown(e) {
    MouseEvent ="mousedown";

}
canvas.addEventListener("mouseup" , PenUp);
function PenUp(e) {
    MouseEvent ="mouseup";
    
}
canvas.addEventListener("mouseleave" , Penleave);
function Penleave(e) {
    MouseEvent ="mouseleave";
    
}
canvas.addEventListener("mousemove" , PenMove);
function PenMove(e) {
current_positon_of_MouseX = e.clientX - canvas.offsetLeft;
current_positon_of_MouseY = e.clientY - canvas.offsetTop;

if (MouseEvent=="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = widthOfLine;
    console.log("Last postion of X and Y Coords = ");
    console.log("X = " +lastPostionOfX+"Y = " +lastPostionOfY);
    ctx.moveTo(lastPostionOfX,lastPostionOfY);
    console.log("Current postion of X and Y Coords = ");
    console.log("X = " +current_positon_of_MouseX+"Y = " +current_positon_of_MouseY);
    ctx.lineTo(current_positon_of_MouseX,current_positon_of_MouseY);

}
lastPostionOfX = current_positon_of_MouseX
lastPostionOfY = current_positon_of_MouseY
MouseEvent="mousemove";
}