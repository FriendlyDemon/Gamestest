const rl = require('readline-sync')
function impCh(V1) {
    let { body } = require(`./characters/${V1}.js`)
    return body
}
function impSp(V1) {
    let { body } = require(`./spells/${V1}.js`)
    return body
}
function d(num) {
    return Math.floor(Math.random() * num) + 1
}
let N = V1 => impSp(V1).name
attack = (d(20))

function castList(caster) {
    spellSlots = ["cantrip", "1st level", "2nd level", "3rd level", "4th level", "5th level", "6th level", "7th level", "8th level", "9th level"]
    slot = rl.keyInSelect(spellSlots.slice(0, impCh(caster).spells.length), "Wich slot would you like to cast?"),
        castSpell = rl.keyInSelect(impCh(caster).spells[slot].map(N), "Wich spell would you like to cast?")
    console.log("I cast " + impSp(impCh(caster).spells[slot][castSpell]).name + "!")
}

castList("player")