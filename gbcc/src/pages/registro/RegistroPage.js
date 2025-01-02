import React from "react";
import { Link } from "react-router-dom";
import axolotou from "../../assets/axolote_registro_1.png";
import Header from "../../components/Header";
import { useState } from "react";

function RegistroPage() {

    const [showFullText, setShowFullText] = useState(false);

    // Texto para ser exibido
    const fullText = `As informações salvas no sistema não serão usadas sem o seu consentimento e não
    serão persistidas caso apague sua conta. Gostaríamos de garantir que aqui é um 
    espaço seguro onde você pode ter confiança que seus dados estarão protegidos e 
    não há motivos para ter receio de inserir as informações requeridas, sendo estas 
    apenas necessárias para melhorar a sua experiência com o sistema.`;
  
    // Truncando o texto
    const truncatedText = fullText.substring(0, 150) + "..."; // Trunca o texto após 150 caracteres
  
  return (
    <div className="min-h-screen bg-[#0C0F14] text-white">
      {/* Componente de Header */}
      <Header />

      {/* Conteúdo principal da página */}
      <div className="min-h-screen flex justify-center bg-[#0C0F14] text-white mt-12">
        <div className="bg-[#D70082] rounded-lg w-96 p-24 flex flex-col items-center shadow-lg">
          {/* Imagem no topo */}
          <div className="mb-12">
            <img
              src={axolotou} // Caminho da imagem
              alt="Logo"
              className="rounded-full w-50 h-50" // Tamanho e bordas arredondadas
            />
          </div>

          {/* Texto do título centralizado */}
          <h1 className="text-6xl font-bold text-center py-4">
            REGISTRO
          </h1>

          {/* Texto do parágrafo centralizado */}
          <p className="text-left w-full text-lg leading-relaxed">
            {showFullText ? fullText : truncatedText}
          </p>
          
          <button
            onClick={() => setShowFullText(!showFullText)} // Alterna entre o texto completo e truncado
            className="mt-4 text-[#0C0F14] hover:underline"
          >
            {showFullText ? "Leia menos" : "Leia mais..."}
          </button>

          {/* Botão "Vamos lá" com link */}
          <Link
            to="/registro/nome" // Caminho de destino
            className="bg-white text-gray-900 mt-12 py-10 px-12 rounded-3xl hover:bg-gray-800 hover:text-white"
          >
            Vamos lá
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RegistroPage;
