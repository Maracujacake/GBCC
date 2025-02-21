import React from 'react';
import Header from '../components/Header';
import axolotou from '../assets/axolote_localizacao.png';
import AulasCampus from '../components/AulasCampusPage/AulasCampus';
import SaoCarlos from '../components/AulasCampusPage/SaoCarlos';
import SaoPaulo from '../components/AulasCampusPage/SaoPaulo';
import AulasCampusContent from '../components/AulasCampusPage/AulasCampusContent';
import SaoCarlosContent from '../components/AulasCampusPage/SaoCarlosContent';
import SaoPauloContent from '../components/AulasCampusPage/SaoPauloContent';

function LocalizacaoDuvidas() {
  return (
    <div className="min-h-screen bg-[#0C0F14] text-white">
      {/* Header */}
      <Header />
      <h2 className="font-jersey text-6xl text-white text-center py-16 text-[#FF4500]">LOCALIZACAO</h2>

      {/* Conteúdo Principal */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start px-4 lg:px-8 py-8 lg:py-16 space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Lado Esquerdo, aulas e campus */}

        <div className="flex-1 flex justify-center lg:justify-start p-6 rounded-md">
          <img src={axolotou} alt="Contato" className="w-3/4 h-auto mb-6 object-contain" />
        </div>

        <div className="flex-1 flex justify-center lg:justify-start">
          <AulasCampus />
        </div>

        {/* Lado Direito, imagem */}

      </div>

      {/* Linha debaixo, sao carlos e sao paulo */}
      <div className="flex flex-col lg:flex-row items-start lg:items-start px-4 lg:px-8 py-8 space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Lado Esquerdo */}
        <div className="flex-1 flex justify-center lg:justify-start">
          <SaoCarlos />
        </div>

        {/* Lado Direito */}
        <div className="sm:p-0 flex-1 flex justify-start p-6 rounded-md">
          <SaoPaulo />
        </div>
      </div>

      {/* Aulas e campus centralizado */}
      <div className="flex justify-center items-center px-4 lg:px-8 py-8 lg:py-16">
        <AulasCampusContent />
      </div>

      <div className="flex justify-center items-center px-4 lg:px-8 py-8 lg:py-16">
        <SaoCarlosContent />
      </div>

      <div className="flex justify-center items-center px-4 lg:px-8 py-8 lg:py-16">
        <SaoPauloContent />
      </div>
    </div>
  );
}

export default LocalizacaoDuvidas;
