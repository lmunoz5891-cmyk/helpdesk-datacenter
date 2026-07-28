const Ticket = require("../models/ticketModel");

// Obtener todos
const listarTickets = async (req, res) => {

    const tickets = await Ticket.obtenerTickets();

    res.json(tickets);

};

// Obtener por ID
const obtenerTicket = async (req, res) => {

    const ticket = await Ticket.obtenerTicketPorId(req.params.id);

    if (!ticket) {
        return res.status(404).json({
            mensaje: "Ticket no encontrado"
        });
    }

    res.json(ticket);

};

// Crear
const registrarTicket = async (req, res) => {

    const nuevoTicket = await Ticket.crearTicket(req.body);

    res.status(201).json(nuevoTicket);

};

// Actualizar
const editarTicket = async (req, res) => {

    const ticket = await Ticket.actualizarTicket(req.params.id, req.body);

    if (!ticket) {
        return res.status(404).json({
            mensaje: "Ticket no encontrado"
        });
    }

    res.json(ticket);

};

// Eliminar
const borrarTicket = async (req, res) => {

    const ticket = await Ticket.eliminarTicket(req.params.id);

    if (!ticket) {
        return res.status(404).json({
            mensaje: "Ticket no encontrado"
        });
    }

    res.json({
        mensaje: "Ticket eliminado correctamente"
    });

};

module.exports = {
    listarTickets,
    obtenerTicket,
    registrarTicket,
    editarTicket,
    borrarTicket
};