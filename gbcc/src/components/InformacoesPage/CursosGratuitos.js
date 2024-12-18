import React from 'react';
import DesenvolvimentoWebG from './Gratuito/DesenvolvimentoWebG';

function CursosGratuitos() {
  return (
    <div className=" rounded-md p-6 text-white w-full max-w-md">
        <h2 className="text-4xl p-6">Desenvolvimento Web</h2>
        <div className="flex flex-col items-start"> 
            <DesenvolvimentoWebG />
        </div>
    </div>
  );
}

export default CursosGratuitos;
