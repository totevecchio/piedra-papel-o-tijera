
var opcionUsuario = '';

function obtenerOpcionUsuario(){
  var opcion = prompt("Ingrese su opcion, Piedra-Papel-Tijera");
  return opcionUsuario += opcion;
}

obtenerOpcionUsuario();

var opcionMaquina = '';

function obtenerOpcionMaquina(){
  var random = Math.random();
  var opcionMaquinaRandom = random < 0.33 ? 'piedra' : random < 0.66 ? 'papel' : 'tijera';
  return opcionMaquina += opcionMaquinaRandom;
}

obtenerOpcionMaquina();

var resultadoJuego = " ";

function obtenerResultadoJuego(opcionUsuario,opcionMaquina){
  var resultado = " ";
  if(opcionUsuario == opcionMaquina){
    resultado = "empate";
  }else {
    switch (opcionUsuario) {
      case "tijera":
        if(opcionMaquina == "papel"){
          resultado = "victoria"
        }else {
          resultado = "derrota"
        }
        break;
      case "piedra":
        if(opcionMaquina == "papel"){
          resultado = "derrota"
        }else {
          resultado = "victoria"
        }
        break;
      case "papel":
        if(opcionMaquina == "piedra"){
          resultado = "victoria"
        }else {
          resultado = "derrota"
        }
        break;
      default:

    }
  } resultadoJuego = resultado;
}

obtenerResultadoJuego(opcionUsuario,opcionMaquina);

function mostrarResultado(resultadoJuego){
    document.getElementById('resultado-juego').appendChild(document.getElementById(resultadoJuego));
    console.log(resultadoJuego)
}

mostrarResultado(resultadoJuego);
