let nombre = prompt("Como te llamas?");
const imprimir = document.querySelector('.respuesta');

function mostrarDatos(nombre = "visitante") {

    const datos = document.createElement('div');
    datos.classList.add('datos');

    datos.innerHTML = `
        <p> Hola ${nombre}, Bienvenid@ a mi Web!</p>
    `;

    imprimir.appendChild(datos);
    
}

mostrarDatos(nombre);