let produtos = [
  { id: 1, nome: "Chocolate Belga", preco: 15.90 },
  { id: 2, nome: "Morango", preco: 8.50 }
];

exports.listar = (req, res) => res.json(produtos);

exports.buscarPorId = (req, res) => {
  const produto = produtos.find(p => p.id == req.params.id);
  produto ? res.json(produto) : res.status(404).send("Produto não encontrado");
};

exports.criar = (req, res) => {
  const novoProduto = { id: produtos.length + 1, ...req.body };
  produtos.push(novoProduto);
  res.status(201).json(novoProduto);
};

exports.atualizar = (req, res) => {
  const index = produtos.findIndex(p => p.id == req.params.id);
  if (index !== -1) {
    produtos[index] = { id: Number(req.params.id), ...req.body };
    res.json(produtos[index]);
  } else {
    res.status(404).send("Produto não encontrado");
  }
};

exports.deletar = (req, res) => {
  produtos = produtos.filter(p => p.id != req.params.id);
  res.status(204).send();
};

const { produtos } = require('../models/produto');

exports.listar = (req, res) => res.json(produtos);
