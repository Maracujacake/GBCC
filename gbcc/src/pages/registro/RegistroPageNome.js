import React, { useState } from "react";
import { useRegistro } from "./RegistroContext";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import axolotou from "../../assets/axolote_registro_1.png";


function RegistroPageNome() {
  const { formData, updateFormData } = useRegistro(); // Obtém os valores do contexto
  const navigate = useNavigate(); // Hook para navegação

  const [nome, setNome] = useState(formData.nome);
  const [apelido, setApelido] = useState(formData.apelido);

  console.log(formData); // depuration basica rs

  const handleNextPage = () => {
    if (!nome || !apelido) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    updateFormData({ nome, apelido }); // Atualiza o estado com os novos valores
    navigate("/registro/email");
  };

  return (
    <div className="min-h-screen bg-[#0C0F14] text-white">
       <Header />
      <div className="flex justify-center items-center min-h-screen bg-gray">
        <div className="bg-[#D70082] p-8 rounded-lg w-96 text-white shadow-lg">
          {/* Imagem circular */}
          <div className="flex justify-center mb-6">
            <img
              src={axolotou}
              alt="Imagem do usuário"
              className="w-32 h-32 rounded-full object-cover"
            />
          </div>

          {/* Pergunta sobre o nome */}
          <h2 className="text-2xl font-semibold text-center mb-4">Qual é o seu nome?</h2>
          <input
            type="text"
            required
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full p-3 bg-white text-black rounded-lg mb-4"
          />

          {/* Pergunta sobre o apelido */}
          <h2 className="text-2xl font-semibold text-center mb-4">Como você gostaria de ser chamado?</h2>
          <input
            type="text"
            value={apelido}
            onChange={(e) => setApelido(e.target.value)}
            className="w-full p-3 bg-white text-black rounded-lg mb-6"
          />

          {/* Botão próximo */}
          <button
            onClick={handleNextPage}
            className="w-full py-3 bg-white text-[#D70082] font-semibold rounded-lg hover:bg-gray-200 transition-colors"
          >
            Próxima
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegistroPageNome;
