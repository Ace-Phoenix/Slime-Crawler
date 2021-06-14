//M.M.
var equipmentBoxes = {head:"No Item", body:"No Item", feet:"No Item", misc:"No Item",weapon:{slotOne:"No Item", slotTwo: "No Item",slotThree:"No Item"}};
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
     if (player.equiped.head !== "No Item") {
      equipmentBoxes.head = {x:x,y:y,size:size,conts:player.equiped.head};
     }else{
      equipmentBoxes.head = {x:x,y:y,size:size,conts:"No Item"};      
     }
     ctxI.stroke();
     i++;
    //CHEST SLOT
     ctxI.beginPath();
     ctxI.fillStyle = "Blue";
     ctxI.fillRect(x+gap*i+size*i,y,size,size);
     if (player.equiped.chest !== "No Item") {
      equipmentBoxes.body = {x:x+gap*i+size*i,y:y,size:size,conts:player.equiped.chest};
     }else{
      equipmentBoxes.body = {x:x+gap*i+size*i,y:y,size:size,conts:"No Item"};      
     }
     ctxI.stroke();
     i++;
    //FEET SLOT
     ctxI.beginPath();
     ctxI.fillStyle = "Pink";
     ctxI.fillRect(x+gap*i+size*i,y,size,size);
     if (player.equiped.feet !== "No Item") {
      equipmentBoxes.feet = {x:x+gap*i+size*i,y:y,size:size,conts:player.equiped.feet};
     }else{
      equipmentBoxes.feet = {x:x+gap*i+size*i,y:y,size:size,conts:"No Item"};      
     }
     ctxI.stroke();
     i++;
    //MISC SLOT 
     ctxI.beginPath();
     ctxI.fillStyle = "Yellow";
     ctxI.fillRect(x+gap*i+size*i,y,size,size);
     if (player.equiped.misc !== "No Item") {
      equipmentBoxes.misc = {x:x+gap*i+size*i,y:y,size:size,conts:player.equiped.misc};
     }else{
      equipmentBoxes.misc = {x:x+gap*i+size*i,y:y,size:size,conts:"No Item"};      
     }
     ctxI.stroke();
     i++;
    //WEAPON SLOT 1
     i = 0;
      ctxI.beginPath();
      ctxI.fillStyle = "Green";
      ctxI.fillRect(x+(size/2)+(gap/2)+gap*i+size*i,y+gap+size,size,size);
     if (player.equiped.weapon.slotOne !== "No Item") {
      equipmentBoxes.weapon.slotOne = {x:x+(size/2)+(gap/2)+gap*i,y:y+gap+size,size:size,conts:player.equiped.weapon.slotOne};
     }else{
      equipmentBoxes.weapon.slotOne = {x:x+(size/2)+(gap/2)+gap*i,y:y+gap+size,size:size,conts:"No Item"};      
     }
      ctxI.stroke();
     i++;
    //WEAPON SLOT 2
     ctxI.beginPath();
     ctxI.fillStyle = "Orange";
     ctxI.fillRect(x+(size/2)+(gap/2)+gap*i+size*i,y+gap+size,size,size);
     if (player.equiped.head !== "No Item") {
      equipmentBoxes.weapon.slotTwo = {x:x+(size/2)+(gap/2)+gap*i,y:y+gap+size,size:size,conts:player.equiped.weapon.slotTwo};
     }else{
      equipmentBoxes.weapon.slotTwo = {x:x+(size/2)+(gap/2)+gap*i,y:y+gap+size,size:size,conts:"No Item"};      
     }
     ctxI.stroke();
     i++;
    //WEAPON SLOT 3 
     ctxI.beginPath();
     ctxI.fillStyle = "Purple";
     ctxI.fillRect(x+(size/2)+(gap/2)+gap*i+size*i,y+gap+size,size,size);
     ctxI.stroke();
     if (player.equiped.head !== "No Item") {
      equipmentBoxes.weapon.slotThree = {x:x+(size/2)+(gap/2)+gap*i,y:y+gap+size,size:size,conts:player.equiped.weapon.slotThree};
     }else{
      equipmentBoxes.weapon.slotThree = {x:x+(size/2)+(gap/2)+gap*i,y:y+gap+size,size:size,conts:"No Item"};      
     }
     ctxI.fillStyle = "White";
 }

var pointing = {x:50,y:50};
var pointText = "?";
var togled = false;
var itemBoxes=iconsRandC(ctxI,11,7,{x:20,y:265},20,45,player.items);
var item = [];
var listOf = [];
var numClicked = 0;



 cI.addEventListener("mousemove",hoverTells);
  function hoverTells(e) {
   if (togled == false) {
    pointText = "No Item";
    pointing = {x:e.offsetX,y:e.offsetY};
      for (var i = 0; i < itemBoxes.length;i++) {
        if (e.offsetX >= itemBoxes[i].locParams.x && e.offsetX <= (itemBoxes[i].locParams.x+itemBoxes[i].locParams.widthHeight)) {
            if (e.offsetY >= itemBoxes[i].locParams.y && e.offsetY <= (itemBoxes[i].locParams.y+itemBoxes[i].locParams.widthHeight)) {
             numClicked = itemBoxes[i].num
             pointText = itemBoxes[i].conts.name;
             item = itemBoxes[i];
            }
        }
        if (equipmentBoxes.head.conts !== "No Item") {
          if (e.offsetX >= equipmentBoxes.head.x && e.offsetX <= (equipmentBoxes.head.x+equipmentBoxes.head.widthHeight)) {
            if (e.offsetY >= equipmentBoxes.head.y && e.offsetY <= (equipmentBoxes.head.y+equipmentBoxes.head.widthHeight)) {
             pointText = equipmentBoxes.head.conts.name;
             item = equipmentBoxes.head;
            }
          }
        }
       if (equipmentBoxes.body.conts !== "No Item") {
        if (e.offsetX >= equipmentBoxes.body.x && e.offsetX <= (equipmentBoxes.body.x+equipmentBoxes.body.widthHeight)) {
            if (e.offsetY >= equipmentBoxes.body.y && e.offsetY <= (equipmentBoxes.body.y+equipmentBoxes.body.widthHeight)) {
             pointText = equipmentBoxes.body.conts.name;
             item = equipmentBoxes.body;
            }
        }
       }
       if (equipmentBoxes.weapon.slotOne.conts !== "No Item") {
        if (e.offsetX >= equipmentBoxes.weapon.slotOne.x && e.offsetX <= (equipmentBoxes.weapon.slotOne.x+equipmentBoxes.weapon.slotOne.size)) {
            if (e.offsetY >= equipmentBoxes.weapon.slotOne.y && e.offsetY <= (equipmentBoxes.weapon.slotOne.y+equipmentBoxes.weapon.slotOne.size)) {
             pointText = equipmentBoxes.weapon.slotOne.conts.name;
             item = equipmentBoxes.weapon.slotOne;
            }
        }
       }
       if (equipmentBoxes.weapon.slotTwo.conts !== "No Item") {
        if (e.offsetX >= equipmentBoxes.weapon.slotTwo.x && e.offsetX <= (equipmentBoxes.weapon.slotTwo.x+equipmentBoxes.weapon.slotTwo.size)) {
            if (e.offsetY >= equipmentBoxes.weapon.slotTwo.y && e.offsetY <= (equipmentBoxes.weapon.slotTwo.y+equipmentBoxes.weapon.slotTwo.size)) {
             pointText = equipmentBoxes.weapon.slotTwo.conts.name;
             item = equipmentBoxes.weapon.slotTwo;
            }
        }
       }
       if (equipmentBoxes.weapon.slotThree.conts !== "No Item") {
        if (e.offsetX >= equipmentBoxes.weapon.slotThree.locParams.x && e.offsetX <= (equipmentBoxes.weapon.slotThree.locParams.x+equipmentBoxes.weapon.slotThree.locParams.size)) {
            if (e.offsetY >= equipmentBoxes.weapon.slotThree.locParams.y && e.offsetY <= (equipmentBoxes.weapon.slotThree.locParams.y+equipmentBoxes.weapon.slotThree.locParams.size)) {
             pointText = equipmentBoxes.weapon.slotThree.conts.name;
             item = equipmentBoxes.weapon.slotThree;
            }
        }
       }
      }
    }else if (togled == true) {
       pointing = {x:2,y:257};
         listOf = [];
         listOf.push("Type : " + lockedItem.type);
         listOf.push("Level Req : " + lockedItem.level);
         listOf.push("Desc : " + lockedItem.desc);
         listOf.push("Dam Type : " + lockedItem.damageType);
         listOf.push("Move Set : ");
       if (lockedItem.moveSet !== undefined) {
         listOf.push(lockedItem.moveSet[0]);
         listOf.push(lockedItem.moveSet[1]);
         listOf.push(lockedItem.moveSet[2]);
         listOf.push(lockedItem.moveSet[3]);
         list(lockedPoint,listOf);
       }
    }
  }
var lockedPoint = {x:pointing.x,y:pointing.y};
var lockedItem = item;
cI.addEventListener("mousedown",statsToggle);//displaying stats
  function statsToggle() {
    if (togled == false) {
      togled = true;
      lockedPoint = {x:2,y:257};
      if (item.conts !== undefined) {
        lockedItem = item.conts;
      }
    }else{
      togled = false;
    }
  }
  
  function updateArray(a,pos) {
    a[pos] = "Nothing"
    var newArray = [];
    for (var  i = 0; i < a.length;i++) {
        if (a[i] !== "nothing") {
            newArray.push(a[i]);
        }
    }
    return newArray;
  }
  
 window.addEventListener("keydown",enterEquipEvent);
  function enterEquipEvent(e) {
    console.log(e)
    if (e.key == "1") {
      if (togled == true) {
        if (lockedItem !== undefined) {
          if (lockedItem.type == "projWeapon" || lockedItem.type == "spellTome" || lockedItem.type == "magicStaff" || lockedItem.type == "swords1H"||
              lockedItem.type == "swords2H" || lockedItem.type == "blunt1H" || lockedItem.type == "blunt2H" || lockedItem.type == "swordShields") {
            player.equiped.weapon.slotOne = lockedItem;
            updateArray(player.items,numClicked)
            
          }
        }
      }
    }
    if (e.key == "2") {
      if (togled == true) {
        if (lockedItem !== undefined) {
          if (lockedItem.type == "projWeapon" || lockedItem.type == "spellTome" || lockedItem.type == "magicStaff" || lockedItem.type == "swords1H"||
              lockedItem.type == "swords2H" || lockedItem.type == "blunt1H" || lockedItem.type == "blunt2H" || lockedItem.type == "swordShields") {
            //code
          }
        }
      }
    }
    if (e.key == "3") {
      if (togled == true) {
        if (lockedItem !== undefined) {
          if (lockedItem.type == "projWeapon" || lockedItem.type == "spellTome" || lockedItem.type == "magicStaff" || lockedItem.type == "swords1H"||
              lockedItem.type == "swords2H" || lockedItem.type == "blunt1H" || lockedItem.type == "blunt2H" || lockedItem.type == "swordShields") {
            //code
          }
        }
      }
    }
    if (e.key == "5") {
      if (togled == true) {
        if (lockedItem !== undefined) {
            console.log(lockedItem)
        }
      }
    }
    if (e.key == "6") {
      if (togled == true) {
        if (lockedItem !== undefined) {
            console.log(lockedItem)
        }
      }
    }
    if (e.key == "7") {
      if (togled == true) {
        if (lockedItem !== undefined) {
            console.log(lockedItem)
        }
      }
    }
    if (e.key == "8") {
      if (togled == true) {
        if (lockedItem !== undefined) {
            console.log(lockedItem)
        }
      }
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
setInterval(inventoryHandeler,50);