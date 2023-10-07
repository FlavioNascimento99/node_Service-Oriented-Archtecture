const { getPessoas, getPessoaPorId, postPessoa } = require('../services/pessoa')

function getPessoasCONTROLLER (req, res) {
    try {
        const pessoas = getPessoas();
        res.send(pessoas)
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

function getPessoasPorIdCONTROLLER (req, res) {
    try {
        const id = req.params.id;
        const pessoa = getPessoaPorId(id)
        res.send(pessoa)
    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
}

function postPessoaCONTROLLER (req, res) {
    try {
        const novaPessoa = req.body;
        postPessoa(novaPessoa);
        res.status(201)
        res.send('Pessoa adicionada')
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

function patchPessoaCONTROLLER (req, res) {
    try {
        res.send('Requisição - PATCH - Edição')
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

function deletePessoaCONTROLLER (req, res) {
    try {
        res.send('Requisição - DELETE - Exclusão')
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

module.exports = {
    getPessoasCONTROLLER,
    getPessoasPorIdCONTROLLER,
    postPessoaCONTROLLER,
    patchPessoaCONTROLLER,
    deletePessoaCONTROLLER,
};