let amigos = []
console.log(amigos)

function agregarAmigo() {
    //Se obtiene el value del input
    let amigo = document.getElementById('amigo').value;
    //Se verifica que no esté vacío
    //Si lo está, se avisa al usuario. En caso contrario, se agrega el nombre al array 'amigos'
    if (amigo == '') {
        alert('Por favor, ingresa un nombre!');
    } else {
        amigos.push(amigo);
        console.log(amigos);
        amigoInput.value = '';
        //Se muestra la lista de amigos
        mostrarAmigos();
    }    
}

function mostrarAmigos() {
    // Obtener la referencia a la lista en HTML
    let lista = document.getElementById('listaAmigos');

    // Limpiar la lista actual antes de volver a agregar los elementos
    lista.innerHTML = '';

    // Recorrer el array de amigos y agregar cada nombre como un <li> a la lista
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li'); // Crear un nuevo <li>
        li.textContent = amigos[i]; // Asignar el texto del <li> con el nombre del amigo
        lista.appendChild(li); // Agregar el <li> a la lista
    }
}




