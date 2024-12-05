import React, { useState } from 'react';

// Lista de imagens para o carrossel (substitua com suas próprias imagens)
const carouselImages = [
  'https://www.designi.com.br/images/preview/11059133.jpg',
  'https://via.placeholder.com/600x300/33FF57/FFFFFF?text=Imagem+2',
  'https://via.placeholder.com/600x300/3357FF/FFFFFF?text=Imagem+3'
];

function Carrousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Função para mudar a imagem
  const changeImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="bg-[#0C0F14] text-white py-10 px-28">
      {/* Título */}
      <h1 className="font-jersey text-5xl text-center mb-6">NOTÍCIAS</h1>

      {/* Carrossel de Imagens */}
      <div className="relative w-full	">
        <img
          src={carouselImages[currentIndex]}
          alt={`Imagem ${currentIndex + 1}`}
          className="w-full h-72 object-cover rounded-lg"
        />

        {/* Bolinhas de Navegação */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => changeImage(index)}
              className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-[#D70082]' : 'bg-[#D7008280]'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carrousel;
