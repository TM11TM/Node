import express from 'express';

// configuracion
const cfg = {
  port: process.env.PORT || 3000,
};

// Iniciar express
const app = express();

// Servir archivos estáticos desde la carpeta "static"
app.use(express.static('static'));

// Ruta principal
app.get('/', (req, res) => {
  res.send('Hola mundo');
});

// Escuchar peticiones
app.listen(cfg.port, () => {
  console.log(`Server running at http://localhost:${cfg.port}/`);
});
