// Bienvenidos

alert ("¡Bienvenidos a BagRie Cotizaciones!");

// ENTRADA DE DATOS


let nombreCliente= prompt("Ingrese su Nombre y Apellido: (ESC para salir)");
localStorage.setItem("Nombre y Apellido",nombreCliente);
// const nombres = [ "Ezequiel Riente", "Soledad Sanguineti", "Damian Cerezo", "Facundo Rodriguez"];


//     let posArray = nombres.indexOf(nombreCliente);
//     if (posArray >= 0) {
//         alert("El nombre se encuentra en la posición: " + posArray)
//     } else {
//         alert("Error! No existe el nombre ingresado!");
//     } 

    let identificadorDni = prompt ("Ingrese su DNI: ");
    localStorage.setItem("DNI",identificadorDni);

    let clienteTipo;
    let textoTipoCliente;

//Metodo Objeto

nombreCliente = formatearnombreCliente (nombreCliente);

function formatearnombreCliente (nombreCliente){
    return nombreCliente.trim().toUpperCase();
}

while (nombreCliente != "ESC"){

    if (nombreCliente.toUpperCase() == "ESC") {
        break;
    }

let textoSosCliente ="¿Sos Cliente?\n\n";
    textoSosCliente += "1-Si\n";
    textoSosCliente += "2-No";
let cliente = parseInt (prompt (textoSosCliente));

function seleccionarPaqueteServicios() {
    let textoTipoCliente = "Ingrese su Paquete de Servicios:\n\n";
    textoTipoCliente += "1-Premium\n";
    textoTipoCliente += "2-Premium World\n";
    textoTipoCliente += "3-Advanced\n";
    textoTipoCliente += "4-Standard";

    if (cliente === 2) {
        console.log("El usuario no es cliente.");
    } else if (cliente === 1) {
        clienteTipo = parseInt(prompt(textoTipoCliente));
    } else {
        return cliente;
    }

    switch (clienteTipo) {
        case 1:
            console.log("Cliente seleccionó Premium");
            break;
        case 2:
            console.log("Cliente seleccionó Premium World");
            break;
        case 3:
            console.log("Cliente seleccionó Advanced");
            break;
        case 4:
            console.log("Cliente seleccionó Standard");
            break;
        default:
            console.log("Opción no válida. Debes seleccionar 1, 2, 3 o 4.");
    }
}
seleccionarPaqueteServicios();

// let textoTipoPlazoFijo ="Ingrese tipo de Plazo Fijo:\n\n";
//     textoTipoPlazoFijo += "1-Plazo Fijo en pesos\n";
//     // textoTipoPlazoFijo += "2-Plazo Fijo en dólares (sólo clientes)";
// let tipoPlazoFijo = parseInt (prompt (textoTipoPlazoFijo));

let monto = parseInt(prompt("Ingrese el Monto:(Minimo $ 1000)")); 

let textoPlazo ="Ingrese tipo de Plazo:\n\n";
    textoPlazo +="1-30 dias\n";  
    textoPlazo +="2-60 dias\n";
    textoPlazo +="3-90 dias\n";
    textoPlazo +="4-Mas dias";
let plazo = parseInt (prompt (textoPlazo)); 

const fechaActual = new Date ();
const dia = fechaActual.getDate();
const mes = fechaActual.getMonth() + 1;
const anio = fechaActual.getFullYear();
const fechaContatenada = (dia + "/" + mes + "/" + anio);

// Chequeando como llegan los datos ingresados
    console.log("Cliente: " + nombreCliente);
    console.log ("Tipo Cliene: " + cliente);
    console.log("Monto: $" + monto);
    console.log ("Plazo: " + plazo);
    console.log (fechaActual);
    console.log (dia);
    console.log (mes);
    console.log (anio);
    console.log (fechaContatenada);

    // PROCESAMIENTO DE DATOS
    let plazoFijoPuro = calcularPlazoFijoPuro (monto, plazo);
    let plazoFijoTNA = calcularTNA (plazo, plazoFijoPuro);
    let plazoFijoCobrar = plazoFijoTNA;
    let plazoFijodias= calcularFechaVto (plazo);
    let fechaVto = plazoFijodias;

    const diaVto = fechaVto.getDate();
    const mesVto = fechaVto.getMonth() + 1;
    const anioVto = fechaVto.getFullYear();
    const fechaVtoContatenada = (diaVto + "/" + mesVto + "/" + anioVto);

    console.log (fechaVtoContatenada);

    // SALIDA DE DATOS
informarPlazoFijo(nombreCliente, cliente, clienteTipo, monto, plazo, plazoFijoCobrar, fechaContatenada,fechaVtoContatenada);

nombreCliente = prompt("Ingrese otro Nombre y Apellido: (ESC para salir)");

const nombres = [ "Ezequiel Riente", "Soledad Sanguineti", "Damian Cerezo", "Juan Manuel Palavecino"];

let postArray = nombres.indexOf(nombreCliente);
    if (postArray >= 0) {
        alert("El nombre se encuentra en la posición: " + postArray)
    } else {
        alert("Error! No existe el nombre ingresado!");
    } 

identificadorDni = prompt ("Ingrese su DNI: ");

const DNI = [ "33944482", "33346119", "12459789", "28144044"];


    let posteriorArray = nombres.indexOf(nombreCliente);
    if (posteriorArray >= 0) {
        alert("El DNI se encuentra en la posición: " + posteriorArray)
    } else {
        alert("Error! No existe el DNI ingresado!");
    } 

}

function calcularFechaVto(plazo) {
    const fechaActual = new Date();
    let diasASumar;
    switch (plazo) {
        case 1:
            diasASumar = 30;
            break;
        case 2:
            diasASumar = 60;
            break;
        case 3:
            diasASumar = 90;
            break;
        case 4:
            diasASumar = 120;
            break;
        default:
        return "Plazo no válido. Debes proporcionar 1, 2, 3 o 4.";
    }
    const fechaVto = sumarDias(fechaActual, diasASumar);
    return fechaVto;
}
function sumarDias (fecha, plazo){
    fecha.setDate (fecha.getDate () + plazo);
    return fecha;
}
function calcularPlazoFijoPuro (monto, plazo){
    return (monto * plazo); 
}
function calcularTNA (plazo, plazoFijoPuro){
    let TNA;
    if (plazo == 1) {
        TNA = 30/12;
    } else if (plazo == 2) {
        TNA = 40/12;
    } else if (plazo == 3){
        TNA = 50/12;
    } else{
        TNA = 60/12;
    }
    return (plazoFijoPuro * TNA)/100;
}

function informarPlazoFijo (nombreCliente, cliente, clienteTipo, monto, plazo, plazoFijoCobrar, fechaContatenada, fechaVtoContatenada) {
    let textoPlazo;
    let textoTipoCliente;

    if (plazo == 1) {
        textoPlazo = 30;
    } else if (plazo == 2){
        textoPlazo = 60;
    } else if (plazo ==3){
        textoPlazo = 90;
    } else{
        textoPlazo = 120;
    }
        if (clienteTipo == 1) {
            textoTipoCliente = "Premium";
        } else if (clienteTipo == 2) {
            textoTipoCliente = "Premium World";
        } else if (clienteTipo == 3) {
            textoTipoCliente = "Advanced";
        } else {
            textoTipoCliente = "Advanced";
        }

    alert("Cliente: " + nombreCliente + "\nCliente (1 = Si / 2 = No): " + cliente + "\nTipo de Cliente: " + clienteTipo + "\nMonto: $" + monto + "\nPlazo: " + textoPlazo + "\nIntereses ganados: " + plazoFijoCobrar.toFixed(2) 
    + "\nFecha Constitucion: " + fechaContatenada  + "\nFecha vto: "+ fechaVtoContatenada );
}





