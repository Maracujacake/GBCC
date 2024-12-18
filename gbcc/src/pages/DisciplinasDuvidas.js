import React from 'react';
import Header from '../components/Header';
import axolotou from '../assets/axolote_disciplinas.png';
import Info from '../components/DisciplinasPage/Info';
import TccEstagioContent from '../components/DisciplinasPage/TccEstagioContent';
import ExtensaoContent from '../components/DisciplinasPage/ExtensaoContent';
import IniciacaoCientificaContent from '../components/DisciplinasPage/IniciacaoCientificaContent';
import PreRequisitosContent from '../components/DisciplinasPage/PreRequisitosContent';

function LocomocaoDuvidas() {
  return (
    <div className="min-h-screen bg-[#0C0F14] text-white"> {/*pagina inteira*/}


      {/* Header */}
      <Header />
      <h2 className="font-jersey text-6xl text-center py-16 text-[#6F00FF]" > DISCIPLINAS </h2>

      {/* Conteúdo Principal */}
      <div className=" flex-wrap flex items-start px-8 py-16 space-x-8">

        {/* Lado Esquerdo, aulas e campus */}
        <div className="flex-1">
          <h2 className="text-5xl font-bold mb-4 text-[#D70082]"> ROADMAP </h2>
          <img 
            src={axolotou} 
            alt="Axolote pegando onibus" 
            className="w-3/4 h-auto mb-6 object-contain" 
            style={{ minWidth: 'clamp(18rem, 20%, 50%)' }}
          />
        </div>



        {/* Lado Direito, imagem */}
        <div className="flex-1 p-6 rounded-md">
          <Info/>
        </div>

      </div>

      {/* Aulas e campus centralizado*/}
      <div className="flex justify-center items-center px-8 py-16">
        <TccEstagioContent />
      </div>

      <div className="flex justify-center items-center px-8 py-16">
        <ExtensaoContent />
      </div>

      <div className="flex justify-center items-center px-8 py-16">
        <IniciacaoCientificaContent />
      </div>

      <div className="flex justify-center items-center px-8 py-16">
        <PreRequisitosContent />
      </div>

    {/*fim pagina iiteira*/}
    </div> 
  );
}

export default LocomocaoDuvidas;
