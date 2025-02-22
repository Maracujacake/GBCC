// server.js
const express = require("express");
const { execFile } = require("child_process");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/chat", async (req, res) => {
    const pergunta = req.body.pergunta;
    console.log(`Pergunta recebida: ${pergunta}`);

    if(!pergunta) {
        return res.status(400).json({ erro: "Pergunta não informada." });
    }

    // não está rodando na minha maquina por falta de poder computacional, mas deve executar com sucesso
    // em maquinas com mais de 12gb ram
    try {
        const resposta = await executarProcesso("gemma2:latest", pergunta);
        console.log(`Resposta recebida: ${resposta}`);
        res.json({ resposta });
    } catch (erro) {
        console.error(`Erro ao executar o processo: ${erro}`);
        res.status(500).json({ erro: "Erro interno ao processar a pergunta." });
    }
});

function executarProcesso(modelo, pergunta) {
    return new Promise((resolve, reject) => {
        console.log(`Executando comando: ollama run ${modelo} "${pergunta}"`);

        execFile("ollama", ["run", modelo, pergunta], { timeout: 30000 }, (erro, stdout, stderr) => {
            if (erro) {
                console.error(`Erro: ${erro.message}`);
                return reject(`Erro: ${erro.message}`);
            }
            if (stderr) {
                console.error(`stderr: ${stderr}`);
                return reject(`stderr: ${stderr}`);
            }
            resolve(stdout.trim());
        });
    });
}

app.listen(3002, () => console.log("Servidor do chatbot rodando na porta 3002"));