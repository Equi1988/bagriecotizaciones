// Ingreso de Datos
const guardarDatos = () => {
    // guardarInfo();
    vaciarCampos();
    // console.log("Los Datos se han guardado correctamente!");
}

// const recuperarDatos = () => {
//     let usuario = recuperarInfo();
//     document.getElementById("nombre").value = usuario.namelUser;
//     document.getElementById("dni").value = usuario.dniUser;
//     document.getElementById ("monto").value = usuario.montoUser;
//     document.getElementById ("plazo").value = usuario.plazoUser;
//     document.getElementById ("detalleFecha").textContent = usuario.detalleFechaUser;
//     document.getElementById ("detalleMonto").textContent =usuario.detalleMontoUser;
//     document.getElementById ("detallePlazo").textContent =usuario.detallePlazoUser;
//     document.getElementById ("detalleTasa").textContent =usuario.detalleTasaUser;
//     document.getElementById ("resultadoPlazoFijo").textContent =usuario.resultadoPlazoFijo;
//     document.getElementById ("detalleFechaVTO").textContent =usuario.detalleFechaVto;
//     console.log("Los datos se recuperaron correctamente!");
// }


const borrarDatos = () => {
    // Guardar los valores actuales de los campos
    const nombreActual = document.getElementById("nombre").value;
    const dniActual = document.getElementById("dni").value;
    const montoActual = document.getElementById("monto").value;
    const plazoActual = document.getElementById("plazo").value;
    const fechaActual = document.getElementById ("detalleFecha").textContent;
    const detalleMontoActual = document.getElementById ("detalleMonto").textContent;
    const detallePlazo = document.getElementById ("detallePlazo").textContent;
    const detalleTasa = document.getElementById ("detalleTasa").textContent;
    const resultadoPlazoFijo =document.getElementById ("resultadoPlazoFijo").textContent;
    const fechaVtoActual = document.getElementById ("detalleFechaVTO").textContent;


    // Vaciar los campos
    vaciarCampos();
    Swal.fire({
        title: "¿Estás seguro?",
        text: "No podrás recuperar los datos.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, borrar"
    }).then((result) => {
        if (result.isConfirmed) {
            // Si se confirma, borrar los datos
            localStorage.removeItem("usuario");
            Swal.fire("¡Borrado!", "Se han eliminado los datos.", "success");
            console.log("Los datos se vaciaron correctamente!");
        } else {
            // Si se cancela, restaurar los valores
            document.getElementById("nombre").value = nombreActual;
            document.getElementById("dni").value = dniActual;
            document.getElementById("monto").value = montoActual;
            document.getElementById ("plazo").value = plazoActual;
            document.getElementById ("detalleFecha").textContent = fechaActual;
            document.getElementById ("detalleMonto").textContent = detalleMontoActual;
            document.getElementById ("detallePlazo").textContent = detallePlazo;
            document.getElementById ("detalleTasa").textContent = detalleTasa;
            document.getElementById ("resultadoPlazoFijo").textContent = resultadoPlazoFijo;
            document.getElementById ("detalleFechaVTO").textContent = fechaVtoActual;
        }
    });
};


const vaciarCampos = () => {
    document.getElementById("nombre", "nombreUsuario").value = "";
    document.getElementById("dni", "dniUsuario").value = "";
    document.getElementById ("monto", "montoUsuario").value = "";
    document.getElementById ("plazo").value = "Seleccion";
    document.getElementById ("detalleFecha").textContent ="";
    document.getElementById ("detalleMonto").textContent ="";
    document.getElementById ("detallePlazo").textContent ="";
    document.getElementById ("detalleTasa").textContent ="";
    document.getElementById ("resultadoPlazoFijo").textContent ="";
    document.getElementById ("detalleFechaVTO").textContent ="";
}

// const guardarInfo = () => {
//     let nombreYapellido = document.getElementById("nombre").value;
//     let identificadorDni = document.getElementById("dni").value;
//     let monto = document.getElementById ("monto").value;
//     let plazo = document.getElementById ("plazo").value;
//     const usuario = {namelUser:nombreYapellido, dniUser:identificadorDni, montoUser:monto, plazoUser: plazo,};
//     localStorage.setItem("usuario", JSON.stringify(usuario));
// }

// const recuperarInfo = () => {
//     return JSON.parse(localStorage.usuario);
// }

// document.getElementById("btnGuardar").addEventListener("click", guardarDatos);
// document.getElementById("btnRecuperar").addEventListener("click", recuperarDatos);
document.getElementById("btnBorrar").onclick = borrarDatos;

// Seleccion Producto

// // Llama a la función con el tipo de cliente apropiado (1 o 2)
// mostrarResultado();

    const clienteRadio = document.getElementById('cliente');
    const noClienteRadio = document.getElementById('nocliente');
    const productoSelect = document.getElementById('producto');
    const resultadoDiv = document.getElementById('resultado');
    const resultadoNoClienteDiv = document.getElementById('resultadoNoCliente');

    // Función para actualizar el resultado según el producto seleccionado
    function actualizarResultado() {
        const productoElegido = productoSelect.value;
        resultadoDiv.innerHTML = `Producto seleccionado: ${productoElegido}`;
        console.log(productoElegido);
    

    clienteRadio.addEventListener('change', () => {
        if (clienteRadio.checked) {
            productoSelect.style.display = 'block';
            actualizarResultado();
            resultadoNoClienteDiv.innerHTML = ''; // Limpia el resultado de "No Cliente"
        }
    });

    noClienteRadio.addEventListener('change', () => {
        if (noClienteRadio.checked) {
            productoSelect.style.display = 'none';
            resultadoNoClienteDiv.innerHTML = '¡Gracias por considerarnos!';
            resultadoDiv.innerHTML = ''; // Limpia el resultado de "Cliente"
        }
    });

}
    // Actualiza el resultado inicialmente (por si el usuario ya seleccionó un producto)
    actualizarResultado();