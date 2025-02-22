import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../config'; 

const PerfilPage = () => {
  const [userInfo, setUserInfo] = useState(null);  // Armazena as informações do aluno
  const navigate = useNavigate();

  useEffect(() => {
    // Função para buscar informações do aluno
    const fetchUserInfo = async () => {
      const user = JSON.parse(localStorage.getItem("user"));
      
      if (user) {
        try {
          const response = await fetch(`${API_BASE_URL}/alunos/informacoes`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: user.email,
              senha: user.senha,
            }),
          });
          console.log("Enviando dados:", {
            email: user.email,
            senha: user.senha,
          });

          // Verificando a resposta da API
          console.log('Resposta da API:', response);

          const data = await response.json();
          
          if (response.ok) {
            setUserInfo(data);  // Armazena as informações no estado
          } else {
            console.error('Erro na resposta da API:', data);
            navigate("/login");  // Redireciona para login em caso de erro
          }
        } catch (err) {
          console.error('Erro ao fazer a requisição:', err);
          navigate("/login");  // Redireciona para login em caso de erro
        }
      } else {
        navigate("/login");
      }
    };

    fetchUserInfo();
  }, [navigate]);

  const handleLogout = () => {
    // Limpa os dados do usuário no localStorage
    localStorage.removeItem("user");

    // Redireciona para a página de login
    navigate("/login");
  };

  if (!userInfo) {
    return <div>Carregando...</div>;  // Exibe uma mensagem enquanto carrega os dados
  }

  // Dentro do componente PerfilPage, logo após verificar que userInfo está disponível:
const totalDisciplinas = userInfo.disciplinas.length;
const disciplinasFeitas = userInfo.disciplinas.filter(
  (disciplina) =>
    disciplina.AlunoDisciplina &&
    disciplina.AlunoDisciplina.status === 1
).length;
const disciplinasRestantes = totalDisciplinas - disciplinasFeitas;

  return (
    <div className="min-h-screen bg-[#0C0F14] text-white">
      {/* Header */}
      <Header />

      <div className="container mx-auto px-4 mt-4 flex flex-col md:flex-row justify-between items-start">
        {/* Seção do Usuário */}
        <div className="flex flex-col items-center w-full md:w-1/3">
          {/* Imagem arredondada */}
          <img
            src="https://via.placeholder.com/150"
            alt="Foto do usuário"
            className="w-32 h-32 rounded-full border-4 border-purple-600"
          />
          {/* Nome do usuário */}
          <h2 className="mt-4 text-2xl font-semibold">{userInfo.nome}</h2>
          {/* Informações adicionais */}
          <p className="mt-2 text-gray-400">RA: 12345678</p>
          <p className="text-gray-400">Ano de ingresso: 2022</p>
        </div>


        {/* Seção de Informações */}
        <div className="flex flex-col w-full md:w-2/3 mt-8 md:mt-0 md:pl-8">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            {/* Campo 1: Disciplinas restantes */}
            <div className="flex flex-col items-center justify-center bg-transparent border border-purple-600 rounded-lg p-6 w-full md:w-1/2">
              <h3 className="text-lg font-semibold text-purple-400">
                Disciplinas do curso
              </h3>
              <p className="text-3xl font-bold mt-2">{userInfo.disciplinas.length}</p>
            </div>

            {/* Campo 2: Horas complementares restantes */}
            <div className="flex flex-col items-center justify-center bg-transparent border border-purple-600 rounded-lg p-6 w-full md:w-1/2">
              <h3 className="text-lg font-semibold text-purple-400">
                Creditos restantes
              </h3>
              <p className="text-3xl font-bold mt-2">{userInfo.creditos_restantes}</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-4 mt-2">
            {/* Campo 1: Disciplinas restantes */}
            <div className="flex flex-col items-center justify-center bg-transparent border border-purple-600 rounded-lg p-6 w-full md:w-1/2">
              <h3 className="text-lg font-semibold text-purple-400">
                Disciplinas Restantes
              </h3>
              <p className="text-3xl font-bold mt-2">{disciplinasRestantes}</p>
            </div>

          </div>
      
        </div>

        
      </div>


      <div className="flex justify-center items-center gap-4 min-h-screen bg-[#0C0F14] text-white">
        {/* Botão para o roadmap */}
        <button
          onClick={() => navigate("/roadmap")}
          className="bg-purple-600 text-white py-2 px-6 rounded-lg hover:bg-purple-500 transition duration-300"
        >
          Ver Roadmap
        </button>

        {/* Botão de Logout */}
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white py-2 px-6 rounded-lg hover:bg-red-500 transition duration-300"
        >
          Sair
        </button>
      </div>
    </div>
  );
}

export default PerfilPage;
