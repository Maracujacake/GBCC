import React, { useState } from "react";

const Chatbot = () => {
  const [pergunta, setPergunta] = useState("");
  const [resposta, setResposta] = useState("");
  const [carregando, setCarregando] = useState(false);

  const enviarPergunta = async () => {
    if (!pergunta.trim()) return;

    setCarregando(true);
    setResposta(""); // Limpa a resposta anterior

    try {
      const resposta = await fetch("http://localhost:3002/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pergunta }),
      });

      const data = await resposta.json();
      setResposta(data.resposta);
    } catch (erro) {
      console.error("Erro ao enviar pergunta:", erro);
      setResposta("Erro ao obter resposta do chatbot.");
    }

    setCarregando(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-4">Chatbot Inteligente 🤖</h1>

      <textarea
        className="w-full max-w-lg p-3 border border-gray-700 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
        rows="3"
        placeholder="Digite sua pergunta..."
        value={pergunta}
        onChange={(e) => setPergunta(e.target.value)}
      />

      <button
        onClick={enviarPergunta}
        disabled={carregando}
        className="mt-4 px-6 py-2 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition duration-200 disabled:bg-gray-500"
      >
        {carregando ? "Carregando..." : "Enviar"}
      </button>

      {resposta && (
        <div className="mt-6 w-full max-w-lg p-4 bg-gray-800 border border-gray-700 rounded-lg">
          <h2 className="text-lg font-semibold">Resposta do chatbot:</h2>
          <p className="mt-2 text-gray-300">{resposta}</p>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
