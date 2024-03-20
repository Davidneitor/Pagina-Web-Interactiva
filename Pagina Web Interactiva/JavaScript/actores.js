///////////////////////////////////////////////////////////////////////////////////////////
/////////////////Código para mostrar o ocultar la información de los actores////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Selecciona todos los elementos con la clase 'imagen' y los guarda en una lista
const imagenes = document.querySelectorAll('.imagen');

// Por cada imagen en la lista de imágenes
imagenes.forEach(imagen => {
  // Obtiene el siguiente elemento hermano de la imagen, que debería ser la tabla asociada
  const tabla = imagen.nextElementSibling;
  // Obtiene el cuerpo de la tabla (tbody)
  const tbody = tabla.querySelector('tbody');
  // Obtiene la información asociada a la imagen desde el atributo 'data-info' y la divide en partes usando '-'
  const info = imagen.getAttribute('data-info').split(' - ');

  // Agrega un listener para cuando el mouse pasa sobre la imagen
  imagen.addEventListener('mouseover', () => mostrarTabla(info, tabla, tbody));
  // Agrega un listener para cuando el mouse deja de estar sobre la imagen
  imagen.addEventListener('mouseout', () => ocultarTabla(tabla));
});

// Función para mostrar la tabla y cargar la información
function mostrarTabla(info, tabla, tbody) {
  // Limpia cualquier contenido previo dentro del cuerpo de la tabla
  tbody.innerHTML = '';

  // Crea filas con la información y las agrega al cuerpo de la tabla
  info.forEach(dato => {
    const fila = document.createElement('tr'); // Crea una fila
    const celda = document.createElement('td'); // Crea una celda
    celda.textContent = dato; // Establece el texto de la celda como el dato
    fila.appendChild(celda); // Agrega la celda a la fila
    tbody.appendChild(fila); // Agrega la fila al cuerpo de la tabla
  });

  // Remueve la clase 'hidden' para mostrar la tabla
  tabla.classList.remove('hidden');
}

// Función para ocultar la tabla
function ocultarTabla(tabla) {
  // Agrega la clase 'hidden' para ocultar la tabla
  tabla.classList.add('hidden');
}
