//M.M.
class Player{
    constructor(name, stats, pos,items,equiped){
        this.name = name;
        this._stats = this.test(stats);
        this._pos = this.posBoundry(pos);
        this.items = items;
        this.equiped = equiped;
    }
    get stats(){
        return this._stats;
    }
    set stats(stats){
        var okStats = this.checkStats();
            if (okStats == true) {
                this._stats = stats;
            }else{
              throw new Error("Why?");
            }
    }
    get pos(){
        return this._pos = this.posBoundry(pos);
    }
    set pos(pos){
        if (this._pos == undefined || (typeof(this._pos) !== "object") || (Array.isArray(pos) == true)) {
            throw new Error("pos is expected to be a object and is " + typeof(this._pos) + " and type of array = " + Array.isArray(pos));
        }if ((this._pos == undefined)) {
            throw new Error("this.pos is " + typeof(this._pos) + " and needs to be an object");
        }if (this._pos !== undefined) {
            if (isNaN(this._pos.x)) {
                throw new Error("this._pos.x needs to be an number and is " + this._pos.x);
            }
            if (isNaN(this._pos.y)) {
                throw new Error("this._pos.y needs to be an number and is " + this._pos.y);
            }
        }
    }
    test(stats){
       return this._stats = stats;
    }
checkStats(){
    var check = 0;
            if (Array.isArray(this._stats) == false && typeof(this._stats) == "object"){
                check++;
        if (this._stats.hp == undefined || (typeof(this._stats.hp) !== "object" || Array.isArray(this._stats.hp) == true) || typeof(this._stats.hp.current) !== "number" || typeof(this._stats.hp.max) !== "number") {
            throw new Error("this._stats expects hp to be a object and was type of " + typeof(this._stats.hp) + " and the type for current was " + typeof(this._stats.hp.current) + " it should be a number the type of max was " + typeof(this._stats.hp.max) + " and should be a number");
        }
        else{
            check++;
        }
        if (this._stats.mp == undefined || (typeof(this._stats.mp) !== "object" || Array.isArray(this._stats.mp) == true) ||typeof(this._stats.mp.current) !== "number" || typeof(this._stats.mp.max) !== "number") {
            throw new Error("this._stats expects mp to be a object and was type of " + typeof(this._stats.mp) + " and the type for current was " + typeof(this._stats.mp.current) + " it should be a number the type of max was " + typeof(this._stats.mp.max) + " and should be a number");
        }
        else{
            check++;
        }
        if (Array.isArray(this._stats.moveset) == false) {
            throw new Error("this._stats.moveset should be an array and is " + typeof(this._stats.moveset));
        }
        else{
            check++;
        }
        if (Array.isArray(this._stats.statusEffects) == false) {
            throw new Error("this._stats.moveset should be an array and is " + typeof(this._stats.statusEffects));
        }
        else{
            check++;
        }
        }else {
            throw new Error("Stats is expected to be a object and was " + typeof(this._stats) + " is array " + Array.isArray(this._stats));
        }
            if (check == 5) {
                return true;
            }
        }
    posBoundry(pos){
        var placeHolder = {x:pos.x,y:pos.y};
        if (pos.y > 980) {
            placeHolder.y = 980;
        }
        if (pos.y < 20) {
            placeHolder.y = 20;
        
        }
        if (pos.x > 980) {
            placeHolder.x = 980;
        }
        if (pos.x < 20) {
          placeHolder.x = 20;
        }
        this._pos = placeHolder;
        return placeHolder;
    }
}


var player = new Player("Name", {current:10,max:10},{x:500,y:500},[],{head:"No Item",chest:"No Item",feet:"No Item",misc:"No Item",weapon:{slotOne:"No Item",slotTwo:"No Item",slotThree:"No Item"}});

setInterval(function(){
    player.posBoundry(player._pos);
    },1);