fetch("../json/valores.json")
.then(response => response.json())
.then(data => {
    let contenidoHTML = `
    <table class="table table-dark table-striped">
      <thead>
        <tr>
          <th scope="col" class="col-moneda">Moneda</th>
          <th scope="col" class="col-precio-compra">Precio Compra</th>
          <th scope="col" class="col-precio-venta">Precio Venta</th>
        </tr>
      </thead>
      <tbody>`;

    data.forEach((element) => {
        contenidoHTML += `
        <tr>
          <td class="col-moneda">${element.Moneda}</td>
          <td class="col-precio-compra">${element.PrecioCompra}</td>
          <td class="col-precio-venta">${element.PrecioVenta}</td>
        </tr>`;
    });

    contenidoHTML += `
      </tbody>
    </table>`;

    document.getElementById("contenido").innerHTML = contenidoHTML;
})
.catch(error => console.error('Error:', error));
