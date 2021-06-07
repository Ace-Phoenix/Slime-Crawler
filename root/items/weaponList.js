// Coder : E.B.
// Ideas : Euan ,Owen, Kennedy
//weapon type will be the variable name
//spellsTombs
const magicWeapons = [
  {
    name: "Fire Tome", //name//0
    type: "spellTomes", //type of weapon
    decs: "throw the firetomb at the enemy to deal damage", // A short description of the item
    dam: 2, //How much damage it does
    level: 1,
    damageType: "fire",
    moveSet: [{name: "Slash", description: "A slash attack",effect: {type: "slash", dam: 1, time: 2, conditions: {end: "heal", start: "slash",}},cost: 5,cooldown: 2}]
    },
  {
    name: "Lightning Hand", //name//0
    type: "spellTombs", //type of weapon
    decs: "throw the firetomb at the enemy to deal damage", // A short description of the item
    dam: 2, //How much damage it does
    level: 1,
    magic: "fire",
    moveSet: [{name: "Slash", description: "A slash attack",effect: {type: "slash", dam: 1, time: 2, conditions: {end: "heal", start: "slash",}},cost: 5,cooldown: 2}]
    },
  {
    name: "Fire Staff", //name//0
    type: "spellTombs", //type of weapon
    decs: "throw the firetomb at the enemy to deal damage", // A short description of the item
    dam: 2, //How much damage it does
    level: 1,
    damageType: "fire",
    moveSet: [{name: "Slash", description: "A slash attack",effect: {type: "slash", dam: 1, time: 2, conditions: {end: "heal", start: "slash",}},cost: 5,cooldown: 2}]
    },
    {
    name: "Water Staff", //name//0
    type: "spellTombs", //type of weapon
    decs: "throw the firetomb at the enemy to deal damage", // A short description of the item
    dam: 2, //How much damage it does
    level: 1,
    damageType: "fire",
    moveSet: [{name: "Slash", description: "A slash attack",effect: {type: "slash", dam: 1, time: 2, conditions: {end: "heal", start: "slash",}},cost: 5,cooldown: 2}]
    },
    {
    name: "Electric Staff", //name//0
    type: "spellTombs", //type of weapon
    decs: "throw the firetomb at the enemy to deal damage", // A short description of the item
    dam: 2, //How much damage it does
    level: 1,
    damageType: "fire",
    moveSet: [{name: "Slash", description: "A slash attack",effect: {type: "slash", dam: 1, time: 2, conditions: {end: "heal", start: "slash",}},cost: 5,cooldown: 2}]
    },
    {
    name: "Wind Staff", //name//0
    type: "spellTombs", //type of weapon
    decs: "throw the firetomb at the enemy to deal damage", // A short description of the item
    dam: 2, //How much damage it does
    level: 1,
    damageType: "fire",
    moveSet: [{name: "Slash", description: "A slash attack",effect: {type: "slash", dam: 1, time: 2, conditions: {end: "heal", start: "slash",}},cost: 5,cooldown: 2}]
    },
    {
    name: "Water Tome", //name//0
    type: "spellTomes", //type of weapon
    decs: "throw the firetomb at the enemy to deal damage", // A short description of the item
    dam: 2, //How much damage it does
    level: 1,
    damageType: "fire",
    moveSet: [{name: "Slash", description: "A slash attack",effect: {type: "slash", dam: 1, time: 2, conditions: {end: "heal", start: "slash",}},cost: 5,cooldown: 2}]
    },
    {
    name: "Electric Tome", //name//0
    type: "spellTomes", //type of weapon
    decs: "throw the firetomb at the enemy to deal damage", // A short description of the item
    dam: 2, //How much damage it does
    level: 1,
    damageType: "fire",
    moveSet: [{name: "Slash", description: "A slash attack",effect: {type: "slash", dam: 1, time: 2, conditions: {end: "heal", start: "slash",}},cost: 5,cooldown: 2}]
    },
    {
    name: "Physical Tome", //name//0
    type: "spellTomes", //type of weapon
    decs: "throw the firetomb at the enemy to deal damage", // A short description of the item
    dam: 2, //How much damage it does
    level: 1,
    damageType: "fire",
    moveSet: [{name: "Slash", description: "A slash attack",effect: {type: "slash", dam: 1, time: 2, conditions: {end: "heal", start: "slash",}},cost: 5,cooldown: 2}]
    },
    {
    name: "Saxiphone", //name//0
    type: "spellTomes", //type of weapon
    decs: "throw the firetomb at the enemy to deal damage", // A short description of the item
    dam: 2, //How much damage it does
    level: 1,
    damageType: "fire",
    moveSet: [{name: "Slash", description: "A slash attack",effect: {type: "slash", dam: 1, time: 2, conditions: {end: "heal", start: "slash",}},cost: 5,cooldown: 2}]
    },
    {
    name: "Minion Explosive Wand", //name//0
    type: "spellTomes", //type of weapon
    decs: "throw the firetomb at the enemy to deal damage", // A short description of the item
    dam: 2, //How much damage it does
    level: 1,
    damageType: "fire",
    moveSet: [{name: "Slash", description: "A slash attack",effect: {type: "slash", dam: 1, time: 2, conditions: {end: "heal", start: "slash",}},cost: 5,cooldown: 2}]
    },


]

//projectileWeapons
const projWeapons = [
  {
    name: "Sawed Off",
    type: "projWeapon",
    level: 1,
    desc: "a big high damage dealing sword",
    dam: 3,
    damageType: "Bludgoning",
    moveSet: [{name: "Slash", description: "A slash attack",effect: {type: "slash", dam: 1, time: 2, conditions: {end: "heal", start: "slash",}},cost: 5,cooldown: 2}]
  },
  {
    name: "Crossbow",
    type: "projWeapon",
    level: 1,
    desc: "a big high damage dealing sword",
    dam: 3,
    damageType: "Bludgoning",
    moveSet: [{name: "Slash", description: "A slash attack",effect: {type: "slash", dam: 1, time: 2, conditions: {end: "heal", start: "slash",}},cost: 5,cooldown: 2}]
  },
  {
    name: "Glock",
    type: "projWeapon",
    level: 1,
    desc: "a big high damage dealing sword",
    dam: 3,
    damageType: "Bludgoning",
    moveSet: [{name: "Slash", description: "A slash attack",effect: {type: "slash", dam: 1, time: 2, conditions: {end: "heal", start: "slash",}},cost: 5,cooldown: 2}]
  },
  {
    name: "Bow and Arrow",
    type: "projWeapon",
    level: 1,
    desc: "a big high damage dealing sword",
    dam: 3,
    damageType: "Bludgoning",
    moveSet: [{name: "Slash", description: "A slash attack",effect: {type: "slash", dam: 1, time: 2, conditions: {end: "heal", start: "slash",}},cost: 5,cooldown: 2}]
  },
];

//swords1h
const swords1H = [
  {
    name: "Spartan Sword",
    type: "swords1H",
    level: 1,
    decs: "a simple one handed sword",
    moveSet: [{name: "Slash", description: "A slash attack",effect: {type: "slash", dam: 1, time: 2, conditions: {end: "heal", start: "slash",}},cost: 5,cooldown: 2}]
  },

  {
    name: "dagger",
    type: "swords1H",
    level: 1,
    decs: "a simple one handed sword",
    moveSet: [{name: "Slash", description: "A slash attack",effect: {type: "slash", dam: 1, time: 2, conditions: {end: "heal", start: "slash",}},cost: 5,cooldown: 2}]
  },
  {
    name: "Falchion",
    type: "swords1H",
    level: 1,
    decs: "a simple one handed sword",
    moveSet: [{name: "Slash", description: "A slash attack",effect: {type: "slash", dam: 1, time: 2, conditions: {end: "heal", start: "slash",}},cost: 5,cooldown: 2}]
  },
  {
    name: "Whip",
    type: "swords1H",
    level: 1,
    decs: "a simple one handed sword",
    moveSet: [{name: "Slash", description: "A slash attack",effect: {type: "slash", dam: 1, time: 2, conditions: {end: "heal", start: "slash",}},cost: 5,cooldown: 2}]
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
    damageType: "Slash",
    moveSet: [{name: "Slash", description: "A slash attack",effect: {type: "slash", dam: 1, time: 2, conditions: {end: "heal", start: "slash",}},cost: 5,cooldown: 2}]
    },
  {
    name: "Glave",
    type: "swords2H",
    level: 1,
    desc: "a big high damage dealing sword",
    dam: 3,
    damageType: "Slash",
    moveSet: [{name: "Slash", description: "A slash attack",effect: {type: "slash", dam: 1, time: 2, conditions: {end: "heal", start: "slash",}},cost: 5,cooldown: 2}]
    },
  {
    name: "Long Blade",
    type: "swords2H",
    level: 1,
    desc: "a big high damage dealing sword",
    dam: 3,
    damageType: "Slash",
    moveSet: [{name: "Slash", description: "A slash attack",effect: {type: "slash", dam: 1, time: 2, conditions: {end: "heal", start: "slash",}},cost: 5,cooldown: 2}]
    }
];
//blunt1h
const blunt1H = [
{
   name: "War Hammer",
   type: "blunt1H",
   level: 1,
   desc: "a long handed hand weapon with medium damage dealt",
   dam: 2,
   damageType: "Impact",
    moveSet: [{name: "Slash", description: "A slash attack",effect: {type: "slash", dam: 1, time: 2, conditions: {end: "heal", start: "slash",}},cost: 5,cooldown: 2}]
   },
{
   name: "Steel Mace",
   type: "blunt1H",
   level: 1,
   desc: "a long handed hand weapon with medium damage dealt",
   dam: 2,
   damageType: "Impact",
    moveSet: [{name: "Slash", description: "A slash attack",effect: {type: "slash", dam: 1, time: 2, conditions: {end: "heal", start: "slash",}},cost: 5,cooldown: 2}]
   },

{
   name: "Shadow-Steel Mace",
   type: "blunt1H",
   level: 1,
   desc: "a long handed hand weapon with medium damage dealt",
   dam: 2,
   damageType: "Impact",
    moveSet: [{name: "Slash", description: "A slash attack",effect: {type: "slash", dam: 1, time: 2, conditions: {end: "heal", start: "slash",}},cost: 5,cooldown: 2}]
   },

{
   name: "Mallet",
   type: "blunt1H",
   level: 1,
   desc: "a long handed hand weapon with medium damage dealt",
   dam: 2,
   damageType: "Impact",
    moveSet: [{name: "Slash", description: "A slash attack",effect: {type: "slash", dam: 1, time: 2, conditions: {end: "heal", start: "slash",}},cost: 5,cooldown: 2}]
   }


];
//blunt2h
const blunt2H = [
  {
     name: "Barbed Mace",
     type: "blunt2H",
     level: 1,
     desc: "a high damage dealing mace wrapped in barb wire",
     dam: 4,
     damageType: "Impact",
    moveSet: [{name: "Slash", description: "A slash attack",effect: {type: "slash", dam: 1, time: 2, conditions: {end: "heal", start: "slash",}},cost: 5,cooldown: 2}]
  }
  {
     name: "Holly Stick",
     type: "blunt2H",
     level: 1,
     desc: "a high damage dealing mace wrapped in barb wire",
     dam: 4,
     damageType: "Impact",
    moveSet: [{name: "Slash", description: "A slash attack",effect: {type: "slash", dam: 1, time: 2, conditions: {end: "heal", start: "slash",}},cost: 5,cooldown: 2}]
  }
  {
     name: "Begone Rod",
     type: "blunt2H",
     level: 1,
     desc: "a high damage dealing mace wrapped in barb wire",
     dam: 4,
     damageType: "Impact",
    moveSet: [{name: "Slash", description: "A slash attack",effect: {type: "slash", dam: 1, time: 2, conditions: {end: "heal", start: "slash",}},cost: 5,cooldown: 2}]
  }
  {
     name: "US Flag",
     type: "blunt2H",
     level: 1,
     desc: "a high damage dealing mace wrapped in barb wire",
     dam: 4,
     damageType: "Impact",
    moveSet: [{name: "Slash", description: "A slash attack",effect: {type: "slash", dam: 1, time: 2, conditions: {end: "heal", start: "slash",}},cost: 5,cooldown: 2}]
  }

];
//swordandShields or shield that are also swords
const swordShields = [
    {
     name: "Saviors Shield",
     type: "swordShields",
     level: 1,
     desc: "a high damage dealing mace wrapped in barb wire",
     dam: 4,
     damageType: "Impact",
    moveSet: [{name: "Slash", description: "A slash attack",effect: {type: "slash", dam: 1, time: 2, conditions: {end: "heal", start: "slash",}},cost: 5,cooldown: 2}]
  },
    {
     name: "Hybrid Shield",
     type: "swordShields",
     level: 1,
     desc: "a high damage dealing mace wrapped in barb wire",
     dam: 4,
     damageType: "Impact",
    moveSet: [{name: "Slash", description: "A slash attack",effect: {type: "slash", dam: 1, time: 2, conditions: {end: "heal", start: "slash",}},cost: 5,cooldown: 2}]
  },
    {
     name: "Energy Shield",
     type: "swordShields",
     level: 1,
     desc: "a high damage dealing mace wrapped in barb wire",
     dam: 4,
     damageType: "Impact",
    moveSet: [{name: "Slash", description: "A slash attack",effect: {type: "slash", dam: 1, time: 2, conditions: {end: "heal", start: "slash",}},cost: 5,cooldown: 2}]
  },
    {
     name: "Gun Shield",
     type: "swordShields",
     level: 1,
     desc: "a high damage dealing mace wrapped in barb wire",
     dam: 4,
     damageType: "Impact",
    moveSet: [{name: "Slash", description: "A slash attack",effect: {type: "slash", dam: 1, time: 2, conditions: {end: "heal", start: "slash",}},cost: 5,cooldown: 2}]
  }

];
