import React from 'react';
import { Link } from 'react-router-dom';

function Onibus() {
  return (
    <div className="w-full bg-[#0C0F14] text-white p-8 rounded-md">
      {/* Título principal */}
      <h1 id="aulas-campus-section" className="text-[#D70082] font-jersey text-6xl mb-4">
        <a href="#aulas-campus-content" className="hover:underline">ÔNIBUS:</a>
      </h1>

      {/* LOCALIZAÇÃO */}
      <div className="mb-6">
        <ul className="list-disc list-inside ml-4 text-3xl">
          <li className="py-5 font-jersey text-[#D70082]">Aonde terei as aulas?</li>

          <li className="py-5 font-jersey text-[#D70082]">Aonde posso almoçar ou lanchar?</li>

          <li className="py-5 font-jersey text-[#D70082]">Aonde pego o ônibus?</li>

          <li className="py-5 font-jersey text-[#D70082]">Aonde posso ficar no período entre as aulas?</li>

        </ul>
      </div>
    </div>
  );
}

export default Onibus;
