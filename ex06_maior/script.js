function verifica(){
var num1 = document.getElementById("num1").value;
var num2 = document.getElementById("num2").value;

var elNum1 = Number(num1);
var elNum2 = Number(num2)
		 
	
		if (elNum1 > elNum2)
		{
			//alert("O maior número digitado foi o " + elNum1 + ".");
			console.log("O maior número digitado foi o " + elNum1 + ".");
			document.getElementById("resultado").innerText = "O maior número digitado foi o " + elNum1 + "."
		}
		else{
			//alert("O maior número digitado foi o " + elNum2 + ".");
			console.log("O maior número digitado foi o " + elNum2 + ".");
			document.getElementById("resultado").innerText = "O maior número digitado foi o " + elNum2 + "."
		}

		document.getElementById("num1").value = ""; //Limpa o campo input
		document.getElementById("num2").value = ""; //Limpa o campo input
	}
	