const fs = require('fs');

const read = JSON.parse(fs.readFileSync('pessoas.json'))

const newPessoa = {id: '6', nome: 'apenas'}

console.log(read)

fs.writeFileSync('pessoas.json', JSON.stringify([...read, newPessoa]))

console.log(read)