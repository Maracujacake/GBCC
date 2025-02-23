// api_livraria/controllers/livros.controller.js

const db = require("../models");
const Livro = db.Livros;

exports.criar = (req, res) => {
  const livro = {
    titulo: req.body.titulo,
    autor: req.body.autor,
    ano_publicacao: req.body.ano_publicacao,
    quantidade: req.body.quantidade,
  };

  Livro.create(livro)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Ocorreu um erro ao tentar criar o livro.",
      });
    });
};

exports.listar = (req, res) => {
  Livro.findAll()
    .then((livros) => {
      res.send(livros);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Erro ao buscar os livros.",
      });
    });
};

exports.buscar = (req, res) => {
  const id = req.params.id;

  Livro.findByPk(id)
    .then((livro) => {
      if (!livro) {
        res.status(404).send({
          message: `Livro com id=${id} não encontrado.`,
        });
        return;
      }
      res.send(livro);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Erro ao buscar o livro com id=" + id,
      });
    });
};

exports.atualizar = (req, res) => {
  const id = req.params.id;

  Livro.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Livro atualizado com sucesso.",
        });
      } else {
        res.send({
          message: `Não foi possível atualizar o livro com id=${id}. Talvez o livro não tenha sido encontrado ou a requisição tenha falhado.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Erro ao atualizar o livro com id=" + id,
      });
    });
};

exports.deletar = (req, res) => {
  const id = req.params.id;

  Livro.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Livro deletado com sucesso!",
        });
      } else {
        res.send({
          message: `Não foi possível deletar o livro com id=${id}. Talvez o livro não tenha sido encontrado.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Erro ao tentar deletar o livro com id=" + id,
      });
    });
};
