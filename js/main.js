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
        sessionStorage.setItem('passwordCorrect', 'true');  // Guardamos que la contraseña fue correcta
    } else {
        // Mostrar el mensaje de error
        document.getElementById('error-message-box').style.display = 'block';
        // Ocultar mensaje de éxito si estaba visible
        document.getElementById('success-message-box').style.display = 'none';
        sessionStorage.setItem('passwordCorrect', 'false');  // Guardamos que la contraseña fue incorrecta
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

// Resetea el formulario y los mensajes cada vez que la página se recarga o carga
window.onload = function() {
    // Limpiar el estado almacenado
    sessionStorage.removeItem('passwordCorrect'); // Eliminar cualquier información almacenada

    // Resetea el formulario
    document.getElementById('loginForm').reset();
    
    // Oculta los mensajes de error y éxito
    document.getElementById('success-message-box').style.display = 'none';
    document.getElementById('error-message-box').style.display = 'none';
};

// Evento 'pageshow' para manejar el estado cuando se navega hacia atrás
window.addEventListener('pageshow', function() {
    // Limpiar el estado almacenado
    sessionStorage.removeItem('passwordCorrect'); // Eliminar cualquier información almacenada

    // Resetea el formulario
    document.getElementById('loginForm').reset();
    
    // Oculta los mensajes de error y éxito
    document.getElementById('success-message-box').style.display = 'none';
    document.getElementById('error-message-box').style.display = 'none';
});

// Prevenir el envío del formulario al presionar "Enter" en el campo de contraseña
document.getElementById('password').addEventListener('keydown', function(event) {
    // Prevenir el envío del formulario con "Enter"
    if (event.key === 'Enter') {
        event.preventDefault(); // Evita que se envíe el formulario
        document.activeElement.blur(); // Cierra el teclado en móviles (si está abierto)
    }
});

// Evitar que el formulario se envíe al presionar "Enter" cuando el campo de contraseña está seleccionado
document.getElementById('password').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevenir que se envíe el formulario
    }
});

// Este manejador se asegura de que el formulario no se envíe en móviles o escritorios al presionar "Enter"
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío automático al presionar "Enter"
    validatePassword(event); // Llamar a la función de validación manualmente
});

// Asegurarse de que al presionar "Enter" no se envíe el formulario
document.getElementById('loginForm').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevenir el envío con "Enter"
    }
});

