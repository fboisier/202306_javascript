var contador = 5;
var texto1 = 'FRANCISCO';
var texto2 = "FRANCISCO";
var texto3 = `FRANCISCO`;
var boleanos = true; //false

texto3 += 'HOLA';
texto3 += texto3 + "CHAO";
console.log(texto3);



// una linea de comentario

/*
UN BLOQUE
de COMENTARIO
*/

var contador = 0;
contador += 5;
contador = contador + 5;

contador *= 2;
contador -= 10;

console.log(contador)

contador += 1
contador++;
contador--;


function saludar(nombre = "Nadie") {
    var salida = "HOLA " + nombre;
    console.log(salida);
    return salida;
}

var nombre = saludar("Pancho");
var nombre1 = saludar("Javier");
var nombre2 = saludar("Francisco");
var nombre3 = saludar("Algo");
var nombre4 = saludar("Perro");
var nombre5 = saludar();

console.log("ALGUNAS VARIABLES: ", nombre1, nombre3, nombre5)


function fabricaZapatos(color = "Negro", TipoTela = "Cuero") {
    console.log("Entrando a la funcion de fabrica zapatos")
    return "Zapato de color " + color + "  con tipo de tela " + TipoTela + " listos.";
}

var zapato1 = fabricaZapatos("ROJO", "CUERO ARTIFICIAL");
var zapato2 = fabricaZapatos();

console.log("ZAPATO 1", zapato1);
console.log("ZAPATO 2", zapato2);

function obtenerDiaDeLaSemana() {
    const fecha = new Date();
    const diaActual = fecha.getDay();
    return diaActual;
}


function obtenerMes() {
    const fecha = new Date();
    const mesActual = fecha.getMonth() + 1;
    return mesActual;
}

function obtenerDiayMes(){
    return obtenerDiaDeLaSemana() + " - " + obtenerMes()
}

console.log(obtenerDiaDeLaSemana());
console.log(obtenerMes());
console.log(obtenerDiayMes())



/**
 * Esta función permite contar desde un número de inicio hasta otro número, mostrando mensajes personalizados con cada iteración.
 *
 * @param {number} [inicio=0] - El número inicial desde donde comenzará a contar.
 * @param {number} [hasta=10] - El número final hasta donde se contará (excluido).
 * @param {string} [texto="PASANDO POR EL FOR EN i="] - El mensaje personalizado que se mostrará en cada iteración.
 * @param {number} [aumento=1] - El valor de incremento en cada iteración.
 */
function contador(inicio = 0, hasta = 10, texto="PASANDO POR EL FOR EN i=", aumento = 1){
    console.log(inicio, hasta, texto, aumento);
    for ( var i = inicio; i < hasta ; i+=aumento){
        console.log(texto,i);
    }
}

contador();
contador(1, 21);
contador(1, 21, "HOLA MUNDO:");
contador(1, 21, "HOLA MUNDO:", 3);
contador(undefined, undefined, "TEXTO");
