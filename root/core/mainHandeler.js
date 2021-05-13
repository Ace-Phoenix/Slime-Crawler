//M.M.
var c = document.getElementById("gameCanvas");//canvas variables
var ctx = c.getContext("2d");
var cI = document.getElementById("inventoryCanvas");
var ctxI = cI.getContext("2d");

function drawEverything() {
    
   ctx.beginPath();//begins to draw ai
   
   //ctx.arc(npc.x, npc.y, 20, 0, Math.PI*2); //draws the ai based on npc x and y, and location
   //ctx.fillStyle = "clear";

  ctx.arc(player._pos.x, player._pos.y, 20, 0, Math.PI*2); //Draws the player using it's pre-determined loation and radius.
  ctx.strokeStyle = "rgba(0,0,0,0)";//blue
  ctx.fillStyle = "rgba(0,0,0,0)";//blue
  ctx.strokeStyle = "Black"
ctx.stroke();
}
//@function fileHandeler() [System : Functionality] : Updates for the main canvas
function fileHandeler(){
  ctx.clearRect(0,0,1000,1000);
  
  drawEverything();  
}

window.addEventListener("keydown",keyHandler);
function keyHandler(e){
if (e.keyCode == 65) {//a
    player._pos.x-=2;
}
if (e.keyCode == 83) {//s
    player._pos.y+=2;
}
if (e.keyCode == 68) {//d
    player._pos.x+=2;
}
if (e.keyCode == 87) {//w
    player._pos.y-=2;
}
if (e.keyCode == 73) {//i
  if (cI.style.visibility == "hidden") {
  return cI.style.visibility = "visible";
  }
  if (cI.style.visibility == "visible") {
  console.log(cI.style.visibility)
  return cI.style.visibility = "hidden";
  }
}
}



setInterval(fileHandeler,10)
