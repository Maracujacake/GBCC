import React, { createContext, useState, useContext } from 'react';

// Criando o contexto
const RegistroContext = createContext();

// Função para usar o contexto
export const useRegistro = () => {
  return useContext(RegistroContext);
};

// Provedor do contexto
export const RegistroProvider = ({ children }) => {
  // Estado compartilhado para o registro
  const [formData, setFormData] = useState({
    nome: "",
    apelido: "",
    email: "",
    senha: "",
    disciplinas_realizadas: [],
    atividades_extracurriculares: []
  });

  // Função para atualizar o estado do formulário
  const updateFormData = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
  };

  return (
    <RegistroContext.Provider value={{ formData, updateFormData }}>
      {children}
    </RegistroContext.Provider>
  );
};
