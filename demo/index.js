const path = require('path');
const fs = require('fs');
const rl = require('readline-sync');

function _Ref(pasta, arquivo, quantidade) {
    let test = fs.readdirSync(pasta).includes(arquivo + '1.json')
    if (!test) {
        doc = require('./' + pasta + "/" + arquivo + ".js").body
        for (i = 1; i <= quantidade; i++) {
            fs.writeFileSync('./_Ref/' + pasta + "/" + arquivo + i + '.json', JSON.stringify(doc), err => { })
        }
    } else {
        console.log('arquivo já existe')
    }
}

function impCh(character) {
    let { body } = require(`./characters/${character}.js`)
    return body
}
x=false
/* while (x===false){
eval(rl.question(":"))}
*/
_Ref('test','test',1)
//console.log(Object.keys(impCh(caster).spells))