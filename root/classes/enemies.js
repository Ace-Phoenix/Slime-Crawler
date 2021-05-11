//A.H.

//-location(pos)
//-health(hp)
//-speed(sp)
//-name(name)
//-level(level)
//-_moveset(move)
//@class Enemy :
////@Constructor
////@param pos [object] location of the Enemy
////@param hp [object]  hp of the Enemy
////@param name [object] name of the Enemy
////@param sp [object] : speed of the Enemy
////@param level [object] : the level of the Enemy
////@param _moveset [object] : the Enemy's movement

class Enemy{
    constructor(pos, hp, sp, name, level, _moveset){
    this.pos = pos;
    this.hp = hp;
    this.sp = 0;
    this.name = name;
    this.level = 0;
    this._moveset = move;
    }
}
