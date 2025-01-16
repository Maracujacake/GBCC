import React, { useState, useEffect } from "react";
import { useRegistro } from "./RegistroContext";
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../../config';
import Header from '../../components/Header';
import axolotou from '../../assets/axolote_registro_1.png';

const RegistroDisciplinas = () => {
  const { formData, updateFormData } = useRegistro();
  const [disciplinas, setDisciplinas] = useState([]); // Disciplinas disponíveis para o usuário escolher
  const [selectedDisciplinas, setSelectedDisciplinas] = useState(formData.disciplinas_realizadas);
  const navigate = useNavigate();

  useEffect(() => {
    // Buscar as disciplinas do backend
    const fetchDisciplinas = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/disciplinas`);
        const data = await response.json();
        setDisciplinas(data); // Assumindo que a resposta é uma lista de disciplinas
      } catch (error) {
        console.error("Erro ao buscar disciplinas:", error);
      }
    };

    fetchDisciplinas();
  }, []);

  const toggleDisciplinas = (disciplina) => {
    setSelectedDisciplinas((prevSelected) => {
      // Verificar se a disciplina já está na lista
      if (prevSelected.includes(disciplina)) {
        // Se já estiver, removemos da lista
        return prevSelected.filter((item) => item !== disciplina);
      } else {
        // Se não estiver, adicionamos à lista
        return [...prevSelected, disciplina];
      }
    });
  };

  const handleNextPage = () => {
    updateFormData({ disciplinas_realizadas: selectedDisciplinas });
    navigate('/registro/atividades');
  };

  return (
    <div className="min-h-screen bg-[#0C0F14] text-white">
      <Header />
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-[#D70082] p-8 rounded-lg w-full max-w-lg text-center">
        <div className="flex justify-center mb-6">
            <img
              src={axolotou}
              alt="Imagem do usuário"
              className="w-32 h-32 rounded-full object-cover"
            />
          </div>
          <h2 className="text-white text-2xl mb-6">Quais disciplinas você já cursou?</h2>

          <div className="mb-6">
            <h3 className="text-white text-xl mb-4">Disciplinas disponíveis:</h3>
            <div className="overflow-y-auto max-h-64 mb-6">
              {disciplinas.map((disciplina) => (
                <button
                  key={disciplina.id}
                  onClick={() => toggleDisciplinas(disciplina.nome)}
                  className={`w-full p-3 mb-2 rounded-lg text-white ${selectedDisciplinas.includes(disciplina.nome) ? 'bg-green-600' : 'bg-gray-600'} hover:bg-green-500 transition duration-200`}
                >
                  {disciplina.nome}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-white text-xl mb-4">Disciplinas selecionadas:</h3>
            <ul className="list-none p-0">
              {selectedDisciplinas.map((disciplina, index) => (
                <li key={index} className="flex justify-between items-center text-white mb-2">
                  {disciplina}
                  <button
                    onClick={() => toggleDisciplinas(disciplina)}
                    className="text-red-500 ml-4 hover:text-red-300"
                  >
                    Remover
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={handleNextPage}
            className="w-full p-3 rounded-lg bg-white text-[#D70082] hover:bg-gray-200 transition duration-200"
          >
            Próxima
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistroDisciplinas;
