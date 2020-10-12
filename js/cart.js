//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var cartArray = [];

function showCartList(cartArray) {

    let htmlContentToAppend = "";
    for (let i = 0; i < cartArray.articles.length; i++) {
        let cart = cartArray.articles[i];

        htmlContentToAppend += `
            <table class="table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total por producto</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img src= ${cart.src} width=100>
                        </td>
                        <td>${cart.name} </br>
                        <small class="text-muted">  ${cart.count}  artículos</small>
                        </td>
                        <td>${cart.unitCost} ${cart.currency}
                        </td>
                        <td>
                        <input type="number" id="cantidad" min="1">
                        </td>
                        <td>               
                        <p id="totalUnitario"><p>
                        <button type="button" onclick="totalUnitario(${cart.unitCost})">Ver</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        `
    }

    document.getElementById("cart-list-container").innerHTML = htmlContentToAppend;
}

function totalUnitario(costo) {
    var cantidad = document.getElementById("cantidad").value
    var total = cantidad * costo
    document.getElementById("totalUnitario").innerHTML = total
}



//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(CART_INFO_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            cartArray.articles = resultObj.data;
            //Muestro las categorías ordenadas
            showCartList(cartArray.articles);
        }
    });
});