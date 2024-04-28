const rl = require('readline-sync'),
spells = [slot0 = ["firebolt", "prestidigitation"], slot1 = ["magicMissile", "shield"]];

function cast() {
    spellSlots = ["cantrip", "1st level","2nd level","3rd level","4th level","5th level", "6th level", "7th level","8th level","9th level"]
    slot = rl.keyInSelect(spellSlots.slice(0,spells.length), "Wich slot would you like to cast?"),
    castSpell = rl.keyInSelect(spells[slot], "Wich spell would you like to cast?")
    console.log("I cast",spells[slot][castSpell].toUpperCase()+"!")
}
cast()