//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var cartArray = [];

function showCartList(cartArray) {

    let htmlContentToAppend = "";
    for (let i = 0; i < cartArray.articles.length; i++) {
        let cart = cartArray.articles[i];

        htmlContentToAppend += `
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
                    <input type="number" class="col-md-4" id="cantidad" min="1" onchange="totalUnitario(${cart.unitCost})">
                </td>
                <td>
                    <p id="totalUnitario"> </p>
                </td>
                <td>
                    <button class="btn btn-danger" onclick="eliminar()" ><i class="fa fa-trash"></i></button>
                </td>
            </tr>
        `
    }

    document.getElementById("cart-list-container").innerHTML = htmlContentToAppend;
}

function totalUnitario(costo, cantidad) {
    var cantidad = document.getElementById("cantidad").value
    for (var i = 0; i < cantidad; i++) {
        var total = cantidad * costo
    }
    document.getElementById("totalUnitario").innerHTML = total
    document.getElementById("costoSubtotal").innerHTML = total
}

function calcularEnvio(envio) {
    var envio = 0
    var total = document.getElementById("costoSubtotal").innerHTML
    if (document.getElementById("premium").checked) {
        var envio = total * 0.15
    } else {
        if (document.getElementById("express").checked) {
            var envio = total * 0.07
        }
        else {
            if (document.getElementById("standard").checked) {
                var envio = total * 0.05
            }
        }
    }
    document.getElementById("costoEnvio").innerHTML = Math.round(envio)
}

function calcularTotal(total, subtotal, envio) {
    var total = 0
    var subtotal = document.getElementById("costoSubtotal").innerHTML
    var envio = document.getElementById("costoEnvio").innerHTML
    var total = parseInt(subtotal) + parseInt(envio)
    document.getElementById("costoTotal").innerHTML = total
}

function eliminar() {
    var eliminarArticulo = document.getElementsById("btn-danger")
    for (var i = 0; i < eliminarArticulo.length; i++) {
        var eliminar = eliminarArticulo[i];
        eliminar.addEventListener("click", function (event) {
            var eliminar = event.target
            eliminar.parentElement.remove()
        })
    }
}

function validateForm() {
    var datos = document.forms["formdatos"]["datos"].value;
    if (datos == "") {
        document.getElementById("errordatos").innerHTML = "Ingresar todos los datos";
        alert("Ingresar todos los datos")
        return false;
    }
}

$(document).ready(function () {
    $("#show").click(function () {
        $("#staticBackdrop").modal("show");
    });
});

function desplegarTarjeta() {
    $(document.getElementById("tarjeta").collapse("show"));
    $(document.getElementById("transferencia").collapse("hide"));
}

function desplegarTransferencia() {
    $(document.getElementById("transferencia").collapse("show"));
    $(document.getElementById("tarjeta").collapse("hide"));
}

function validarpago() {
    var pago = document.getElementById("pago");
    var errorformadepago = document.getElementById("errorformadepago");
    for (i = 0; i < pago.length; i++) {
        if (pago[i].checked) {
            errorformadepago.innerHTML = "";
            window.location.href = "cart.html";
        }
        else {
            errorformadepago.innerHTML = "Debe seleccionar forma de pago";
        }
    }
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


//<p id="totalUnitario"><p>
//<button type="button" onclick="totalUnitario(${cart.unitCost})">Ver</button>
//function validarEnvio() {
    //var valido = false
    //var x = document.getElementsByName("tipoEnvio").document.getElementsByName("envio")
    //for (var i = 0; i < x; i++) {
        //if (x[i].checked) {
            //valido = true;
            //break;
        //}
        //else {
            //errorenvio.innerHTML = "Debe seleccionar metodo de envio";
        //}
    //}
//}
