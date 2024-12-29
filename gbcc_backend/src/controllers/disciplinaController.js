const Disciplina = require('../models/disciplina');

module.exports = {

    // CREATE
    criarDisciplina: async (req, res) => {
        const { nome, creditos } = req.body;

        try {
            const disciplina = await Disciplina.create({
                nome,
                creditos,
            });
            res.status(201).json(disciplina);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    // READ
    listarDisciplinas: async (req, res) => {
        try {
            const disciplinas = await Disciplina.findAll();
            res.json(disciplinas);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    // READ POR NOME
    // READ POR ID
};
