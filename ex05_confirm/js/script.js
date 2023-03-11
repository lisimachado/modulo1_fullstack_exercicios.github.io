const btn = document.getElementById("botao");

btn.addEventListener("click", function(e){

	e.preventDefault(); //se não colocar essa etapa, não salva os dados no console

	const name = document.getElementById("nome");
	const email = document.getElementById("email");

	const campo1 = name.value;
	const campo2 = email.value;
	
	console.log(campo1, campo2);

	name.value = "";
	email.value = "";

	alert("Seus dados foram enviados!");

})
