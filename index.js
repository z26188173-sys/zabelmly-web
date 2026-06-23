const express = require('express');
const path = require('path');
const apiRoutes = require('./src/routes/api'); // <-- Nueva línea

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// API ENDPOINTS
app.use('/api', apiRoutes); // <-- Conectamos las rutas de la base de datos

app.get('/api/status', (req, res) => {
    res.json({ 
        status: "online", 
        message: "El sistema nervioso central está activo",
        timestamp: new Date()
    });
});

app.listen(PORT, () => {
    console.log(`🧠 Servidor estructurado corriendo en http://localhost:${PORT}`);
});

