const path = require('path');
const fs = require('fs');
const rl = require('readline-sync');
const _NPC = require('./classes/npc.js');

function _class(folder, ...inn) {
    let doc = require('./classes/' + folder + '.js')
    return new doc(...inn)
}

function _Ref(pasta, arquivo, quantidade) {
    if (fs.readdirSync('_Ref').includes(pasta)) {
        let test = fs.readdirSync('_Ref/' + pasta).includes(arquivo + '1.json')
        if (!test) {
            doc = require('./' + pasta + "/" + arquivo + ".js").body
            for (i = 1; i <= quantidade; i++) {
                fs.writeFileSync('./_Ref/' + pasta + "/" + arquivo + i + '.json', JSON.stringify(doc, null, '   '))
            }
        } else {
            console.log('arquivo já existe')
        }
    }
}

function impNPC(character) {
    let { body } = require(`./_Ref/NPC/${character}.js`)
    return body
}

let goblin = new _NPC('goblin', 5, 1, 0, 0, 2, 0, 1, 1, 1, { 'gold x3': 0.5, 'gold x5': 0.3, 'gold x10': 0.1 })

fs.writeFileSync('./_Ref/json/arquivo.json', JSON.stringify(goblin, null, '    '))
// console.log(Object.keys(require('./test/test.js').body))
/*
x = false
while (x===false){
eval(rl.question(": "))}
*/
//console.log(Object.keys(impCh(caster).spells))