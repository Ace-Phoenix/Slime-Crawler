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
    constructor(pos,stats , name, level, moveset){
    this.name = name;
    this._stats = stats
    this.level = 0;
    this._pos = pos;
    this._moveset = moveset;
    }
}
