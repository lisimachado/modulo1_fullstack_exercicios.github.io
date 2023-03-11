	function verifica(){
		var num = document.getElementById("numero").value;
		var int_num = Number(num);

		if(int_num%2 == 0)
		{
			alert("O número " + num + " é par.");
			console.log("O número " + num + " é par.");

		}else{
			alert("O número " + num + " é ímpar.");
			console.log("O número " + num + " é ímpar.");
		}

		numero.value = "";
	}