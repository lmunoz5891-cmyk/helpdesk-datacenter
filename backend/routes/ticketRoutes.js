const express = require("express");

const router = express.Router();

const ticketController = require("../controllers/ticketController");

// Obtener todos
router.get("/tickets", ticketController.listarTickets);

// Obtener uno
router.get("/tickets/:id", ticketController.obtenerTicket);

// Crear
router.post("/tickets", ticketController.registrarTicket);

// Actualizar
router.put("/tickets/:id", ticketController.editarTicket);

// Eliminar
router.delete("/tickets/:id", ticketController.borrarTicket);

module.exports = router;