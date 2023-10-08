const { getPessoas, getPessoaPorId, postPessoa, patchPessoas, deletePessoa } = require('../services/pessoa')

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
        if(id && Number(id)) {
            const pessoa = getPessoaPorId(id)
            res.send(pessoa)
        }
        else {
            res.send('Essa pessoa não existe.')
        }
    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
}

function postPessoaCONTROLLER (req, res) {
    try {
        const novaPessoa = req.body;
        if (req.body) {
            postPessoa(novaPessoa);
            res.send('Pessoa Adicionada')
        } else {
            res.status(422)
            res.send('Verifique se o campo "nome" está devidamente preenchido.')
        }
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

function patchPessoaCONTROLLER (req, res) {
    try {
        const id = req.params.id
        if (id && Number(id)) {
            const body = req.body
            patchPessoas(body ,id)
            res.send("Pessoa Modificada")
        } else {
            res.send('Esta pessoa não existe.')
        }
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

function deletePessoaCONTROLLER (req, res) {
    try {
        const id = req.params.id;
        if (id && Number(id)) {
            deletePessoa(id)
            res.send('Pessoa deletada')
        } else {
            res.status(422)
            res.send('Esta pessoa não existe.')
        }
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