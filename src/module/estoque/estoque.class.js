class Estoque {
  constructor(items) {
    this.items = items;
  }

  getValorTotal() {
    let total = 0;
    for (const item of this.items) {
      const preco = item.get().preco;
      total += preco;
    }
    return total;
  }
}

module.exports = Estoque;
