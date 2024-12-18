import React from 'react';

function Info() {
  return (
    <div className="w-full bg-[#0C0F14] p-8 rounded-md">
      {/* Título principal */}
      <h1 id="aulas-campus-section" className="text-[#D70082] font-jersey text-6xl mb-4 text-center">
        <a href="#aulas-campus-content" className="hover:underline"> INFO </a>
      </h1>

      {/* LOCALIZAÇÃO */}
      <div className="mb-6">
        <ul className="list-disc list-inside ml-4 text-4xl">
          <li className="py-5 font-jersey text-[#00B0D7]"> <a href="#tcc-estagio-content" className="hover:underline">TCC | ESTAGIO</a></li>

          <li className="py-5 font-jersey text-[#D70004]"> <a href="#extensao-content" className="hover:underline">EXTENSÃO</a></li>

          <li className="py-5 font-jersey text-[#19D700]"> <a href="#iniciacao-cientifica-content" className="hover:underline">I. CIENTIFICA</a></li>

          <li className="py-5 font-jersey text-[#C003FF]"> <a href="#pre-requisitos-content" className="hover:underline">PRE-REQUISITOS</a></li>

        </ul>
      </div>
    </div>
  );
}

export default Info;
