import React from 'react';
import { Link } from 'react-router-dom';

function SaoPaulo() {
  return (
    <div className="w-full bg-[#0C0F14] text-white p-8 rounded-md">
      {/* Título principal */}
      <h1 id="aulas-campus-section" className="text-[#6F00FF] font-jersey text-6xl mb-4">
        <a href="#sao-paulo-content" className="hover:underline">SAO PAULO:</a>
      </h1>

      {/* LOCALIZAÇÃO */}
      <div className="mb-6">

        <ul className="list-disc list-inside ml-4 text-3xl">
          <li className="py-5 font-jersey text-[#6F00FF]">Evento</li>

          <li className="py-5 font-jersey text-[#6F00FF]">Oportunidades</li>

          <li className="py-5 font-jersey text-[#6F00FF]">Viagens</li>
        </ul>
        
      </div>
    </div>
  );
}

export default SaoPaulo;
