import React from 'react';
import Header from '../components/Header';
import Evento from '../components/EditaisPage/Evento';

function EditaisPage() {
  return (
    <div className="min-h-screen bg-[#0C0F14] text-white">
        {/* Header */}
        <Header />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
          <Evento 
            titulo="Hackaton" 
            descricao="Hackaton da empresa tal, em formato home-office e com premiação no link: www.hackaton.com" 
            data="20/02/2025" 
          />
          <Evento 
            titulo="Palestra sobre React" 
            descricao="Palestra sobre React ministrada por Fulano de Tal, no auditório da empresa tal" 
            data="15/01/2025" 
          />
          <Evento 
            titulo="Reunião do Projeto" 
            descricao="Discussão sobre o progresso" 
            data="15/01/2025" 
          />
          <Evento 
            titulo="Reunião do Projeto" 
            descricao="Discussão sobre o progresso" 
            data="15/01/2025" 
          />
      </div>
     
    </div>
  );
}

export default EditaisPage;
