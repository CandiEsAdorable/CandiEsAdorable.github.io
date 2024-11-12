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
        console.log("Contraseña incorrecta. Mostrando mensaje..."); // Depuración
        // Si la contraseña es incorrecta, mostrar un mensaje de alerta y restablecer el formulario
        alert('Contraseña incorrecta. Intenta de nuevo.');
        document.getElementById('loginForm').reset(); // Limpiar el formulario
    }
}
