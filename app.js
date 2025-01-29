let nombres = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre !== "" && !nombres.includes(nombre)) {
        nombres.push(nombre);
        actualizar();
        input.value = "";

        //console.log("amigo agregado", nombre);
        //console.log("lista actualizada", nombres);


    }else{
        alert("Ingresa un nombre diferente");
    }
    
}

//console.log("Lista de amigos:", nombres);

function actualizar(){
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    nombres.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });

}

function sortearAmigo() {

    //console.log("Lista de amigos antes del sorteo",nombres);

    if (nombres.length == 0) {
        alert("Agrega al menos un Amigo para sortear :c");
        return;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * nombres.length);
    //console.log("randomizado", indiceAleatorio)


    const amigoSorteado = nombres[indiceAleatorio];
    //console.log("Nombre sorteado", amigoSorteado);

    // Sacar el nombre sorteado de la lista
    nombres.splice(indiceAleatorio, 1);

    // Actualizar la lista visible
    actualizar();

    // Desactivar el botón si ya no hay más nombres
    actualizarBoton();



    mostrarResultado(amigoSorteado);
}

function mostrarResultado(nombres) {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    const li = document.createElement("li");
    li.textContent = `🎉 ¡El amigo secreto es: ${nombres}! 🎁`;
    li.style.fontSize = "1.5rem";
    li.style.fontWeight = "bold";
    li.style.color = "#2c3e50";
    li.style.padding = "10px";
    li.style.borderRadius = "10px";
    li.style.backgroundColor = "#f8c291";
    li.style.marginTop = "10px";
    li.style.display = "inline-block";

    resultado.appendChild(li);
}

function actualizarBoton() {
    const boton = document.querySelector(".button-draw");
    boton.disabled = nombres.length === 0;
}









