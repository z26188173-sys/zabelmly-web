// Verificar estado general
fetch('/api/status')
    .then(response => response.json())
    .then(data => {
        document.getElementById('status-card').innerHTML = `<strong>Estado:</strong> ${data.message}`;
    });

// Cargar datos de la DB al entrar
function cargarDatos() {
    fetch('/api/datos')
        .then(res => res.json())
        .then(data => {
            const lista = document.getElementById('db-lista');
            lista.innerHTML = data.registros.map(r => `<li>[${r.fecha}] ${r.texto}</li>`).join('');
        });
}

// Guardar nuevo dato
function guardarDato() {
    const input = document.getElementById('db-input');
    if(!input.value.trim()) return;

    fetch('/api/datos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ texto: input.value })
    })
    .then(res => res.json())
    .then(() => {
        input.value = '';
        cargarDatos(); // Recargar la lista
    });
}

cargarDatos();
