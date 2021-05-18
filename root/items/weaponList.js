// Coder : E.B.
// Ideas : Euan ,Owen, Kennedy
//weapon type will be the variable name
//spellsTombs
const spellTombs = [
  {
    name: "firetomb", //name//0
    type: "spellTombs", //type of weapon
    decs: "throw the firetomb at the enemy to deal damage", // A short description of the item
    dam: 2, //How much damage it does
    level: 1,
    magic: "fire",}


];
//swords1h
const swords1H = [
  {
    name: "Spartan Sword",
    type: "swords1H",
    level: 1,
    decs: "a simple one handed sword",
    moveSet: [{name: "Slash", description: "A slash attack",effect: {type: "slash", dam: 1, time: 2, conditions: {end: "heal", start: "slash",}},cost: 5,cooldown: 2}],
  }


];
//swords2h
const swords2H = [
  {
    name: "Big Stab",
    type: "swords2H",
    level: 1,
    desc: "a big high damage dealing sword",
    dam: 3,
    magic: "none"}

];
//blunt1h
const blunt1H = [
{
   name: "War Hammer",
   type: "blunt1H",
   level: 1,
   desc: "a long handed hand weapon with medium damage dealt",
   dam: 2,
   magic: "none",}


];
//blunt2h
const blunt2H = [
  {
     name: "Barbed Mace",
     type: "blunt2H",
     level: 1,
     desc: "a high damage dealing mace wrapped in barb wire",
     dam: 4,
     magic: "none",
  }

];
//swordandShields
const swordShields = [
];
