
document.addEventListener("DOMContentLoaded", function () {

    const botones = document.querySelectorAll(".tab-btn");
    const pestañas = document.querySelectorAll(".tab-content");
    const panel = document.querySelector(".content-container");

    if (!panel || botones.length === 0 || pestañas.length === 0) {
        console.error("Error: no se encontraron los botones o las pestañas.");
        return;
    }

    function abrirPestaña(id) {

        const botonActivo = document.querySelector(".tab-btn.active");

        if (botonActivo && botonActivo.dataset.tab === id) {
            cerrarPestañas();
            return;
        }

        pestañas.forEach(function (pestaña) {
            pestaña.classList.remove("active");
        });

        botones.forEach(function (boton) {
            boton.classList.remove("active");
            boton.setAttribute("aria-pressed", "false");
        });

        document.querySelectorAll("video").forEach(function (video) {
            video.pause();
        });

        const pestañaSeleccionada = document.getElementById(id);

        if (pestañaSeleccionada) {
            pestañaSeleccionada.classList.add("active");
            panel.classList.add("visible");

            botones.forEach(function (boton) {
                if (boton.dataset.tab === id) {
                    boton.classList.add("active");
                    boton.setAttribute("aria-pressed", "true");
                }
            });
        } else {
            console.error("No existe la pestaña: " + id);
        }
    }

    function cerrarPestañas() {

        pestañas.forEach(function (pestaña) {
            pestaña.classList.remove("active");
        });

        botones.forEach(function (boton) {
            boton.classList.remove("active");
            boton.setAttribute("aria-pressed", "false");
        });

        document.querySelectorAll("video").forEach(function (video) {
            video.pause();
        });

        panel.classList.remove("visible");
    }

    botones.forEach(function (boton) {

        boton.setAttribute("aria-pressed", "false");

        boton.addEventListener("click", function () {
            abrirPestaña(boton.dataset.tab);
        });

    });

    cerrarPestañas();

});