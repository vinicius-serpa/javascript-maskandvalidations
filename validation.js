// JavaScript Document

function validate(formField, validation, idErrorMessage, textErrorMessage) {

	var valid = false;

	switch (validation) {
		case "cnpj":
			valid = isValidCNPJ(formField.value);
			break;
		case "cpf":
			valid = isValidCPF(formField.value);
			break;		
	}

	if (valid) {		
		formField.style.backgroundColor = "#ffffff";
		document.getElementById(idErrorMessage).innerHTML = "";			
	} else {
		formField.style.backgroundColor = "#ff0000";
		document.getElementById(idErrorMessage).innerHTML = textErrorMessage;
	}
}

function isValidCNPJ(cnpj) {
		
	var valida = new Array(6,5,4,3,2,9,8,7,6,5,4,3,2);
	var dig1 = new Number;
	var dig2 = new Number;
	
	exp = /\.|\-|\//g
	cnpj = cnpj.toString().replace( exp, "" ); 
	var digito = new Number(eval(cnpj.charAt(12)+cnpj.charAt(13)));
		
	for (i = 0; i<valida.length; i++) {
		dig1 += (i>0 ? (cnpj.charAt(i-1) * valida[i]) : 0);	
		dig2 += cnpj.charAt(i) * valida[i];	
	}
	
	dig1 = (((dig1%11)<2) ? 0 : (11-(dig1%11)));
	dig2 = (((dig2%11)<2) ? 0 : (11-(dig2%11)));
	
	if (((dig1*10)+dig2) == digito) {		
		return true;
	} else {
		return false;
	}
}

function isValidCPF(cpf) {  

	cpf = cpf.replace(/[^\d]+/g,'');    
	
	if (cpf == '') {
		return false; 
	}
	
	// Elimina CPFs invalidos conhecidos    
	
	if (cpf.length != 11 ||         
		cpf == "00000000000" ||         
		cpf == "11111111111" ||         
		cpf == "22222222222" ||         
		cpf == "33333333333" ||         
		cpf == "44444444444" ||         
		cpf == "55555555555" ||         
		cpf == "66666666666" ||         
		cpf == "77777777777" ||         
		cpf == "88888888888" ||         
		cpf == "99999999999")  {     
		return false;       
	}
		
	// Valida 1o digito add = 0;    
	for (i=0; i < 9; i ++)  {     
		add += parseInt(cpf.charAt(i)) * (10 - i);  rev = 11 - (add % 11); 
	}
		
	if (rev == 10 || rev == 11) {     
		rev = 0;    
	}
		
	if (rev != parseInt(cpf.charAt(9)))  {    
		return false;       
	}
		
	// Valida 2o digito add = 0;    
	
	for (i = 0; i < 10; i ++) {       
		add += parseInt(cpf.charAt(i)) * (11 - i);  rev = 11 - (add % 11);
	}
		
	if (rev == 10 || rev == 11) {    
		rev = 0;    
	}
		
	if (rev != parseInt(cpf.charAt(10))) {        
		return false;           
	}
	
	return true;  
}

/*
function isValidCPF(cpf) {
			
	exp = /\.|\-/g
	cpf = cpf.toString().replace(exp, ""); 
	
	if (cpf == "00000000000" || 
 		cpf == "11111111111" || 
 		cpf == "22222222222" || 
 		cpf == "33333333333" || 
 		cpf == "44444444444" || 
 		cpf == "55555555555" || 
		cpf == "66666666666" || 
 		cpf == "77777777777" || 
 		cpf == "88888888888" || 
 		cpf == "99999999999") { 							
 				
		return false;
 	} 
	
	var digitoDigitado = eval(cpf.charAt(9) + cpf.charAt(10));
	var soma1 = 0, soma2 = 0;
	var vlr =11;
	
	for (i=0; i<9; i++) {
		soma1 += eval(cpf.charAt(i) * (vlr-1));
		soma2 += eval(cpf.charAt(i) * vlr);
		vlr--;
	}	
	
	soma1 = (((soma1 * 10) % 11) == 10 ? 0 : ((soma1 * 10) % 11));
	soma2 = (((soma2 + (2 * soma1)) * 10) % 11);
	
	var digitoGerado = (soma1 * 10) + soma2;
	
	if (digitoGerado == digitoDigitado) {	
		return true;
	} else {
		return false;
	}
}

/*
function isValidDate(date) {
	
	exp = /\d{2}\/\d{2}\/\d{4}/
	
	if(!exp.test(data.value)) {
		//alert('Data Invalida!');
	}
}
*/

//valida telefone
function ValidaTelefone(tel){
	exp = /\(\d{2}\)\ \d{4}\-\d{4}/
	if(!exp.test(tel.value)) {
		//alert('Numero de Telefone Invalido!');
	}
}

//valida CEP
function ValidaCep(cep){
	exp = /\d{2}\.\d{3}\-\d{3}/
	if(!exp.test(cep.value)) {
		//alert('Numero de Cep Invalido!');		
	}
}
*/