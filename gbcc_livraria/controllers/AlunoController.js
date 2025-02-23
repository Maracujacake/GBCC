// controllers/alunoController.js
const { Aluguel } = require('../models');
const db = require('../models');
const { get } = require('../routes/AlunoRoutes');
const Aluno = db.Aluno;
const Livro = db.Livros;


// Função para buscar informações do aluno
const getAluno = async (req, res) => {
  const { email } = req.params;

  try {
    const aluno = await Aluno.findOne({
      where: { email },
      include: [{
        model: Aluguel,
        include: ['Livro']  // Supondo que o modelo Livro também esteja relacionado
      }]
    });

    if (aluno) {
      return res.json(aluno);
    } else {
      return res.status(404).json({ message: 'Aluno não encontrado' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao buscar aluno', error });
  }
};



// Função para criar um novo aluno
const criarAluno = async (req, res) => {
    const { nome, email } = req.body;
  
    try {
      if (!nome || !email) {
        return res.status(400).json({ message: 'Campos obrigatórios não preenchidos' });
      }
    
      console.log(Aluno);
      console.log(nome + " " + email);
      const novoAluno = await Aluno.create({ nome, email });
      return res.status(201).json(novoAluno);
    } catch (error) {
      console.error('Erro ao criar aluno:', error);  // Adiciona log detalhado
      return res.status(500).json({ message: 'Erro ao criar aluno', error: error.message });
    }
  };



// Função para realizar o aluguel
const alugarLivro = async (req, res) => {
    const { email, livro_id } = req.body;
    
    console.log(email + " " + livro_id);
    try {
      // Busca o aluno pelo email
      const aluno = await Aluno.findOne({ where: { email } });
      const livro = await Livro.findByPk(livro_id);
  
      if (!aluno || !livro) {
        return res.status(404).json({ message: 'Aluno ou livro não encontrado' });
      }
  
      const dataDevolucao = new Date();
      dataDevolucao.setDate(dataDevolucao.getDate() + 7); // 7 dias para devolução
  
      const aluguel = await Aluguel.create({
        aluno_id: aluno.id,
        livro_id: livro.id,
        data_devolucao: dataDevolucao
      });
  
      return res.status(201).json(aluguel);
    } catch (error) {
      console.error('Erro ao alugar livro:', error);
      return res.status(500).json({ message: 'Erro ao alugar livro', error: error.message });
    }
  };


// Função para buscar todos os alugueis de um aluno pelo email
const getAlugueisByAlunoEmail = async (req, res) => {
    const { email } = req.params;
    console.log("Email recebido:", email);

    try {
      // Busca o aluno pelo email
      const aluno = await Aluno.findOne({ where: { email } });

      if (aluno) {
        // Busca diretamente os alugueis do aluno, sem incluir a tabela 'Livros'
        const alugueis = await Aluguel.findAll({
          where: { aluno_id: aluno.id }
        });

        if (alugueis && alugueis.length > 0) {
          return res.status(200).json(alugueis);
        } else {
          return res.status(404).json({ message: 'Nenhum aluguel encontrado para este aluno.' });
        }
      } else {
        return res.status(404).json({ message: 'Aluno não encontrado' });
      }
    } catch (error) {
      console.error('Erro ao buscar alugueis:', error);
      return res.status(500).json({ message: 'Erro ao buscar alugueis', error });
    }
};


module.exports = { getAluno, alugarLivro, criarAluno, getAlugueisByAlunoEmail };
