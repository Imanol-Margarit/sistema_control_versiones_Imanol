const enlaceContenido = document.getElementById('modificarContenido');
const titulo = document.querySelector('main h2');
const parrafo = document.querySelector('main p');
const enlaceAtributos = document.getElementById('modificarAtributos');
const imagen = document.createElement('img');

imagen.src = 'img/web.png';
imagen.alt = 'Imagen de ejemplo';
imagen.width = 300;

document.querySelector('main').appendChild(imagen);

enlaceContenido.addEventListener('click', function (event) {
    event.preventDefault();

    titulo.textContent = 'Contenido modificado con JavaScript';
    parrafo.textContent = 'Has modificado el contenido HTML pulsando el menú superior.';
});

enlaceAtributos.addEventListener('click', function (event) {
    event.preventDefault();

    imagen.alt = 'Atributo alt modificado con JavaScript';
    imagen.width = 400;
});