const cxMsg1 = document.querySelector(".msg");
const cxMsg2 = document.querySelector(".texto");

function btnEncriptar() {
	const strEncriptado = encriptar(cxMsg1.value)
	cxMsg2.value = strEncriptado
}

function btnDesencriptar() {
	desencriptar(mensagem);
	cxMsg1.value = mensagem;
}


function encriptar(str) {
	let baseMsg = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
	str = str.toLowerCase();

	for(let i=0; i < baseMsg.length; i++) {
		if(str.includes(baseMsg[i][0])) {
			str = str.replaceAll(baseMsg[i][0], baseMsg[i][1]);
		}
	}

	return str;
}

function desencriptar(mensagem) {

   var  mensagem = cxMsg2.value;

    mensagem = mensagem.replace(/enter/gim, "e");
    mensagem = mensagem.replace(/ober/gim, "o");
    mensagem = mensagem.replace(/ufat/gim, "u");
    mensagem = mensagem.replace(/ai/gim, "a");
    mensagem = mensagem.replace(/imes/gim, "i");

    return mensagem;

}

function mostraelemento() {
	document.getElementsById(id).style.display = 'none';
}

function ocultaelemento() {
	document.getElementsById(id).style.visibility = 'hidden';
}