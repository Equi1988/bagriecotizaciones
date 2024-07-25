// const btnCotizar = document.getElementById('btnCotizar');
//         const llenarTabla = document.querySelector('#lista-tabla tbody');

//         btnCotizar.addEventListener('click', (event) => {
//             event.preventDefault();
//             const monto = parseFloat(document.getElementById('monto').value);
//             const interes = parseFloat(document.getElementById('interes').value);
//             const plazo = parseInt(document.getElementById('plazo').value);
//             calcularPlazoFijo(monto, interes, plazo);
//         });

//         function calcularPlazoFijo(monto, interes, plazo) {
//             const resultado = (monto * plazo * interes / 100) / 365;
//             document.getElementById('resultado').textContent = `Resultado: $${resultado.toFixed(2)}`;
//         }

//             let fechaActual = new Date();
//             let pagoInteres = 0, pagoCapital = 0, cuota = 0;

//             cuota = monto * ((Math.pow(1 + interes / 100, plazo) * interes / 100) / 365);

//             for (let i = 1; i <= plazo; i++) {
//                 pagoInteres = parseFloat(monto * (interes / 100));
//                 pagoCapital = cuota - pagoInteres;
//                 monto = parseFloat(monto - pagoCapital);

//                 const row = document.createElement('tr');
//                 row.innerHTML = `
//                     <td>${fechaActual.getDate()}-${fechaActual.getMonth() + 1}-${fechaActual.getFullYear()}</td>
//                     <td>${pagoCapital.toFixed(2)}</td>
//                     <td>${pagoInteres.toFixed(2)}</td>
//                     <td>${monto.toFixed(2)}</td>
//                 `;
//                 llenarTabla.appendChild(row);

//                 fechaActual.setDate(fechaActual.getDate() + 1); // Avanzar un día
//             }


const btnCotizar = document.getElementById('btnCotizar');

        btnCotizar.addEventListener('click', (event) => {
            event.preventDefault();
            const monto = parseFloat(document.getElementById('monto').value);
            const interes = parseFloat(document.getElementById('interes').value);
            const plazo = parseInt(document.getElementById('plazo').value);
            
            // Función para calcular el plazo fijo
            function calcularPlazoFijo(monto, interes, plazo) {
                const resultado = (monto * plazo * interes / 100) / 365;
                document.getElementById("resultadoPlazoFijo").textContent =`Interes Ganado: $${resultado.toFixed(2)}`;
            }

            calcularPlazoFijo(monto, interes, plazo); // Llamada a la función
        });

        