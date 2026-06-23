const db = require('../models/database');

// Lógica para obtener registros
exports.obtenerTodos = (req, res) => {
    db.all("SELECT * FROM registros ORDER BY fecha DESC", [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ registros: rows });
    });
};

// Lógica para guardar un registro
exports.crearUno = (req, res) => {
    const { texto } = req.body;
    if (!texto) {
        return res.status(400).json({ error: "El campo texto es requerido" });
    }

    db.run("INSERT INTO registros (texto) VALUES (?)", [texto], function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: "Dato almacenado con éxito", id: this.lastID });
    });
};

// Lógica para BORRAR un registro (Nueva función del sistema nervioso)
exports.eliminarUno = (req, res) => {
    const { id } = req.params;
    
    db.run("DELETE FROM registros WHERE id = ?", [id], function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (this.changes === 0) {
            return res.status(404).json({ error: "Registro no encontrado" });
        }
        res.json({ message: `Registro ${id} eliminado de la memoria` });
    });
};
