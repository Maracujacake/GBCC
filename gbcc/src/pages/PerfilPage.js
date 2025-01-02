import React from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

const PerfilPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Limpa os dados do usuário no localStorage
    localStorage.removeItem("user");

    // Redireciona para a página de login
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-[#0C0F14] text-white">
      {/* Header */}
      <Header />

      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-start">
        {/* Seção do Usuário */}
        <div className="flex flex-col items-center w-full md:w-1/3">
          {/* Imagem arredondada */}
          <img
            src="https://via.placeholder.com/150"
            alt="Foto do usuário"
            className="w-32 h-32 rounded-full border-4 border-purple-600"
          />
          {/* Nome do usuário */}
          <h2 className="mt-4 text-2xl font-semibold">Nome do Usuário</h2>
          {/* Informações adicionais */}
          <p className="mt-2 text-gray-400">RA: 12345678</p>
          <p className="text-gray-400">Ano de ingresso: 2022</p>
        </div>

        {/* Seção de Informações */}
        <div className="flex flex-col w-full md:w-2/3 mt-8 md:mt-0 md:pl-8">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            {/* Campo 1: Disciplinas restantes */}
            <div className="flex flex-col items-center justify-center bg-transparent border border-purple-600 rounded-lg p-6 w-full md:w-1/2">
              <h3 className="text-lg font-semibold text-purple-400">
                Disciplinas Restantes
              </h3>
              <p className="text-3xl font-bold mt-2">8</p>
            </div>

            {/* Campo 2: Horas complementares restantes */}
            <div className="flex flex-col items-center justify-center bg-transparent border border-purple-600 rounded-lg p-6 w-full md:w-1/2">
              <h3 className="text-lg font-semibold text-purple-400">
                Horas Complementares Restantes
              </h3>
              <p className="text-3xl font-bold mt-2">120h</p>
            </div>
          </div>
          
        </div>
        
      </div>

      <div className="flex justify-center items-center min-h-screen bg-[#0C0F14] text-white">
        {/* Botão de Logout */}
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white py-2 px-6 rounded-lg hover:bg-red-500"
        >
          Sair
        </button>
      </div>

    </div>

    
  );
}

export default PerfilPage;
