import React from 'react';
import Header from '../components/Header';
import SocialIcons from '../components/SocialIcon';
import Welcome from '../components/Welcome';
import Carrousel from '../components/Carrousel';

function Home() {
  return (
    <div className="Home bg-[#0C0F14] min-h-screen text-white">
      <Header />
      <SocialIcons />
      <div className="flex items-start px-8 space-x-2 mt-8">
        {/* Texto de introdução na esquerda */}
        <Welcome />
        
        {/* Espaço para o futuro componente à direita */}
        <div className="w-full h-full flex items-center justify-center space-x-8 p-4 rounded-lg">
            <Carrousel />
        </div>

      </div>
    </div>
  );
}

export default Home;
