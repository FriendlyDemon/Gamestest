const path = require('path');
const fs = require('fs');
const rl = require('readline-sync');

function _class(folder,...inn){
let doc = require('./classes/'+folder+'.js')
return new doc (...inn);
}
function _Ref(pasta, arquivo, quantidade) {
    let test = fs.readdirSync('_Ref/' + pasta).includes(arquivo + '1.json')
    if (!test) {
        doc = require('./' + pasta + "/" + arquivo + ".js").body
        for (i = 1; i <= quantidade; i++) {
            fs.writeFileSync('./_Ref/' + pasta + "/" + arquivo + i + '.json', JSON.stringify(doc), err => { })
        }
    } else {
        console.log('arquivo já existe')
    }
}
let cavalo = _class('npc','cavalo',50,2,0,0,0,1,{'glue':0.2})
function impCh(character) {
    let { body } = require(`./characters/${character}.js`)
    return body
}
x = false
console.log(Object.keys(require('./classes/npc.js')))
//while (x===false){
//eval(rl.question(": "))}
//console.log(Object.keys(impCh(caster).spells))