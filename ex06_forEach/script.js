
let frutas = ["Banana", "Morango", "Maça", "Uva", "Pêra"];

frutas.forEach(function (item, indice) {

  // Criando uma chave única para cada item
  let chave = "Fruta " + indice;

  // Salvando cada item no localStorage
  localStorage.setItem(chave, item);
});