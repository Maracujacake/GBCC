import React from 'react';
import Header from '../components/Header';
import DuvidasWelcome from '../components/DuvidasWelcome';
import DuvidasContribuicao from '../components/DuvidasContribuicao';
import TiposDuvidas from '../components/TiposDuvidas';

function Duvidas() {
  return (
    <div className="min-h-screen bg-[#0C0F14] text-white">
      {/* Header */}
      <Header />

      {/* Conteúdo Principal */}
      <div className="flex flex-row items-start px-8 py-16 space-x-8">
        {/* Lado Esquerdo: DuvidasWelcome */}
        <div className="flex-1">
            <DuvidasWelcome />
            <TiposDuvidas/>
        </div>

        {/* Lado Direito: Outro Componente */}
        <div className="flex-1 p-6 rounded-md">
          <DuvidasContribuicao/>
        </div>

      </div>
    </div>
  );
}

export default Duvidas;
