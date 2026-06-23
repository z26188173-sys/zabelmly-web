const express = require('express');
const router = express.Router();
const datosController = require('../controllers/datosController');

// Definición de impulsos (Rutas)
router.get('/datos', datosController.obtenerTodos);
router.get('/datos/:id', datosController.obtenerUno); // <-- ¡NUEVA RUTA DINÁMICA!
router.post('/datos', datosController.crearUno);
router.delete('/datos/:id', datosController.eliminarUno);

module.exports = router;
