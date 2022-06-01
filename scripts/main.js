let miImage = document.querySelector('img');
miImage.onclick = function() {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/nuevayork.jpg') {
        miImage.setAttribute('src','images/nynoche.jpg');
    } else {
        miImage.setAttribute('src','images/nuevayork.jpg');
    }
}

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector('h1');

function estableceNombreUsuario() {
    let miNombre = prompt('Por favor, ingresa tu nombre.');
    if (!miNombre) {
        estableceNombreUsuario();
    } else {
        localStorage.setItem('nombre', miNombre);
        miTitulo.innerHTML = "Bienvenido a Nueva York, " + miNombre;
    }
}

if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
} else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = "Bienvenido a Nueva York ", + nombreAlmacenado;
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}