document.addEventListener("DOMContentLoaded", function () {
    const carrusel = document.getElementById("carrusel");
    const imagenes = carrusel.getElementsByTagName("img");
    const anteriorBtn = document.getElementById("anterior");
    const siguienteBtn = document.getElementById("siguiente");
    let currentIndex = 0;

    function mostrarImagen(index) {
        for (let i = 0; i < imagenes.length; i++) {
            imagenes[i].style.display = "none";
        }
        imagenes[index].style.display = "block";
    }

    function avanzar() {
        currentIndex++;
        if (currentIndex >= imagenes.length) {
            currentIndex = 0;
        }
        mostrarImagen(currentIndex);
    }

    function retroceder() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = imagenes.length - 1;
        }
        mostrarImagen(currentIndex);
    }

    mostrarImagen(currentIndex);

    siguienteBtn.addEventListener("click", avanzar);
    anteriorBtn.addEventListener("click", retroceder);
});
