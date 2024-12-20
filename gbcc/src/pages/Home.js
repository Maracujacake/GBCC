import React from 'react';
import Header from '../components/Header';
import SocialIcons from '../components/SocialIcon';
import Welcome from '../components/Welcome';
import Carrousel from '../components/Carrousel';

function Home() {
  return (
    <div className="Home bg-[#0C0F14] min-h-screen text-white flex flex-col">
      {/* Header */}
      <Header />
      
      {/* Ícones Sociais */}
      <SocialIcons />
      
      {/* Conteúdo Principal */}
      <div className="flex flex-col md:flex-row items-start px-8 space-y-6 md:space-x-6 md:space-y-0 mt-8">
        
        {/* Texto de introdução na esquerda */}
        <div className="flex-1">
          <Welcome />
        </div>

        {/* Componente à direita */}
        <div className="flex-1 w-full h-full flex items-center justify-center rounded-lg">
          <Carrousel />
        </div>
      </div>
    </div>
  );
}

export default Home;
