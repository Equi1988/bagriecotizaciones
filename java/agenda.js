document.addEventListener('DOMContentLoaded', () =>{
    const form = document.getElementById('formulario_cita');
    const citaList = document.getElementById('listadoCitas');

    cargarCita();

    form.addEventListener('submit', (event) =>{
        event.preventDefault();
        const name = document.getElementById('name').value;
        const apellido = document.getElementById('apellido').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const email = document.getElementById('email').value;

        const agendaCita ={
            name,
            apellido,
            date,
            time,
            email
        };
        guardarCita(agendaCita);
        mostrarCita(agendaCita);
    
    } );


    function guardarCita(agendaCita){
        let citas = JSON.parse(localStorage.getItem('citas')) || [];
        citas.push(agendaCita);
        localStorage.setItem('citas', JSON.stringify(citas));
    }

    function cargarCita() {
        const citas = JSON.parse(localStorage.getItem('citas')) || [];
        const emailUsuarioActual = 'correo@example.com'; // ¡Reemplaza esto con el correo del usuario actual!
    
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
            Correo Electrónico: ${agendaCita.email}
        `;
    
        // Llama a SweetAlert para mostrar los detalles de la cita
        Swal.fire({
            title: 'Detalles de la Cita',
            text: mensaje,
            icon: 'sucess',
            confirmButtonText: 'Entendido'
        });
        // También puedes seguir agregando la cita a la lista si lo deseas
        const li = document.createElement('li');
        li.textContent = mensaje;
        citaList.appendChild(li);
    }    
});
