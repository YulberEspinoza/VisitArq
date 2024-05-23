
function pedirDatos() {
  const numero = prompt("Digíte el número");
 return Number(numero);
}


function restar() {
 const numero1 = pedirDatos();
 const numero2 = pedirDatos();
  return numero1 - numero2;
}

const resultado = restar();

console.log(resultado);

function datosPersonales() {
  const nombre = prompt("Digite su nombre");
  const apellido = prompt("Digite su apellido");
  const edad = prompt("Digite su edad");
  
  return Number(edad);
}

function numeroCabalistico() {
  const numero3 = pedirDatos();
  const numero4 = restar();
  
  return numero3 - numero4;
}

const final = numeroCabalistico();

console.log("final", final);