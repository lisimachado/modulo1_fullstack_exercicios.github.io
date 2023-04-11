import { TradeController } from "./tradeController.js";

const controller = new TradeController();
document.getElementById("form").addEventListener("submit", () => {
  controller.createTrade();
});