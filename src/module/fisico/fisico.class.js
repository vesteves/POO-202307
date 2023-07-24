const Produto = require('../produto/produto.class');

class Fisico extends Produto {
  calcularFrete() {
    return this.preco * 1.1;
  }

  valorPromocional() {
    return this.calcularFrete() * 0.8;
  }

  get() {
    return {
      nome: this.nome,
      preco: this.preco,
      endereco: 'Rua blablabla, 10.',
      total: this.calcularFrete(),
      promocional: this.valorPromocional(),
    };
  }
}

module.exports = Fisico;
