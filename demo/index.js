const path = require('path');
const fs = require('fs');
const rl = require('readline-sync');
const _NPC = require('./classes/npc.js');

function _class(folder, ...inn) {
    let doc = require('./classes/' + folder + '.js')
    return new doc(...inn)
}
/*
function attack(a1,a2){
    if (a1["damage"]>a2["armor"] && a2["health"]>=(a1["damage"]-a2["armor"])){
        a2["health"]-=(a1["damage"]-a2["armor"])
        return (a2["armor"]-a1["damage"])
    } else if (a2["armor"]>=a1["damage"]){
        return "block"
    } else {
        a2["health"]=0
        return "dead"
    }
}
*/
function attack(a1,a2){
    a01=require('./_Ref/NPC/'+a1+'.json'),a02=require('./_Ref/NPC/'+a2+'.json')
    if (a01["damage"]>a02["armor"] && a02["health"]>(a01["damage"]-a02["armor"])){
        a02["health"]-=(a01["damage"]-a02["armor"])
        fs.writeFileSync('./_Ref/NPC/'+a2+'.json',a02)
        return (a02["armor"]-a01["damage"]);
    } else if (a02["armor"]>=a01["damage"]){
        return "block";
    } else {
        a02["health"]=0
        fs.writeFileSync('./_Ref/NPC/'+a2+'.json',a02)
        return "dead";
    };
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
function copy_Ref(arq){fs.copyFileSync('./NPC/'+arq+'.json','_Ref/NPC/'+arq+'.json')}
function impNPC(character) {
    return require(`./_Ref/NPC/${character}.json`)
}
/* //fazer npc
let monster = new _NPC('skeleton', 3, 1, 0, 1, 0, 0, 0, 0, 1, { 'bone': 0.3, 'skull': 0.1,})
fs.writeFileSync('./_Ref/NPC/skeleton.json', JSON.stringify(monster, null, '    '))
*/
 //terminal
x = false
while (x===false){
eval(rl.question(": "))}

// console.log(Object.keys(impCh(caster).spells))

impNPC('wolf').getElementById('health').innerHTML='5'
