fetch("http://192.168.1.100:5500/json/valores.json")
.then(response => response.json())
.then(data => {
    let contenidoHTML = `
    <table class="table">
      <thead>
        <tr>
        <th scope="col">Moneda</th>
          <th scope="col">Precio Compra</th>
          <th scope="col">Precio Venta</th>
        </tr>
      </thead>
      <tbody>`;

    data.forEach((element, index) => {
        contenidoHTML += `
        <tr>
          <td>${element.Moneda}</td>
          <td>${element.PrecioCompra}</td>
          <td>${element.PrecioVenta}</td>
        </tr>`;
    });

    contenidoHTML += `
      </tbody>
    </table>`;

    document.getElementById("contenido").innerHTML = contenidoHTML;
})
.catch(error => console.error('Error:', error));
