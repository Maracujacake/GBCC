import React from "react";
import { useNavigate } from 'react-router-dom';
import { useRegistro } from "./RegistroContext"; // Assumindo que você está usando o contexto para o estado global
import Header from '../../components/Header';
import axolotou from '../../assets/axolote_registro_1.png';

const RegistroFinaliza = () => {
  const { clearFormData } = useRegistro(); // Aqui, você pode acessar os dados do contexto
  const navigate = useNavigate();

  const handleFinalizarRegistro = () => {
    // Limpar os dados após a finalização do registro
    clearFormData();

    // Redirecionar para a página inicial ou outra página
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#0C0F14] text-white">
      <Header />
      <div className="p-4 flex justify-center items-center min-h-screen">
        <div className="bg-[#D70082] p-8 rounded-lg w-full max-w-lg lg:max-w-4xl text-center">
          {/* Imagem centralizada */}
          <div className="flex justify-center mb-6">
            <img
              src={axolotou}
              alt="Mascote Axolote"
              className="w-32 h-32 rounded-full object-cover"
            />
          </div>

          {/* Texto centralizado acima das divs pretas */}
          <div className="mb-6">
            <h2 className="text-white text-2xl font-semibold">O sr. axolote agradece por concluir seu registro</h2>
          </div>

          {/* Texto centralizado acima das divs pretas */}
          <div className="mb-6">
            <h2 className="text-white text-2xl font-semibold">Por favor, sinta-se à vontade para navegar pelo sistema</h2>
          </div>

          {/* Duas divs com fundo preto e texto ajustado */}
          <div className="space-y-6 lg:flex lg:justify-between lg:space-y-0">
            <div className="lg:mr-12 bg-black text-white p-8 w-full lg:w-1/2 h-auto rounded-lg hover:bg-white hover:text-black transition duration-300 cursor-pointer">
              <h3 className="text-lg py-6">
                Clique aqui para visualizar seu <span className="text-[#D70082]">mapa de disciplinas e suas horas complementares</span>
              </h3>
            </div>

            <div onClick={() => navigate('/duvidas')} className="lg:ml-12 bg-black text-white p-8 w-full lg:w-1/2 h-auto rounded-lg hover:bg-white hover:text-black transition duration-300 cursor-pointer">
              <h3 className="text-lg py-6">
                Clique aqui para visualizar as <span className="text-[#D70082]">dúvidas mais frequentes que os alunos possuem</span>
              </h3>
            </div>
          </div>

          {/* Botão centralizado */}
          <button
            onClick={handleFinalizarRegistro} // Agora, apenas limpa e redireciona
            className="mt-4 w-full p-3 rounded-lg bg-white text-[#D70082] hover:bg-gray-200 transition duration-200 cursor-pointer"
          >
            Finalizar Registro
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistroFinaliza;
