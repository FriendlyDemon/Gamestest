const rl = require('readline-sync');
const fs = require('node:fs');

function _Ref(pasta, arquivo, quantidade) {
    if (!fs.readdirSync(__dirname).includes(pasta)) {
        return '404 pasta não existe'
    } else if (!fs.readdirSync('./_Ref').includes(pasta)) {
        fs.mkdir('./_Ref/' + pasta)
    };
    if (fs.readdirSync('./_Ref/' + pasta).includes(arquivo + '1.json')) {
        return '500 referência já existe'
    } else if (!fs.readdirSync(pasta).includes(arquivo + '.json')) {
        return '404 arquivo não existe'
    } else {
        doc = require(`./${pasta}/${arquivo}.json`)
        for (i = 1; i <= quantidade; i++) {
            fs.writeFileSync('./_Ref/' + pasta + '/' + arquivo + i + '.json', JSON.stringify(doc, null, '    '))
        }
        return 'referências criadas com êxito'
    }
};

function impRef(folder, file) {
    if (fs.readdirSync(`./_Ref`).includes(`${folder}`)) {
        if (fs.readdirSync(`./_Ref/${folder}`).includes(`${file}.json`)) {
            return require(`./_Ref/${folder}/${file}.json`)
        } else { return `${file}.json não existe` }
    } else { return `${folder} não existe` }
};

function imp(folder, file) {
    if (fs.readdirSync(__dirname).includes(`${folder}`)) {
        if (fs.readdirSync(`./${folder}`).includes(`${file}.js`)) {
            return require(`./${folder}/${file}.js`).body
        } else { return `${file}.json não existe` }
    } else { return `${folder} não existe` }
};

function d(num) { return Math.floor(Math.random() * num) + 1 }
function sN(sName) { return imp("spells", sName).name }
let attack = (d(20));

function castList(caster) {
    let slot = imp("characters", caster).spells[Object.keys(imp("characters", caster).spells)[rl.keyInSelect(Object.keys(imp("characters", caster).spells), "Wich slot would you like to cast?")]]
    let castSpell = slot[rl.keyInSelect(slot.map(sN), "Wich spell would you like to cast?")]
    console.log("I cast " + imp("spells", castSpell).name + "!")
};

castList("player");

//console.log(Object.keys(impCh(caster).spells))