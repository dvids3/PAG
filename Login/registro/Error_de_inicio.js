document.getElementById("form-login").addEventListener("submit", function(e) {
    e.preventDefault(); // Evita que se envíe si hay errores

    limpiarErrores();

    const nombre = document.getElementById("nombre");
    const password = document.getElementById("password");
    const correo = document.getElementById("correo");
    const telefono = document.getElementById("telefono");

    let valido = true;

    if (nombre.value.trim() === "") {
        mostrarError(nombre, "El nombre es obligatorio.");
        valido = false;
    }

    if (password.value.length <= 5) {
        mostrarError(password, "La contraseña debe tener más de 5 caracteres.");
        valido = false;
    }

    const regexCorreo = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!regexCorreo.test(correo.value)) {
        mostrarError(correo, "El correo debe ser una cuenta de Gmail.");
        valido = false;
    }

    const regexTelefono = /^3\d{9}$/;
    if (!regexTelefono.test(telefono.value)) {
        mostrarError(telefono, "El número debe tener 10 dígitos y comenzar con 3.");
        valido = false;
    }

    if (valido) {
        alert("Formulario enviado correctamente.");
    }
});

function mostrarError(input, mensaje) {
    const contenedor = input.parentElement;
    const error = document.createElement("span");
    error.className = "error";
    error.innerText = mensaje;
    contenedor.appendChild(error);
}

function limpiarErrores() {
    document.querySelectorAll(".error").forEach(e => e.remove());
}
