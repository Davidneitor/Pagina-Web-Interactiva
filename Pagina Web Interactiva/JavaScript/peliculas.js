///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////Carrusel de imagenes/////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Variable que guarda el índice de la imagen actualmente mostrada
let indiceImagenActual = 0;

// Obtiene el total de imágenes presentes en el documento HTML
const totalImagenes = document.querySelectorAll('.imagen').length;

// Llama a la función mostrarImagen() para mostrar la primera imagen al cargar la página
mostrarImagen(indiceImagenActual);

// Función para cambiar la imagen actual basada en la dirección (1 para avanzar, -1 para retroceder)
function cambiarImagen(direccion) {
  // Incrementa o decrementa el índice de la imagen actual
  indiceImagenActual += direccion;

  // Si el índice excede el total de imágenes, regresa al inicio (índice 0)
  if (indiceImagenActual >= totalImagenes) {
    indiceImagenActual = 0;
  } 
  // Si el índice es negativo, se devuelve al final (último índice)
  else if (indiceImagenActual < 0) {
    indiceImagenActual = totalImagenes - 1;
  }

  // Llama a la función mostrarImagen() para mostrar la imagen actualizada
  mostrarImagen(indiceImagenActual);
}

// Función para mostrar una imagen específica según su índice
function mostrarImagen(indice) {
  // Selecciona todas las imágenes en el documento
  const imagenes = document.querySelectorAll('.imagen');

  // Oculta todas las imágenes estableciendo su estilo de visualización como 'none'
  imagenes.forEach((imagen) => {
    imagen.style.display = 'none';
  });

  // Muestra la imagen en la posición especificada cambiando su estilo de visualización a 'block'
  imagenes[indice].style.display = 'block';
}
