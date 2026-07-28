const pool = require("../database");

// Obtener todos los tickets
const obtenerTickets = async () => {

    const resultado = await pool.query("SELECT * FROM tickets");

    return resultado.rows;

};

// Obtener ticket por ID
const obtenerTicketPorId = async (id) => {

    const resultado = await pool.query(
        "SELECT * FROM tickets WHERE id = $1",
        [id]
    );

    return resultado.rows[0];

};

// Crear ticket
const crearTicket = async (ticket) => {

    const { titulo, descripcion, categoria, prioridad, estado } = ticket;

    const resultado = await pool.query(
        `INSERT INTO tickets
        (titulo, descripcion, categoria, prioridad, estado)
        VALUES ($1,$2,$3,$4,$5)
        RETURNING *`,
        [titulo, descripcion, categoria, prioridad, estado]
    );

    return resultado.rows[0];

};

// Actualizar ticket
const actualizarTicket = async (id, ticket) => {

    const { titulo, descripcion, categoria, prioridad, estado } = ticket;

    const resultado = await pool.query(
        `UPDATE tickets
        SET titulo=$1,
            descripcion=$2,
            categoria=$3,
            prioridad=$4,
            estado=$5
        WHERE id=$6
        RETURNING *`,
        [titulo, descripcion, categoria, prioridad, estado, id]
    );

    return resultado.rows[0];

};

// Eliminar ticket
const eliminarTicket = async (id) => {

    const resultado = await pool.query(
        "DELETE FROM tickets WHERE id = $1 RETURNING *",
        [id]
    );

    return resultado.rows[0];

};

module.exports = {
    obtenerTickets,
    obtenerTicketPorId,
    crearTicket,
    actualizarTicket,
    eliminarTicket
};