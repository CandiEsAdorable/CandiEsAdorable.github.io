const textos = {
    1: "El primer manwha que leí y me enamoró hace muchos años, fue el primer manhwa en tener su adaptación al anime y encima el OP es de Stray Kids, así que cada vez que lo veía me acordaba de ti. <br><br> Me hacía ilusión regalártelo para que lo guardases con cariño. Además puedes leerlo o directamente probar el anime ^^",
    2: "Este mini Gojito en su día lo compré para mí y lo tenía decorando mi estantería, pensé en aprovechar que te iba a mandar un regalito y dártelo a ti, ya que tanto le amas xD. <br><br>  Siento que no sea la figura pingona que tanto te gustó, pero se me iba el presupuesto y ya bastante sufrí con las aduanas xD",
    3: "¡Un peluchito de Monokuma! Me encanta su diseño desde siempre y suelo usarlo de avatar, es un peluchillo un poco cutre pero era barato y me hacía ilusión dártelo para que lo pongas en algún lado <br><br> Tranquila, no tiene ninguna cámara oculta... Puedes cambiarte de ropa delante de él.",
    4: "No sé si recordarás que estaba haciendo mi colección de cartitas Pokémon y Jujutsu Kaisen, cuando te la enseñé me dijiste de broma que te diese mis cartas de Gojo, pues aquí las tienes, y de regalo una de Sukuna xD.",
    5: "No hay mucho que explicar, es un pequeño expositor para una de tus cartitas ^^ queda bastante bonito",
    6: "Ayyy, esta niña golosita ¿Cómo no iba a mandarte unas chuches? Guárdalas y cuando ganemos una partida del Fortnite las abres para celebrarlo xDD",
    "Navidad A": "Te gustan los juegos de cartas, adoras los gatitos y te encantan las explosiones, lo saben bien las gasolineras del Fortnite... xDD. <br><br> Tenías que tener este juego, se aprende en 5 minutos y está entretenido, pruébalo con la familia en navidad ^^",
    "Navidad B": "Que tiempos, ¿Verdad? Hace ya tantos años que nos conocímos llevando los nicks de Hina y Hitsu... <br><br>Conocerte fue una de las cosas más importantes de mi vida, espero que este cojín sea un buen recuerdo de cuando nos conocimos y te guste tanto como a mí"
};

// Función para abrir el modal
function abrirModal(dia) {
    const hoy = new Date();
    const diaActual = hoy.getDate();
    const mesActual = hoy.getMonth() + 1; // Los meses en JavaScript son base 0, por lo que enero es 0 y diciembre es 11

    if (mesActual < 12 || (mesActual === 12 && diaActual < 25)) {
        // Si la fecha es antes del 25 de diciembre
        if (dia === "Navidad A" || dia === "Navidad B") {
            // Mostrar el modal de advertencia
            document.getElementById("warning-modal").style.display = "block";
            return; // No abrir el modal principal
        }
    }

    // Mostrar el modal y actualizar el título y texto
    document.getElementById("modal").style.display = "block";
    document.getElementById("modal-dia").textContent = dia;
    
    // Obtener el texto correspondiente al día
    const texto = textos[dia] || "";
    
    // Reemplazar saltos de línea por <br> para que se muestren correctamente en HTML
    const textoConSaltos = texto.replace(/\n/g, "<br>");
    
    // Usar innerHTML para que las etiquetas HTML como <br> se apliquen correctamente
    document.getElementById("modal-texto").innerHTML = textoConSaltos;

    // Marcar el día como visto y guardar en localStorage
    marcarDiaVisto(dia);
}

// Función para cerrar el modal principal
function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}

// Función para cerrar el modal de advertencia
function cerrarWarningModal() {
    document.getElementById("warning-modal").style.display = "none";
}

// Función para marcar el día como visto
function marcarDiaVisto(dia) {
    const dayElement = document.querySelector(`.day[data-dia="${dia}"]`);
    dayElement.classList.add('day-viewed');

    // Guardar en localStorage
    const vistos = JSON.parse(localStorage.getItem('vistos') || '[]');
    if (!vistos.includes(dia)) {
        vistos.push(dia);
        localStorage.setItem('vistos', JSON.stringify(vistos));
    }
}

// Función para inicializar los días del calendario
function inicializarCalendario() {
    const vistos = JSON.parse(localStorage.getItem('vistos') || '[]');

    document.querySelectorAll('.day').forEach(dayElement => {
        const dia = dayElement.dataset.dia;
        if (textos[dia] === "") {
            dayElement.classList.add('day-no-text');
        } else if (vistos.includes(dia)) {
            dayElement.classList.add('day-viewed');
        }
    });
}

// Inicializar el calendario al cargar la página
window.onload = function() {
    inicializarCalendario();
};



    // Reemplazar saltos de línea (\n) por <br> para permitir que se muestren en el HTML
    const textoConSaltos = textos[dia] ? textos[dia].replace(/\n/g, "<br>") : "";
    document.getElementById("modal-texto").innerHTML = textoConSaltos;