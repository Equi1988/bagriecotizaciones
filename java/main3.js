// ENTRADA DE DATOS

let nombreCliente = prompt("Ingrese su Nombre y Apellido: (ESC para salir)");

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
    console.log("Plazo: " + plazo);

// PROCESAMIENTO DE DATOS
    let plazoFijoPuro = calcularPlazoFijoPuro (monto, plazo);
    let plazoFijoTNA = calcularTNA (plazo, plazoFijoPuro);
    let plazoFijoCobrar = plazoFijoTNA;

// SALIDA DE DATOS
informarPlazoFijo(nombreCliente, cliente, monto, plazo, plazoFijoCobrar);
nombreCliente = prompt("Ingrese otro Nombre y Apellido: (ESC para salir)");

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

function informarPlazoFijo (nombreCliente, cliente, monto, plazo, plazoFijoCobrar) {
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

    alert("Cliente: " + nombreCliente + "\nTipo de Cliente: " + cliente + "\nMonto: $" + monto + "\nPlazo: " + textoPlazo + "\nIntereses a Pagar: " + plazoFijoCobrar.toFixed(2));
}

class Persona {

constructor (nombreCliente, cliente, plazoFijoCobrar){

    this.nombre = nombreCliente;
    this.cliente = cliente;
    this.plazoFijoCobrar = plazoFijoCobrar;

    saludar = () => {
    
    console.log ("Hola, estos son tus datos" + nombre + cliente + plazoFijoCobrar);

    }

    const persona1 = new Persona (nombreCliente, cliente, plazoFijoCobrar);
    console.log (persona1);

}

}