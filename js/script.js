document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       MENÚ RESPONSIVE
    ========================== */

    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");

    if (menuToggle && nav) {

        menuToggle.addEventListener("click", () => {

            nav.classList.toggle("nav-activo");

        });

    }

    /* =========================
       DROPDOWN MOBILE
    ========================== */

    const dropdownBtns = document.querySelectorAll(".dropdown-btn");

    dropdownBtns.forEach((btn) => {

        btn.addEventListener("click", function (e) {

            if (window.innerWidth <= 768) {

                e.preventDefault();

                const submenu =
                    this.parentElement.querySelector(".submenu");

                if (submenu) {

                    submenu.classList.toggle("submenu-activo");

                }

            }

        });

    });

    /* =========================
       MENSAJE BIENVENIDA
    ========================== */

    const mensaje = document.getElementById("mensaje-bienvenida");

    function actualizarMensaje(idioma = "es") {

        if (!mensaje) return;

        const hora = new Date().getHours();

        if (idioma === "en") {

            if (hora < 12) {

                mensaje.textContent =
                    "🌸 Good morning, welcome to Matsuri Japan";

            } else if (hora < 18) {

                mensaje.textContent =
                    "🎎 Good afternoon, explore Japanese festivals";

            } else {

                mensaje.textContent =
                    "🏮 Good evening, enjoy Matsuri culture";

            }

        } else {

            if (hora < 12) {

                mensaje.textContent =
                    "🌸 Buenos días, bienvenido a Matsuri Japón";

            } else if (hora < 18) {

                mensaje.textContent =
                    "🎎 Buenas tardes, explora los festivales japoneses";

            } else {

                mensaje.textContent =
                    "🏮 Buenas noches, disfruta la cultura Matsuri";

            }

        }

    }

    actualizarMensaje();

    /* =========================
       FILTROS GALERÍA
    ========================== */

    const filtros = document.querySelectorAll(".filtros button");
    const tarjetas = document.querySelectorAll(".gal-card");

    filtros.forEach((boton) => {

        boton.addEventListener("click", () => {

            filtros.forEach((btn) => {

                btn.classList.remove("activo");

            });

            boton.classList.add("activo");

            const filtro = boton.dataset.filtro;

            tarjetas.forEach((tarjeta) => {

                if (
                    filtro === "todos" ||
                    tarjeta.classList.contains(filtro)
                ) {

                    tarjeta.style.display = "block";

                } else {

                    tarjeta.style.display = "none";

                }

            });

        });

    });

    /* =========================
       SLIDER HERO
    ========================== */

    const hero = document.querySelector(".slider");

    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");

    if (hero && prev && next) {

        const imagenes = [

            "img/festivales.jpg",
            "img/gion.jpg",
            "img/nebuta.jpg"

        ];

        let index = 0;

        function cambiarImagen() {

            hero.style.backgroundImage =
                `linear-gradient(rgba(0,0,0,0.6),
                rgba(0,0,0,0.6)),
                url('${imagenes[index]}')`;

        }

        cambiarImagen();

        next.addEventListener("click", () => {

            index++;

            if (index >= imagenes.length) {

                index = 0;

            }

            cambiarImagen();

        });

        prev.addEventListener("click", () => {

            index--;

            if (index < 0) {

                index = imagenes.length - 1;

            }

            cambiarImagen();

        });

    }

    /* =========================
       TRADUCTOR
    ========================== */

    const botonesIdioma =
        document.querySelectorAll(".lang-btn");

    const traducciones = {

        es: {

            inicio: "Inicio",
            historia: "Historia",
            tipos: "Tipos de Matsuri",
            galeria: "Galería",
            calendario: "Calendario",
            contacto: "Contacto",

            heroTitle:
                "Festivales Tradicionales de Japón",

            heroText:
                "Descubre la tradición, historia y espiritualidad de los Matsuri"

        },

        en: {

            inicio: "Home",
            historia: "History",
            tipos: "Types of Matsuri",
            galeria: "Gallery",
            calendario: "Calendar",
            contacto: "Contact",

            heroTitle:
                "Traditional Festivals of Japan",

            heroText:
                "Discover the tradition, history and spirituality of Matsuri"

        }

    };

    botonesIdioma.forEach((btn) => {

        btn.addEventListener("click", () => {

            const idioma =
                btn.textContent.trim().toLowerCase();

            /* BOTÓN ACTIVO */

            botonesIdioma.forEach((b) => {

                b.classList.remove("active");

            });

            btn.classList.add("active");

            /* NAV */

            const enlaces =
                document.querySelectorAll(".nav a");

            if (enlaces.length >= 6) {

                enlaces[0].textContent =
                    traducciones[idioma].inicio;

                enlaces[1].textContent =
                    traducciones[idioma].historia;

                enlaces[2].textContent =
                    traducciones[idioma].tipos;

                enlaces[3].textContent =
                    traducciones[idioma].galeria;

                enlaces[4].textContent =
                    traducciones[idioma].calendario;

                enlaces[5].textContent =
                    traducciones[idioma].contacto;

            }

            /* DROPDOWN */

            const dropdownBtn =
                document.querySelector(".dropdown-btn");

            if (dropdownBtn) {

                dropdownBtn.textContent =
                    traducciones[idioma].tipos;

            }

            /* HERO */

            const heroTitle =
                document.getElementById("hero-title");

            const heroText =
                document.getElementById("hero-text");

            if (heroTitle) {

                heroTitle.textContent =
                    traducciones[idioma].heroTitle;

            }

            if (heroText) {

                heroText.textContent =
                    traducciones[idioma].heroText;

            }

            /* MENSAJE */

            actualizarMensaje(idioma);

        });

    });

});