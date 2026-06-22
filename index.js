const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('<h1>¡Servidor zabelmly-web iniciado con éxito desde GitHub!</h1>');
});

app.listen(PORT, () => {
    console.log(`Servidor local corriendo en http://localhost:${PORT}`);
});
