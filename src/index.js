//invocar variables de botones y texto//
//acá debes escuchar eventos del DOM, invocar cipher.encode() o cipher.decode() según sea necesario y actualizar el resultado en la UI.//

const mensajeC = document.getElementById("string");
const n= document.getElementById("offset");
const buttonc= document.getElementById("cifrar");
const buttond= document.getElementById("descifrar");
const buttonr= document.getElementById("reset");

buttonc.addEventListener("click", ()=>{
	let offset = n.value;
	let string = mensajeC.value;
	document.getElementById('string').innerHTML=window.cipher.encode(offset, string);
})

buttond.addEventListener("click", ()=>{
	let offset = parseInt(n.value);
	let string = mensajeC.value;
	document.getElementById('string').innerHTML=window.cipher.decode(offset, string);
})

buttonr.addEventListener("click", ()=>{
	location.reload();
})
