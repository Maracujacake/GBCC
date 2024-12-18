import React from 'react';

function Caronas() {
  return (
    <div className="w-full bg-[#0C0F14] text-white p-8 rounded-md">
      {/* Título principal */}
      <h1 id="aulas-campus-section" className="text-[#FF7403] font-jersey text-6xl mb-4">
        <a href="#sao-carlos-content" className="hover:underline">CARONAS:</a>
      </h1>

      {/* LOCALIZAÇÃO */}
      <div className="mb-6">

        <ul className="list-disc list-inside ml-4 text-3xl">
          <li className="py-5 font-jersey text-[#FF7403]">Como posso pegar caronas da e para a UFSCar?</li>

          <li className="py-5 font-jersey text-[#FF7403]">Dicas; como saber se é seguro?</li>
        </ul>
        
      </div>
    </div>
  );
}

export default Caronas;
