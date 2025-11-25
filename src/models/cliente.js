// Estrutura de Cliente
class Cliente {
  constructor(id, nome, email, telefone, endereco, dataCadastro = new Date()) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
    this.endereco = endereco;
    this.dataCadastro = dataCadastro;
  }
}

// Dados simulados
const clientes = [
  new Cliente(1, "Ana Souza", "ana@email.com", "11987654321", "Rua das Flores, 123"),
  new Cliente(2, "Carlos Pereira", "carlos@email.com", "11912345678", "Av. Brasil, 456"),
  new Cliente(3, "Mariana Lima", "mariana@email.com", "11998765432", "Rua das Palmeiras, 789"),
];

module.exports = { Cliente, clientes };
