function verifica(){
var peso = document.getElementById("peso").value;
var comprimento = document.getElementById("comprimento").value;

var elPeso = Number(peso);
var elComprimento = Number(comprimento)
		 
	
		if (elPeso <=1500 && elComprimento <=5)
		{
			alert("Este veículo poderá passar pela ponte.");
			console.log("Este veículo poderá passar pela ponte.");
		}
		else{
			alert("Este veículo NÃO poderá passar pela ponte.");
			console.log("Este veículo NÃO poderá passar pela ponte.");
		}

		document.getElementById("peso").value = ""; //Limpa o campo input
		document.getElementById("comprimento").value = ""; //Limpa o campo input
	}
	