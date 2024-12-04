import React, { useState, useEffect } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Função para verificar a largura da tela
  const checkMobileScreen = () => {
    if (window.innerWidth <= 1400) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // Detecta mudanças de tamanho da tela
  useEffect(() => {
    checkMobileScreen(); // Verifica inicialmente
    window.addEventListener('resize', checkMobileScreen); // Verifica ao redimensionar a tela

    // Remove o event listener quando o componente for desmontado
    return () => window.removeEventListener('resize', checkMobileScreen);
  }, []);

  // Função para alternar o estado do menu de hambúrguer
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#D70082] text-white">
      <div className="container mx-auto px-2 py-3 flex items-center justify-between">
        {/* Esquerda */}
        {!isMobile && (
          <nav className="font-jersey flex space-x-36">
            <a href="#calendario" className="text-3xl hover:underline">CALENDARIO</a>
            <a href="#disciplinas" className="text-3xl hover:underline">DISCIPLINAS</a>
          </nav>
        )}

        {/* Centro */}
        <div className="font-jersey flex flex-col items-center justify-center">
          {!isMobile && (
            <img
              src="axolote_header.png"
              alt="Logo"
              className="h-42 w-42 object-contain"
            />
          )}
          <p className="text-4xl text-white">BCC - UFSCar</p>
        </div>

        {/* Menu de Hamburguer (Aparece em telas pequenas) */}
        {isMobile && (
          <div>
            <button onClick={toggleMenu} className="text-white text-3xl">
              &#9776; {/* Ícone de menu de hambúrguer */}
            </button>
          </div>
        )}

        {/* Opções no Menu de Hamburguer (Aparece em telas pequenas quando o menu está aberto) */}
        {isMenuOpen && isMobile && (
          <div className="absolute top-0 left-0 w-full bg-[#D70082] text-white flex flex-col items-center space-y-4  py-6 z-50">
            <button onClick={toggleMenu} className="text-white text-3xl">
                  &#9776; {/* Ícone de menu de hambúrguer */}
              </button>
            <a href="#calendario" className="text-3xl hover:underline">CALENDARIO</a>
            <a href="#disciplinas" className="text-3xl hover:underline">DISCIPLINAS</a>
            <a href="#editais" className="text-3xl hover:underline">EDITAIS</a>
            <a href="#informacoes" className="text-3xl hover:underline">INFORMACOES</a>
            <a href="#duvidas" className="text-3xl hover:underline">DUVIDAS</a>
          </div>
        )}

        {/* Opções à Direita (Sempre visível em telas grandes) */}
        {!isMobile && (
          <nav className="font-jersey flex space-x-16">
            <a href="#editais" className="text-3xl hover:underline">EDITAIS</a>
            <a href="#informacoes" className="text-3xl hover:underline">INFORMACOES</a>
            <a href="#duvidas" className="text-3xl hover:underline">DUVIDAS</a>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
