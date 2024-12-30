const Aluno = require('../models/aluno');
const Disciplina = require('../models/disciplina');
const crypto = require('crypto'); // pra criptografia basica da senha do combatente

module.exports = {
    // CREATE
    criarAluno: async (req, res) => {
        const { email, senha, nome, apelido, disciplinas_feitas, atividades_extracurriculares } = req.body;

        try {
            // Criando o aluno
            const aluno = await Aluno.create({
                email,
                senha,
                nome,
                apelido,
                atividades_extracurriculares,
            });

            // Associando disciplinas ao aluno
            if (disciplinas_feitas && disciplinas_feitas.length > 0) {
                const disciplinas = await Disciplina.findAll({
                    where: {
                        id: disciplinas_feitas,
                    },
                });
                await aluno.addDisciplinas(disciplinas); // Adiciona as disciplinas ao aluno
            }

            res.status(201).json(aluno);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    loginAluno: async (req, res) => {
        const { email, senha } = req.body;

        try {
            const aluno = await Aluno.findOne({
                where: {
                    email,
                    senha,
                },
            });

            if (!aluno) {
                return res.status(404).json({ error: 'Login não realizado, verifique seus dados e tente novamente.' });
            }

            res.status(200).json({
                message: "Login bem sucedido!!!",
                alunoId: aluno.id,
                nome: aluno.nome
            });
        } 
        
        catch (err) {
            res.status(500).json({ error: 'Erro ao realizar login. Deu pane no sistema, tente mais tarde.' });
        }
    },

};
