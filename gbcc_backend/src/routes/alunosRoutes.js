const express = require('express');
const router = express.Router();
const alunoController = require('../controllers/alunoController');

router.post('/', alunoController.criarAluno);

router.post('/login', alunoController.loginAluno);

router.post('/informacoes', alunoController.infoAluno); 


module.exports = router;
