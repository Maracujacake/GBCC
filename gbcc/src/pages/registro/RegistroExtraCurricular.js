import React, { useState } from "react";
import { useRegistro } from "./RegistroContext";
import { API_BASE_URL } from '../../config';
import Header from '../../components/Header';
import axolotou from '../../assets/axolote_registro_1.png';

const RegistroAtividades = () => {
  const { formData, updateFormData } = useRegistro();
  const [atividades, setAtividades] = useState({
    iniciacao_cientifica: false,
    grupo_extensao: false,
    monitoria: false,
    outros: "",
  });

  console.log(formData.atividades_extracurriculares);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox") {
      setAtividades((prevAtividades) => ({
        ...prevAtividades,
        [name]: checked,
      }));
    } else if (type === "text") {
      setAtividades((prevAtividades) => ({
        ...prevAtividades,
        [name]: value,
      }));
    }
  };

  const handleNextPage = async () => {
    const atividadesSelecionadas = [];

    if (atividades.iniciacao_cientifica) atividadesSelecionadas.push("Iniciação Científica");
    if (atividades.grupo_extensao) atividadesSelecionadas.push("Grupo de Extensão");
    if (atividades.monitoria) atividadesSelecionadas.push("Monitoria");

    if (atividades.outros.trim() !== "") {
      atividadesSelecionadas.push(`Outros: ${atividades.outros}`);
    }

    updateFormData({ atividades_extracurriculares: atividadesSelecionadas });

    const alunoData = {
      email: formData.email,
      senha: formData.senha,
      nome: formData.nome,
      apelido: formData.apelido,
      disciplinas_feitas: formData.disciplinas_realizadas,
      atividades_extracurriculares: atividadesSelecionadas,
    };

    try {
      const response = await fetch(`${API_BASE_URL}/alunos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(alunoData),
      });

      const result = await response.json();

      if (response.ok) {
        console.log('Registro completo:', result);
      } else {
        console.error('Erro no registro:', result);
      }
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
    }
  };


  return (
    <div className="min-h-screen bg-[#0C0F14] text-white">
      <Header/>
        <div className="flex justify-center items-center min-h-screen">
            <div className="bg-[#D70082] p-8 rounded-lg w-full max-w-lg text-center">
                <div className="flex justify-center mb-6">
                    <img
                    src={axolotou}
                    alt="Imagem do usuário"
                    className="w-32 h-32 rounded-full object-cover"
                    />
                </div>
                <h2 className="text-white text-2xl mb-6">Quais atividades extra-curriculares você já fez?</h2>

                <div className="mb-6">
                <label className="block text-white text-lg mb-2">
                    <input
                    type="checkbox"
                    name="iniciacao_cientifica"
                    checked={atividades.iniciacao_cientifica}
                    onChange={handleChange}
                    className="mr-2"
                    />
                    Iniciação Científica
                </label>
                <label className="block text-white text-lg mb-2">
                    <input
                    type="checkbox"
                    name="grupo_extensao"
                    checked={atividades.grupo_extensao}
                    onChange={handleChange}
                    className="mr-2"
                    />
                    Grupo de Extensão
                </label>
                <label className="block text-white text-lg mb-2">
                    <input
                    type="checkbox"
                    name="monitoria"
                    checked={atividades.monitoria}
                    onChange={handleChange}
                    className="mr-2"
                    />
                    Monitoria
                </label>
                </div>

                <div className="mb-6">
                <label className="block text-white text-lg mb-2">
                    Outros (digite aqui):
                    <div className="flex items-center justify-center mt-2">
                    <input
                        type="text"
                        name="outros"
                        placeholder="Outros (digite aqui)"
                        value={atividades.outros}
                        onChange={handleChange}
                        className="w-full p-3 rounded-lg border-2 border-white text-black mr-2"
                    />
                    <button
                        onClick={() => {
                        if (atividades.outros.trim() !== "") {
                            setAtividades({
                            ...atividades,
                            outros: "",
                            });
                            setAtividades((prev) => ({
                            ...prev,
                            [atividades.outros]: atividades.outros,
                            }));
                        }
                        }}
                        className="p-3 rounded-lg bg-white text-[#D70082] hover:bg-gray-200"
                    >
                        Adicionar
                    </button>
                    </div>
                </label>
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
};

export default RegistroAtividades;
