function saludar(elemento, nombre){
    console.log("HOLA", nombre);
    console.dir(elemento);
    console.log(elemento.innerHTML);
    elemento.innerHTML = nombre;
    return true;
}

function over(element) {
    console.dir(element.style);
    element.classList.add("rojo");
    element.classList.remove("negro");
}
    
function out(element) {
    element.classList.add("negro");
    element.classList.remove("rojo"); 
}


var h1_titulo = document.querySelector("#titulo");
h1_titulo.innerHTML = "CAMBIADO DESDE JAVASCRIPT"

for (var parrafo of document.querySelectorAll("p")){
    parrafo.innerText += " PASO POR EL FOR";
}
