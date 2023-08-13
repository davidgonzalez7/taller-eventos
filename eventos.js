// Obtenemos una referencia al div y al botón
const divBoton = document.getElementById("botonDiv");
const boton = document.getElementById("saludarButton");

// Agregamos el manejador de eventos al div
divBoton.addEventListener("click", function() {
    alert("Hola! Soy el div");
});

// Evitamos que el evento del botón se propague al div
boton.addEventListener("click", function(event) {
    event.stopPropagation();
});
