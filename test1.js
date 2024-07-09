/*
function armor(x,y){
    return Math.floor(Math.pow(0.99,x)*y)
}
console.log(armor(185,1000))
*/
const fs = require('node:fs');
function jsonfy(x1,x2) {
    doc=require('./'+x1+x2).body
    fs.writeFileSync('./',x2,'.json', JSON.stringify(doc), err=>{})}

// https://nodejs.org/en/learn/manipulating-files/writing-files-with-nodejs
a=["characters","classes","habilities","items","races","spells"]
b=[]
for (let i=0; i<a.length(); i++) {
    jsonfy(a[i])
}
