document.addEventListener("DOMContentLoaded", function () {
    // Función para el desplazamiento suave al hacer clic en los enlaces de la barra de navegación
    function smoothScroll(target, duration) {
        const targetElement = document.getElementById(target);
        const targetPosition = targetElement.offsetTop;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        // Función de suavizado
        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return (c / 2) * t * t + b;
            t--;
            return (-c / 2) * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    }

    // Agregar evento de clic a los enlaces de la barra de navegación
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            smoothScroll(targetId, 1000); // Puedes ajustar la duración según tus preferencias
        });
    });
});

function enviarMensaje() {
    const nombre = document.getElementById('nombre').value;
    const mensaje = document.getElementById('mensaje').value;

    const numeroTelefono = '573162262385';

    // Crear el enlace de WhatsApp con el mensaje predefinido
    const enlaceWhatsApp = `https://wa.me/${numeroTelefono}?text=Hola, soy ${nombre}. ${mensaje}`;

    // Abrir WhatsApp en una nueva ventana o pestaña
    window.open(enlaceWhatsApp);
}