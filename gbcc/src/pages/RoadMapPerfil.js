import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { API_BASE_URL } from '../config';
import { useNavigate } from 'react-router-dom';

const Roadmap = () => {
  const [disciplinas, setDisciplinas] = useState([]);
  const [selecionadas, setSelecionadas] = useState([]); // IDs das disciplinas marcadas para atualizar
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("user"));
    setUser(userInfo);
    if (userInfo) {
      fetch(`${API_BASE_URL}/alunos/informacoes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: userInfo.email, senha: userInfo.senha }),
      })
        .then(res => res.json())
        .then(data => {
          // Supondo que data.disciplinas seja o array de disciplinas com relação (AlunoDisciplina)
          setDisciplinas(data.disciplinas);
        })
        .catch(err => console.error("Erro ao buscar disciplinas:", err));
    } else {
      navigate("/login");
    }
  }, [navigate]);

  // Separa as disciplinas em dois grupos:
  // - Fundamentais: sem pré-requisitos (ou seja, aquelas que levam a outras)
  // - Avançadas: com pré-requisitos
  const topLevelDisciplinas = disciplinas.filter(d => !d.preRequisitos || d.preRequisitos.length === 0);
  const lowerLevelDisciplinas = disciplinas.filter(d => d.preRequisitos && d.preRequisitos.length > 0);

  const handleQuadradoClick = (disciplina) => {
    // Se a disciplina já foi concluída, não permite alteração
    if (disciplina.AlunoDisciplina && disciplina.AlunoDisciplina.status === 1) return;

    // Alterna a seleção
    if (selecionadas.includes(disciplina.id)) {
      setSelecionadas(selecionadas.filter(id => id !== disciplina.id));
    } else {
      setSelecionadas([...selecionadas, disciplina.id]);
    }
  };

  const handleSave = async () => {
    if (!user) {
      alert("Usuário não encontrado!");
      return;
    }
    try {
      const response = await fetch(`${API_BASE_URL}/alunos/atualizarRoadmap`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: user.email,
          disciplinasSelecionadas: selecionadas, // Array de IDs
        }),
      });
      if (response.ok) {
        alert("Atualização realizada com sucesso!");
        // Opcional: recarregar os dados ou atualizar o estado local
      } else {
        alert("Erro ao atualizar o roadmap!");
      }
    } catch (err) {
      console.error("Erro ao atualizar:", err);
      alert("Erro ao atualizar o roadmap!");
    }
  };

  const renderQuadrado = (disciplina) => {
    let cor = 'bg-red-600'; // padrão para status 0 (não concluída)
    if (disciplina.AlunoDisciplina && disciplina.AlunoDisciplina.status === 1) {
      cor = 'bg-green-600';
    } else if (selecionadas.includes(disciplina.id)) {
      cor = 'bg-yellow-500';
    }
    return (
      <div
        key={disciplina.id}
        onClick={() => handleQuadradoClick(disciplina)}
        className={`w-32 h-32 flex flex-col items-center justify-center rounded-lg shadow-md cursor-pointer ${cor} text-center p-2`}
      >
        <strong>{disciplina.nome}</strong>
        {disciplina.preRequisitos && disciplina.preRequisitos.length > 0 && (
          <span className="text-xs mt-2">
            Pré-req: {disciplina.preRequisitos.join(', ')}
          </span>
        )}
      </div>
    );
  };

  return (
    <div className="bg-[#0C0F14] min-h-screen text-white flex flex-col">
      <Header />
      <div className="container mx-auto px-8 py-8">
        <h1 className="text-3xl font-bold mb-6">Roadmap de Disciplinas</h1>
        {/* Seção de Disciplinas Fundamentais */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Disciplinas Fundamentais</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {topLevelDisciplinas.map(renderQuadrado)}
          </div>
        </div>
        {/* Seção de Disciplinas Avançadas */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Disciplinas Avançadas</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {lowerLevelDisciplinas.map(renderQuadrado)}
          </div>
        </div>
        {/* Botão de Salvar */}
        <div className="flex justify-center mt-8">
          <button
            onClick={handleSave}
            className="bg-purple-600 hover:bg-purple-500 text-white py-2 px-6 rounded-lg transition duration-300"
          >
            Salvar Atualizações
          </button>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
