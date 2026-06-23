// =================================================================
// EFECTO REVEAL ON SCROLL - LEARNSY (ULTRA-OPTIMIZADO)
// =================================================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. Configurar el detector de pantalla (Intersection Observer)
    const observerOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, observerOptions);

    // 2. Seleccionar todos los elementos que deben animarse
    const elementsToAnimate = document.querySelectorAll(
        '.reveal, ' +
        '.why-learnsy-background, ' +
        '.titulo-pilares-container, ' +
        '.pilar-card, ' +
        '.equipo-section, ' +
        '.es-hora-de-cambiar-section'
    );

    elementsToAnimate.forEach(element => animationObserver.observe(element));

    // 3. FIX DE INICIO: Forzar la primera sección
    setTimeout(() => {
        const primeraSeccion = document.querySelector('.reveal');
        if (primeraSeccion) {
            primeraSeccion.classList.add('active');
        }
    }, 200);
});