import React from 'react';
import Header from '../components/Header';
import calendarioPDF from '../assets/calendario_graduacao.pdf'; 

function CalendarioPage() {
  return (
    <div className="min-h-screen bg-[#0C0F14] text-white">
      {/* Header */}
      <Header />

      {/* Título da Página */}
      <h2 className="font-jersey text-6xl text-white text-center py-16 text-[#FF0048]">
        CALENDÁRIO
      </h2>

      {/* Contêiner Principal */}
      <div className="flex flex-col items-center px-8 py-8">
        {/* Área do Calendário com Scroll Personalizado */}
        <div
          className="w-3/4 h-96 overflow-y-auto bg-[#1A1A1A] rounded-md p-4"
          style={{
            scrollbarWidth: 'thin', // para navegadores compatíveis
            scrollbarColor: '#FF0048 transparent',
          }}
        >
          <iframe
            src={calendarioPDF}
            title="Calendário"
            className="w-full h-full"
          />
        </div>

        {/* Botão de Download */}
        <a
          href={calendarioPDF}
          download
          className="mt-8 bg-[#FF0048] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#e00042] transition-all"
        >
          Baixar Calendário
        </a>
      </div>
    </div>
  );
}

export default CalendarioPage;
