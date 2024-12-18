import React from 'react';
import Header from '../components/Header';
import axolotou from '../assets/axolote_locomocao.png';
import Onibus from '../components/LocomocaoPage/Onibus';
import OnibusContent from '../components/LocomocaoPage/OnibusContent';
import Caronas from '../components/LocomocaoPage/Caronas';
import CaronasContent from '../components/LocomocaoPage/CaronasContent';

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
          <Caronas/>
        </div>



        {/* Lado Direito, imagem */}
        <div className="flex-1 p-6 rounded-md">
          <Onibus/>
        </div>

      </div>

      {/* Aulas e campus centralizado*/}
      <div className="flex justify-center items-center px-8 py-16">
        <OnibusContent />
      </div>

      <div className="flex justify-center items-center px-8 py-16">
        <CaronasContent />
      </div>


    {/*fim pagina iiteira*/}
    </div> 
  );
}

export default LocomocaoDuvidas;
