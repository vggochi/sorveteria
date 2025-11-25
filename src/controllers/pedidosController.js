let pedidos = [
  { id: 1, clienteId: 1, produtoId: 2, quantidade: 2 },
  { id: 2, clienteId: 2, produtoId: 1, quantidade: 1 }
];

exports.listar = (req, res) => res.json(pedidos);

exports.buscarPorId = (req, res) => {
  const pedido = pedidos.find(p => p.id == req.params.id);
  pedido ? res.json(pedido) : res.status(404).send("Pedido não encontrado");
};

exports.criar = (req, res) => {
  const novoPedido = { id: pedidos.length + 1, ...req.body };
  pedidos.push(novoPedido);
  res.status(201).json(novoPedido);
};

exports.atualizar = (req, res) => {
  const index = pedidos.findIndex(p => p.id == req.params.id);
  if (index !== -1) {
    pedidos[index] = { id: Number(req.params.id), ...req.body };
    res.json(pedidos[index]);
  } else {
    res.status(404).send("Pedido não encontrado");
  }
};

exports.deletar = (req, res) => {
  pedidos = pedidos.filter(p => p.id != req.params.id);
  res.status(204).send();
};
