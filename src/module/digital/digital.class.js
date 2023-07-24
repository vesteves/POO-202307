const Produto = require('../produto/produto.class');

class Digital extends Produto {
  get() {
    return {
      nome: this.nome,
      preco: this.preco,
      link: `https://www.escoladnc.com.br/${this.nome}`,
      promocional: this.valorPromocional(),
    };
  }
}

module.exports = Digital;
