const testFolder = './characters';
const path = require('path')
const fs = require('fs');
const rl = require('readline-sync')
fs.readdirSync(testFolder).forEach(file => {
    if (file.includes('.js') && file != 'character.js') {
        console.log(file.slice(0, -3), '=', require(`${testFolder}/${file}`).body.name)
    };
});
function getName(doc) {
    let { body } = require(`${testFolder}/${doc}`)
    return body.name
}
const personagem = (`nome, tipo, raça, status, level, vida máxima, gold, equipamento, inventário, magias, classe`)
let dirpath = path.join(__dirname, '/characters')

let test1 = fs.readdirSync(testFolder).filter(e => path.extname(e).toLowerCase() === '.js' && e != 'character.js')
let test = test1[rl.keyInSelect(test1.map(getName))]
console.log(test)