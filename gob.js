const testFolder = './characters';
const fs = require('fs');
const rl = require('readline-sync')
fs.readdirSync(testFolder).forEach(file => {if (file.includes('.js') && file!='character.js'){console.log(file.slice(0,-3),'=', require(`${testFolder}/${file}`).body.name)};});

const personagem = (`nome, tipo, raça, status, level, vida máxima, gold, equipamento, inventário, magias, classe`)

let test = rl.keyInSelect(fs.readdirSync(testFolder)); console.log(fs.readdirSync(testFolder)[test])
