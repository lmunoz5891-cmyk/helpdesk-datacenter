const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 3000;

const ticketRoutes = require("./backend/routes/ticketRoutes");

// Habilitar CORS
app.use(cors());

// Leer JSON
app.use(express.json());

// Ruta de prueba
app.get("/", (req, res) => {
    res.send("Servidor funcionando correctamente");
});

// Rutas
app.use("/", ticketRoutes);

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});