function verifica(){
var pedido = document.getElementById("pedido").value;
var elPedido = Number(pedido);
		 
	
		if (elPedido <=10000)
		{
			alert("Parabéns! Sua equipe vendeu o total de R$" + elPedido + "." + " A classificação da sua equipe é BRONZE!");
			console.log("Parabéns! Sua equipe vendeu o total de R$" + elPedido + "." + " A classificação da sua equipe é BRONZE!");
		}
		else if(elPedido >=10001 && elPedido <=100000){
			alert("Parabéns! Sua equipe vendeu o total de R$" + elPedido + "." + " A classificação da sua equipe é PRATA!");
			console.log("Parabéns! Sua equipe vendeu o total de R$" + elPedido + "." + " A classificação da sua equipe é PRATA!");
		}
		else if(elPedido >=100001 && elPedido<=500000){
			alert("Parabéns! Sua equipe vendeu o total de R$" + elPedido + "." + " A classificação da sua equipe é OURO!");
			console.log("Parabéns! Sua equipe vendeu o total de R$" + elPedido + "." + " A classificação da sua equipe é OURO!");
		}
		else if(elPedido >=500001){
			alert("Parabéns! Sua equipe vendeu o total de R$" + elPedido + "." + " A classificação da sua equipe é PLATINUM!");
			console.log("Parabéns! Sua equipe vendeu o total de R$" + elPedido + "." + " A classificação da sua equipe é PLATINUM!");
		}
		else{
			alert("Valor inválido.");
			console.log("Valor inválido.");
		}
		

		document.getElementById("pedido").value = ""; //Limpa o campo input
	}
	