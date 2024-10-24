const path = require('path');
const fs = require('fs');
const rl = require('readline-sync');

function imp(pasta, ref) {
    if (fs.readdirSync(`./_Ref/${pasta}`).includes(`${ref}.json`)) {
        return require(`./_Ref/${pasta}/${ref}.json`)
    } else { return `${ref}.json não existe` }
};

function attack(a1, d1) {
    if (d1['health'] == 0) { return `${d1['name']} já está morto` }
    if (a1['damage'] > d1['armor'] && d1['health'] > (a1['damage'] - d1['armor'])) {
        d1['health'] -= (a1['damage'] - d1['armor'])
        return (d1['armor'] - a1['damage'])
    } else if (d1['armor'] >= a1['damage']) {
        return 'bloqueou'
    } else if ((a1['damage'] - d1['armor']) >= d1['health']) {
        d2 = d1['health']
        d1['health'] = 0
        return `-${d2} ${d1['name']} morreu`
    }
};

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
    };
};

function _loot(inv) {
    let _bag = [],
        loot1 = { ...inv.loot },
        loot2 = [...Object.keys(loot1)];
    for (i = 0; i < loot2.length; i++) {
        if (Math.random() <= loot1[loot2[i]]) { _bag.push(loot2[i]) }
    }
    return _bag
};

for (x = 0; x < 1;) {
    eval(sas = rl.question(': '))
    if (sas == 0) { x++ }
};

// console.log(Object.keys(impnpc('skeleton').loot))