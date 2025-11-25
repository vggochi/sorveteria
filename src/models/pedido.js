// Estrutura de Pedido
class Pedido {
  constructor(id, clienteId, produtoId, quantidade, status = "Em andamento", dataPedido = new Date()) {
    this.id = id;
    this.clienteId = clienteId;   // FK para Cliente
    this.produtoId = produtoId;   // FK para Produto
    this.quantidade = quantidade;
    this.status = status;         // Em andamento, Concluído, Cancelado
    this.dataPedido = dataPedido;
  }
}

// Dados simulados
const pedidos = [
  new Pedido(1, 1, 2, 2, "Concluído"),   // Ana pediu 2 sorvetes de Morango
  new Pedido(2, 2, 1, 1, "Em andamento"), // Carlos pediu 1 Chocolate Belga
  new Pedido(3, 3, 5, 3, "Concluído"),   // Mariana pediu 3 Pistaches
];

module.exports = { Pedido, pedidos };
