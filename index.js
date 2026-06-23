const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// 1. MIDDLEWARES (Configuraciones de seguridad y lectura de datos)
app.use(express.json()); // Para que tu servidor entienda JSON
app.use(express.urlencoded({ extended: true })); // Para entender formularios HTML

// 2. ARCHIVOS ESTÁTICOS (Tu Frontend)
app.use(express.static(path.join(__dirname, 'public')));

// 3. RUTAS (Próximamente las separaremos aquí)
app.get('/api/status', (req, res) => {
    res.json({ 
        status: "online", 
        message: "El sistema nervioso central está activo",
        timestamp: new Date()
    });
});

// 4. ENCENDER SERVIDOR
app.listen(PORT, () => {
    console.log(`🧠 Servidor estructurado corriendo en http://localhost:${PORT}`);
});
