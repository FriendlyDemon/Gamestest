const testFolder = './characters/';
const fs = require('fs');

fs.readdirSync(testFolder).forEach(file => {if (file.includes('.js')){
  console.log(file.slice(0,-3),'=', require(`${testFolder}${file}`).body.name)};
});