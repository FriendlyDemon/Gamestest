/*
function armor(x,y){
    return Math.floor(Math.pow(0.99,x)*y)
}
console.log(armor(185,1000))
*/
const fs = require('node:fs');
function jsonfy(x1,x2,x3) {
    doc=require('./'+x1+"/"+x2+".js").body
    for (i=0;i<=x3;i++){
    fs.writeFileSync('./_Ref/'+x1+"/"+x2+i+'.json', JSON.stringify(doc), err=>{})}}

// https://nodejs.org/en/learn/manipulating-files/writing-files-with-nodejs
jsonfy("characters","player",3)