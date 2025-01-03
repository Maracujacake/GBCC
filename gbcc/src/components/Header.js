import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


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
            <Link to="/calendario" className="text-3xl hover:underline">CALENDARIO</Link>
            <Link to="/login" className="text-3xl hover:underline">PERFIL</Link>
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
          <Link to="/" className="text-4xl text-white">BCC - UFSCar</Link>
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
            <Link to="/calendario" className="text-3xl hover:underline">CALENDARIO</Link>
            <Link to="/login" className="text-3xl hover:underline">PERFIL</Link>
            <Link to="/editais" className="text-3xl hover:underline">EDITAIS</Link>
            <Link to="/informacoes" className="text-3xl hover:underline">INFORMACOES</Link>
            <Link to="/duvidas" className="text-3xl hover:underline">DÚVIDAS</Link>
            </div>
        )}

        {/* Opções à Direita (Sempre visível em telas grandes) */}
        {!isMobile && (
          <nav className="font-jersey flex space-x-16">
            <Link to="/editais" className="text-3xl hover:underline">EDITAIS</Link>
            <Link to="/informacoes" className="text-3xl hover:underline">INFORMACOES</Link>
            <Link to="/duvidas" className="text-3xl hover:underline">DÚVIDAS</Link>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
