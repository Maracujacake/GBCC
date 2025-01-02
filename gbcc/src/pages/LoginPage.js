import React, { useState } from "react";
import api from "../api"; // Importa a instância do axios
import axolotou from "../assets/axolote_login.png";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await api.post("/alunos/login", {
        email,
        senha,
      });
      console.log(response.data); // Para debug
      navigate("/perfil"); // Redireciona para a página de perfil
    } catch (err) {
      setError(err.response?.data?.error || "Erro ao realizar login");
    }
  };

  return (
    <div className="min-h-screen bg-[#0C0F14] text-white">
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-[#0C0F14] text-white">
        <div className="bg-[#D70082] rounded-lg w-96 p-8 flex flex-col items-center shadow-lg">
          <div className="mb-6">
            <img
              src={axolotou} 
              alt="Logo"
              className="rounded-full w-24 h-24"
            />
          </div>

          <div className="w-full mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email:
            </label>
            <input
              type="email"
              id="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-100 text-gray-900"
            />
          </div>

          {error && <p className="text-black text-sm mb-4">{error}</p>}

          <div className="w-full mb-6 text-center text-sm text-gray-200">
            <a href="#" className="block mb-2 hover:underline">
              Esqueci meu email
            </a>
            <a href="#" className="block hover:underline">
              Esqueci minha senha
            </a>
          </div>

          <button
            onClick={handleLogin}
            className="bg-gray-900 text-white py-2 px-6 rounded-lg hover:bg-gray-800"
          >
            Acessar
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
