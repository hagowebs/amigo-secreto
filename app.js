/* OBJETIVOS:

    OK  Agregar nombres: Los usuarios escribirán el nombre de un amigo al hacer clic en "Adicionar".
        Utilizar document.getElementById o document.querySelector

    OK  Validar entrada: Si el campo está vacío, se muestra una alerta solicitando un nombre válido.  
        Si el nombre es válido, se añade al arreglo de amigos utilizando .push().

    OK  Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.
        Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.
        Antes de sortear, comprobar si el array amigos no está vacío.

    OK  Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", seleccionar aleatoriamente un nombre de la lista.
        Generar un índice aleatorio: Usar Math.random() y Math.floor().
        Utilizar el índice aleatorio para acceder al nombre correspondiente.

    OK  Obtener el nombre sorteado: Mostrar el resultado.
        Utilizando document.getElementById() e innerHTML.

*/

// Declarar variable de lista
let amigos = [];

function mostrarAmigos() {

    // Seleccionar lista
    let lista = document.getElementById('listaAmigos');

    // La lista comienza vacia
    lista.innerHTML = '';
    
    // Por cada amigo mostrar un elemento de lista
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
    
}

function agregarAmigo() {

    // Escribir amigo
    let input = document.getElementById('amigo'); 

    // Evitar solo espacios
    let nombre = input.value.trim(); 

    // Validar amigo
    if (nombre == '') {

        // Mostrar alerta si esta vacio
        alert('Por favor ingresa un nombre válido.');

    } else if (amigos.includes(nombre)) {

        // Mostrar alerta si esta duplicado
        alert('Ese nombre ya está en la lista.');

    } else {

        // Agregar amigo
        amigos.push(nombre);

        // Limpiar campo de texto
        input.value = '';

        // Actualizar lista
        mostrarAmigos();

    }

}

function sortearAmigo() {

    // Validar lista
    if (amigos.length == 0) {

        // Mostrar alerta si esta vacia
        alert('No hay amigos en la lista para sortear.');

    } else if (amigos.length < 2) {

        // Mostrar alerta si solo hay un nombre
        alert('Agraga mas nombres para sortear.');

    } else {

        // Sortear indices entre el numero de nombres
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);

        // Seleccionar el nombre del indice sorteado
        let nombreSorteado = amigos[indiceAleatorio];

        // Mostrar el resultado
        let resultado = document.getElementById('resultado');
        resultado.innerHTML += `<li>${nombreSorteado}</li>`;

    }

}

function reiniciarLista() {

    // Recargar la página
    location.reload();

}