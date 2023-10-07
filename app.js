// Importa ExpressJS dentro do Projeto.
const express = require('express');
const routePessoa = require('./routes/pessoa')
// Instanciamos o ExpressJS
const app = express();
app.use(express.json())

// Porta da Aplicação
const port = 8000;

app.use('/pessoa', routePessoa)

app.listen(port, () => {
    console.log('Escutando a porta: ', port);
})