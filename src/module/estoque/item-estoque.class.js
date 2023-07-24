class ItemEstoque {
  constructor(item, quantidade) {
    this.item = item;
    this.quantidade = quantidade;
  }

  calcularValorTotal() {
    return this.item.preco * this.quantidade;
  }

  get() {
    return {
      ...this.item,
      valor: this.calcularValorTotal(),
      quantidade: this.quantidade,
    };
  }
}

module.exports = ItemEstoque;
