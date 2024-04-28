const rl = require('readline-sync')
function d(num) {
    return Math.floor(Math.random() * num) + 1
}
function nome(obj) {
    return obj["name"]
}
fire = "fire damage", force = "force damage", attack = (Math.floor(Math.random() * 20) + 1), effect = "this happens", cantLvl = 1

firebolt = {
    name: "Firebolt",
    slot: 0,
    range: 120,
    spellType: attack,
    damage: cantLvl * d(10),
    damageType: fire
}
magicMissile = {
    name: "Magic Missile",
    slot: 1,
    range: 120,
    spellType: effect,
    damage: (1 * d(4)) + 1,
    damageType: force
};

const spells = [slot0 = [firebolt], slot1 = [magicMissile]];

function castList() {
    spellSlots = ["cantrip", "1st level", "2nd level", "3rd level", "4th level", "5th level", "6th level", "7th level", "8th level", "9th level"]
    slot = rl.keyInSelect(spellSlots.slice(0, spells.length), "Wich slot would you like to cast?"),
        castSpell = rl.keyInSelect(spells[slot].map(nome), "Wich spell would you like to cast?")
    console.log(spells[slot][castSpell]["name"])
}
castList()