const spells = [slot0 = ["firebolt", "prestidigitation"], slot1 = ["magicMissile", "shield"]], spellSlots = ["cantrip", "1st level"], rl = require('readline-sync');

function cast() {
    slot = rl.keyInSelect(spellSlots, "Wich slot would you like to cast?"),
    castSpell = rl.keyInSelect(spells[slot], "Wich spell would you like to cast?")
    console.log("I cast",spells[slot][castSpell].toUpperCase()+"!")
}
cast()