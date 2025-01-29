let listaAmigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let amigo = document.getElementById('amigo').value.trim();

    // Validación del nombre ingresado
    if (!isNaN(amigo) || amigo === '') {
        alert('Ingrese un nombre válido');
        limpiar();
    } else {
        agregarAmigosLista(amigo);
    }
}

// Función para agregar un amigo válido al array y a la lista visual
function agregarAmigosLista(amigo) {
    // Agregar el amigo al array
    listaAmigos.push(amigo);

    // Crear un nuevo elemento <li>
    let nuevoAmigo = document.createElement('li');
    nuevoAmigo.textContent = amigo;

    // Agregar el nuevo <li> al <ul>
    document.getElementById('listaAmigos').appendChild(nuevoAmigo);

    // Limpiar el campo de entrada
    limpiar();
}

// Función para limpiar el campo de entrada
function limpiar() {
    document.getElementById('amigo').value = '';
}


function sortearAmigo(){
    if(listaAmigos.length<2){
        alert('Se necesaita minimo 2 amigos para realizar el sorteo')
    }else{
        //Elegir un amigo secreto y un amigo que le corresponda
        let amigoSecreto = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
        document.getElementById('resultado').textContent = `El amigo secreto sorteado es: ${amigoSecreto}`;
    }
}