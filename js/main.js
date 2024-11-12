// Función para guardar el estado del submenú en el almacenamiento local
function saveSubmenuState(submenuId, isOpen) {
  localStorage.setItem(submenuId, isOpen ? "open" : "closed");
}

// Función para cargar y aplicar el estado del submenú desde el almacenamiento local
function loadSubmenuState(submenuId) {
  var state = localStorage.getItem(submenuId);
  var submenu = $("#" + submenuId);

  if (state === "open") {
    submenu.show();
  } else {
    submenu.hide();
  }
}

// Ocultar todos los submenús al cargar la página
$(document).ready(function() {
  $(".submenu").hide();
  loadSubmenuState("submenu-guia"); // Cargar el estado del submenú de "Guía zona por zona"
  loadSubmenuState("submenu-objetos"); // Cargar el estado del submenú de "Guía de Objetos"
  loadSubmenuState("submenu-misiones"); // Cargar el estado del submenú de "Lista de Misiones"
  loadSubmenuState("submenu-otros"); // Cargar el estado del submenú de "Otros"
  loadSubmenuState("submenu-rocket"); // Cargar el estado del submenú de "Empresa Rocket"

  // Mostrar u ocultar los submenús según el enlace clicado
  $(".dropdown-link").click(function(e) {
    e.preventDefault();
    var submenu = $(this).next(".submenu");
    var submenuId = submenu.attr("id");

    if (submenu.is(":visible")) {
      submenu.hide();
      saveSubmenuState(submenuId, false); // Guardar el estado del submenú como cerrado
    } else {
      submenu.show();
      saveSubmenuState(submenuId, true); // Guardar el estado del submenú como abierto
    }
  });
});


function toggleSpoiler(contentId, buttonText) {
  var spoiler = document.getElementById(contentId);
  var spoilerButton = document.getElementById('spoilerButton' + contentId.substring(13));
  
  if (spoiler.style.display === "none") {
    spoiler.style.display = "block";
    spoilerButton.innerText = "Ocultar " + buttonText;
  } else {
    spoiler.style.display = "none";
    spoilerButton.innerText = "Ver " + buttonText;
  }
}
