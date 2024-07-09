const js = require('node:js')
let conteudo = "texto de teste"
js.fileWriteSync('teste.json', conteudo, err=>{})