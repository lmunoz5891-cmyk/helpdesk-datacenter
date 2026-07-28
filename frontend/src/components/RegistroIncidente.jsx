import { useState } from "react";
import API from "../services/api";

function RegistroIncidente() {

    const [ticket, setTicket] = useState({
        titulo: "",
        descripcion: "",
        categoria: "Red",
        prioridad: "Alta",
        estado: "Abierto"
    });

const cambiarValor = (e) => {

    const valorLimpio = e.target.value
        .replace(/</g, "")
        .replace(/>/g, "")
        .replace(/script/gi, "");

    setTicket({
        ...ticket,
        [e.target.name]: valorLimpio
    });

};

    const guardarTicket = async (e) => {

        e.preventDefault();

        try {

            await API.post("/tickets", ticket);

            alert("Ticket registrado correctamente");

            setTicket({
                titulo: "",
                descripcion: "",
                categoria: "Red",
                prioridad: "Alta",
                estado: "Abierto"
            });

            window.location.reload();

        } catch (error) {

            console.error(error);

            alert("Error al registrar el ticket");

        }

    };

    return (

        <section className="card">

            <h2>Registrar Incidente</h2>

            <form onSubmit={guardarTicket}>

                <label>Título</label>

                <input
                    type="text"
                    name="titulo"
                    value={ticket.titulo}
                    onChange={cambiarValor}
                    required
                />

                <label>Categoría</label>

                <select
                    name="categoria"
                    value={ticket.categoria}
                    onChange={cambiarValor}
                >

                    <option value="Red">Red</option>
                    <option value="Hardware">Hardware</option>
                    <option value="Software">Software</option>

                </select>

                <label>Prioridad</label>

                <select
                    name="prioridad"
                    value={ticket.prioridad}
                    onChange={cambiarValor}
                >

                    <option value="Alta">Alta</option>
                    <option value="Media">Media</option>
                    <option value="Baja">Baja</option>

                </select>

                <label>Descripción</label>

                <textarea
                    rows="5"
                    name="descripcion"
                    value={ticket.descripcion}
                    onChange={cambiarValor}
                    required
                ></textarea>

                <button type="submit">

                    Registrar

                </button>

            </form>

        </section>

    );

}

export default RegistroIncidente;