import React from 'react';
import Header from '../components/Header';
import axolotou from '../assets/axolote_localizacao.png';
import AulasCampus from '../components/AulasCampus';

function LocalizacaoDuvidas() {
  return (
    <div className="min-h-screen bg-[#0C0F14] text-white">
      {/* Header */}
      <Header />
      <h2 className="font-jersey text-6xl text-white text-center py-16 text-[#FF4500]" > LOCALIZACAO </h2>

      {/* Conteúdo Principal */}
      <div className="flex flex-row items-start px-8 py-16 space-x-8">
        {/* Lado Esquerdo: DuvidasWelcome */}
        <div className="flex-1">
            <AulasCampus/>
        </div>

        {/* Lado Direito: Outro Componente */}
        <div className="flex-1 p-6 rounded-md">
        <img
        src={axolotou}
        alt="Contato"
        className="w-3/4 h-auto mb-6 object-contain"
      />
        </div>

      </div>
    </div>
  );
}

export default LocalizacaoDuvidas;
