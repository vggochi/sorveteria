// Estrutura de Produto (Cardápio)
class Produto {
  constructor(id, nome, categoria, tamanho, preco, disponibilidade = true) {
    this.id = id;
    this.nome = nome;
    this.categoria = categoria; // Tradicional, Premium, Vegano
    this.tamanho = tamanho;     // Pequeno, Médio, Grande
    this.preco = preco;
    this.disponibilidade = disponibilidade;
  }
}

// Dados simulados
const produtos = [
  new Produto(1, "Chocolate Belga", "Premium", "Médio", 15.90),
  new Produto(2, "Morango", "Tradicional", "Pequeno", 8.50),
  new Produto(3, "Baunilha", "Tradicional", "Grande", 12.00),
  new Produto(4, "Chocomenta", "Vegano", "Médio", 14.00),
  new Produto(5, "Pistache", "Premium", "Grande", 18.50),
];

module.exports = { Produto, produtos };
