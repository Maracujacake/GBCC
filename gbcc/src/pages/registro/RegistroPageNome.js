import React, { useState } from 'react';
import { useRegistro } from './RegistroContext';

function RegistroPageNome() {
  const { formData, setFormData } = useRegistro();  // Pega o estado do contexto
  const [nome, setNome] = useState(formData.nome);
  const [apelido, setApelido] = useState(formData.apelido);

  const handleNextPage = () => {
    setFormData({
      ...formData,
      nome,
      apelido
    });
  };

  return (
    <div>
      <h2>Qual é o seu nome?</h2>
      <input 
        type="text" 
        value={nome} 
        onChange={(e) => setNome(e.target.value)} 
      />
      <h2>Como você gostaria de ser chamado?</h2>
      <input 
        type="text" 
        value={apelido} 
        onChange={(e) => setApelido(e.target.value)} 
      />
      <button onClick={handleNextPage}>Próxima</button>
    </div>
  );
}

export default RegistroPageNome;
