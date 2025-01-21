let amigos = [];
const inputAmigo = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

// Agregar amigo
function agregarAmigo() {
    const nombre = inputAmigo.value.trim();
    if (nombre !== '') {
        amigos.push(nombre);
        inputAmigo.value = '';
        actualizarListaAmigos();
    } else {
        alert('Ingrese un nombre válido');
    }
}

// Actualizar lista de amigos
function actualizarListaAmigos() {
    listaAmigos.innerHTML = '';
    amigos.forEach((nombre, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${nombre}`;
        listaAmigos.appendChild(li);
    });
}

// Sortear amigo secreto
function sortearAmigo() {
    if (amigos.length >= 2) {
        const copiaAmigos = [...amigos];
        const resultadoAmigos = {};
        amigos.forEach((amigo) => {
            let amigoSecreto;
            do {
                amigoSecreto = copiaAmigos[Math.floor(Math.random() * copiaAmigos.length)];
            } while (amigoSecreto === amigo);
            resultadoAmigos[amigo] = amigoSecreto;
            copiaAmigos.splice(copiaAmigos.indexOf(amigoSecreto), 1);
        });
        mostrarResultado(resultadoAmigos);
    } else {
        alert('Necesitas al menos 2 amigos para sortear');
    }
}

// Mostrar resultado del sorteo
function mostrarResultado(resultadoAmigos) {
    resultado.innerHTML = '';
    Object.keys(resultadoAmigos).forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = `${amigo} -> ${resultadoAmigos[amigo]}`;
        resultado.appendChild(li);
    });
}