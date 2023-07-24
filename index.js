const express = require('express');
const Digital = require('./src/module/digital/digital.class');
const Fisico = require('./src/module/fisico/fisico.class');
const Estoque = require('./src/module/estoque/estoque.class');
const ItemEstoque = require('./src/module/estoque/item-estoque.class');
const app = express();

// exemplo do uso de Composição
// atual concorrente de Herança
class DigitalComposition {
  constructor(produto) {
    this.produto = produto;
  }

  get() {
    return {
      ...this.produto,
      link: `https://www.escoladnc.com.br/${this.produto.nome}`,
    };
  }
}

app.listen(8080, () => {
  console.log('Sistema online');

  const zelda = new Digital('Zelda', 4);
  console.log(zelda.get());

  const xbox = new Fisico('X-Box', 30);
  console.log(xbox.get());

  const estoque = new Estoque([zelda, xbox]);
  console.log('estoque total', estoque.getValorTotal());

  const xboxEstoque = new ItemEstoque(xbox, 3);
  console.log('xboxEstoque', xboxEstoque.get());
});
