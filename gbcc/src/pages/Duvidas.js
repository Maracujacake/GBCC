import React from 'react';
import Header from '../components/Header';
import DuvidasWelcome from '../components/DuvidasPage/DuvidasWelcome';
import DuvidasContribuicao from '../components/DuvidasPage/DuvidasContribuicao';
import TiposDuvidas from '../components/DuvidasPage/TiposDuvidas';

function Duvidas() {
  return (
    <div className="min-h-screen bg-[#0C0F14] text-white">
      {/* Header */}
      <Header />

      {/* Conteúdo Principal */}
      <div className="flex flex-col lg:flex-row items-start px-4 md:px-8 py-8 md:py-16 space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Lado Esquerdo: DuvidasWelcome + TiposDuvidas */}
        <div className="flex-1 space-y-8">
          <DuvidasWelcome />
          <TiposDuvidas />
        </div>

        {/* Lado Direito: DuvidasContribuicao */}
        <div className="flex-1 p-6 rounded-md ">
          <DuvidasContribuicao />
        </div>
      </div>
    </div>
  );
}

export default Duvidas;
