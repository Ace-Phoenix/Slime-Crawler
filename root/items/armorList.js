// Coder : E.B.
// Ideas : Euan ,Owen, Kennedy
//max level 10
//the variable name tells what slot it goes in it does not mean it has to be a helmet
//or have the type helmet it should just make sence in that slot such as for a helmet slot
//you could use hood or crown
const helmetArmors = [
  { name: "Leather Hat",
    type: "helmet",
    level: 1,
    desc: "A simple hat for the early days",
    damageresist: 1,
    magic: "none"
  },
  { name: "Chain Mail Helmet",
    type: "helmet",
    level: 2,
    desc: "A strong but light armor that gives slight protection",
    damageresist: 2,
    magic: "none"
  },
  { name: "Copper Helmet",
    type: "helmet",
    level: 3,
    desc: "A good helmet that will serve you well",
    damageresist: 3,
    magic: "none"
  },
  { name: "Bronze Helmet",
    type: "helmet",
    level: 4,
    desc: "Better than Copper",
    damageresist: 4,
    magic: "none"
  },
  { name: "Iron Helmet",
    type: "helmet",
    level: 5,
    desc: "A good quality helmet that will protect your head from arrows",
    damageresist: 5,
    magic: "none"
  },
  { name: "Steel Helmet",
    type: "helmet",
    level: 6,
    desc: "Even better at not letting you die",
    damageresist: 6,
    magic: "none"
  },
  { name: "Silver Helmet",
    type: "helmet",
    level: 7,
    desc: "Almost the best",
    damageresist: 7,
    magic: "none"
  },
  { name: "Platinum Helmet",
    type: "helmet",
    level: 8,
    desc: "The best of the best",
    damageresist: 8,
    magic: "none"
  },
  {
    name: "Basic Hood",
    type: "hood",
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
    type: "chestplate",
    level: 1,
    desc: "A simple leather chestpiece that cushions blows",
    damRes: 1,
    magic: "none"
  },
  {
    name: "Leather Breastplate",
    type: "chestplate",
    level: 1,
    desc: "The most basic level armor that all beginners should have. Moo-moo cows have died for this sole purpose of protecting you!",
    damageresist: 2,
    magic: "none"
  },
  {
    name: "Chainmail Breastplate",
    type: "chestplate",
    level: 2,
    desc: "When we designed this unique piece of armor, we thought 'Why not copy Minecraft?'.' Oh yeah, this also protects you better than moo-moo cows, I guess",
    damageresist: 4,
    magic: "none"
  },
  {
    name: "Copper Breastplate",
    type: "chestplate",
    level: 3,
    desc: "This was forged the fiery forges of Hephaestus. He's the God of fire and he's good at building stuff I guess. Note: No Hephaestusus was harmed in the process.",
    damageresist: 6,
    magic: "none"
  },
  {
    name: "Bronze Breastplate",
    type: "chestplate",
    level: 4,
    desc: "We have two words for you: Copper and Tin. The heavenly blend of these 2 metal elements gives you a more of a luxury to protect yourself. Now you can tell monsters to watch out.",
    damageresist: 8,
    magic: "none"
  },
  {
    name: "Iron Breastplate",
    type: "chestplate",
    level: 5,
    desc: "Despite being the most common element on Earth, stronger opponents will cower in fear (at first but then attack you, but you're good since you're using iron. Right?)",
    damageresist: 10,
    magic: "none"
  },
  {
    name: "Steel Breastplate",
    type: "chestplate",
    level: 6,
    desc: "Why use steel for swords and weapons when you can use it for armor. Being the capitalists, I mean, innovators that we are, we brought you the best of worlds: Iron and Carbon",
    damageresist: 12,
    magic: "none"
  },
  {
    name: "Silver Breastplate",
    type: "chestplate",
    level: 7,
    desc: "Silver is good for trading. But it's also good for flexing on other opponenets your high status when you purchase this. Oh and it's good for defending too.",
    damageresist: 14,
    magic: "none"
  },
  {
    name: "Platinum Breastplate",
    type: "chestplate",
    level: 8,
    desc: "We are running out of ideas and metals to exploit so we settled on our last, exciting, better armor. Platinum brings you the highest form of comfort, protection, and durability. Hey kids, don't waste your money on the new iPhone 12. Spend it on this armor!",
    damageresist: 16,
    magic: "none"
  },
  {
    name: "Basic Robe",
    type: "robe",
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
    type: "boot",
    level: 1,
    desc: "Simple boots that cushions blows",
    damRes: 1,
    magic: "none"
  },
  {
    name: "Magic Shoes",
    type: "shoe",
    level: 1,
    desc: "Magic Shoes for more magicing",
    damRes: 0,
    magic: "moreMana"
  }
];
