/*
 * Primeira classe criada
 * Serve como um contrato e não será instanciada
 *
 */

class Produto {
  // constructor tem uma função semelhante a de passagem de parâmetros para uma função
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }

  verificarProduto() {
    return this.preco > 5;
  }

  ligar() {
    if (this.verificarProduto()) {
      return `O produto ${this.nome} foi ligado!`;
    } else {
      return `O produto ${this.nome} não pôde ser ligado!`;
    }
  }

  valorPromocional() {
    return this.preco * 0.8;
  }

  get() {
    return {
      nome: this.nome,
      preco: this.preco,
    };
  }
}

module.exports = Produto;
