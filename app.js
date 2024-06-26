let numeroSecreto = 0;
let intentos = 0;
let numerosSorteados = [];
let numeroMaximo = 10;

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`!Acertaste el número en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //el usuario no acerto
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número es menor' );
        } else {
            asignarTextoElemento('p','El número es mayor');
        }
        intentos++; 
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';   
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function generarNumeroSecreto(){

    
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(numerosSorteados);
    
    if (numerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p',' Ya se sortearon todos los números posibles');
    } else {

        if ((numerosSorteados.includes(numeroGenerado))){
            return generarNumeroSecreto();
        } else {
            numerosSorteados.push[numeroGenerado];
            return numeroGenerado;
        }
    }   
}      

function reiniciarJuego(){
    //Limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    condicionesIniciales()
    //Generar numero aleatorio 
    //Inicializar el número de intentos 
    //Deshabilitar el botón de nuevo juegos
    document.querySelector('#reiniciar').setAttribute('disabled',true)
    
}

function  condicionesIniciales() {
    asignarTextoElemento('h1', '¡Juego del número secreto!')
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`) 
    numeroSecreto = generarNumeroSecreto()   
    intentos=1;
}

condicionesIniciales();
//intentoDeUsuario('Me encantas mi vida')