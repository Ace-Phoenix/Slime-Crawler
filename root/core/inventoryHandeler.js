//M.M.

//@function topIcons [Utility : Icon Forming]
 function topIcons() {
    var x = 15;//starting x value
    var y = 15;//starting y value
    var size = 100;//starting size value
    var gap = 15;//space between icons
    var i = 0;//itter for quality of life 
    //HEAD SLOT
     ctxI.beginPath();
     ctxI.fillStyle = "Cyan";
     ctxI.fillRect(x,y,size,size);
     ctxI.stroke();
     i++;
    //CHEST SLOT
     ctxI.beginPath();
     ctxI.fillStyle = "Blue";
     ctxI.fillRect(x+gap*i+size*i,y,size,size);
     ctxI.stroke();
     i++;
    //FEET SLOT
     ctxI.beginPath();
     ctxI.fillStyle = "Pink";
     ctxI.fillRect(x+gap*i+size*i,y,size,size);
     ctxI.stroke();
     i++;
    //MISC SLOT 
     ctxI.beginPath();
     ctxI.fillStyle = "Yellow";
     ctxI.fillRect(x+gap*i+size*i,y,size,size);
     ctxI.stroke();
     i++;
    //WEAPON SLOT 1
     i = 0;
      ctxI.beginPath();
      ctxI.fillStyle = "Green";
      ctxI.fillRect(x+(size/2)+(gap/2)+gap*i+size*i,y+gap+size,size,size);
      ctxI.stroke();
     i++;
    //WEAPON SLOT 2
     ctxI.beginPath();
     ctxI.fillStyle = "Orange";
     ctxI.fillRect(x+(size/2)+(gap/2)+gap*i+size*i,y+gap+size,size,size);
     ctxI.stroke();
     i++;
    //WEAPON SLOT 3 
     ctxI.beginPath();
     ctxI.fillStyle = "Purple";
     ctxI.fillRect(x+(size/2)+(gap/2)+gap*i+size*i,y+gap+size,size,size);
     ctxI.stroke();
     ctxI.fillStyle = "White";
 }

var pointing = {x:50,y:50};
var pointText = "?";
var togled = false;
var itemBoxes=iconsRandC(ctxI,11,7,{x:20,y:265},20,45,player.items);
var item = [];
var listOf = [];
 cI.addEventListener("mousemove",hoverTells);
  function hoverTells(e) {
   if (togled == false) {
    pointText = "No Item";
    pointing = {x:e.offsetX,y:e.offsetY};
      for (var i = 0; i < itemBoxes.length;i++) {
        if (e.offsetX >= itemBoxes[i].locParams.x && e.offsetX <= (itemBoxes[i].locParams.x+itemBoxes[i].locParams.widthHeight)) {
            if (e.offsetY >= itemBoxes[i].locParams.y && e.offsetY <= (itemBoxes[i].locParams.y+itemBoxes[i].locParams.widthHeight)) {
             pointText = itemBoxes[i].conts.name;
             item = itemBoxes[i];
            }
        }
      } 
    }else if (togled == true) {
      listOf = [];
      listOf.push("Type : " + lockedItem.type);
      listOf.push("Level Req : " + lockedItem.level);
      listOf.push("Desc : " + lockedItem.desc);
      listOf.push("Dam Type : " + lockedItem.damageType);
      listOf.push(lockedItem.moveSet);
      list(lockedPoint,listOf);
    }
  }
var lockedPoint = {x:pointing.x,y:pointing.y};
var lockedItem = item;
cI.addEventListener("mousedown",statsToggle);//displaying stats
  function statsToggle() {
    if (togled == false) {
      togled = true;
      lockedPoint = {x:pointing.x,y:pointing.y};
      lockedItem = item.conts;
    }else{
      togled = false;
    }
  }
//@function list [Utility : ordered lists]
  function list(start,array) {
    ctxI.fillStyle = "White";
    ctxI.fillRect(0,start.y-20,3000,((start.y+(20*array.length+1)+18)-start.y));
    ctxI.fillStyle = "Purple";
    ctxI.strokeText(pointText,pointing.x,pointing.y);
    ctxI.fillText(pointText,pointing.x,pointing.y);
      for (var i = 1; i < array.length+1; i++) {
        ctxI.fillStyle = "Purple";
        ctxI.strokeStyle = "White";
        ctxI.font = "18px Comic Sans MS";
        ctxI.strokeText(array[i-1],0,start.y+(18*i)+2);
        ctxI.fillText(array[i-1],0,start.y+(18*i)+2);
      }
  }
//@function inventoryHandeler [Updates : Inventory]
   function inventoryHandeler(){
      ctxI.clearRect(0,0,480,980);
      topIcons();
      iconsRandC(ctxI,11,7,{x:20,y:265},20,45);
        if (togled==true && listOf.length !==0) {
            list(lockedPoint,listOf);
        }
        ctxI.fillStyle = "Purple";
        ctxI.strokeStyle = "White";
        ctxI.font = "18px Comic Sans MS";
        ctxI.strokeText(pointText,pointing.x,pointing.y);
        ctxI.fillText(pointText,pointing.x,pointing.y);
        ctxI.strokeStyle = "black";
        ctxI.fillStyle = "White";
   }
   
//@function periodicUpdate [Update : icons]
   function periodicUpdate() {
     itemBoxes=iconsRandC(ctxI,11,7,{x:20,y:265},20,45,player.items);
   }
   
setInterval(periodicUpdate,500);
setInterval(inventoryHandeler,100);