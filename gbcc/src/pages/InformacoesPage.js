import React from 'react';
import Header from '../components/Header';
import CursosGratuitos from '../components/InformacoesPage/CursosGratuitos';

function Informacoes() {
  return (
    <div className="min-h-screen bg-[#0C0F14] text-white"> {/* página inteira */}

      {/* Header */}
      <Header />
      
      {/* Título Principal */}
      <h2 className="font-jersey text-6xl text-center py-16 text-[#D70082]">
        INFORMAÇÕES
      </h2>

      {/* Texto Menor abaixo do Título */}
      <p className="text-xl text-center text-gray-300 px-8">
        Essa página divide em seções materiais extra-curriculares que
        podem e devem ser explorados pelos alunos, visando assim, complementar
        o conteúdo apresentado na graduação. 
      </p>

      {/* Espaço para o Componente */}
      <div className="mt-12">
        {<CursosGratuitos/>}
      </div>

    </div>
  );
}

export default Informacoes;
