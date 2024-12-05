import React from 'react';
import axolotou from '../assets/axolote_duvidas.png'; // Substitua pelo caminho correto da sua imagem

function DuvidasContribuicao() {
  return (
    <div className="w-full flex flex-col items-center  p-6 rounded-md text-white">
      {/* Título */}
      <h2 className="font-jersey text-4xl mb-6 text-center">ENTRE EM CONTATO</h2>

      {/* Imagem */}
      <img
        src={axolotou}
        alt="Contato"
        className="w-3/4 h-auto mb-6 object-contain"
      />

      {/* Texto */}
      <p className="text-left font-jersey text-3xl p-2 leading-relaxed">
        Caso tenha uma dúvida não presente aqui e que considera{' '}
        <span className="text-[#D70082] font-semibold">pertinente</span>, isto é, essa dúvida é significativa, recorrente e sua resposta traria benefícios para você e inúmeros colegas, por favor, envie para o seguinte contato:{' '}
        <br />
        <span className="text-[#D70082] font-semibold">
          emailficticio@ufscar.br
        </span>
      </p>
    </div>
  );
}

export default DuvidasContribuicao;
