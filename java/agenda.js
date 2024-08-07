document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formulario_agenda");

    cargarCita();

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = document.getElementById("name").value.trim();
        const apellido = document.getElementById("apellido").value.trim();
        const date = document.getElementById("date").value.trim();
        const time = document.getElementById("time").value.trim();
        const email = document.getElementById("email").value.trim();
        const text = document.getElementById("text").value.trim();

        // Validar que todos los campos estén completos
        if (!name || !apellido || !date || !time || !email || !text) {
            Swal.fire({
                title: "Campos incompletos",
                text: "Por favor, completa todos los campos antes de continuar.",
                icon: "error",
                confirmButtonText: "Entendido"
            });
            return;
        }

        // Validar que la fecha no sea anterior a la fecha actual
        const fechaActual = new Date().toISOString().split("T")[0];
        if (date < fechaActual) {
            Swal.fire({
                title: "Fecha inválida",
                text: "No puedes seleccionar una fecha anterior a la actual.",
                icon: "error",
                confirmButtonText: "Entendido"
            });
            return;
        }

        const agendaCita = {
            name,
            apellido,
            date,
            time,
            email,
            text
        };
        guardarCita(agendaCita);
        mostrarCita(agendaCita);
    });

    function guardarCita(agendaCita) {
        let citas = JSON.parse(localStorage.getItem("citas")) || [];
        citas.push(agendaCita);
        localStorage.setItem("citas", JSON.stringify(citas));
    }

    function cargarCita() {
        const citas = JSON.parse(localStorage.getItem("citas")) || [];
        const emailUsuarioActual = 'correo@example.com';

        const citaUsuarioActual = citas.find(agendaCita => agendaCita.email === emailUsuarioActual);
        if (citaUsuarioActual) {
            mostrarCita(citaUsuarioActual);
        }
    }

    function mostrarCita(agendaCita) {
        const mensaje = `
            Nombre: ${agendaCita.name}
            Apellido: ${agendaCita.apellido}
            Fecha: ${agendaCita.date}
            Hora: ${agendaCita.time}
            Tipo Operacion: ${agendaCita.text}
            Correo Electrónico: ${agendaCita.email}
        `;

        // Llama a SweetAlert para mostrar los detalles de la cita
        Swal.fire({
            title: "Detalles de la Cita",
            text: mensaje,
            icon: "success",
            confirmButtonText: "Entendido"
        });
    }
});
