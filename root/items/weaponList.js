// Coder : E.B.
// Ideas : Euan ,Owen, Kennedy
//weapon type will be the variable name
//spellsTombs
const magicWeapons = [
  {
    name: "Fire Tome", //name//0
    type: "spellTome", //type of weapon
    desc: "throw the firetomb at the enemy to deal damage", // A short description of the item
    level: 1,
    damageType: "magic:fire",
    moveSet: [
  {name: "Fire Bolt",
  description: "fire bolt",
  damage:3,
  effect: {type: "magic:fire", dam: 1, time: 4, conditions: {end: "Water", start: "Fire",}},
  cooldown: 0},
    {name: "Fire Ball",
  description: "Minor Explosive Fire Bolt",
  damage:5,
  effect: {type: "magi:fire", dam: 1, time: 5, conditions: {end: "Water", start: "Fire",}},
  cooldown: 2},
  {name: "Fire Charge",
  description: "Charged Explosive Fire Beam",
  damage:9,
  effect: {type: "magic:fire", dam: 1, time: 9, conditions: {end: "Water", start: "Fire",}},
  cooldown: 4},
  {name: "Fire Rain",
  description: "Rain hell from above",
  damage:20,
  effect: {type: "magic:fire", dam: 5, time: 2, conditions: {end: "water", start: "fire",}},
  cooldown: 7}
  ]
    },
  {
    name: "Lightning Hand", //name//0
    type: "spellTome", //type of weapon
    desc: "Lightning Hands!!!!", // A short description of the item
    level: 1,
    magic: "magic:lightning",
    moveSet: [
   {name: "Lightning Slap",
   description: "Slap with a zap",
   damage:3,
   effect: {type: "magic:lightning", dam: 2, time: 2, conditions: {end: "time", start: "electric",}},
   cooldown: 0},
   {name: "Lightning Punch",
   description: "Punch with a kick",
   damage:5,
   effect: {type: "magic:lightning", dam: 2, time: 2, conditions: {end: "time", start: "electric",}},
   cooldown: 2},
   {name: "Striking Snap",
   description: "Snap a bolt of lightning down on your enemy",
   damage:9,
   effect: {type: "magic:lightning", dam: 2, time: 2, conditions: {end: "time", start: "electric",}},
   cooldown: 4},
   {name: "Explosive Touch",
   description: "infuse your enemy with deadly explosive electricity that exploded if you are not electrocuted for 9 turns",
   damage:9,
   effect: {type: "magic:explode", dam: 1000, time: 9, conditions: {end: "time", start: "electric",}},
   cooldown: 10}
   ]
    },
  {
    name: "Fire Staff", //name//0
    type: "magicStaff", //type of weapon
    desc: "throw the staff at the enemy to deal damage", // A short description of the item
    level: 1,
    damageType: "magic:fire",
    moveSet: [
    {name: "Ignite",
    description: "ingite your enemy",
    damage:0,
    effect: {type: "magic:fire", dam: 1, time: 4, conditions: {end: "water", start: "fire",}},
    cooldown: 0},
    {name: "Fire Beam",
    description: "Focused Beam of pure energy",
    damage:3,
    effect: {type: "magic:fire", dam: 3, time: 2, conditions: {end: "water", start: "fire",}},
    cooldown: 2},
    {name: "Fire Blast",
    description: "Focused Beam of pure energy",
    damage:3,
    effect: {type: "magic:fire", dam: 3, time: 4, conditions: {end: "water", start: "fire",}},
    cooldown: 4},
    {name: "Blue Fire",
    description: "Blue and dangerouse",
    damage:3,
    effect: {type: "magic:fire", dam: 7, time: 3, conditions: {end: "time", start: "fire",}},
    cooldown: 5}
    ]
    },
    {
    name: "Water Staff", //name//0
    type: "magicStaff", //type of weapon
    desc: "throw Water at the enemy to deal damage", // A short description of the item
    level: 1,
    damageType: "magic:water",
    moveSet: [
    {name: "Water Hose",
    description: "Water Water Waterrrr",
    damage:0,
    effect: {type: "magic:water", dam: 0, time: 100, conditions: {end: "fire", start: "water",}},
    cooldown: 0},
    {name: "Water Beam",
    description: "High preasure water capable of cutting through steel",
    damage:6,
    effect: {type: "magic:water", dam: 0, time: 2, conditions: {end: "fire", start: "water",}},
    cooldown: 2},
    {name: "drentch",
    description: "Any enemy with water applied becomes perminent",
    damage:0,
    effect: {type: "magic:water", dam: 0, time: 1000, conditions: {end: "never", start: "water",}},
    cooldown: 9},
    {name: "Watersplosion",
    description: "Water with a kick and acid",
    damage:3,
    effect: {type: "magic:acid", dam: 5, time: 3, conditions: {end: "time", start: "acid",}},
    cooldown: 12}
    ]
    },
    {
    name: "Electric Staff", //name//0
    type: "magicStaff", //type of weapon
    desc: "Elctro Rod Thing", // A short description of the item
    level: 1,
    damageType: "magic:electric",
    moveSet: [
    {name: "Electric Prod",
    description: "Zippy Zappy",
    damage:0,
    effect: {type: "magic:electric", dam: 5, time: 5, conditions: {end: "time", start: "electric",}},
    cooldown: 0},
    {name: "Zap",
    description: "Zap Zap",
    damage:6,
    effect: {type: "magic:electric", dam: 3, time: 7, conditions: {end: "time", start: "electric",}},
    cooldown: 2},
    {name: "Static",
    description: "Water amps damage",
    damage:1,
    effect: {type: "magic:electric", dam: 2, time: 3, conditions: {end: "time", start: "electric",}},
    cooldown: 9},
    {name: "Knock Out",
    description: "Electic KO",
    damage:3,
    effect: {type: "magic:electric", dam: 5, time: 3, conditions: {end: "time", start: "never",}},
    cooldown: 12}
    ]
    },
    {
    name: "Wind Staff", //name//0
    type: "magicStaff", //type of weapon
    desc: "Windy", // A short description of the item
    level: 1,
    damageType: "magic:physical",
    moveSet: [
    {name: "Breeze",
    description: "Chill your enemy with a chilling breeze",
    damage:0,
    effect: {type: "magic:ice", dam: 1, time: 4, conditions: {end: "fire", start: "ice",}},
    cooldown: 0},
    {name: "Push",
    description: "Push your enemy down with a very powerful gust of wind",
    damage:1,
    effect: {type: "magic:stagger", dam: 0, time: 1, conditions: {end: "time", start: "never",}},
    cooldown: 2},
    {name: "Staggering Wind Storm",
    description: "High preasure wind storm capable of stagegering your enemy for a long time", 
    damage:3,
    effect: {type: "magic:stagger", dam: 3, time: 3, conditions: {end: "time", start: "never",}},
    cooldown: 4},
    {name: "Air Drain",
    description: "Drain your targets air completely making them fall asleep",
    damage:3,
    effect: {type: "magic:sleep", dam: 0, time: 3, conditions: {end: "time", start: "sleep",}},
    cooldown: 5}
    ]
    },
    {
    name: "Water Tome", //name//0
    type: "spellTome", //type of weapon
    desc: "Water infused book from the long lost city of Atlantis cured with the powers of the ice god", // A short description of the item
    level: 1,
    damageType: "magic:water",
    moveSet: [
    {name: "Flash Freeze",
    description: "Any enemy infused by water is fozen instantly and take damage for a short time",
    damage:0,
    effect: {type: "magic:ice", dam: 1, time: 4, conditions: {end: "fire", start: "ice",}},
    cooldown: 0},
    {name: "Rain",
    description: "Summon a nimbus that is not too happy with people",
    damage:3,
    effect: {type: "magic:water", dam: 0, time: 6, conditions: {end: "fire", start: "water",}},
    cooldown: 2},
    {name: "Blizzard",
    description: "Summon a powerful ice storm",
    damage:3,
    effect: {type: "magic:ice", dam: 2, time: 8, conditions: {end: "fire", start: "ice",}},
    cooldown: 4},
    {name: "Ice and water bomb",
    description: "Not only does it freeze but it also applies water so basically long time freeze",
    damage:3,
    effect: {type: "magic:ice", dam: 7, time: 3, conditions: {end: "time", start: "ice",}},
    cooldown: 5}
    ]
    },
    {
    name: "Electric Tome", //name//0
    type: "spellTome", //type of weapon
    desc: "A book made by Zeus", // A short description of the item
    level: 1,
    damageType: "magic:electric",
    moveSet: [
    {name: "Electrocute",
    description: "Elctrocute your enemy... YESS DO It DO IT NOW",
    damage:4,
    effect: {type: "magic:electric", dam: 1, time: 4, conditions: {end: "time", start: "electric",}},
    cooldown: 0},
    {name: "Storm",
    description: "A powerful lightning storm",
    damage:3,
    effect: {type: "magic:electric", dam: 2, time: 5, conditions: {end: "time", start: "electric",}},
    cooldown: 2},
    {name: "Explode",
    description: "A lightning bolt that strikes to fast and hard it has the power of 10 megaton bombs",
    damage:15,
    effect: {type: "magic:fire", dam: 3, time: 4, conditions: {end: "water", start: "fire",}},
    cooldown: 4},
    {name: "Lightning Barage",
    description: "Rapid hitting hard hitting chains of lightning",
    damage:3,
    effect: {type: "magic:electric", dam: 7, time: 3, conditions: {end: "time", start: "electric",}},
    cooldown: 5}
    ]
    },
    {
    name: "Physical Tome", //name//0
    type: "spellTome", //type of weapon
    desc: "A devilish creation a living book with the taste of a vampire", // A short description of the item
    level: 1,
    damageType: "magic:physical",
    moveSet: [
    {name: "Prevent Heal",
    description: "No healing ideal for use with slash",
    damage:0,
    effect: {type: "magic:anti-heal", dam: 0, time: 4, conditions: {end: "time", start: "never",}},
    cooldown: 0},
    {name: "Magical Slash",
    description: "A whipping force that cuts open old wounds",
    damage:3,
    effect: {type: "magic:bleed", dam: 3, time: 9, conditions: {end: "heal", start: "never",}},
    cooldown: 2},
    {name: "Life Drain",
    description: "Drain your enemies health with no gains",
    damage:3,
    effect: {type: "magic:drain", dam: 3, time: 4, conditions: {end: "time", start: "never",}},
    cooldown: 4},
    {name: "Life Steal",
    description: "Drain with gain",
    damage:3,
    effect: {type: "magic:lifesteal", dam: 7, time: 3, conditions: {end: "time", start: "Never"}},
    cooldown: 5}
    ]
    },
    {
    name: "Saxophone", //name//0
    type: "spellTome", //type of weapon
    desc: "With the power of smooth jazz anything is possible", // A short description of the item
    level: 1,
    damageType: "fire",
    moveSet: [
    {name: "Speedy Jazz",
    description: "The ultimate meme attack",
    damage:0,
    effect: {type: "magic:meme", dam: 0, time: 0, conditions: {end: "never", start: "never",}},
    cooldown: 0},
    {name: "Soft Melody",
    description: "Sleepy Sleepy",
    damage:3,
    effect: {type: "magic:Sleep", dam: 0, time: 3, conditions: {end: "time", start: "sleep",}},
    cooldown: 4},
    {name: "Sexy Jazz",
    description: "Buffs",
    damage:0,
    effect: {type: "magic:buff", dam: 0, time: 0, conditions: {end: "never", start: "never",}},
    cooldown: 4},
    {name: "Immortal Meme Jazz Music",
    description: "Gift of temporary Imortality",
    damage:0,
    effect: {type: "magic:life", dam: 0, time: 0, conditions: {end: "", start: "",}},
    cooldown: "never"}
    ]
    },
    {
    name: "Minion Explosive Wand", //name//0
    type: "spellTome", //type of weapon
    desc: "Summon explosive minions", // A short description of the item
    level: 1,
    damageType: "magic:explosive",
    moveSet: [
    {name: "Yeet",
    description: "yeet a bomb at the target",
    damage:6,
    effect: {type: "magic:explosive", dam: 0, time: 0, conditions: {end: "", start: "",}},
    cooldown: 0},
    {name: "Explosive ticks",
    description: "Tinny Explosive ticks ",
    damage:8,
    effect: {type: "magic:Explosive", dam: 0, time: 0, conditions: {end: "", start: "",}},
    cooldown: 2},
    {name: "Explosive Revival",
    description: "with the power of big boom thing die thing get revived",
    damage:15,
    effect: {type: "magic:explosive", dam: 0, time: 0, conditions: {end: "", start: "",}},
    cooldown: 4},
    {name: "Tactical Nuclear Retreat",
    description: "Boom but leave so you don't die",
    damage:50,
    effect: {type: "magic:Explosive", dam: 0, time: 0, conditions: {end: "", start: "",}},
    cooldown: 8}
    ]
    },


]

//projectileWeapons
const projWeapons = [
  {
    name: "Sawed Off",
    type: "projWeapon",
    level: 1,
    desc: "a big high damage dealing sword",
    damageType: "physical:bludgoning",
    moveSet: [
    {name: "Two Shot",
    description: "Boom Boom",
    damage:6,
    effect: {type: "physical:bludgoning", dam: 1, time: 3, conditions: {end: "time", start: "never",}},
    cooldown: 0},
    {name: "Evasive Reload",
    description: "refresh all skills ",
    damage:0,
    effect: {type: "physical:refresh", dam: 0, time: 0, conditions: {end: "", start: "",}},
    cooldown: 2},
    {name: "Slugs",
    description: "Juicy slugs",
    damage:8,
    effect: {type: "physical:bludgoning", dam: 2, time: 6, conditions: {end: "heal", start: "never",}},
    cooldown: 4},
    {name: "Critical",
    description: "Aim for the head",
    damage:12,
    effect: {type: "physical:bludgoning", dam: 5, time: 3, conditions: {end: "heal", start: "never",}},
    cooldown: 8}
    ]
  },
  {
    name: "Crossbow",
    type: "projWeapon",
    level: 1,
    desc: "a big high damage dealing sword",
    damageType: "physical:bludgoning",
    moveSet: [
    {name: "bolt",
    description: "normal but effective",
    damage:6,
    effect: {type: "physical:bludgoning", dam: 1, time: 3, conditions: {end: "time", start: "never",}},
    cooldown: 0},
    {name: "fast shots ",
    description: "refresh all skills ",
    damage:0,
    effect: {type: "physical:refresh", dam: 0, time: 0, conditions: {end: "", start: "",}},
    cooldown: 2},
    {name: "Armor Down",
    description: "take twice damage on next attack",
    damage:8,
    effect: {type: "physical:debuff", dam: 2, time: 6, conditions: {end: "heal", start: "never",}},
    cooldown: 4},
    {name: "Explosive Tiped Bolt",
    description: "Explosive Tiped Bolt",
    damage:10,
    effect: {type: "physical:bludgoning", dam: 5, time: 3, conditions: {end: "heal", start: "never",}},
    cooldown: 8}
    ]
  },
  {
    name: "Glock",
    type: "projWeapon",
    level: 1,
    desc: "",
    damageType: "physical:bludgoning",
    moveSet: [
    {name: "Timed shot",
    description: "Take your time",
    damage:0,
    effect: {type: "physical:bludgoning", dam: 8, time: 1, conditions: {end: "time", start: "never",}},
    cooldown: 0},
    {name: "Morale Boost",
    description: "boost your team with threats",
    damage:0,
    effect: {type: "physical:buff", dam: 0, time: 0, conditions: {end: "", start: "",}},
    cooldown: 2},
    {name: "Ricochet Shot",
    description: "Weee.... Weeee... Weee.. Weeee. ",
    damage:8,
    effect: {type: "physical:bludgoning", dam: 2, time: 6, conditions: {end: "heal", start: "never",}},
    cooldown: 4},
    {name: "Akimbo",
    description: "good luck",
    damage:12,
    effect: {type: "physical:bludgoning", dam: 5, time: 3, conditions: {end: "heal", start: "never",}},
    cooldown: 8}
    ]
  },
  {
    name: "Bow and Arrow",
    type: "projWeapon",
    level: 1,
    desc: "a big high damage dealing sword",
    damageType: "physical:hybrid",
    moveSet: [
    {name: "Elemental Arrow",
    description: "Ice, fire, electric, and more ",
    damage:6,
    effect: {type: "physical:hybrid", dam: {min:0,max:5}, time: 3, conditions: {end: "hybrid", start: "hybrid",}},
    cooldown: 1},
    {name: "arrow ",
    description: "arrow ",
    damage:0,
    effect: {type: "physical:bludgoning", dam: 4, time: 1, conditions: {end: "heal", start: "bludgoning",}},
    cooldown: 0},
    {name: "Bullseye",
    description: "Perfection",
    damage:11,
    effect: {type: "physical:bludgoning", dam: 2, time: 6, conditions: {end: "heal", start: "never",}},
    cooldown: 4},
    {name: "Arrow Storm",
    description: "Arrow volley",
    damage:10,
    effect: {type: "physical:bludgoning", dam: 5, time: 3, conditions: {end: "heal", start: "never",}},
    cooldown: 8}
    ]
  },
];

//swords1h
const swords1H = [
  {
    name: "dagger",
    type: "swords1H",
    level: 1,
    desc: "A dagger with a hidden secret",
    damageType: "physical:slash",
    moveSet: [
    {name: "Sneak Attack",
    description: "Long cooldown and can't have status effects applied but 50% extra damage",
    damage:6,
    effect: {type: "physical:bludgoning", dam: 1, time: 3, conditions: {end: "time", start: "never",}},
    cooldown: 0},
    {name: "Teleporting Slash",
    description: "slashy slashy ",
    damage:0,
    effect: {type: "physical:refresh", dam: 0, time: 0, conditions: {end: "", start: "",}},
    cooldown: 2},
    {name: "Punishing Rush",
    description: "50% chance to fail but ignores armor",
    damage:8,
    effect: {type: "physical:debuff", dam: 2, time: 6, conditions: {end: "heal", start: "never",}},
    cooldown: 4},
    {name: "Throw",
    description: "Not only did you just throw your only weapon but also sacrificed yourself but deal 100% extra damage but if sleep effect, dazed, windpreasure or stunned is applied will miss with 75% likelihood",
    damage:10,
    effect: {type: "physical:bludgoning", dam: 5, time: 3, conditions: {end: "heal", start: "never",}},
    cooldown: 8}
    ]
  },
  {
    name: "Falchion",
    type: "swords1H",
    level: 1,
    desc: "a simple one handed sword",
    damageType: "physical:slash",
    moveSet: [
    {name: "Quick Slice",
    description: "normal but effective",
    damage:6,
    effect: {type: "physical:slash", dam: 1, time: 3, conditions: {end: "heal", start: "never",}},
    cooldown: 0},
    {name: "Evasive Slash ",
    description: "evading with a hit",
    damage:8,
    effect: {type: "physical:evade", dam: 0, time: 0, conditions: {end: "", start: "",}},
    cooldown: 2},
    {name: "Downward Slash",
    description: "Downward Strike",
    damage:8,
    effect: {type: "physical:slash", dam: 2, time: 6, conditions: {end: "heal", start: "never",}},
    cooldown: 4},
    {name: "Upwards Slash",
    description: "Upwards strike",
    damage:10,
    effect: {type: "physical:Heal", dam: 5, time: 3, conditions: {end: "heal", start: "never",}},
    cooldown: 8}
    ]
  },
  {
    name: "Whip",
    type: "swords1H",
    level: 1,
    desc: "a whip not much can be said about it",
    damageType: "physical:slash",
    moveSet: [
    {name: "Whip",
    description: "Whip",
    damage:6,
    effect: {type: "physical:slash", dam: 1, time: 3, conditions: {end: "heal", start: "never",}},
    cooldown: 0},
    {name: "Weaken ",
    description: "weakens your enemy",
    damage:0,
    effect: {type: "physical:weaken", dam: 0, time: 0, conditions: {end: "", start: "",}},
    cooldown: 2},
    {name: "Team Morale",
    description: "take twice damage on next attack with any weapon",
    damage:8,
    effect: {type: "physical:buff", dam: 2, time: 6, conditions: {end: "", start: "",}},
    cooldown: 4},
    {name: "Discombobulate",
    description: "Stuns, sleep, kill who knows it does a thing",
    damage:10,
    effect: {type: "physical:hybrid", dam: 5, time: 3, conditions: {end: "time", start: "never",}},
    cooldown: 8}
    ]
  }
];
//swords2h
const swords2H = [
  {
    name: "Big Stab",
    type: "swords2H",
    level: 1,
    desc: "a big high damage dealing sword",
    damageType: "physical:slash",
    moveSet: [
    {name: "Stab",
    description: "normal but effective",
    damage:6,
    effect: {type: "physical:slash", dam: 1, time: 3, conditions: {end: "heal", start: "never",}},
    cooldown: 0},
    {name: "Slash",
    description: "Slashy Slashy",
    damage:0,
    effect: {type: "physical:slash", dam: 3, time: 4, conditions: {end: "heal", start: "slash",}},
    cooldown: 2},
    {name: "Ruin",
    description: "Quick attack that lasts long and no getting past it",
    damage:12,
    effect: {type: "physical:slash", dam: 1, time: 10000, conditions: {end: "never", start: "never",}},
    cooldown: 1000},
    {name: "Agressive Combo",
    description: "Slash, Slash, and KO",
    damage:10,
    effect: {type: "physical:Slash", dam: 5, time: 3, conditions: {end: "heal", start: "never",}},
    cooldown: 8}
    ]
    },
  {
    name: "Glave",
    type: "swords2H",
    level: 1,
    desc: "a big high damage dealing sword",
    dam: 3,
    damageType: "phyisical:slash",
    moveSet: [
    {name: "Jumping Slash",
    description: "Jumping Slash",
    damage:6,
    effect: {type: "physical:slash", dam: 1, time: 3, conditions: {end: "heal", start: "never",}},
    cooldown: 0},
    {name: "Foward Slash ",
    description: "Forward Slash ",
    damage:0,
    effect: {type: "physical:slash", dam: 0, time: 0, conditions: {end: "heal", start: "slash",}},
    cooldown: 2},
    {name: "Puncturing Slash",
    description: "Stab them all the way through",
    damage:8,
    effect: {type: "physical:slash", dam: 2, time: 6, conditions: {end: "heal", start: "slash",}},
    cooldown: 4},
    {name: "Poison Tipped Slash",
    description: "poisoned deal with it but you can't",
    damage:10,
    effect: {type: "physical:poison", dam: 5, time: 3, conditions: {end: "never", start: "never",}},
    cooldown: 8}
    ]
    },
  {
    name: "Long Blade",
    type: "swords2H",
    level: 1,
    desc: "a big high damage dealing sword",
    dam: 3,
    damageType: "physical:slash",
    moveSet: [
    {name: "Slash",
    description: "normal but effective",
    damage:6,
    effect: {type: "physical:slash", dam: 1, time: 3, conditions: {end: "heal", start: "slash",}},
    cooldown: 0},
    {name: "Evasive Recovery",
    description: "Evade and heal",
    damage:0,
    effect: {type: "physical:heal", dam: 0, time: 0, conditions: {end: "", start: "",}},
    cooldown: 2},
    {name: "Long Arm Slash",
    description: "Very quick slash capable of cutting through steel",
    damage:8,
    effect: {type: "physical:slash", dam: 2, time: 6, conditions: {end: "heal", start: "slash",}},
    cooldown: 4},
    {name: "Enduring Force",
    description: "Agressive rage that has devistating returns",
    damage:10,
    effect: {type: "physical:overkill", dam: 100, time: 8, conditions: {end: "heal", start: "never",}},
    cooldown: 8}
    ]
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
   damageType: "physical:impact",
    moveSet: [
    {name: "Bash",
    description: "normal but effective",
    damage:6,
    effect: {type: "physical:impact", dam: 1, time: 3, conditions: {end: "time", start: "never",}},
    cooldown: 0},
    {name: "Smash ",
    description: "attack",
    damage:4,
    effect: {type: "physical:nothing", dam: 0, time: 0, conditions: {end: "", start: "",}},
    cooldown: 2},
    {name: "KO",
    description: "Instant KO",
    damage:8,
    effect: {type: "physical:dazed", dam: 2, time: 6, conditions: {end: "time", start: "never",}},
    cooldown: 4},
    {name: "Spin To Win",
    description: "Spinny Spinny Spinny Spin",
    damage:10,
    effect: {type: "physical:impact", dam: 5, time: 3, conditions: {end: "never", start: "never",}},
    cooldown: 8}
    ]
   },
{
   name: "Steel Mace",
   type: "blunt1H",
   level: 1,
   desc: "Steel mace with a innate ability ",
   dam: 2,
   damageType: "physical:impact",
    moveSet: [
    {name: "Spiked Swipe",
    description: "spiked ball of death",
    damage:6,
    effect: {type: "physical:impact", dam: 1, time: 3, conditions: {end: "time", start: "never",}},
    cooldown: 0},
    {name: "Vengeful Impact",
    description: "Powerful impact with razor sharp spikes causeing bleed",
    damage:9,
    effect: {type: "physical:slash", dam: 5, time: 7, conditions: {end: "heal", start: "slash",}},
    cooldown: 2},
    {name: "Shock wave",
    description: "Knock down with 100% chance",
    damage:8,
    effect: {type: "physical:stagger", dam: 2, time: 6, conditions: {end: "time", start: "never",}},
    cooldown: 4},
    {name: "Burning Marningstar",
    description: "Its now a morningstart dont question it",
    damage:10,
    effect: {type: "physical:fire", dam: 5, time: 3, conditions: {end: "water", start: "fire",}},
    cooldown: 8}
    ]
   },

{
   name: "Shadow-Steel Mace",
   type: "blunt1H",
   level: 1,
   desc: "a long handed hand weapon with medium damage dealt",
   dam: 2,
   damageType: "physical:impact",
    moveSet: [
    {name: "Armor pen",
    description: "Phases through armor",
    damage:6,
    effect: {type: "physical:impact", dam: 1, time: 3, conditions: {end: "time", start: "never",}},
    cooldown: 0},
    {name: "De buff",
    description: "de buffs enemies",
    damage:0,
    effect: {type: "physical:debuff", dam: 0, time: 0, conditions: {end: "", start: "",}},
    cooldown: 2},
    {name: "Shadow Strike",
    description: "Strike with the shadows",
    damage:8,
    effect: {type: "physical:impact", dam: 2, time: 6, conditions: {end: "heal", start: "never",}},
    cooldown: 4},
    {name: "Wraiths wrath",
    description: "Ghostly army with throwing knifes help",
    damage:10,
    effect: {type: "physical:slash", dam: 9, time: 3, conditions: {end: "heal", start: "never",}},
    cooldown: 8}
    ]
   },

{
   name: "Mallet",
   type: "blunt1H",
   level: 1,
   desc: "a mallet like thing..?",
   dam: 2,
   damageType: "physical:impact",
    moveSet: [
    {name: "Bonk",
    description: "bonky bonk",
    damage:6,
    effect: {type: "physical:impact", dam: 1, time: 3, conditions: {end: "time", start: "never",}},
    cooldown: 0},
    {name: "Judgment",
    description: "reckoning awaits",
    damage:8,
    effect: {type: "physical:impact", dam: 3, time: 5, conditions: {end: "time", start: "never",}},
    cooldown: 2},
    {name: "Accuse",
    description: "Use to allow Judge Jurry Executioner to work garanteed",
    damage:8,
    effect: {type: "physical:debuff", dam: 2, time: 6, conditions: {end: "heal", start: "never",}},
    cooldown: 4},
    {name: "Judge Jurry Executioner",
    description: "/Delete enemy reason:why not",
    damage:10,
    effect: {type: "physical:delete", dam: 5000, time: 10, conditions: {end: "heal", start: "never",}},
    cooldown: 8}
    ]
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
     damageType: "physical:impact",
    moveSet: [
    {name: "Cutting Hit",
    description: "The barbs help cut through stuff",
    damage:6,
    effect: {type: "physical:slash", dam: 1, time: 3, conditions: {end: "time", start: "never",}},
    cooldown: 0},
    {name: "Poisoned Barbs",
    description: "Drip some poison in the barbs",
    damage:3,
    effect: {type: "physical:poison", dam: 6, time: 3, conditions: {end: "never", start: "never",}},
    cooldown: 2},
    {name: "Armor Down",
    description: "debuf",
    damage:8,
    effect: {type: "physical:debuff", dam: 2, time: 6, conditions: {end: "heal", start: "never",}},
    cooldown: 4},
    {name: "Primitive Reconstruction",
    description: "Heal with the power of stick plus stick = better stick",
    damage:10,
    effect: {type: "physical:heal", dam: 0, time: 0, conditions: {end: "", start: "",}},
    cooldown: 8}
    ]
  },
  {
     name: "Holly Stick",
     type: "blunt2H",
     level: 1,
     desc: "Its a stick do not ask why it is holly it just is",
     dam: 4,
     damageType: "physical:impact",
    moveSet: [
    {name: "Whiplash",
    description: "Swing",
    damage:6,
    effect: {type: "physical:impact", dam: 1, time: 3, conditions: {end: "time", start: "never",}},
    cooldown: 0},
    {name: "Heal",
    description: "Heals all status effects and gives some health",
    damage:0,
    effect: {type: "physical:heal", dam: 0, time: 0, conditions: {end: "", start: "",}},
    cooldown: 2},
    {name: "Holy Fire",
    description: "Fire hotter than the sun",
    damage:8,
    effect: {type: "physical:fire", dam: 2, time: 6, conditions: {end: "water", start: "never",}},
    cooldown: 4},
    {name: "Implosive Respawn",
    description: "go boom and respawn",
    damage:20,
    effect: {type: "physical:explosive", dam: 5, time: 3, conditions: {end: "heal", start: "never",}},
    cooldown: 8}
    ]
  },
  {
     name: "Begone Rod",
     type: "blunt2H",
     level: 1,
     desc: "Begone....",
     dam: 4,
     damageType: "Impact",
    moveSet: [
    {name: "Weeee",
    description: "Send enemies flying",
    damage:6,
    effect: {type: "physical:impact", dam: 1, time: 3, conditions: {end: "time", start: "never",}},
    cooldown: 0},
    {name: "To the ground",
    description: "Ground pound",
    damage:0,
    effect: {type: "physical:impact", dam: 0, time: 0, conditions: {end: "", start: "",}},
    cooldown: 2},
    {name: "Fly",
    description: "Go flying further beyond",
    damage:8,
    effect: {type: "physical:fly", dam: 2, time: 6, conditions: {end: "time", start: "never",}},
    cooldown: 4},
    {name: "BEGONE",
    description: "Smacked out of existence",
    damage:100,
    effect: {type: "physical:impact", dam: 10, time: 3, conditions: {end: "heal", start: "never",}},
    cooldown: 12}
    ]
  },
  {
     name: "US Flag",
     type: "blunt2H",
     level: 1,
     desc: "a US flag",
     dam: 4,
     damageType: "physical:impact",
    moveSet: [
    {name: "Smack",
    description: "smack",
    damage:6,
    effect: {type: "physical:impact", dam: 1, time: 3, conditions: {end: "time", start: "never",}},
    cooldown: 0},
    {name: "Throw",
    description: "yeet and retreive",
    damage:0,
    effect: {type: "physical:slash", dam: 8, time: 2, conditions: {end: "heal", start: "slash",}},
    cooldown: 2},
    {name: "Lunge",
    description: "Dashing slash",
    damage:8,
    effect: {type: "physical:slash", dam: 2, time: 6, conditions: {end: "heal", start: "never",}},
    cooldown: 4},
    {name: "American Pride",
    description: "Firing squad of AA12s and a load of tanks the most American way to go",
    damage:20,
    effect: {type: "physical:slash", dam: 20, time: 3, conditions: {end: "heal", start: "never",}},
    cooldown: 8}
    ]
  }

];
//swordandShields or shield that are also swords
const swordShields = [
    {
     name: "Saviors Shield",
     type: "swordShields",
     level: 1,
     desc: "A shield with a mind of its own",
     damageType: "physical:impact",
    moveSet: [
    {name: "Bash and Slash",
    description: "Bash then slash",
    damage:6,
    effect: {type: "physical:imapct", dam: 4, time: 3, conditions: {end: "time", start: "never",}},
    cooldown: 0},
    {name: "Gaurd Up ",
    description: "refresh all skills ",
    damage:0,
    effect: {type: "physical:refresh", dam: 0, time: 0, conditions: {end: "", start: "",}},
    cooldown: 2},
    {name: "Saviors Haven",
    description: "Healing restoring haven",
    damage:0,
    effect: {type: "physical:heal", dam: 0, time: 0, conditions: {end: "", start: "",}},
    cooldown: 4},
    {name: "Saviors Reckoning",
    description: "The reckoning that is to be determined",
    damage:30,
    effect: {type: "physical:slash", dam: 15, time: 3, conditions: {end: "heal", start: "never"}},
    cooldown: 8}
    ]
  },
    {
     name: "Hybrid Shield",
     type: "swordShields",
     level: 1,
     desc: "Half sharp shield half gun ",
     dam: 4,
     damageType: "physical:impact",
    moveSet: [
    {name: "Slash",
    description: "normal but effective",
    damage:6,
    effect: {type: "physical:slash", dam: 1, time: 3, conditions: {end: "time", start: "never",}},
    cooldown: 0},
    {name: "Bullet ",
    description: "projectile powerful and inaccurate",
    damage:10,
    effect: {type: "physical:impact", dam: 10, time: 2, conditions: {end: "time", start: "never",}},
    cooldown: 2},
    {name: "Gridlock",
    description: "a lockdown that prevents all damage for three turns",
    damage:8,
    effect: {type: "physical:gaurd", dam: 0, time: 3, conditions: {end: "attack", start: "never",}},
    cooldown: 4},
    {name: "Sharpened Rage",
    description: "Sharpen and slashing can cut through any material",
    damage:10,
    effect: {type: "physical:slash", dam: 5, time: 3, conditions: {end: "heal", start: "never",}},
    cooldown: 8}
    ]
  },
    {
     name: "Energy Shield",
     type: "swordShields",
     level: 1,
     desc: "a shield made of pure energy",
     dam: 4,
     damageType: "physical:electric",
    moveSet: [
    {name: "Energizing Gaurd",
    description: "Buffs damage for a short time",
    damage:6,
    effect: {type: "physical:buff", dam: 1, time: 3, conditions: {end: "time", start: "never",}},
    cooldown: 0},
    {name: "Electric Strike",
    description: "Slash with electricity",
    damage:0,
    effect: {type: "physical:electric", dam: 5, time: 2, conditions: {end: "time", start: "electric",}},
    cooldown: 2},
    {name: "Infuse",
    description: "buff again",
    damage:8,
    effect: {type: "physical:buff", dam: 2, time: 6, conditions: {end: "heal", start: "never",}},
    cooldown: 4},
    {name: "Releasing Gaurd",
    description: "releases all status and buffs and negates them dealing them to the enemy",
    damage:10,
    effect: {type: "physical:impact", dam: 10, time: 3, conditions: {end: "time", start: "never",}},
    cooldown: 8}
    ]
  },
    {
     name: "Gun Shield",
     type: "swordShields",
     level: 1,
     desc: "gun that is a shield",
     dam: 4,
     damageType: "physical:impact",
    moveSet: [
    {name: "Slash Shot",
    description: "normal but effective",
    damage:6,
    effect: {type: "physical:impact", dam: 1, time: 3, conditions: {end: "time", start: "never",}},
    cooldown: 0},
    {name: "Evasive Restoration",
    description: "refresh all skills and heals",
    damage:0,
    effect: {type: "physical:refresh", dam: 0, time: 0, conditions: {end: "", start: "",}},
    cooldown: 2},
    {name: "Shield Shot",
    description: "shoot the shield part",
    damage:12,
    effect: {type: "physical:impact", dam: 2, time: 6, conditions: {end: "heal", start: "never",}},
    cooldown: 4},
    {name: "Cannon Gaurd",
    description: "CANNNON BALLL",
    damage:10,
    effect: {type: "physical:bludgoning", dam: 5, time: 3, conditions: {end: "heal", start: "never",}},
    cooldown: 8}
    ]
  }

];
