function verifica(){
var senha = document.getElementById("senha").value;
var elSenha = Number(senha);
		 
	
		if (elSenha === 1234)
		{
			alert("ACESSO PERMITIDO");
			console.log("ACESSO PERMITIDO");
		}
		else{
			alert("ACESSO NEGADO");
			console.log("ACESSO NEGADO");
		}
		
		document.getElementById("senha").value = ""; //Limpa o campo input
	}
	