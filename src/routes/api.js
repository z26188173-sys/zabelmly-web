const express = require('express');
const router = express.Router();
const db = require('../models/database');

// Endpoint para OBTENER todos los datos guardados (GET)
router.get('/datos', (req, res) => {
    db.all("SELECT * FROM registros ORDER BY fecha DESC", [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ registros: rows });
    });
});

// Endpoint para GUARDAR un nuevo dato (POST)
router.post('/datos', (req, res) => {
    const { texto } = req.body;
    if (!texto) {
        return res.status(400).json({ error: "El campo texto es requerido" });
    }

    db.run("INSERT INTO registros (texto) VALUES (?)", [texto], function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ 
            message: "Dato almacenado en la memoria del servidor", 
            id: this.lastID 
        });
    });
});

module.exports = router;
