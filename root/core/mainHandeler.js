//M.M.
var c = document.getElementById("gameCanvas");//canvas variables
var ctx = c.getContext("2d");
var cI = document.getElementById("inventoryCanvas");
var ctxI = cI.getContext("2d");
ctx.fillStyle = "black";
ctx.fillRect(0,0,1000,1000);
//end condision enemies all dead 
var allLines = {rooms:[],hallways:[]};


//@function rooms() [Utility : Map Creation]
//@restricted roomNumber [Hidden : Value : Param : Unchangable] {max : 25, min: 10};
//@restricted roomSizes [Hidden : Value : Param : Unchageable] {height:{max:75,min:50}, width: {max:75,min:50}}
function rooms() {
    var amountRooms = Math.floor(Math.random()*(20-10+1)+10);
    for (var i = 0; i < amountRooms;i++) {
      if (allLines.rooms.length > 0){
        var randW = Math.floor(Math.random()*(150-100+1)+100);
        var randH = Math.floor(Math.random()*(150-100+1)+100);
        var randY = Math.floor(Math.random()*((1000-randH-10)-10+1)+10);
        var randX = Math.floor(Math.random()*((1000-randW-10)-10+1)+10);
        for (var j = 0; j < allLines.rooms.length;j++) {
          var check = 0;
            if((randX+randW + 10) > allLines.rooms[j].x && randX-10 < (allLines.rooms[j].x + allLines.rooms[j].w)) {
              if((randY+randH + 10) > allLines.rooms[j].y && randY-10 < (allLines.rooms[j].y + allLines.rooms[j].h)) {
                randY = Math.floor(Math.random()*((1000-randH-10)-10+1)+10);
              randX = Math.floor(Math.random()*((1000-randW-10)-10+1)+10);
                j = -1;
              }
            }
        }
        //code
      }else{
        var randW = Math.floor(Math.random()*(150-100+1)+100);
        var randH = Math.floor(Math.random()*(150-100+1)+100);
        var randY = Math.floor(Math.random()*((1000-randH-10)-10+1)+10);
        var randX = Math.floor(Math.random()*((1000-randW-10)-10+1)+10);
      }
        ctx.rect(randX,randY,randW,randH);
        ctx.fillRect(randX+1,randY+1,randW-2,randH-2);
        var allPoints = {x:randX,y:randY,w:randW,h:randH};
        allLines.rooms.push(allPoints);
        
    }
}

function hallways() {
  var cenP = [];
  for (var i = 0; i < allLines.rooms.length;i++) {
    cenP.push({x:(allLines.rooms[i].x+(allLines.rooms[i].w/2)),y:(allLines.rooms[i].y + (allLines.rooms[i].h/2))})
  }
  for (var j = 0; j < cenP.length; j++) {
    var newX = cenP[j].x;
    var newY = cenP[j].y;
    if (j !== cenP.length-1) {
        ctx.beginPath();
        ctx.strokeStyle = "Black";
        var mis = 0;
        if (newX < cenP[j+1].x) {
            mis = 30;
        }
        ctx.rect(newX,newY,(cenP[j+1].x-newX)+mis,30);
        var allPoints = {x:newX,y:newY,w:(cenP[j+1].x-newX)+mis,h:30};
        allLines.hallways.push(allPoints);
        ctx.strokeStyle = "Black";
        ctx.strokeText("S : "+j,(cenP[j+1].x-newX)+newX,newY);
        ctx.stroke();
        ctx.beginPath();
        ctx.strokeStyle = "Black";
        ctx.rect(newX+(cenP[j+1].x-newX),newY,30,(cenP[j+1].y-newY));
        var xCalc = newX+(cenP[j+1].x-newX)
        var hCalc = (cenP[j+1].y-newY);
        var allPoints = {x:xCalc,y:newY,w:30,h:hCalc};
        allLines.hallways.push(allPoints);
        ctx.fillStyle = "white";//blue
        ctx.strokeStyle = "Black";
      ctx.stroke();
    }
  }
}

function drawMap() {
  if (allLines.rooms.length > 0) {
        for (var j = 0; j < allLines.hallways.length;j++) {
        ctx.beginPath();//begins to draw ai
        ctx.strokeStyle = "Black";
        ctx.rect(allLines.hallways[j].x,allLines.hallways[j].y,allLines.hallways[j].w,allLines.hallways[j].h);
        ctx.strokeStyle = "rgba(0,0,0,0)";//blue
        ctx.strokeStyle = "Black";
        ctx.stroke();
    }

    for (var i = 0; i < allLines.rooms.length;i++) {
         ctx.beginPath();//begins to draw ai
        ctx.strokeStyle = "Black";
        ctx.rect(allLines.rooms[i].x,allLines.rooms[i].y,allLines.rooms[i].w,allLines.rooms[i].h);
        ctx.strokeStyle = "rgba(0,0,0,0)";//blue
        ctx.fillStyle = "white";//blue
        ctx.fillRect(allLines.rooms[i].x+1,allLines.rooms[i].y+1,allLines.rooms[i].w-2,allLines.rooms[i].h-2);
        ctx.strokeStyle = "Black";
        ctx.strokeText("R : " + i,allLines.rooms[i].x,allLines.rooms[i].y);
        ctx.stroke();
    }
        for (var k = 0; k < allLines.hallways.length;k++) {
        ctx.beginPath();//begins to draw ai
            ctx.fillStyle = "white";//blue
            if (allLines.hallways[k].w<0) {
                var adder = 2
                var xdder = 1;
            }
            if (allLines.hallways[k].w>0) {
                var adder = -2
                var xdder = 1;
                
            }
            if (allLines.hallways[k].h<0) {
                var hdder = 2
                var xdder = 1;
            }
            if (allLines.hallways[k].h>0) {
                var hdder = -2
                var xdder = 1;
                
            }
        ctx.fillRect(allLines.hallways[k].x+xdder,allLines.hallways[k].y+xdder,allLines.hallways[k].w+adder,allLines.hallways[k].h+hdder);
        ctx.stroke();
        }
  }
}

function drawEverything() {
    
   ctx.beginPath();//begins to draw ai
   
   //ctx.arc(npc.x, npc.y, 20, 0, Math.PI*2); //draws the ai based on npc x and y, and location
   //ctx.fillStyle = "clear";
  ctx.arc(player._pos.x, player._pos.y, 10, 0, Math.PI*2); //Draws the player using it's pre-determined loation and radius.
  ctx.strokeStyle = "rgba(0,0,0,0)";//blue
  ctx.fillStyle = "white";//blue
  ctx.strokeStyle = "Black"

ctx.fill();

    ctx.fillStyle = grd;
  ctx.fillRect(0,0,1000,1000);
ctx.stroke();
}
//@function fileHandeler() [System : Functionality] : Updates for the main canvas
var grd = ctx.createRadialGradient(player._pos.x, player._pos.y, 75, player._pos.x, player._pos.y, 100);
grd.addColorStop(0, "rgba(0,0,0,0)");
grd.addColorStop(0.5, "rgba(0,0,0,0.5)");
grd.addColorStop(1, "rgba(0,0,0,1)");

function fileHandeler(){
  ctx.fillRect(0,0,1000,1000);
  ctx.fillStyle="black";
  ctx.fill();
  drawMap()
  drawEverything();  
}

window.addEventListener("keydown",keyHandler);
function keyHandler(e){
if (e.keyCode == 65) {//a
    player._pos.x-=2;
  grd = ctx.createRadialGradient(player._pos.x, player._pos.y, 75, player._pos.x, player._pos.y, 100);
grd.addColorStop(0, "rgba(0,0,0,0)");
grd.addColorStop(0.5, "rgba(0,0,0,0.5)");
grd.addColorStop(1, "rgba(0,0,0,1)");

}
if (e.keyCode == 83) {//s
    player._pos.y+=2;
  grd = ctx.createRadialGradient(player._pos.x, player._pos.y, 75, player._pos.x, player._pos.y, 100);
grd.addColorStop(0, "rgba(0,0,0,0)");
grd.addColorStop(0.5, "rgba(0,0,0,0.5)");
grd.addColorStop(1, "rgba(0,0,0,1)");

}
if (e.keyCode == 68) {//d
    player._pos.x+=2;
  grd = ctx.createRadialGradient(player._pos.x, player._pos.y, 75, player._pos.x, player._pos.y, 100);
grd.addColorStop(0, "rgba(0,0,0,0)");
grd.addColorStop(0.5, "rgba(0,0,0,0.5)");
grd.addColorStop(1, "rgba(0,0,0,1)");

}
if (e.keyCode == 87) {//w
    player._pos.y-=2;
  grd = ctx.createRadialGradient(player._pos.x, player._pos.y, 75, player._pos.x, player._pos.y, 100);
grd.addColorStop(0, "rgba(0,0,0,0)");
grd.addColorStop(0.5, "rgba(0,0,0,0.5)");
grd.addColorStop(1, "rgba(0,0,0,1)");

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
