// Coder : E.B.
// Ideas : Euan ,Owen, Kennedy
//max level 10
//the variable name tells what slot it goes in it does not mean it has to be a helmet
//or have the type helmet it should just make sence in that slot such as for a helmet slot
//you could use hood or crown
const helmetArmors = [
  {
    name: "Basic Helm",
    type: helmet,//other type is hoood
    level: 1,
    desc: "A simple leather helm that cushions blows",
    damRes: 1,
    magic: "none"
  },
  {
    name: "Basic Hood",
    type: hood,
    level: 1,
    desc: "A simple hood that increases your Mana",
    damRes: 0,
    magic: "moreMana"
  }
];
//same thing with the chestArmors it does not have to be a chest plate
//it could be robes or anything else you can think of
const chestArmors = [
  {
    name: "Basic chestpiece",
    type: chestplate,
    level: 1,
    desc: "A simple leather chestpiece that cushions blows",
    damRes: 1,
    magic: "none"
  },
  {
    name: "Basic Robe",
    type: robe,
    level: 1,
    desc: "A simple robe that increases your mana",
    damRes: 0,
    magic: "moreMana"
  }
];

//same thing with the boots
const bootArmors = [
  {
    name: "Basic Shoes",
    type: boot,
    level: 1,
    desc: "Simple boots that cushions blows",
    damRes: 1,
    magic: "none",
  },
  {
    name: "Magic Shoes",
    type: shoe,
    level: 1,
    desc: "Magic Shoes for more magicing",
    damRes: 0,
    magic: "moreMana"
  }
];
