const enlace = document.getElementById('modificarContenido');
const titulo = document.querySelector('main h2');
const parrafo = document.querySelector('main p');

enlace.addEventListener('click', function (event) {
    event.preventDefault();

    titulo.textContent = 'Contenido modificado con JavaScript';
    parrafo.textContent = 'Has modificado el contenido HTML pulsando el menú superior.';
});