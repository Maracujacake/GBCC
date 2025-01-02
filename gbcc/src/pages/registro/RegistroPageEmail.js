import React, { useState } from 'react';
import { useRegistro } from '../context/RegistroContext';

function RegistroPage2() {
  const { formData, setFormData } = useRegistro();
  const [email, setEmail] = useState(formData.email);
  const [senha, setSenha] = useState(formData.senha);

  const handleNextPage = () => {
    setFormData({
      ...formData,
      email,
      senha
    });
    // Redirecionar para a próxima página
  };

  return (
    <div>
      <h2>Qual é o seu email?</h2>
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <h2>Escolha uma senha:</h2>
      <input 
        type="password" 
        value={senha} 
        onChange={(e) => setSenha(e.target.value)} 
      />
      <button onClick={handleNextPage}>Próxima</button>
    </div>
  );
}

export default RegistroPage2;
