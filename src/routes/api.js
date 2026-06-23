const express = require('express');
const router = express.Router();
const datosController = require('../controllers/datosController');

// Definición de impulsos (Rutas) conectadas a sus neuronas (Controladores)
router.get('/datos', datosController.obtenerTodos);
router.post('/datos', datosController.crearUno);
router.delete('/datos/:id', datosController.eliminarUno); // <-- Nueva vía de eliminación

module.exports = router;
