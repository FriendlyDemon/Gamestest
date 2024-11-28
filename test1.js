/*
function armor(x,y){
    return Math.floor(Math.pow(0.99,x)*y)
}
console.log(armor(185,1000))
*/
const fs = require('node:fs');
function jsonfy(pasta,arquivo,quantidade) {
    doc=require('./'+pasta+"/"+arquivo+".js").body
    for (i=0;i<=quantidade;i++){
    fs.writeFileSync('./_Ref/'+pasta+"/"+arquivo+i+'.json', JSON.stringify(doc), err=>{})}}

// https://nodejs.org/en/learn/manipulating-files/writing-files-with-nodejs
jsonfy("characters","player",3)

for (x = 0; x < 1;) {
    eval(sas = rl.question(': '))
    if (sas == 0) { x++ }
};