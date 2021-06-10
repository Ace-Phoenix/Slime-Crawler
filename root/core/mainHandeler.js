//M.M.
var c = document.getElementsByClassName("gameCanvas")[0];//canvas variables
var ctx = c.getContext("2d");
var cI = document.getElementsByClassName("inventoryCanvas")[0];
var ctxI = cI.getContext("2d");
var cC = document.getElementsByClassName("chestCanvas")[0];
var ctxC = cC.getContext("2d");
ctx.fillStyle = "black";
ctx.fillRect(0,0,1000,1000);
//end condision enemies all dead 
var allLines = {rooms:[],hallways:[],chest:[]};
var contains = [];
var currentChest = [];
//function iconsRandC [Utility : box forming : Rows and Collums]
function iconsRandC(ctx,rows,collums,start,gap,size,fill) {
var itterFill = 0;
var inside = [];
    for (var i = 0; i < rows;i++) {
        for (var j = 0; j < collums;j++) {
               ctxI.beginPath();
               if (fill !== undefined){
                   if (itterFill !== fill.length) {
                      inside.push({locParams:{x:start.x+gap*j+size*j,y:start.y + gap * i+size*i,widthHeight:size},conts:fill[itterFill]});
                      itterFill++;
                   }
               }
               ctx.fillRect(start.x+gap*j+size*j,start.y + gap * i+size*i,size,size);
               ctx.fillStyle = 'white';
               ctx.stroke();
              inside.push({locParams:{x:start.x+gap*j+size*j,y:start.y + gap * i+size*i,widthHight:size},conts:"No  Item"});
        }
    }
    return inside;
}

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

function chests() {
  for (var i = 0; i < allLines.rooms.length;i++) {
    var chance = Math.floor((Math.random())*101)
    if (chance > 25) {
      var validChest = false;
      var posibleLocs = [];
        if (ctx.getImageData(allLines.rooms[i].x-1,allLines.rooms[i].y,20,1).data[0] == 0) {
            if (ctx.getImageData(allLines.rooms[i].x,allLines.rooms[i].y-1,1,20).data[0] == 0) {
              validChest = true;
              posibleLocs.push({x:allLines.rooms[i].x+2,y:allLines.rooms[i].y+2});
            }
        }
        if (ctx.getImageData(allLines.rooms[i].x-1,(allLines.rooms[i].y+allLines.rooms[i].h),1,20).data[0] == 0) {
            if (ctx.getImageData(allLines.rooms[i].x,(allLines.rooms[i].y+allLines.rooms[i].h)+1,20,1).data[0] == 0) {
              validChest = true;
               posibleLocs.push({x:allLines.rooms[i].x+2,y:(allLines.rooms[i].y+allLines.rooms[i].h)-23});
            }
        }
        if (ctx.getImageData((allLines.rooms[i].x+allLines.rooms[i].w)+1,(allLines.rooms[i].y+allLines.rooms[i].h),1,20).data[0] == 0) {
            if (ctx.getImageData((allLines.rooms[i].x+allLines.rooms[i].w),(allLines.rooms[i].y+allLines.rooms[i].h)+1,20,1).data[0] == 0) {
              validChest = true;
              posibleLocs.push({x:(allLines.rooms[i].x+allLines.rooms[i].w)-22,y:(allLines.rooms[i].y+allLines.rooms[i].h)-22});
            }
        }
        var theOne = posibleLocs[Math.floor(Math.random()*posibleLocs.length)];
if (theOne !== undefined) {
          allLines.chest.push({x:theOne.x+1,y:theOne.y+1});
}
        
        ctx.beginPath();
        ctx.strokeStyle = "Black";
        //ctx.rect();
      ctx.stroke();
    }
  }
        //code
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
var stageTime = "New";
function startRooms() {
  if (stageTime == "New") {
rooms();
hallways();
chests();
var randomRoom = Math.floor(Math.random()*allLines.rooms.length)
    player._pos.x = (allLines.rooms[randomRoom].x+(allLines.rooms[randomRoom].w/2));
    player._pos.y = (allLines.rooms[randomRoom].y+(allLines.rooms[randomRoom].h/2));
    stageTime = "Old";
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
  startRooms();
  grd = ctx.createRadialGradient(player._pos.x, player._pos.y, 75, player._pos.x, player._pos.y, 100);
grd.addColorStop(0, "rgba(0,0,0,0)");
grd.addColorStop(0.5, "rgba(0,0,0,0.5)");
grd.addColorStop(1, "rgba(0,0,0,1)");

  ctx.fillRect(0,0,1000,1000);
  ctx.fillStyle="black";
  ctx.fill();
  drawMap()
  drawEverything();
        for (var chests = 0; chests < allLines.chest.length;chests++) {
         ctx.beginPath();//begins to draw ai
        ctx.strokeStyle = "Black";
        ctx.rect(allLines.chest[chests].x,allLines.chest[chests].y,20,20);
        ctx.strokeStyle = "rgba(0,0,0,0)";//blue
        ctx.strokeStyle = "Black";
grd = ctx.createRadialGradient(player._pos.x, player._pos.y, 75, player._pos.x, player._pos.y, 100);
grd.addColorStop(0, "rgba(0,255,0,1)");
grd.addColorStop(0.5, "rgba(0,255,0,1)");
grd.addColorStop(1, "rgba(0,0,0,1)");

        ctx.fillStyle = grd;//blue
        ctx.fillRect(allLines.chest[chests].x+1,allLines.chest[chests].y+1,18,18);
        ctx.font = "12px Comic Sans MS";
        grd = ctx.createRadialGradient(player._pos.x, player._pos.y, 75, player._pos.x, player._pos.y, 100);
        grd.addColorStop(0, "Hotpink");
        grd.addColorStop(0.5, "rgb(100,100,255)");
        grd.addColorStop(1, "rgba(0,0,0,1)");
        ctx.fillStyle = grd;

        ctx.fillText("C : " + chests,allLines.chest[chests].x,allLines.chest[chests].y+30);
        ctx.stroke();
    }
        for (var r = 0; r < allLines.rooms.length;r++) {
         ctx.beginPath();//begins to draw ai
        ctx.strokeStyle = "Black";
        grd = ctx.createRadialGradient(player._pos.x, player._pos.y, 75, player._pos.x, player._pos.y, 100);
        grd.addColorStop(0, "magenta");
        grd.addColorStop(0.5, "rgb(100,100,255)");
        grd.addColorStop(1, "rgba(0,0,0,1)");
        ctx.font = "12px Comic Sans MS";

        ctx.fillStyle = grd;
        ctx.fillText("R : " + r,allLines.rooms[r].x,allLines.rooms[r].y);
        ctx.stroke();
    }

  ctx.fillStyle="black";


}
var radius = 11;
window.addEventListener("keydown",keyHandler);
function keyHandler(e){
  var pXadd = 0;
  var pYadd = 0;
if (e.keyCode == 65) {//a
  if ((ctx.getImageData(player._pos.x-13,player._pos.y,1,1).data[0] !== 0)&&(
(ctx.getImageData(player._pos.x+13,player._pos.y,1,1).data[0] !== 0) ||
(ctx.getImageData(player._pos.x,player._pos.y-13,1,1).data[0] !== 0) ||
(ctx.getImageData(player._pos.x,player._pos.y+13,1,1).data[0] !== 0))) {
    pXadd = -2;
}
  grd = ctx.createRadialGradient(player._pos.x, player._pos.y, 75, player._pos.x, player._pos.y, 100);
grd.addColorStop(0, "rgba(0,0,0,0)");
grd.addColorStop(0.5, "rgba(0,0,0,0.5)");
grd.addColorStop(1, "rgba(0,0,0,1)");

}
if (e.keyCode == 83) {//s
  if ((ctx.getImageData(player._pos.x,player._pos.y+13,1,1).data[0] !== 0)&&(
(ctx.getImageData(player._pos.x-13,player._pos.y,1,1).data[0] !== 0) ||
(ctx.getImageData(player._pos.x,player._pos.y-13,1,1).data[0] !== 0) ||
(ctx.getImageData(player._pos.x+13,player._pos.y,1,1).data[0] !== 0))) {
    pYadd=2;
      }
  grd = ctx.createRadialGradient(player._pos.x, player._pos.y, 75, player._pos.x, player._pos.y, 100);
grd.addColorStop(0, "rgba(0,0,0,0)");
grd.addColorStop(0.5, "rgba(0,0,0,0.5)");
grd.addColorStop(1, "rgba(0,0,0,1)");

}
if (e.keyCode == 68) {//d
  if ((ctx.getImageData(player._pos.x+13,player._pos.y,1,1).data[0] !== 0)&&(
(ctx.getImageData(player._pos.x-13,player._pos.y,1,1).data[0] !== 0) ||
(ctx.getImageData(player._pos.x,player._pos.y-13,1,1).data[0] !== 0) ||
(ctx.getImageData(player._pos.x,player._pos.y+13,1,1).data[0] !== 0))) {
    //code
    pXadd = 2;
  }
  grd = ctx.createRadialGradient(player._pos.x, player._pos.y, 75, player._pos.x, player._pos.y, 100);
grd.addColorStop(0, "rgba(0,0,0,0)");
grd.addColorStop(0.5, "rgba(0,0,0,0.5)");
grd.addColorStop(1, "rgba(0,0,0,1)");

}
if (e.keyCode == 87) {//w
  if ((ctx.getImageData(player._pos.x,player._pos.y-13,1,1).data[0] !== 0)&&(
(ctx.getImageData(player._pos.x-13,player._pos.y,1,1).data[0] !== 0) ||
(ctx.getImageData(player._pos.x+13,player._pos.y,1,1).data[0] !== 0) ||
(ctx.getImageData(player._pos.x,player._pos.y+13,1,1).data[0] !== 0))) {
    pYadd = -2;
  }
  grd = ctx.createRadialGradient(player._pos.x, player._pos.y, 75, player._pos.x, player._pos.y, 100);
grd.addColorStop(0, "rgba(0,0,0,0)");
grd.addColorStop(0.5, "rgba(0,0,0,0.5)");
grd.addColorStop(1, "rgba(0,0,0,1)");

}
  if (ctx.getImageData(player._pos.x,player._pos.y-13,1,1).data[0] == 0){
    pYadd=1;

  }
if(ctx.getImageData(player._pos.x-13,player._pos.y,1,1).data[0] == 0){
    pXadd =1;

}
if(ctx.getImageData(player._pos.x+13,player._pos.y,1,1).data[0] == 0){
   pXadd = -1;

}
if(ctx.getImageData(player._pos.x,player._pos.y+13,1,1).data[0] == 0){
   pYadd = -1;
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
if (pXadd !== 0) {
    player._pos.x += pXadd;
    if (ctx.getImageData(player._pos.x-20,player._pos.y,1,1).data[1] == 255 && ctx.getImageData(player._pos.x-20,player._pos.y,1,1).data[0] == 0) {        
        cC.style.visibility = "visible";
    }else if (ctx.getImageData(player._pos.x+20,player._pos.y,1,1).data[1] == 255 && ctx.getImageData(player._pos.x+20,player._pos.y,1,1).data[0] == 0) {
        cC.style.visibility = "visible";
    }else{
        cC.style.visibility = "hidden";

    }
}if (pYadd !== 0) {
    player._pos.y += pYadd;
    if (ctx.getImageData(player._pos.x,player._pos.y-20,1,1).data[1] == 255 && ctx.getImageData(player._pos.x,player._pos.y-20,1,1).data[0] == 0) {
        cC.style.visibility = "visible";
    }else if (ctx.getImageData(player._pos.x,player._pos.y+20,1,1).data[1] == 255 && ctx.getImageData(player._pos.x,player._pos.y+20,1,1).data[0] == 0) {
        cC.style.visibility = "visible";
    }else{
        cC.style.visibility = "hidden";

    }

}
}

function chestInv() {

iconsRandC(ctxC,16,8,{x:20,y:70},10,46,currentChest);

}

setInterval(chestInv,100);
setInterval(fileHandeler,10)
