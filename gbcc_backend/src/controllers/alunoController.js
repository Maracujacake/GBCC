const Aluno = require('../models/aluno');
const Disciplina = require('../models/disciplina');
const crypto = require('crypto'); // pra criptografia basica da senha do combatente
const AlunoDisciplina = require('../models/alunoDisciplina');
const { Op } = require('sequelize');


module.exports = {
    // CREATE
    criarAluno: async (req, res) => {
        const { email, senha, nome, apelido, disciplinas_feitas, atividades_extracurriculares } = req.body;

        console.log("pelo amor de todos os deuses" + req.body.disciplinas_feitas);
    
        try {
            const aluno = await Aluno.create({
                email,
                senha,
                nome,
                apelido,
                atividades_extracurriculares, 
            });

            // 1. Associa todas as disciplinas ao aluno com status 0 (não concluída)
            const todasDisciplinas = await Disciplina.findAll();
            // A associação em massa passa o mesmo valor para todas as linhas
            await aluno.addDisciplinas(todasDisciplinas, { through: { status: 0 } });
    
            if (disciplinas_feitas && disciplinas_feitas.length > 0) {
                const disciplinasSelecionadas  = await Disciplina.findAll({
                    where: { 
                        nome:  disciplinas_feitas, // Busca todas as disciplinas com IDs especificados
                    },
                });
    
                // Calcula o total de créditos das disciplinas completadas
                const totalCreditos = disciplinasSelecionadas.reduce((acc, disc) => acc + disc.creditos, 0);

                for (const disciplina of disciplinasSelecionadas) {
                    await AlunoDisciplina.update(
                        { status: 1 },
                        { where: { AlunoId: aluno.id, DisciplinaId: disciplina.id } }
                    );
                }

                // Atualiza os créditos restantes do aluno
                aluno.creditos_restantes -= totalCreditos;
                await aluno.save();
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
            res.status(500).json({ error: 'Erro ao realizar login. Deu pane no sistema, tente mais tarde. loginAluno' });
        }
    },

    infoAluno: async (req, res) => {
        const { email, senha } = req.body;
    
        try {
            // Encontre o aluno com base no email e senha
            const aluno = await Aluno.findOne({
                where: { email, senha },
                include: [
                    {
                        model: Disciplina,
                        attributes: ['id', 'nome', 'creditos', 'obrigatoria'],
                        through: {
                            attributes: ['status', 'AlunoId', 'DisciplinaId'] // Inclui o status da matrícula
                        }
                    }
                ],
            });
    
            if (!aluno) {
                return res.status(404).json({ error: 'Login não realizado, verifique seus dados e tente novamente.' });
            }
            
            console.log("ate aqui chegou");


            // 1. Obter todas as disciplinas obrigatórias
            const disciplinasObrigatorias = await Disciplina.findAll({
                where: { obrigatoria: true },
            });
    
            const disciplinasCursando = aluno.Disciplinas.filter(disciplina => 
                disciplina.AlunoDisciplina && disciplina.AlunoDisciplina.status === 0
            );

            // 3. Calcular disciplinas obrigatórias restantes
            const disciplinasObrigatoriasCursando = disciplinasCursando.filter(disciplina => 
                disciplina.obrigatoria === true
            );
    
            const obrigatoriasRestantes = disciplinasObrigatorias.length - disciplinasObrigatoriasCursando.length;
    
            // Retorna as informações do aluno, incluindo o número de disciplinas obrigatórias restantes
            res.status(200).json({
                alunoId: aluno.id,
                nome: aluno.nome,
                atividades_extracurriculares: aluno.atividades_extracurriculares,
                disciplinas: aluno.Disciplinas,
                creditos_restantes: aluno.creditos_restantes, // Adiciona o campo créditos restantes
                disciplinasObrigatoriasRestantes: obrigatoriasRestantes // Adiciona o número de disciplinas obrigatórias restantes
            });
    
        } catch (err) {
            console.error('Erro ao realizar login:', err);
            res.status(500).json({ error: 'Erro ao realizar login. Deu pane no sistema, tente mais tarde.' });
        }
    },


    atualizarDisciplinasAluno: async (req, res) => {
        const { alunoId, disciplinas_feitas } = req.body;
    
        try {
          // Encontra o aluno pelo ID
          const aluno = await Aluno.findByPk(alunoId);
    
          if (!aluno) {
            return res.status(404).json({ error: 'Aluno não encontrado' });
          }
    
          // Busca as disciplinas com base nos nomes fornecidos
          const disciplinas = await Disciplina.findAll({
            where: {
              nome: {
                [Op.in]: disciplinas_feitas, // Filtra por todos os nomes das disciplinas fornecidos
              },
            },
          });
    
          if (disciplinas.length === 0) {
            return res.status(400).json({ error: 'Nenhuma disciplina encontrada com esses nomes.' });
          }
    
          // Calcula o total de créditos das disciplinas selecionadas
          const totalCreditos = disciplinas.reduce((acc, disc) => acc + disc.creditos, 0);
    
          // Atualiza os créditos restantes do aluno (subtraindo os créditos das disciplinas realizadas)
          aluno.creditos_restantes -= totalCreditos;
          await aluno.save();
    
          // Associa as disciplinas ao aluno (pode já existir essa relação, então não criamos duplicatas)
          await aluno.addDisciplinas(disciplinas);
    
          res.status(200).json({ message: 'Disciplinas atualizadas com sucesso!' });
        } catch (err) {
          console.error(err);
          res.status(500).json({ error: 'Erro ao atualizar disciplinas do aluno.' });
        }
      },


      atualizarRoadmap: async (req, res) => {
        const { email, disciplinasSelecionadas } = req.body; // disciplinasSelecionadas: array de IDs de disciplinas
        try {
            // Busca o aluno pelo e-mail
            const aluno = await Aluno.findOne({ where: { email } });
    
            if (!aluno) {
                return res.status(404).json({ error: 'Aluno não encontrado.' });
            }
    
            const alunoId = aluno.id;
    
            // Atualiza o status das disciplinas selecionadas
            for (const disciplinaId of disciplinasSelecionadas) {
                await AlunoDisciplina.update(
                    { status: 1 },
                    { where: { AlunoId: alunoId, DisciplinaId: disciplinaId } }
                );
            }
    
            res.status(200).json({ message: 'Roadmap atualizado com sucesso!' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Erro ao atualizar o roadmap do aluno.' });
        }
    },
    

};
