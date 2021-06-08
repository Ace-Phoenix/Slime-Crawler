//M.M.
//@function inventoryHandeler() [System : Inventory : Functionality] : Updates the inventory

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

var pointing = {x:50,y:50} 
var pointText = "?";
var itemBoxes=iconsRandC(ctxI,11,7,{x:20,y:265},20,45);
cI.addEventListener("mousedown",hoverTells);

 function hoverTells(e) { 
    pointText = "No Item";
    console.log(e);
    
    pointing = {x:e.offsetX,y:e.offsetY};
    for (var i = 0; i < itemBoxes.length;i++) {
        if (e.offsetX >= itemBoxes[i].locParams.x && e.offsetX <= (itemBoxes[i].locParams.x+itemBoxes[i].locParams.widthHeight)) {
            if (e.offsetY >= itemBoxes[i].locParams.y && e.offsetY <= (itemBoxes[i].locParams.y+itemBoxes[i].locParams.widthHeight)) {
            pointText = itemBoxes[i].conts;
            }
        }
    }
}


function inventoryHandeler(){
    ctxI.clearRect(0,0,480,980)
    topIcons();
    iconsRandC(ctxI,11,7,{x:20,y:265},20,45);
    
    ctxI.strokeText(pointText,pointing.x,pointing.y);
}



setInterval(inventoryHandeler,100);