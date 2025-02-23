const express = require('express');
const { getAluno, criarAluno, alugarLivro, getAlugueisByAlunoEmail } = require('../controllers/AlunoController');
const router = express.Router();

// Rota para buscar um aluno pelo email
router.get('/:email', getAluno);

// Rota para criar um novo aluno
router.post('/', criarAluno);

// Rota para realizar o aluguel de um livro
router.post('/aluguel', alugarLivro);

// Rota para buscar todos os alugueis de um aluno pelo email
router.get('/:email/alugueis', getAlugueisByAlunoEmail);

module.exports = router;
