import React, { useState } from 'react';
import { useRegistro } from './RegistroContext';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import axolotou from '../../assets/axolote_registro_1.png';


// Função para avaliar a força da senha
const checkPasswordStrength = (password) => {
  let strength = 0;
  
  // Mais de 8 caracteres
  if (password.length > 8) strength += 1;
  
  // Contém números
  if (/\d/.test(password)) strength += 1;
  
  // Contém caracteres especiais
  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength += 1;
  
  // Contém letras maiúsculas e minúsculas
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength += 1;
  
  // Força de 0 a 4
  return strength;
};

function RegistroPageEmail() {
  const { formData, updateFormData } = useRegistro();
  const [email, setEmail] = useState(formData.email);
  const [senha, setSenha] = useState(formData.senha);
  const [passwordStrength, setPasswordStrength] = useState(0); // Estado para a força da senha
  const navigate = useNavigate();

  // Função para atualizar a senha e verificar a força
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setSenha(newPassword);
    setPasswordStrength(checkPasswordStrength(newPassword)); // Atualiza a força da senha
  };

  const handleNextPage = () => {
    if (!email || !senha) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    
    updateFormData({
      ...formData,
      email,
      senha
    });

    navigate('/registro/disciplinas');
    // Redirecionar para a próxima página
  };

  // Função que retorna a descrição da força da senha
  const getPasswordStrengthDescription = () => {
    switch (passwordStrength) {
      case 0:
        return 'Muito Fraca';
      case 1:
        return 'Fraca';
      case 2:
        return 'Média';
      case 3:
        return 'Boa';
      case 4:
        return 'Muito Boa';
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen bg-[#0C0F14] text-white">
      <Header />
      <div className="flex justify-center items-center min-h-screen">
        
        <div className="bg-[#D70082] p-8 rounded-lg w-full max-w-sm text-center">
        <div className="flex justify-center mb-6">
            <img
              src={axolotou}
              alt="Imagem do usuário"
              className="w-32 h-32 rounded-full object-cover"
            />
          </div>
          <h2 className="text-white text-2xl mb-4">Qual é o seu email?</h2>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="w-full p-3 mb-4 rounded-lg text-black border-none focus:outline-none"
            placeholder="Digite seu email"
          />
          <h2 className="text-white text-2xl mb-4">Escolha uma senha:</h2>
          <input 
            type="password" 
            value={senha} 
            onChange={handlePasswordChange} 
            className="w-full p-3 mb-4 rounded-lg text-black border-none focus:outline-none"
            placeholder="Digite sua senha"
          />
          <div className="mb-4">
            <p className="text-white text-sm">Força da senha: {getPasswordStrengthDescription()}</p>
          </div>
          <button 
            onClick={handleNextPage} 
            className="w-full p-3 rounded-lg bg-white text-[#D70082] hover:bg-gray-200 transition duration-200"
          >
            Próxima
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegistroPageEmail;
