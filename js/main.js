// Esta función se ejecutará cuando el usuario haga clic en el botón
function toggleDescription(index) {
    var description = document.getElementById("description-" + index);
    if (description.style.display === "none" || description.style.display === "") {
        description.style.display = "block";
    } else {
        description.style.display = "none";
    }
}

// Cambiar el mensaje personalizado
const customMessage = "Mensaje personalizado"; // Cambia este valor si quieres otro mensaje
document.getElementById('title').textContent = customMessage;

// Función para validar la contraseña
function validatePassword(event) {
    event.preventDefault(); // Prevenir que el formulario se envíe automáticamente

    const password = document.getElementById('password').value.trim();

    if (password.toLowerCase() === 'ohana') {
        // Mostrar el mensaje de éxito
        document.getElementById('success-message-box').style.display = 'block';
        // Ocultar mensaje de error si estaba visible
        document.getElementById('error-message-box').style.display = 'none';
    } else {
        // Mostrar el mensaje de error
        document.getElementById('error-message-box').style.display = 'block';
        // Ocultar mensaje de éxito si estaba visible
        document.getElementById('success-message-box').style.display = 'none';
    }
}

// Función para redirigir a index2.html
function redirectToPage() {
    window.location.href = 'index2.html'; // Redirige a index2.html
}

// Función para ocultar el mensaje de error
function hideErrorMessage() {
    document.getElementById('error-message-box').style.display = 'none';
}

// Resetea el formulario cada vez que la página se recarga o carga
window.onload = function() {
    document.getElementById('loginForm').reset();
};

// Prevenir el envío del formulario al presionar "Enter" en el campo de contraseña
document.getElementById('password').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Evitar el envío del formulario al presionar Enter
        document.activeElement.blur(); // Cierra el teclado en móviles (si está abierto)
    }
});

// Asegurarse de que al presionar "Enter" no se envíe el formulario
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío automático al presionar "Enter"
    validatePassword(event); // Llamar a la función de validación manualmente
});

// Evitar que el formulario se envíe al presionar "Enter" cuando el campo de contraseña está seleccionado
document.getElementById('password').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevenir que se envíe el formulario
    }
});
