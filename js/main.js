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


function validatePassword() {
    // Obtener el valor ingresado en el campo de contraseña
    const password = document.getElementById('password').value;
    
    // Verificar si la contraseña es correcta
    if (password === 'OHANA') {
        // Si la contraseña es correcta, redirigir a index2.html
        window.location.href = 'index2.html';
        return false; // Evita el envío del formulario
    } else {
        // Si la contraseña es incorrecta, mostrar el mensaje de error y recargar la página
        const errorMessage = document.getElementById('error-message');
        errorMessage.style.display = 'block'; // Mostrar el mensaje de error
        setTimeout(function() {
            window.location.reload(); // Recargar la página después de unos segundos
        }, 2000); // 2 segundos de espera antes de recargar
        return false; // Evita el envío del formulario
    }
}
