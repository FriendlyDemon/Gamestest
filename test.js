const fs=require('node:fs')
function tax(a,b){console.log(a),console.log(b)}

fs.readFile('./test.txt',(e,b)=>console.log(b.toString()))