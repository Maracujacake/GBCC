import React from 'react';
import { Link } from 'react-router-dom';

function SaoCarlos() {
  return (
    <div className="w-full bg-[#0C0F14] text-white p-8 rounded-md">
      {/* Título principal */}
      <h1 id="aulas-campus-section" className="text-[#FF7403] font-jersey text-6xl mb-4">
        <a href="#sao-carlos-content" className="hover:underline">SAO CARLOS:</a>
      </h1>

      {/* LOCALIZAÇÃO */}
      <div className="mb-6">

        <ul className="list-disc list-inside ml-4 text-3xl">
          <li className="py-5 font-jersey text-[#FF7403]">Quais localizações são ideais para morar?</li>

          <li className="py-5 font-jersey text-[#FF7403]">Aonde ir no tempo livre?</li>
        </ul>
        
      </div>
    </div>
  );
}

export default SaoCarlos;
