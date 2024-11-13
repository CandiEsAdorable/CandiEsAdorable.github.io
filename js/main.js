// Esta función se ejecutará cuando el usuario haga clic en el botón
function toggleDescription(index) {
    // Obtener el elemento de la descripción basado en el ID
    var description = document.getElementById("description-" + index);

    // Alternar la visibilidad del elemento
    if (description.style.display === "none" || description.style.display === "") {
        description.style.display = "block"; // Muestra la descripción
    } else {
        description.style.display = "none"; // Oculta la descripción
    }
}

// Cambiar el mensaje personalizado
const customMessage = "Mensaje personalizado"; // Cambia este valor si quieres otro mensaje
document.getElementById('title').textContent = customMessage;

// Función para validar la contraseña
function validatePassword(event) {
    event.preventDefault(); // Prevenir que el formulario se envíe

    // Obtener el valor ingresado en el campo de contraseña
    const password = document.getElementById('password').value.trim();

    // Comparar la contraseña con 'OHANA' sin importar mayúsculas/minúsculas
    if (password.toLowerCase() === 'ohana') {
        // Mostrar el mensaje de éxito
        document.getElementById('success-message-box').style.display = 'block';
        // Ocultar mensaje de error si estaba visible
        document.getElementById('error-message-box').style.display = 'none';
        
        // Redirigir a index2.html después de 2 segundos para que el usuario vea el mensaje
        setTimeout(function() {
            window.location.href = 'index2.html'; // Redirige a la página index2.html
        }, 2000);
    } else {
        // Mostrar el mensaje de error
        document.getElementById('error-message-box').style.display = 'block';
        // Ocultar mensaje de éxito si estaba visible
        document.getElementById('success-message-box').style.display = 'none';
    }
}

// Función para ocultar el mensaje de error
function hideErrorMessage() {
    // Ocultar el mensaje de error
    document.getElementById('error-message-box').style.display = 'none';
    document.getElementById('loginForm').reset(); // Limpiar el formulario
}

// Evitar que la contraseña se envíe al presionar Enter en dispositivos móviles
document.getElementById('loginForm').addEventListener('submit', function(event) {
    // Impide que el formulario se envíe
    event.preventDefault();
    // Llama a la función de validación
    validatePassword(event);
});

