// Declaración de variables
let monto, plazo;

// Relación entre plazos y tasas
const tasasPorPlazo = {
    30: 35,
    60: 35,
    90: 33,
    120: 33,
};

// Función para calcular el plazo fijo
function calcularPlazoFijo(monto, plazo) {
    const tasa = tasasPorPlazo[plazo];
    if (tasa === undefined) {
        console.error("Tasa no definida para el plazo seleccionado.");
        return;
    }

    const resultado = (monto * plazo * tasa / 100) / 365;
    const fechaActual = new Date().toLocaleDateString();
    const fechaVencimiento = new Date();
    fechaVencimiento.setDate(fechaVencimiento.getDate() + plazo);
    const fechaVTO = fechaVencimiento.toLocaleDateString();

    // Actualización de los elementos en el HTML
    document.getElementById("resultadoPlazoFijo").textContent = `Interés Ganado: $${resultado.toFixed(2)}`;
    document.getElementById("detalleFecha").textContent = `Fecha: ${fechaActual}`;
    document.getElementById("detalleMonto").textContent = `Monto: $${monto.toFixed(2)}`;
    document.getElementById("detallePlazo").textContent = `Plazo: ${plazo} días`;
    document.getElementById("detalleTasa").textContent = `Tasa: ${tasa}%`;
    document.getElementById("detalleFechaVTO").textContent = `Fecha VTO: ${fechaVTO}`;
    
}

// Asignación de eventos al botón "Cotizar"
const btnCotizar = document.getElementById("btnCotizar");

btnCotizar.addEventListener("click", (event) => {
    event.preventDefault();
    monto = parseFloat(document.getElementById("monto").value);
    plazo = parseInt(document.getElementById("plazo").value);

    // Validación de campos
    if (isNaN(monto) || isNaN(plazo)) {
        Swal.fire({
            icon: "error",
            title: "Campos incompletos",
            text: "Por favor, completa todos los campos.",
        });
        return;
    }

    calcularPlazoFijo(monto, plazo); // Llamada a la función
});

