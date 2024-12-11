import React from 'react';
import Header from '../components/Header';
import axolotou from '../assets/axolote_locomocao.png';
import AulasCampus from '../components/AulasCampusPage/AulasCampus';
import SaoCarlos from '../components/AulasCampusPage/SaoCarlos';
import SaoPaulo from '../components/AulasCampusPage/SaoPaulo';
import AulasCampusContent from '../components/AulasCampusPage/AulasCampusContent';
import SaoCarlosContent from '../components/AulasCampusPage/SaoCarlosContent';
import SaoPauloContent from '../components/AulasCampusPage/SaoPauloContent';
import Onibus from '../components/LocomocaoPage/Onibus';

function LocomocaoDuvidas() {
  return (
    <div className="min-h-screen bg-[#0C0F14] text-white"> {/*pagina inteira*/}


      {/* Header */}
      <Header />
      <h2 className="font-jersey text-6xl text-white text-center py-16 text-[#FF0048]" > LOCOMOCAO </h2>

      {/* Conteúdo Principal */}
      <div className=" flex-wrap flex items-start px-8 py-16 space-x-8">

        {/* Lado Esquerdo, aulas e campus */}
        <div className="flex-1">
          <img 
            src={axolotou} 
            alt="Axolote pegando onibus" 
            className="w-3/4 h-auto mb-6 object-contain" 
            style={{ minWidth: 'clamp(18rem, 20%, 50%)' }}
          />
          <SaoCarlos/>
        </div>



        {/* Lado Direito, imagem */}
        <div className="flex-1 p-6 rounded-md">
          <Onibus/>
        </div>

      </div>

      {/* Aulas e campus centralizado*/}
      <div className="flex justify-center items-center px-8 py-16">
        <AulasCampusContent />
      </div>

      <div className="flex justify-center items-center px-8 py-16">
        <SaoCarlosContent />
      </div>


    {/*fim pagina iiteira*/}
    </div> 
  );
}

export default LocomocaoDuvidas;
