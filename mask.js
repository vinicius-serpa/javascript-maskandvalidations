// JavaScript Document

function mask(formField, event, maskType) {

	// Retrieve key pressed for Chrome and Firefox
	code = event.keyCode || event.which;
	console.log('captured code:' + code);
	
	if (isDigit(code) == false) {		
		return false;
	}

	switch (maskType) {
		case "cep":
			return applyMask(formField, '00000-000', code);
			break;
		case "cpf":
			return applyMask(formField, '000.000.000-00', code);
			break;		
		case "cnpj":
			return applyMask(formField, '00.000.000/0000-00', code);
			break;
		case "data":
			return applyMask(formField, '00/00/0000', code);
			break;
		case "fone":
			return applyMask(formField, '(00) 0000-0000', code);
			break;
		default:
			return applyMask(formField, '0-0-0', code);
	}
	
}

function isDigit(keyCode) {	
	
	// Only for Firefox (BackspaceKey = 8, tab = 9, left = 37, right = 39, del = 46)
	if (keyCode == 8 || keyCode == 9 || keyCode == 37  || keyCode == 39 || keyCode == 46) {
		return true;
	}
	
	if (keyCode < 48 || keyCode > 57) {		
		return false;
	} else {
		return true;
	}
	
}

function applyMask(formField, mask, keyCode) { 
	
	if (formField.value.toString().trim().lenght <= 0) {
		return false;
	}
	
	var boleanoMascara; 	
			
	exp = /\-|\.|\/|\(|\)| /g
	campoSoNumeros = formField.value.toString().replace(exp, ""); 
   
	var posicaoCampo = 0;	 
	var NovoValorCampo = "";
	var TamanhoMascara = campoSoNumeros.length;
	
	// backspace
	if (keyCode != 8) {  
		
		for (i = 0; i <= TamanhoMascara; i++) { 
			
			boleanoMascara  = ((mask.charAt(i) == "-") || (mask.charAt(i) == ".") || (mask.charAt(i) == "/")) 
			boleanoMascara  = boleanoMascara || ((mask.charAt(i) == "(") || (mask.charAt(i) == ")") || (mask.charAt(i) == " ")) 
			
			if (boleanoMascara) { 
				NovoValorCampo += mask.charAt(i); 
				TamanhoMascara++;
			} else { 
				NovoValorCampo += campoSoNumeros.charAt(posicaoCampo); 
				posicaoCampo++; 
			}	   	 
		}	 
		
		formField.value = NovoValorCampo;
		return true; 
		
	} else { 
		return true; 
	}
}