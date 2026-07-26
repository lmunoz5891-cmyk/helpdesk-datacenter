const express = require("express");

const app = express();

const PORT = 3000;

const ticketRoutes = require("./backend/routes/ticketRoutes");

app.use(express.json());

// Ruta de prueba
app.get("/", (req, res) => {
    res.send("Servidor funcionando correctamente");
});

// Rutas
app.use("/", ticketRoutes);

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});