import React from "react";

const Evento = ({ titulo, descricao, data }) => {
  return (
    <div className="w-60 h-60 border-4 border-[#D70082] p-4 flex flex-col justify-between text-white">
      {/* Título centralizado */}
      <h1 className="text-2xl font-bold text-center">{titulo}</h1>
      
      {/* Descrição truncada */}
      <div className="overflow-hidden text-ellipsis line-clamp-2">
        <p className="text-lg">
          <span className="text-[#D70082] font-semibold">Descrição:</span> {descricao}
        </p>
      </div>
      
      {/* Data */}
      <div>
        <p className="text-lg">
          <span className="text-[#D70082] font-semibold">Data:</span> {data}
        </p>
      </div>
    </div>
  );
};

export default Evento;
