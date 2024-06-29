
// ENTRADA DE DATOS
let nombreCliente = prompt("Ingrese su Nombre y Apellido: (ESC para salir)");

while (nombreCliente != "ESC") {
    // let textoTipoCliente = "Ingrese su Paquete de Servicios:\n\n";
    // textoTipoCliente += "1-BBVA Premium\n";
    // textoTipoCliente += "2-BBVA Premiun World\n";
    // textoTipoCliente += "3-BBVA Advanced\n";
    // textoTipoCliente += "4-BBVA Standard";
    // let tipoCliente = parseInt(prompt(textoTipoCliente));
    let monto = parseInt(prompt("Ingrese el Monto: ($10000 - $1000000"));
    let textoTasa = "Ingrese Tasa:\n\n";
    textoTasa += "1-40%\n";
    textoTasa += "2-60%\n";
    textoTasa += "3-90%\n";
    textoTasa += "4-120%";
    let tasa = parseInt (prompt (textoTasa));
    let textoPlazo = "Ingrese el Plazo:\n\n";
    textoPlazo += "1- 30 dias\n";
    textoPlazo += "2- 60 dias\n";
    textoPlazo += "3- 90 dias\n";
    textoPlazo += "4- 120 dias";
    let plazo = parseInt(prompt(textoPlazo));

    // PROCESAMIENTO DE DATOS
    let plazofijoPuro = calcularPlazoFijoPuro(monto, plazo);
    let plazofijoTNA =  calcularplazofijoTNA(tasa, plazofijoPuro);
    let interesapagar = plazofijoTNA;

    // SALIDA DE DATOS
    informarPlazoFjo(nombreCliente, monto, plazo, tasa, interesapagar);
    nombreCliente = prompt("Ingrese otro Nombre y Apellido: (ESC para salir)");
}

function calcularPlazoFijoPuro(monto, plazo, tasa) {
    return (monto * plazo * tasa/100 / 365) ;
}

function calcularplazofijoTNA(tasa, plazofijoPuro) {
    let TNA;

    if (tasa == 1) {
        TNA = 40 / 100;
    } else if (tasa == 2) {
        TNA = 60 / 100;
    } else if (tasa == 3) {
        TNA = 90 / 100;
    } else  {
        TNA = 120 / 100;
    }

    return (plazofijoPuro * TNA)/100;
}

function informarPlazoFjo(nombre, monto, plazo, tasa) {
    let textoPlazo;

    if (plazo == 1) {
        textoPlazo = 30;
    } else if (plazo == 2) {
        textoPlazo = 60;
    } else if (plazo = 3) {
        textoPlazo = 90;
    } else {
        textoPlazo = 120;
    }

alert("Cliente: " + nombre + "\nMonto: $" + monto + "\nPlazo: "  + tasa);
}