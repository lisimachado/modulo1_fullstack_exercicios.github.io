function verifica(){
var idade = document.getElementById("idade").value;
var idade_cliente = Number(idade);
		 
	
		if (idade_cliente <=12)
		{
			alert("Você é Criança");
			console.log("Você é Criança");
		}
		else if(idade_cliente >=13 && idade_cliente<=17){
			alert("Você é Adolescente");
			console.log("Você é Adolescente");
		}
		else if(idade_cliente >=18 && idade_cliente<=65){
			alert("Você é Adulto");
			console.log("Você é Adulto");
		}
		else if(idade_cliente >=66 && idade_cliente<=110){
			alert("Você é Sênior");
			console.log("Você é Sênior");
		}
		else{
			alert("Idade inválida");
			console.log("Idade inválida");
		}

		document.getElementById("idade").value = ""; //Limpa o campo input
	}
	