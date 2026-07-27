import { useEffect, useState } from "react";
import API from "../services/api";

function ListaTickets() {

    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        cargarTickets();
    }, []);

    const cargarTickets = async () => {

        try {

            const respuesta = await API.get("/tickets");

            setTickets(respuesta.data);

        } catch (error) {

            console.error(error);

        }

    };

    const cerrarTicket = async (ticket) => {

        try {

            await API.put(`/tickets/${ticket.id}`, {
                titulo: ticket.titulo,
                descripcion: ticket.descripcion,
                categoria: ticket.categoria,
                prioridad: ticket.prioridad,
                estado: "Cerrado"
            });

            cargarTickets();

        } catch (error) {

            console.error(error);

            alert("Error al actualizar el ticket");

        }

    };

    const eliminarTicket = async (id) => {

    const confirmar = window.confirm(
        "¿Está seguro de eliminar este ticket?"
    );

    if (!confirmar) return;

    try {

        await API.delete(`/tickets/${id}`);

        cargarTickets();

    } catch (error) {

        console.error(error);

        alert("Error al eliminar el ticket");

    }

};

    return (

        <section className="card">

            <h2>Listado de Tickets</h2>

            <table>

                <thead>

                    <tr>

                        <th>ID</th>
                        <th>Título</th>
                        <th>Categoría</th>
                        <th>Prioridad</th>
                        <th>Estado</th>
                        <th>Acciones</th>

                    </tr>

                </thead>

                <tbody>

                    {tickets.map((ticket) => (

                        <tr key={ticket.id}>

                            <td>{ticket.id}</td>
                            <td>{ticket.titulo}</td>
                            <td>{ticket.categoria}</td>
                            <td>{ticket.prioridad}</td>
                            <td>{ticket.estado}</td>

                            <td>

    {ticket.estado !== "Cerrado" && (

        <button
            onClick={() => cerrarTicket(ticket)}
        >
            Cerrar
        </button>

    )}

    {" "}

    <button
        onClick={() => eliminarTicket(ticket.id)}
    >
        Eliminar
    </button>

</td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </section>

    );

}

export default ListaTickets;