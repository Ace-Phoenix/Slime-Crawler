//M.M.
var gameState = "Combat";

var c = document.getElementsByClassName("gameCanvas")[0];//Main Canvas variable
var ctx = c.getContext("2d");//Main canvas variable
var cI = document.getElementsByClassName("inventoryCanvas")[0];//Inventory Canvas Variable
var ctxI = cI.getContext("2d");//inventory Canvas Variable
var cC = document.getElementsByClassName("chestCanvas")[0];//Chest Canavs Variable
var ctxC = cC.getContext("2d");//Chest Canvas Variable
  ctx.fillStyle = "black";//background
  ctx.fillRect(0,0,1000,1000);//background

  var allLines = {rooms:[],hallways:[],chest:[]};//Placeholder Variable
  var contains = [];//Placeholder Variable
  var currentChest = [];//placeholder variable
  var chestNumb = 0;

  //function iconsRandC [Utility : box forming : Rows and Collums]
  function iconsRandC(ctx,rows,collums,start,gap,size,fill) {
    var itteratorNumber = 0;
    var itterFill = 0;//itter
    var inside = [];//placeholder
    var tf = true;
      for (var i = 0; i < rows;i++) {//counting rows
        for (var j = 0; j < collums;j++) {//counting collums
            tf = false;
            ctxI.beginPath();//start of canvas drawing 
               if (fill !== undefined){//there is a fill
                   if (itterFill !== fill.length) {// it is not at  max [makeshift While Loop]
                      tf = true;
                      inside.push({locParams:{x:start.x+gap*j+size*j,y:start.y + gap * i+size*i,widthHeight:size},conts:fill[itterFill],num:itteratorNumber});//push
                      itterFill++;//itter
                   
                   }
               }
            ctx.fillRect(start.x+gap*j+size*j,start.y + gap * i+size*i,size,size);
            ctx.fillStyle = 'white';
            ctx.stroke();
            if (tf == false) {
          inside.push({locParams:{x:start.x+gap*j+size*j,y:start.y + gap * i+size*i,widthHight:size},conts:"No  Item",num:itteratorNumber});
            }
          itteratorNumber++;
        }
      }
    return inside;
}

//@function rooms() [Utility : Map Creation]
//@restricted roomNumber [Hidden : Value : Param : Unchangable] {max : 25, min: 10};
//@restricted roomSizes [Hidden : Value : Param : Unchageable] {height:{max:75,min:50}, width: {max:75,min:50}}
function rooms() {
    var amountRooms = Math.floor(Math.random()*(20-10+1)+10);//random but set amount of rooms
    for (var i = 0; i < amountRooms;i++) {
      if (allLines.rooms.length > 0){
        var randW = Math.floor(Math.random()*(150-100+1)+100);
        var randH = Math.floor(Math.random()*(150-100+1)+100);
        var randY = Math.floor(Math.random()*((1000-randH-10)-10+1)+10);
        var randX = Math.floor(Math.random()*((1000-randW-10)-10+1)+10);
          for (var j = 0; j < allLines.rooms.length;j++) {
            var check = 0;//testing variable when needed
              if((randX+randW + 10) > allLines.rooms[j].x && randX-10 < (allLines.rooms[j].x + allLines.rooms[j].w)) {
                if((randY+randH + 10) > allLines.rooms[j].y && randY-10 < (allLines.rooms[j].y + allLines.rooms[j].h)) {
                  randY = Math.floor(Math.random()*((1000-randH-10)-10+1)+10);
                  randX = Math.floor(Math.random()*((1000-randW-10)-10+1)+10);
                  j = -1;
                }
              }
          }
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

//@function hallways [Utility:Map Creation]
//@restricted predetermined {Room to Room}
function hallways() {
  var cenP = [];//placeHolder
  for (var i = 0; i < allLines.rooms.length;i++) {
    cenP.push({x:(allLines.rooms[i].x+(allLines.rooms[i].w/2)),y:(allLines.rooms[i].y + (allLines.rooms[i].h/2))});//pushing
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

//@function randomWeapon [Utility : Chest Weapons]
//@param max [Restrictions : max > 0 && max.type == integer]
function randomWeapon(max) {
    var numberOfWeapons = Math.floor(Math.random()*max)+1;
    var weapons = [];//placeHolder
    for (var i = 0; i < numberOfWeapons;i++) {
        var types = ["mW", "1hS","2hS","1hm","2hm","pW","sS"];//placeholder
        var type = types[Math.floor(Math.random()*types.length)];//Determined place
        if (type == "mW") {
            var rand = Math.floor(Math.random()*magicWeapons.length);
            weapons.push(magicWeapons[rand]);
        }if (type == "1hS") {
            var rand = Math.floor(Math.random()*swords1H.length);
            weapons.push(swords1H[rand]);
        }if (type == "2hS") {
            var rand = Math.floor(Math.random()*swords2H.length);
            weapons.push(swords2H[rand]);
        }if (type == "1hm") {
            var rand = Math.floor(Math.random()*blunt1H.length);
            weapons.push(blunt1H[rand]);
        }if (type == "2hm") {
            var rand = Math.floor(Math.random()*blunt2H.length);
            weapons.push(blunt2H[rand]);
        }if (type == "pW") {
            var rand = Math.floor(Math.random()*projWeapons.length);
            weapons.push(projWeapons[rand]);
        }if (type == "sS") {
            var rand = Math.floor(Math.random()*swordShields.length);
            weapons.push(swordShields[rand]);
        }
    }
    return weapons;    
}

//@function chests [Utility : Chest Creation]
function chests() {
  for (var i = 0; i < allLines.rooms.length;i++) {
    var chance = Math.floor((Math.random())*101);
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
          allLines.chest.push({x:theOne.x+1,y:theOne.y+1,conts:randomWeapon(5)});
}
        
        ctx.beginPath();
        ctx.strokeStyle = "Black";
        //ctx.rect();
      ctx.stroke();
    }
  }
}

//@function drawMap [Utility : Ultimate Map Creation]
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
                var adder = 2;
                var xdder = 1;
            }
            if (allLines.hallways[k].w>0) {
                var adder = -2;
                var xdder = 1;
                
            }
            if (allLines.hallways[k].h<0) {
                var hdder = 2;
                var xdder = 1;
            }
            if (allLines.hallways[k].h>0) {
                var hdder = -2;
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

//@function drawEverything [Utilities : Mape creation];
function drawEverything() {   
   ctx.beginPath();//begins to draw ai
   //ctx.arc(npc.x, npc.y, 20, 0, Math.PI*2); //draws the ai based on npc x and y, and location
   //ctx.fillStyle = "clear";
  ctx.arc(player._pos.x, player._pos.y, 10, 0, Math.PI*2); //Draws the player using it's pre-determined loation and radius.
  ctx.strokeStyle = "rgba(0,0,0,0)";//blue
  ctx.fillStyle = "white";//blue
  ctx.strokeStyle = "Black";

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

//@master --function-- [Utility : Update Handeler]
function fileHandeler(){
  if (gameState == "Play") {
  startRooms();
    grd = ctx.createRadialGradient(player._pos.x, player._pos.y, 75, player._pos.x, player._pos.y, 100);//anything with grd is gradient forming
    grd.addColorStop(0, "rgba(0,0,0,0)");
    grd.addColorStop(0.5, "rgba(0,0,0,0.5)");
    grd.addColorStop(1, "rgba(0,0,0,1)");
  ctx.fillRect(0,0,1000,1000);
  ctx.fillStyle="black";
  ctx.fill();
    drawMap();
    drawEverything();
        for (var chests = 0; chests < allLines.chest.length;chests++) {//chests
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
        for (var r = 0; r < allLines.rooms.length;r++) {//rooms
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
}

var radius = 11;//not used i think?
window.addEventListener("keydown",keyHandler);//anywhere on the screen will work with key strokes
function keyHandler(e){//simple handeler for the moverment and what not
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

//@function changeCurrent [Utility : Update Function]
function changeCurrent() {
  if (gameState == "Play") {
  var k = 0;
    var closest = allLines.chest[0];
      for (var i = 1; i < allLines.chest.length;i++) {
        var newxDist = Math.abs(allLines.chest[i].x-player._pos.x);
        var newyDist = Math.abs(allLines.chest[i].y-player._pos.y);
        var oldxDist = Math.abs(closest.x-player._pos.x);
        var oldyDist = Math.abs(closest.y-player._pos.y);
          if (newxDist < oldxDist && newyDist < oldyDist) {
            closest = allLines.chest[i];
            k=i;
          }
      }
      chestNum=k;
        contains = closest.conts;
        currentChest = closest;
      return closest;
  }
}

//@function newArray [Utility : Array removing] : simply removes a part of an array and makes a new one
  function newArray(array,removePlace) {
    array[removePlace].conts = "No Item";
    console.log(removePlace)
    var newArray = [];
    for (var i = 0; i < array.length-1; i++) {
            newArray.push(array[i]);
    }
    return newArray;
  }
  

var chestText = "?";//appeared text
var chestPoint = {x:25,y:25};//text location
var itemC = [];//item displayed
var citemBoxes = iconsRandC(ctxC,4,2,{x:35,y:80},40,184,currentChest.conts);
cC.addEventListener("mousemove",chestHover);//Event for adding name when moving mouse 
  function chestHover(e) {
        chestText = "No Item";
        chestPoint = {x:e.offsetX,y:e.offsetY};
          for (var i = 0; i < citemBoxes.length;i++) {
            if (e.offsetX >= citemBoxes[i].locParams.x && e.offsetX <= (citemBoxes[i].locParams.x+citemBoxes[i].locParams.widthHeight)) {
              if (e.offsetY >= citemBoxes[i].locParams.y && e.offsetY <= (citemBoxes[i].locParams.y+citemBoxes[i].locParams.widthHeight)) {
                chestText = citemBoxes[i].conts.name;
                itemC = citemBoxes[i];
              }
            }
          }
  }
  
  function test(saveItem){
    var arr = [];
    for (var j = 0; j < allLines.chest[chestNum].conts.length;j++) {
      if (saveItem == allLines.chest[chestNum].conts[j]) {
                            
      }else{
        arr.push(allLines.chest[chestNum].conts[j]);
      }
    }
   return arr;
  }

cC.addEventListener("mousedown",chestClick);//Event for adding name when moving mouse 
  function chestClick(e) {
        chestPoint = {x:e.offsetX,y:e.offsetY};
          for (var i = 0; i < citemBoxes.length;i++) {
            if (e.offsetX >= citemBoxes[i].locParams.x && e.offsetX <= (citemBoxes[i].locParams.x+citemBoxes[i].locParams.widthHeight)) {
              if (e.offsetY >= citemBoxes[i].locParams.y && e.offsetY <= (citemBoxes[i].locParams.y+citemBoxes[i].locParams.widthHeight)) {
                var saveItem = citemBoxes[i].conts;
                if (citemBoxes[i].conts !== "No Item") {
                  console.log(citemBoxes);
                  if (saveItem !== "No Item") {
                  player.items.push(saveItem);
                  allLines.chest[chestNum].conts = test(saveItem);
                  }
                  citemBoxes = newArray(citemBoxes,i);
                }
              }
            }
          }
  }
//@function chestHandeler [Utility : Chest Updates]
  function chestHandeler() {
    ctxC.clearRect(0,0,3000,3000);
      iconsRandC(ctxC,4,2,{x:35,y:80},40,184,currentChest.conts);
        ctxC.fillStyle = "Purple";
        ctxC.strokeStyle = "White";
        ctxC.font = "18px Comic Sans MS";
        ctxC.strokeText(chestText,chestPoint.x,chestPoint.y);
        ctxC.fillText(chestText,chestPoint.x,chestPoint.y);
        ctxC.strokeStyle = "black";
        ctxC.fillStyle = "White";
  }
  
    function periodicUpdateC() {
     citemBoxes=iconsRandC(ctxC,4,2,{x:35,y:80},40,184,currentChest.conts);
   }

  function combatPhase() {
    if (gameState == "Combat") {
    ctx.fillStyle = "Black";
    ctx.fillRect(0,0,1000,1000);  
    ctx.fillStyle = "Green";
    ctx.fillRect(25,25,300,40);
    ctx.fillStyle = "Red";
    ctx.fillRect(675,25,300,40);
    ctx.beginPath();
    ctx.strokeStyle = "White";
    ctx.moveTo(500,0);
    ctx.lineTo(500,1000);
    ctx.stroke();
    ctx.fillStyle = "Cyan";
    ctx.fillRect(25,80,450,40);
    ctx.fillStyle = "lightblue";
    ctx.fillRect(25,130,425,30);
    ctx.fillRect(25,170,425,30);
    ctx.fillRect(25,210,425,30);
    ctx.fillRect(25,250,425,30);
    ctx.fillStyle = "Pink";
    ctx.fillRect(525,80,450,40);
    ctx.fillStyle = "lightgrey";
    ctx.fillRect(550,130,425,30);
    ctx.fillRect(550,170,425,30);
    ctx.fillRect(550,210,425,30);
    ctx.fillRect(550,250,425,30);
    if (player.equiped.weapon.slotOne !== "No Item") {
        //code
    }
    ctx.fillStyle = "Cyan";
    ctx.fillRect(25,290,450,40);
    ctx.fillStyle = "lightblue";
    ctx.fillRect(25,340,425,30);
    ctx.fillRect(25,380,425,30);
    ctx.fillRect(25,420,425,30);
    ctx.fillRect(25,460,425,30);
    ctx.fillStyle = "Pink";
    ctx.fillRect(525,290,450,40);
    ctx.fillStyle = "lightgrey";
    ctx.fillRect(550,340,425,30);
    ctx.fillRect(550,380,425,30);
    ctx.fillRect(550,420,425,30);
    ctx.fillRect(550,460,425,30);
    if (player.equiped.weapon.slotTwo !== "No Item") {
        //code
    }
    ctx.fillStyle = "Cyan";
    ctx.fillRect(25,500,450,40);
    ctx.fillStyle = "lightblue";
    ctx.fillRect(25,550,425,30);
    ctx.fillRect(25,590,425,30);
    ctx.fillRect(25,630,425,30);
    ctx.fillRect(25,670,425,30);
    ctx.fillStyle = "Pink";
    ctx.fillRect(525,500,450,40);
    ctx.fillStyle = "lightgrey";
    ctx.fillRect(550,550,425,30);
    ctx.fillRect(550,590,425,30);
    ctx.fillRect(550,630,425,30);
    ctx.fillRect(550,670,425,30);
    
    if (player.equiped.weapon.slotThree !== "No Item") {
        //code
    }
    }
  }

setInterval(fileHandeler,10);
setInterval(combatPhase,1);
setInterval(changeCurrent,10);
setInterval(periodicUpdateC,500);
setInterval(chestHandeler,50);