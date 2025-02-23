// api_livraria/routes/livros.routes.js

module.exports = (app) => {
    const livros = require("../controllers/LivroController.js");
  
    // Rotas para CRUD dos livros
    app.post("/livros", livros.criar);
    app.get("/livros", livros.listar);
    app.get("/livros/:id", livros.buscar);
    app.put("/livros/:id", livros.atualizar);
    app.delete("/livros/:id", livros.deletar);
  };
  