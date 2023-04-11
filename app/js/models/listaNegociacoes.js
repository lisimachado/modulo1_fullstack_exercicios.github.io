export class listaNegociacao {
  #trades = [];

  constructor(total) {
    this.total = total;
  }

  addTrade(newTrade) {
    this.#trades.push(newTrade);
  }

  get cloneList() {
    return this.#trades;
  }

  filterSales(value) {
    let filterTrade = this.cloneList.filter((item) => item.total >= value);
      return console.log(filterTrade);
  }
}
