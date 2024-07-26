// Declaración de variables
let monto, plazo;

// Relación entre plazos y tasas
const tasasPorPlazo = {
    30: 30,
    60: 40,
    90: 50,
    120: 60,
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

    // Actualización de los elementos en el HTML
    document.getElementById("resultadoPlazoFijo").textContent = `Interés Ganado: $${resultado.toFixed(2)}`;
    document.getElementById("detalleFecha").textContent = `Fecha: ${fechaActual}`;
    document.getElementById("detalleMonto").textContent = `Monto: $${monto.toFixed(2)}`;
    document.getElementById("detallePlazo").textContent = `Plazo: ${plazo} días`;
    document.getElementById("detalleTasa").textContent = `Tasa: ${tasa}%`;
}

// Asignación de eventos al botón "Cotizar"
const btnCotizar = document.getElementById('btnCotizar');

btnCotizar.addEventListener('click', (event) => {
    event.preventDefault();
    monto = parseFloat(document.getElementById('monto').value);
    plazo = parseInt(document.getElementById('plazo').value);

    calcularPlazoFijo(monto, plazo); // Llamada a la función
});
