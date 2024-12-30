const express = require('express');
const router = express.Router();
const disciplinaController = require('../controllers/disciplinaController');

router.post('/', disciplinaController.criarDisciplina);

// lista todas as disciplinas
router.get('/', disciplinaController.listarDisciplinas);

// busca disciplina por nome ou id
router.get('/buscar', disciplinaController.buscarDisciplina);

module.exports = router;
