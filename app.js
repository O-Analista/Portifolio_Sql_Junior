/* ==========================================
   CARROSSEL DOS PROJETOS SQL
========================================== */

/* ==========================================
   CARROSSEL DOS PROJETOS SQL
   PROJETO 1 + PROJETO 2
========================================== */

const sqlProjects = document.querySelectorAll(".sql-project");


sqlProjects.forEach((project) => {

    /* ELEMENTOS DESTE PROJETO */

    const slides = project.querySelectorAll(".sql-slide");

    const dots = project.querySelectorAll(".sql-dot");

    const prev = project.querySelector(".sql-prev");

    const next = project.querySelector(".sql-next");


    /* CONTROLE DO SLIDE */

    let currentSlide = 0;


    /* ==========================================
       MOSTRAR SLIDE
    ========================================== */

    function showSlide(index) {

        /* VOLTA PARA O PRIMEIRO */

        if (index >= slides.length) {
            currentSlide = 0;
        }


        /* VAI PARA O ÚLTIMO */

        if (index < 0) {
            currentSlide = slides.length - 1;
        }


        /* REMOVE ACTIVE DOS SLIDES */

        slides.forEach((slide) => {

            slide.classList.remove("active");

        });


        /* REMOVE ACTIVE DOS DOTS */

        dots.forEach((dot) => {

            dot.classList.remove("active");

        });


        /* ATIVA O SLIDE ATUAL */

        if (slides[currentSlide]) {

            slides[currentSlide].classList.add("active");

        }


        /* ATIVA O DOT ATUAL */

        if (dots[currentSlide]) {

            dots[currentSlide].classList.add("active");

        }

    }


    /* ==========================================
       PRÓXIMO
    ========================================== */

    if (next) {

        next.addEventListener("click", () => {

            currentSlide++;

            showSlide(currentSlide);

        });

    }


    /* ==========================================
       ANTERIOR
    ========================================== */

    if (prev) {

        prev.addEventListener("click", () => {

            currentSlide--;

            showSlide(currentSlide);

        });

    }


    /* ==========================================
       DOTS
    ========================================== */

    dots.forEach((dot, index) => {

        dot.addEventListener("click", () => {

            currentSlide = index;

            showSlide(currentSlide);

        });

    });


    /* ==========================================
       INICIA O CARROSSEL
    ========================================== */

    showSlide(currentSlide);

});