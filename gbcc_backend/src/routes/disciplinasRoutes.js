const express = require('express');
const router = express.Router();
const disciplinaController = require('../controllers/disciplinaController');

router.post('/', disciplinaController.criarDisciplina);

// lista todas as disciplinas
router.get('/', disciplinaController.listarDisciplinas);

module.exports = router;
