var i, altura, sexo, maiorAlt = 0, menorAlt = 99, mulher = 0, homem = 0, mediaMulher = 0, mediaHomem = 0, contMulher = 0, contHomem = 0;

		for(i = 1 ;i <= 15; i++) {		
			altura = parseFloat(prompt("Informe a altura (Utilize . não ,)["+i+"]:"));
			sexo = prompt("Informe o sexo: M ou F:").toUpperCase();
			

			if(altura > maiorAlt) { 
				maiorAlt = altura;
			} else if(altura < menorAlt) { 
				menorAlt = altura;

			} if(sexo == 'F') {
				mulher += altura;
				contMulher++;
			} else if(sexo == 'M') {
				homem += altura;
				contHomem++;
			}
		}
		mediaMulher = mulher/contMulher;
        mediaHomem = homem/contHomem;
        document.writeln(`A maior altura é: <strong>${+maiorAlt}</strong> <br>`); 
        document.writeln(`A menor altura é: <strong>${+menorAlt}</strong> <br>`);
        document.writeln(`A média da altura dos homens é: <strong>${+mediaHomem.toFixed(2)}</strong> <br>`);
        document.writeln(`O número de mulheres é: <strong>${+contMulher}</strong><br>`);
