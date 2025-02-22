const Disciplina = require('../models/disciplina');

module.exports = {

    // CREATE
    criarDisciplina: async (req, res) => {
        const { nome, creditos, obrigatoria } = req.body;  // Agora inclui 'obrigatoria'

        try {
            const disciplina = await Disciplina.create({
                nome,
                creditos,
                obrigatoria, 
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

    buscarDisciplina: async (req, res) => {
        try{
            const {nome, id} = req.query;

            if(!nome && !id) return res.status(400).json({ error: "É necessário fornecer o nome ou o id da disciplina" });

            let disciplina;

            if(id){
                disciplina = await Disciplina.findByPk(id);
            }
            else if(nome){
                disciplina = await Disciplina.findOne({ where: { nome } });
            }


            if(!disciplina) return res.status(404).json({ error: "Disciplina não encontrada" });

            return res.json(disciplina);
        }
        
        catch(err){
            res.status(500).json({ error: "Erro ao buscar a disciplina, verifique os dados fornecidos e tente novamente" });
        }
    },

    // READ POR NOME
    // READ POR ID
};
