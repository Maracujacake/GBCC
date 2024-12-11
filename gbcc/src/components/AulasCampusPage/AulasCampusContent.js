import React from 'react';
import { Link } from 'react-router-dom';

function AulasCampusContent() {
    return (
        <div id="aulas-campus-content" className="text-center p-8">
          {/* Título */}
          <h1 className="text-[#D70082] font-jersey text-6xl mb-4">AULAS E CAMPUS</h1>


            <div className="py-12">
                <h2 className="text-[#D70082] font-jersey text-4xl text-left mb-4">Aonde terei as aulas?</h2>
                <p className="text-[#D70082] font-jersey text-left text-2xl mb-4 leading-relaxed indent-8">
                    Este é um exemplo de texto abaixo do título, levemente espaçado para a direita, 
                    imitando uma identação. Aqui você pode inserir informações adicionais ou explicações 
                    relevantes para o seu contexto.
                </p>
            </div>

            <div  className="py-12">
                <h2 className="text-[#D70082] font-jersey text-4xl text-left mb-4">Aonde posso almoçar ou lanchar?</h2>
                <p className="text-[#D70082] font-jersey text-left text-2xl mb-4 leading-relaxed indent-8">
                    Este é um exemplo de texto abaixo do título, levemente espaçado para a direita, 
                    imitando uma identação. Aqui você pode inserir informações adicionais ou explicações 
                    relevantes para o seu contexto.
                </p>
            </div>

            <div  className="py-12">
                <h2 className="text-[#D70082] font-jersey text-4xl text-left mb-4">Aonde pego ônibus?</h2>
                <p className="text-[#D70082] font-jersey text-left text-2xl mb-4 leading-relaxed indent-8">
                    Este é um exemplo de texto abaixo do título, levemente espaçado para a direita, 
                    imitando uma identação. Aqui você pode inserir informações adicionais ou explicações 
                    relevantes para o seu contexto.
                </p>
            </div>

        </div>
    );
}

export default AulasCampusContent;
