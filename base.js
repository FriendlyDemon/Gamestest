const rl = require('readline-sync')
function d(num){
    return Math.floor(Math.random() * num)
}
const fire="fire damage", force="force damage",attack=Math.floor(Math.random() * 20),effect="this happens"

const 
firebolt=[
name = "Firebolt",
slot = 0,
range = 120,
spellType = attack,
damage = 1*d(10),
damageType = fire
],

magicMissile=[
name = "Magic Missile",
slot = 1,
range = 120,
spellType = effect,
damage = (1*d(4))+1,
damageType = force
];

const spells = [slot0 = [firebolt[0], "prestidigitation"], slot1 = [magicMissile[0], "shield"]];

function cast() {
    spellSlots = ["cantrip", "1st level","2nd level","3rd level","4th level","5th level", "6th level", "7th level","8th level","9th level"]
    slot = rl.keyInSelect(spellSlots.slice(0,spells.length), "Wich slot would you like to cast?"),
    castSpell = rl.keyInSelect(spells[slot], "Wich spell would you like to cast?")
    console.log(spells[slot][castSpell])
}
cast()
console.log(d(10))