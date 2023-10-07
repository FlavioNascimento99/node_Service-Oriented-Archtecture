// Imports do conrolador e do Módulo de Route da biblioteca ExpressJS
const { getPessoasCONTROLLER, getPessoasPorIdCONTROLLER, postPessoaCONTROLLER, patchPessoaCONTROLLER, deletePessoaCONTROLLER } = require('../controllers/pessoa')
const { Router } = require('express');

// Instanciando a função Router da Library do ExpressJS
const router = Router();


router.get('/', getPessoasCONTROLLER)
router.get('/:id', getPessoasPorIdCONTROLLER)
router.post('/', postPessoaCONTROLLER)
router.patch('/', patchPessoaCONTROLLER)
router.delete('/', deletePessoaCONTROLLER)

module.exports = router;