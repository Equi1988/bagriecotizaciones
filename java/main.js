// Ingreso de Datos
const guardarDatos = () => {
    guardarInfo();
    vaciarCampos();
    console.log("Los Datos se han guardado correctamente!");
}

const recuperarDatos = () => {
    let usuario = recuperarInfo();
    document.getElementById("nombre").value = usuario.namelUser;
    document.getElementById("dni").value = usuario.dniUser;
    document.getElementById ("monto").value = usuario.montoUser;
    document.getElementById ("plazo").value = usuario.plazoUser;
    console.log("Los datos se recuperaron correctamente!");
}


const borrarDatos = () => {
    vaciarCampos();
    localStorage.removeItem("usuario");
    // localStorage.removeItem("identificadorDni");
    // localStorage.removeItem("monto");
    console.log("Los datos se vaciaron correctamente!");
}

const vaciarCampos = () => {
    document.getElementById("nombre", "nombreUsuario").value = "";
    document.getElementById("dni", "dniUsuario").value = "";
    document.getElementById ("monto", "montoUsuario").value = "";
    document.getElementById ("plazo").value ="";
}

const guardarInfo = () => {
    let nombreYapellido = document.getElementById("nombre").value;
    let identificadorDni = document.getElementById("dni").value;
    let monto = document.getElementById ("monto").value;
    let plazo = document.getElementById ("plazo").value;
    const usuario = {namelUser:nombreYapellido, dniUser:identificadorDni, montoUser:monto, plazoUser: plazo,};
    localStorage.setItem("usuario", JSON.stringify(usuario));
}

const recuperarInfo = () => {
    return JSON.parse(localStorage.usuario);
}

document.getElementById("btnGuardar").addEventListener("click", guardarDatos);
document.getElementById("btnRecuperar").addEventListener("click", recuperarDatos);
document.getElementById("btnBorrar").onclick = borrarDatos;

// Seleccion Producto

let producto = document.getElementById("producto");
producto.onchange = () => {
    document.getElementById("resultado").innerHTML = "Seleccionaste: <b>" + producto.value + "</b>";
}

function mostrarResultado(checkOption) {
    
    const resultadoDiv = document.getElementById("resultado").innerHTML ="Seleccionaste: <b>" + producto.value + "</b>";
    if (checkOption === 1) {
        resultadoDiv.innerHTML = "Eres un cliente:" + checkOption.value;
        console.log(resultadoDiv);
    } else if (checkOption === 2) {
        resultadoDiv.innerHTML = "No eres cliente.";
        console.log(resultadoDiv);
    } else {
        resultadoDiv.innerHTML = "Tipo de cliente desconocido.";
    }
}

// Llama a la función con el tipo de cliente apropiado (1 o 2)
mostrarResultado();

