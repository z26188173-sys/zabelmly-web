fetch('/api/status')
    .then(response => response.json())
    .then(data => {
        const card = document.getElementById('status-card');
        card.innerHTML = `<strong>Estado:</strong> ${data.message} <br> <strong>Hora del Servidor:</strong> ${data.timestamp}`;
    })
    .catch(err => {
        document.getElementById('status-card').innerText = "Error al conectar con la neurona.";
        console.error(err);
    });
