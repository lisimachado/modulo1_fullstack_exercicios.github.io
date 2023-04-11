import { Trade } from "./models/trade.js";
import { TradeList } from "./models/tradeList.js";
import { TradeViews } from "./views/tradesViews.js";

export class TradeController {
  #fieldCode;
  #fieldDate;
  #fieldNumberShare;
  #fieldPrice;
  #negotiationList = new TradeList();
  #negotiationView = new TradeViews();

  constructor() {
    this.#fieldDate = document.getElementById("date");
    this.#fieldNumberShare = document.getElementById("soldAmount");
    this.#fieldPrice = document.getElementById("priceShare");
    this.#fieldCode = document.getElementById("code");
  }

  //metodo para interagir com os atributos e pegar o valor digitado nos inputs
  createTrade() {
    let date = new Date(
      this.#fieldDate.value + "T00:00:00-03:00"
    ).toLocaleDateString();

    let code = this.#fieldCode.value;
    let numberOfShare = this.#fieldNumberShare.value;
    let price = this.#fieldPrice.value;
    let total = numberOfShare * price;

    let negotiation = new Trade(code, date, numberOfShare, price, total);

    this.#negotiationList.addTrade(negotiation, numberOfShare, price, total);
    this.#negotiationView.updateTable(code, date, numberOfShare, price, total);

    this.#negotiationList.filterSales(1000);
  }
}
