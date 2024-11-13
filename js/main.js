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
