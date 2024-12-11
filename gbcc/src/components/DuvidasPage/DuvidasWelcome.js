import React from 'react';

function DuvidasWelcome() {
  return (
<div className="w-full flex flex-col items-start px-4 py-6 mt-16 bg-[#0C0F14] text-white">
  {/* Título */}
  <h1 className="font-jersey text-6xl mb-4 text-[#D70082]">DUVIDAS</h1>

  {/* Texto explicativo */}
  <p className="text-left font-jersey px-8 text-4xl leading-relaxed">
    Aqui você encontra todas as informações importantes referentes ao curso de{' '}
    <span className="text-[#D70082]">ciência da computação</span> da UFSCar.
  </p>
</div>
  );
}

export default DuvidasWelcome;
