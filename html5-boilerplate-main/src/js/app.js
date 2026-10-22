const enlace = document.getElementById('modificarAtributos');
const imagen = document.createElement('img');

imagen.src = 'img/web.png';
imagen.alt = 'Imagen de ejemplo';
imagen.width = 300;

document.querySelector('main').appendChild(imagen);

enlace.addEventListener('click', function (event) {
    event.preventDefault();

    imagen.alt = 'Atributo alt modificado con JavaScript';
    imagen.width = 400;
});