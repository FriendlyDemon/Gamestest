d = require(`../actions/attack.js`);
attack = d(20)

const
    sName = "Firebolt",
    slot = 0,
    range = 120,
    spellType = ["attack",attack],
    damage = d(10);
//damageType= fire
module.exports = { sName, slot, range, spellType, damage }