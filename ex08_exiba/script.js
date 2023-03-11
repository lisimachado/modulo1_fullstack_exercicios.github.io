	var nome = window.prompt('qual é seu nome?') //Var perguntar o nome...
	alert('É um grande prazer te conhecer, '+ nome + '!') //CONCATENAÇÃO


	function envio(){
		if (confirm('Deseja enviar seus dados?')){
			return true;
		} 
		else{
			return false;
		}
	}

	envio();
