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


// Puedes cambiar este mensaje desde aquí
const customMessage = "Mensaje personalizado"; // Cambia este valor para modificar el mensaje

// Asignamos el mensaje a la etiqueta <h2> con id="title"
document.getElementById('title').textContent = customMessage;

function validatePassword(event) {
    // Prevenir que el formulario se envíe
    event.preventDefault();

    // Obtener el valor ingresado en el campo de contraseña
    const password = document.getElementById('password').value.trim();
    
    console.log("Contraseña ingresada: " + password); // Depuración

    // Comparar la contraseña con 'OHANA' sin importar mayúsculas/minúsculas
    if (password.toLowerCase() === 'ohana') {
        console.log("Contraseña correcta. Redirigiendo..."); // Depuración
        // Si la contraseña es correcta, redirigir a index2.html
        window.location.href = 'index2.html';
    } else {
        console.log("Contraseña incorrecta. Mostrando mensaje de error...");
        // Mostrar el cuadro de error si la contraseña es incorrecta
        document.getElementById('error-message-box').style.display = 'block';
    }
}

function hideErrorMessage() {
    // Ocultar el cuadro de error y permitir intentar de nuevo
    document.getElementById('error-message-box').style.display = 'none';
    document.getElementById('loginForm').reset(); // Limpiar el formulario
}
