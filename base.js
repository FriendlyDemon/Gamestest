const rl = require('readline-sync')
const fs = require('node:fs');
function _Ref(pasta,arquivo,quantidade) {
    doc=require('./'+pasta+"/"+arquivo+".js").body
    for (i=0;i<=quantidade;i++){
    fs.writeFileSync('./_Ref/'+pasta+"/"+arquivo+i+'.json', JSON.stringify(doc), err=>{})}}

function impCh(character) {
    let { body } = require(`./characters/${character}.js`)
    return body
}
function impSp(spell) {
    let { body } = require(`./spells/${spell}.js`)
    return body
}
let d = num => Math.floor(Math.random() * num) + 1
let sN = sName => impSp(sName).name
attack = (d(20))

function castList(caster) {
    slot = rl.keyInSelect(Object.keys(impCh(caster).spells), "Wich slot would you like to cast?"),
        castSpell = rl.keyInSelect(impCh(caster).spells[slot].map(sN), "Wich spell would you like to cast?")
    console.log("I cast " + impSp(impCh(caster).spells[slot][castSpell]).name + "!")
}

castList("player")

//console.log(Object.keys(impCh(caster).spells))