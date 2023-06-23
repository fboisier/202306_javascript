var a = 1;
var b = 1;

var resultado = a > b;
console.log(resultado)

if (!resultado){
    console.log("NO ES VERDAD!")
}

if (2 > 1){
    if (2 > 0){
        if (2 > -1){
            console.log("SI ES ASI.")
        }
    }
}

if (2 > 1 && 2 > 0 && 2 > -1 ){
    console.log("SI ES ASI.")
}

if (2 > 1 || 2 > 0 || 2 > -1){
    console.log("SI ES ASI.")
}

var mes = 1;

switch(mes){
    case 1: console.log("ENERO"); break;
    case 2: console.log("FEBRERO"); break;
    case 3: console.log("MARZO"); break;
    default: console.log("NO LO SE");
}

if (mes  == 1){
    console.log("ENERO");
} else if (mes == 2){
    console.log("FEBRERO");
} else if (mes == 3){
    console.log("MARZO");
} else {
    console.log("NO LO SE");
}

var mascotas = ["PERRO", "GATO", "LORO", "TIGRE", "OSO"]  // largo 3
//                  0       1       2
//mascotas[0] = "TIBRE"
//console.log(mascotas[0])

for (var i = 0; i < mascotas.length; i++){
    if (i == 1){
        break;
    }
    console.log(i)
    console.log(mascotas[i])
}

for (var i in mascotas){
    console.log(mascotas[i])
}

for (var item of mascotas){
    console.log(item);
}