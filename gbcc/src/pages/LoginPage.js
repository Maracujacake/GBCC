import React from "react";
import axolotou from "../assets/axolote_login.png";
import Header from "../components/Header";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-[#0C0F14] text-white">
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-[#0C0F14] text-white">
        <div className="bg-[#D70082] rounded-lg w-96 p-8 flex flex-col items-center shadow-lg">
          {/* Imagem */}
          <div className="mb-6">
            <img
              src={axolotou} // Substitua pelo caminho da imagem desejada
              alt="Logo"
              className="rounded-full w-24 h-24"
            />
          </div>

          {/* Campos de Email e Senha */}
          <div className="w-full mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email:
            </label>
            <input
              type="email"
              id="email"
              placeholder="Digite seu email"
              className="w-full p-3 rounded-lg bg-gray-100 text-gray-900"
            />
          </div>
          <div className="w-full mb-4">
            <label htmlFor="senha" className="block mb-2 text-sm font-medium">
              Senha:
            </label>
            <input
              type="password"
              id="senha"
              placeholder="Digite sua senha"
              className="w-full p-3 rounded-lg bg-gray-100 text-gray-900"
            />
          </div>

          {/* Links de recuperação */}
          <div className="w-full mb-6 text-center text-sm text-gray-200">
            <a href="#" className="block mb-2 hover:underline">
              Esqueci meu email
            </a>
            <a href="#" className="block hover:underline">
              Esqueci minha senha
            </a>
          </div>

          {/* Botão de Acessar */}
          <button className="bg-gray-900 text-white py-2 px-6 rounded-lg hover:bg-gray-800">
            Acessar
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
