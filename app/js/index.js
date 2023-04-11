import { NegController } from "./NegController.js";

const controller = new NegController();
document.getElementById("form").addEventListener("submit", () => {
  controller.createTrade();
});