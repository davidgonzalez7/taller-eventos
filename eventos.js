document.addEventListener("DOMContentLoaded", function() {
    const divBoton = document.getElementById("buttonContainer");
    const boton = document.getElementById("saludarButton");

    divBoton.addEventListener("click", function() {
        alert("¡Hola! Soy el div");
    });

    boton.addEventListener("click", function(event) {
        event.stopPropagation();
        mostrarAlerta();
    });
});