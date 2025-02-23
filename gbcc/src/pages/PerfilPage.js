import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../config'; 

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'; // Importando o Leaflet
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import markerShadowPng from 'leaflet/dist/images/marker-shadow.png';

// Marcador do mapa (imagem que aparece pra mostrar aonde vc ta)
const defaultIcon = new L.Icon({
  iconUrl: markerIconPng,
  shadowUrl: markerShadowPng,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const PerfilPage = () => {
  const [userInfo, setUserInfo] = useState(null);  // Armazena as informações do aluno
  const [location, setLocation] = useState(null); // Armazena a localização do aluno
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


  useEffect(() => {
    // Função para obter a localização do usuário
    const fetchLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setLocation({ latitude, longitude });
          },
          (error) => {
            console.error('Erro ao obter localização:', error);
            setLocation({ error: 'Não foi possível obter a localização.' });
          }
        );
      } else {
        console.error('Geolocalização não é suportada pelo navegador.');
        setLocation({ error: 'Geolocalização não é suportada pelo navegador.' });
      }
    };

    fetchLocation();
  }, []);


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


// Cálculo das disciplinas obrigatórias restantes
  const disciplinasObrigatoriasRestantes = userInfo.disciplinas.filter(
    (disciplina) =>
      disciplina.obrigatoria === true &&
      disciplina.AlunoDisciplina &&
      disciplina.AlunoDisciplina.status === 0
  ).length;


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
            {/* Campo 1: Disciplinas do curso */}
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
            {/* Campo 3: Disciplinas restantes */}
            <div className="flex flex-col items-center justify-center bg-transparent border border-purple-600 rounded-lg p-6 w-full md:w-1/2">
              <h3 className="text-lg font-semibold text-purple-400">
                Disciplinas Restantes
              </h3>
              <p className="text-3xl font-bold mt-2">{disciplinasRestantes}</p>
            </div>

            {/* Campo 4: Disciplinas obrigatórias restantes */}
            <div className="flex flex-col items-center justify-center bg-transparent border border-purple-600 rounded-lg p-6 w-full md:w-1/2">
              <h3 className="text-lg font-semibold text-purple-400">
                Disciplinas Obrigatórias Restantes
              </h3>
              <p className="text-3xl font-bold mt-2">{disciplinasObrigatoriasRestantes}</p>
            </div>

          </div>
      
        </div>

        
      </div>


        <div className="flex flex-col justify-center items-center gap-4">
        
          {location ? (
            location.error ? (
              <div className="bg-red-600 text-white py-2 px-6 rounded-lg">
                {location.error}
              </div>
            ) : (
              <div className="w-full max-w-md h-64 mt-6 py-6">
                <h3 className="text-lg font-semibold text-purple-400">📍 Sua localização atual</h3>
                <MapContainer center={[location.latitude, location.longitude]} zoom={15} className="w-full h-full rounded-lg">
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  <Marker position={[location.latitude, location.longitude]} icon={defaultIcon}>
                    <Popup>Você está aqui!</Popup>
                  </Marker>
                </MapContainer>
              </div>
            )
          ) : (
            <div>Obtendo localização...</div>
          )}


        <button onClick={() => navigate("/roadmap")} className="bg-purple-600 text-white py-2 px-6 rounded-lg">
          Ver Roadmap
        </button>

        <button onClick={handleLogout} className="bg-red-600 text-white py-2 px-6 rounded-lg">
          Sair
        </button>
      </div>
    </div>
  );
}

export default PerfilPage;
