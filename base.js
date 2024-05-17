const rl = require('readline-sync')
imp = require("./characters/player.js")
function d(num) {
    return Math.floor(Math.random() * num) + 1
}
function nome(n1) {
    return n1["sName"]
}
fire = "fire damage", force = "force damage", attack = (Math.floor(Math.random() * 20) + 1), effect = "this happens", cantLvl = 1


/*
magicMissile = {
    name: "Magic Missile",
    slot: 1,
    range: 120,
    spellType: effect,
    damage: (1 * d(4)) + 1,
    damageType: force
};*/

//const spells = [slot0 = [firebolt], slot1 = [magicMissile]];

function castList() {
    spellSlots = ["cantrip", "1st level", "2nd level", "3rd level", "4th level", "5th level", "6th level", "7th level", "8th level", "9th level"]
    slot = rl.keyInSelect(spellSlots.slice(0, this.spells.length), "Wich slot would you like to cast?"),
        castSpell = rl.keyInSelect(this.spells[slot].map(nome), "Wich spell would you like to cast?")
    console.log("I cast "+this.spells[slot][castSpell]["sName"]+"!")
}
castList.call(imp)

