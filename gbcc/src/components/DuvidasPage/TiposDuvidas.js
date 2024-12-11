import React from 'react';
import { Link } from 'react-router-dom';

function TiposDuvidas() {
  return (
    <div className="w-full bg-[#0C0F14] text-white p-8 rounded-md">
      {/* Título principal */}
      <h1 className="text-[#D70082] font-jersey text-4xl mb-4">INFORMAÇÕES GERAIS</h1>
      
      {/* Texto explicativo */}
      <p className="font-jersey text-2xl leading-relaxed mb-8">
        Aqui você encontrará informações relevantes sobre a estrutura do curso, localizações, 
        locomoção e os principais tópicos relacionados ao Bacharelado em Ciência da Computação na UFSCar.
      </p>

      {/* LOCALIZAÇÃO */}
      <div className="mb-6">
      <Link to="/localizacao" className="text-2xl font-bold text-[#D70082] hover:underline"> LOCALIZAÇÃO </Link>
        <ul className="list-disc list-inside ml-4 text-2xl">
          <li>AULAS e CAMPUS</li>
          <li>SÃO CARLOS</li>
          <li>SÃO PAULO (estado)</li>
        </ul>
      </div>

      {/* LOCOMOÇÃO */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-[#1DB954]">LOCOMOÇÃO</h2>
        <ul className="list-disc list-inside ml-4 text-2xl">
          <li>ÔNIBUS</li>
          <li>CARONAS</li>
        </ul>
      </div>

      {/* DISCIPLINAS */}
      <div>
        <h2 className="text-2xl font-bold text-[#FF4500]">DISCIPLINAS</h2>
        <ul className="list-disc list-inside ml-4 text-2xl">
          <li>ROADMAP</li>
          <li>HORAS COMPLEMENTARES</li>
          <li>TCC || ESTÁGIO</li>
          <li>EXTENSÃO</li>
          <li>INICIAÇÃO CIENTÍFICA</li>
          <li>PRE-REQUISITOS</li>
        </ul>
      </div>
    </div>
  );
}

export default TiposDuvidas;
