let amigos = []
console.log(amigos)

function agregarAmigo() {
    //Se obtiene el value del input
    let amigoInput = document.getElementById('amigo');
    let amigo = amigoInput.value
    //Se verifica que no esté vacío
    //Si lo está, se avisa al usuario. En caso contrario, se agrega el nombre al array 'amigos'
    if (amigo == '') {
        alert('Por favor, ingresa un nombre!');
    } else {
        amigos.push(amigo);
        console.log(amigos);
        //Se limpia la caja
        amigoInput.value = '';
        //Se muestra la lista de amigos
        mostrarAmigos();
    }    
}

function mostrarAmigos() {
    // Se obtiene la referencia a la lista en HTML
    let lista = document.getElementById('listaAmigos');

    // Se limpia la lista actual antes de volver a agregar los elementos
    lista.innerHTML = '';

    // Itero sobre el array de amigos y se agrega cada nombre como un <li> a la lista
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li'); // Crea un nuevo <li>
        li.textContent = amigos[i]; // Asigna el nombre del amigo al elemento <li> 
        lista.appendChild(li); // Agrega el <li> a la lista
    }
}

function sortearAmigo(){
    let randomIndex = Math.floor(Math.random() * amigos.length);

    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    let li = document.createElement('li'); // Crear un nuevo <li>
    li.textContent = amigos[randomIndex]; // Asignar el texto del <li> con el nombre del amigo
    lista.appendChild(li); // Agregar el <li> a la lista
    
    reiniciarJuego();
}

function reiniciarJuego(){
    amigos = [];
}
