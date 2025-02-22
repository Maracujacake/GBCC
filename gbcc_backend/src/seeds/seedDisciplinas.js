// seedDisciplinas.js
const sequelize = require('../database'); // caminho para o arquivo de conexão com o banco
const Disciplina = require('../models/disciplina');

const disciplinasData = [
  { nome: "Algoritmos 1", creditos: 4, obrigatoria: true, preRequisitos: [] },
  { nome: "Algoritmos 2", creditos: 4, obrigatoria: true, preRequisitos: ["Algoritmos 1"] },
  { nome: "Estruturas de Dados", creditos: 4, obrigatoria: true, preRequisitos: ["Algoritmos 1"] },
  { nome: "Banco de Dados", creditos: 3, obrigatoria: false, preRequisitos: [] },
  { nome: "Engenharia de Software", creditos: 3, obrigatoria: false, preRequisitos: [] },
  // adicione mais disciplinas conforme necessário
];

async function seedDisciplinas() {
  try {
    // Sincroniza o modelo se necessário (use force: true se quiser sobrescrever)
    await Disciplina.sync({ force: false });
    
    // Insere os registros em massa
    await Disciplina.bulkCreate(disciplinasData, { validate: true });
    
    console.log('Disciplinas inseridas com sucesso!');
    process.exit(0);
  } catch (err) {
    console.error('Erro ao inserir disciplinas:', err);
    process.exit(1);
  }
}

seedDisciplinas();
