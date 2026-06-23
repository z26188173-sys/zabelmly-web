const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Crear o abrir el archivo de la base de datos en la raíz
const dbPath = path.join(__dirname, '../../database.sqlite');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('❌ Error al conectar a SQLite:', err.message);
    } else {
        console.log('💾 Conectado con éxito a la base de datos SQLite.');
    }
});

// Crear una tabla de prueba si no existe
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS registros (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            texto TEXT NOT NULL,
            fecha DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);
});

module.exports = db;
