import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import api from "../api";
import axolotou from "../assets/axolote_login.png";
import Header from "../components/Header";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Verificar se o usuário já está logado
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/perfil"); // Redireciona para /perfil se já estiver logado
    }
  }, [navigate]);

  const handleLogin = async () => {
    try {
      const response = await api.post("/alunos/login", {
        email,
        senha,
      });

      // Armazenar os dados no localStorage
      localStorage.setItem("user", JSON.stringify(response.data));

      // Redirecionar para a página de perfil
      navigate("/perfil");
    } catch (err) {
      setError(err.response?.data?.error || "Erro ao realizar login");
    }
  };

  return (
    <div className="min-h-screen bg-[#0C0F14] text-white">
      <Header />
      <div className="flex justify-end px-8 mt-4">
        <Link to="/registro" className="bg-[#D70082] text-white py-8 px-16 rounded-lg hover:bg-[#b6006c]">
          Registrar
        </Link>
      </div>
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

          {error && <p className="text-black bg-red-100 text-sm mb-4 p-2 rounded">{error}</p>}

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
