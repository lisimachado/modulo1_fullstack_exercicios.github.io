export class Negociacao {
  #code;
  #date;
  #numberOfShare;
  #price;
  #total;

  constructor(codes, dates, numberShares, prices, total) {
    this.#code = codes;
    this.#date = dates;
    this.#numberOfShare = numberShares;
    this.#price = prices;
    this.#total = total;
  }

  get dates() {
    return this.#date;
  }

  get numberShares() {
    return this.#numberOfShare;
  }

  get prices() {
    return this.#price;
  }

  get codes() {
    return this.#code;
  }

  get total() {
    return this.#total;
  }
}
