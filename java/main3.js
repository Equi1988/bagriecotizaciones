// ENTRADA DE DATOS

let nombreCliente = prompt("Ingrese su Nombre y Apellido: (ESC para salir)");
let identificadorDni = prompt ("Ingrese su DNI: ");

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

    if (textoSosCliente == 2){
        continue;
}

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


// let textoTasa = "Ingrese tipo de Tasa\n\n";
//     textoTasa += "1= 30%\n";
//     textoTasa += "2= 40%\n";
//     textoTasa += "3= 50%\n";
//     textoTasa += "4= 60%\n";

// let Tasa = parseInt(prompt("Ingrese Tasa a cotizar segun plazo: "))    

// Chequeando como llegan los datos ingresados
    console.log("Cliente: " + nombreCliente);
    console.log ("Tipo Cliene: " + cliente);
    // console.log ("Tipo Plazo Fijo:  "+ tipoPlazoFijo);
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



    // let fechaVto = calcularFechaVto (fechaActual, plazo);
    // let fechaVtoplazofijo = fechaVto;


    // SALIDA DE DATOS
informarPlazoFijo(nombreCliente, cliente, monto, plazo, plazoFijoCobrar, fechaContatenada,fechaVtoContatenada);
nombreCliente = prompt("Ingrese otro Nombre y Apellido: (ESC para salir)");
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

function informarPlazoFijo (nombreCliente, cliente, monto, plazo, plazoFijoCobrar, fechaContatenada, fechaVtoContatenada) {
    let textoPlazo;

    if (plazo == 1) {
        textoPlazo = 30;
    } else if (plazo == 2){
        textoPlazo = 60;
    } else if (plazo ==3){
        textoPlazo = 90;
    } else{
        textoPlazo = 120;
    }

    alert("Cliente: " + nombreCliente + "\nTipo de Cliente: " + cliente + "\nMonto: $" + monto + "\nPlazo: " + textoPlazo + "\nIntereses ganados: " + plazoFijoCobrar.toFixed(2) + "\nFecha Constitucion: " + fechaContatenada  + "\nFecha vto: "+ fechaVtoContatenada );
}

