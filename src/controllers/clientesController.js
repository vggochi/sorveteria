let clientes = [
  { id: 1, nome: "Ana Souza", email: "ana@email.com" },
  { id: 2, nome: "Carlos Pereira", email: "carlos@email.com" }
];

exports.listar = (req, res) => res.json(clientes);

exports.buscarPorId = (req, res) => {
  const cliente = clientes.find(c => c.id == req.params.id);
  cliente ? res.json(cliente) : res.status(404).send("Cliente não encontrado");
};

exports.criar = (req, res) => {
  const novoCliente = { id: clientes.length + 1, ...req.body };
  clientes.push(novoCliente);
  res.status(201).json(novoCliente);
};

exports.atualizar = (req, res) => {
  const index = clientes.findIndex(c => c.id == req.params.id);
  if (index !== -1) {
    clientes[index] = { id: Number(req.params.id), ...req.body };
    res.json(clientes[index]);
  } else {
    res.status(404).send("Cliente não encontrado");
  }
};

exports.deletar = (req, res) => {
  clientes = clientes.filter(c => c.id != req.params.id);
  res.status(204).send();
};

const supabase = require('../config/supabase');

exports.listar = async (req, res) => {
  const { data, error } = await supabase
    .from('clientes')
    .select('*');

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
};

exports.criar = async (req, res) => {
  const { nome, email, telefone, endereco } = req.body;

  const { data, error } = await supabase
    .from('clientes')
    .insert([{ nome, email, telefone, endereco }]);

  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(data);
};
