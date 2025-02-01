const express = require("express");
const { spawn } = require("child_process");

const app = express();
app.use(express.json());

app.post("/chat", async (req, res) => {
    const pergunta = req.body.pergunta;
    if (!pergunta) return res.status(400).json({ erro: "Pergunta não fornecida." });

    const processo = spawn("ollama", ["run", "mistral", pergunta]);

    let resposta = "";
    processo.stdout.on("data", (data) => (resposta += data.toString()));
    processo.stderr.on("data", (data) => console.error("Erro:", data.toString()));
    processo.on("close", () => res.json({ resposta }));
});

app.listen(3002, () => console.log("Servidor do chatbot rodando na porta 3002"));
