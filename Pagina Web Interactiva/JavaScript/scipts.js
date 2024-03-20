///////////////////////////////////////////////////////////////////////////////////////////
//////////////////////Formulario LogIn (simula registro en la página)///////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Espera a que el contenido HTML de la página se haya cargado completamente
document.addEventListener('DOMContentLoaded', function() {
  // Obtiene el formulario por su ID
  var formulario = document.getElementById('miFormulario');
  // Obtiene el elemento del mensaje de bienvenida por su ID
  var mensajeBienvenida = document.getElementById('mensajeBienvenida');

  // Agrega un evento de escucha para cuando se envía el formulario
  formulario.addEventListener('submit', function(event) {
      event.preventDefault(); // Evita que el formulario se envíe y recargue la página

      // Obtiene el valor ingresado en el campo de entrada del formulario
      var nombre = document.getElementById('nombre').value;

      // Muestra un mensaje de bienvenida personalizado utilizando el nombre ingresado
      mensajeBienvenida.innerText = "¡Hola, " + nombre + ", disfruta de esta página!";
      // Muestra el mensaje de bienvenida estableciendo su estilo de visualización como 'block'
      mensajeBienvenida.style.display = 'block';

      // Oculta el formulario estableciendo su estilo de visualización como 'none'
      formulario.style.display = 'none';
  });
});

///////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////Opciones de personalización de la página////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Espera a que el contenido HTML de la página se haya cargado completamente
document.addEventListener('DOMContentLoaded', function() {
  // Obtiene el botón de configuración por su ID
  var botonConfiguracion = document.getElementById('botonConfiguracion');
  // Obtiene el panel de configuración por su ID
  var panelConfiguracion = document.getElementById('panelConfiguracion');
  // Obtiene el selector de fondo por su ID
  var fondoSelector = document.getElementById('fondo');
  // Obtiene el selector de fuente por su ID
  var fuenteSelector = document.getElementById('fuente');

  // Establece el tema oscuro por defecto agregando la clase 'theme-oscuro' al cuerpo del documento
  document.body.classList.add('theme-oscuro');

  // Agrega un evento de escucha para detectar cambios en el selector de fondo
  fondoSelector.addEventListener('change', function() {
      // Cambia el tema del cuerpo del documento según el valor seleccionado en el selector de fondo
      if (fondoSelector.value === 'claro') {
          document.body.classList.remove('theme-oscuro');
          document.body.classList.add('theme-claro');
      } else {
          document.body.classList.remove('theme-claro');
          document.body.classList.add('theme-oscuro');
      }
  });

  // Agrega un evento de escucha para detectar cambios en el selector de fuente
  fuenteSelector.addEventListener('change', function() {
      // Cambia el estilo de fuente del cuerpo del documento según el valor seleccionado en el selector de fuente
      document.body.style.fontFamily = fuenteSelector.value;
  });
});

// Función para alternar la visualización del formulario de configuración
function toggleForm() {
  var formulario = document.getElementById("panelConfiguracion");
  // Si el formulario está oculto, lo muestra; de lo contrario, lo oculta
  if (formulario.style.display === "none") {
      formulario.style.display = "block";
  } else {
      formulario.style.display = "none";
  }
}
///////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////Carga de notificacion emergente (anuncio)////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function() {
    var popup = document.getElementById("anunciopop");
    var closeButton = document.getElementById("closeBtn");

    // Función para cerrar el popup
    function closePopup() {
        popup.style.display = "none";
    }

    // Evento click para cerrar el popup
    closeButton.addEventListener("click", closePopup);

    // Función para mostrar el popup
    function showPopup() {
        popup.style.display = "block";
    }

    // Mostrar el popup después de 30 segundos
    setTimeout(showPopup, 30000);
});

///////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////Randomizador de canciones////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Definición de una lista con los archivos de las canciones
const canciones = [
  "Multimedia/Audios/Ryan Gosling - Im Just Ken.mp3",
  "Multimedia/Audios/Ryan Gosling - City of Stars.mp3",
  "Multimedia/Audios/Pixies - Where Is My Mind.mp3"
];

// Función para cargar una canción específica en el reproductor de audio
function cargarCancion(nombreCancion) {
  // Obtiene el elemento de audio
  const audio = document.getElementById("audio-source");
  // Establece la ruta de la canción en el elemento de audio
  audio.src = nombreCancion;
  // Recarga el reproductor de audio para cargar la nueva canción
  document.getElementById("audio-player").load();
  // Muestra el nombre de la canción en algún lugar de la página
  document.getElementById("nombre-cancion").innerText = nombreCancion;
}

// Función para seleccionar una canción aleatoria de la lista y cargarla
function aleatorizarCancion() {
  // Genera un índice aleatorio dentro del rango de la lista de canciones
  const indiceAleatorio = Math.floor(Math.random() * canciones.length);
  // Obtiene el nombre de la canción correspondiente al índice aleatorio generado
  const nombreCancion = canciones[indiceAleatorio];
  // Llama a la función cargarCancion() para cargar la canción aleatoria seleccionada
  cargarCancion(nombreCancion);
}

// Agrega un evento de clic al botón "Aleatorizar" para seleccionar y cargar una canción aleatoria
document.getElementById("aleatorizar-btn").addEventListener("click", aleatorizarCancion);

// Carga una canción aleatoria al cargar completamente la página
window.onload = function() {
  aleatorizarCancion();
};

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////Validación del formulario /////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Definición de la función para validar el formulario
function validateForm() {
  // Obtención de los valores de los campos del formulario
  var nombre = document.getElementById('nombre2').value;
  var apellidos = document.getElementById('apellidos').value;
  var sexo = document.getElementById('sexo').value;
  var edad = document.getElementById('edad').value;
  var email = document.getElementById('email').value;
  var mensaje = document.getElementById('mensaje').value;

  // Expresión regular para validar el formato del correo electrónico
  var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validación de los campos del formulario
  if (!nombre || !apellidos || !sexo || !edad || !email || !mensaje.trim()) {
      // Si algún campo está vacío, muestra un mensaje de alerta y devuelve falso (indicando que el formulario no es válido)
      alert("Por favor, complete todos los campos.");
      return false;
  } else if (isNaN(edad) || edad < 1 || edad > 100) {
      // Si la edad no es un número o está fuera del rango de 1 a 100, muestra un mensaje de alerta y devuelve falso
      alert("Ingrese una edad válida");
      return false;
  } else if (!regexEmail.test(email)) {
      // Si el correo electrónico no cumple con el formato válido, muestra un mensaje de alerta y devuelve falso
      alert("Ingrese un correo electrónico válido.");
      return false;
  } else {
      // Si todas las validaciones pasan, muestra un mensaje indicando que el formulario ha sido enviado y devuelve verdadero
      alert("Formulario enviado.");
      return true;
  }
}


///////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////Guardar la puntuación de las películas///////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

  // Obtiene el formulario y los elementos de calificación de la primera estrella
const starForm1 = document.getElementById('starForm1');
const stars1 = starForm1.elements.rating_1;

// Itera sobre cada elemento de calificación de la primera estrella
for (let i = 0; i < stars1.length; i++) {
  // Agrega un evento de cambio a cada elemento de calificación de la primera estrella
  stars1[i].addEventListener('change', function() {
    // Mantener la puntuación seleccionada
    for (let j = 0; j < stars1.length; j++) {
      if (stars1[j].checked) {
        // Si una estrella está seleccionada, verificar que este marcada 
        stars1[j].checked = true;
        break;
      }
    }
  });
}

// Lo mismo pero para otra película 

  const starForm2 = document.getElementById('starForm2');
  const stars2 = starForm2.elements.rating_2;

  for (let i = 0; i < stars2.length; i++) {
    stars2[i].addEventListener('change', function() {
      for (let j = 0; j < stars2.length; j++) {
        if (stars2[j].checked) {
          stars2[j].checked = true;
          break;
        }
      }
    });
  }

// Lo mismo pero para otra película 

  const starForm3 = document.getElementById('starForm3');
  const stars3 = starForm3.elements.rating_3;

  for (let i = 0; i < stars3.length; i++) {
    stars3[i].addEventListener('change', function() {
      for (let j = 0; j < stars3.length; j++) {
        if (stars3[j].checked) {
          stars3[j].checked = true;
          break;
        }
      }
    });
  }