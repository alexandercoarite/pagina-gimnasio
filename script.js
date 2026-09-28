const form = document.getElementById("contactForm");
const planSeleccionado = document.getElementById("planSeleccionado");

function seleccionarPlan(plan) {
    planSeleccionado.value = plan;

    document.getElementById("contacto").scrollIntoView({
        behavior: "smooth"
    });
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const plan = document.getElementById("planSeleccionado").value;
    const mensaje = document.getElementById("mensaje").value;

    const numeroWhatsApp = "59168302643";

    const texto =
        "Hola, soy " + nombre + ".%0A%0A" +
        "Estoy interesado en el plan: " + plan + ".%0A%0A" +
        "Mi correo: " + correo + "%0A%0A" +
        "Mensaje: " + mensaje;

    const enlaceWhatsApp =
        "https://wa.me/" + numeroWhatsApp + "?text=" + texto;

    window.open(enlaceWhatsApp, "_blank");
});