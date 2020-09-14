var product_info = {};
var comentarios = {};

//descripción productos
function showImagesGallery(array) {

    let htmlContentToAppend = "";

    for (let i = 0; i < array.length; i++) {
        let imageSrc = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        </div>
        `

        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    }
}

//function stars(comentarios) {
    //var HTML = ""; // Start the HTML string for concatenation
    //comentarios.forEach(function (ob) {
        //for (var i = 0; i < 5; i++) {  // We need 5 stars
            //var icoClass = i < ob.score ? "fa fa-star" : "fa fa-star-o"; // full or empty star?
            //HTML += "<i class='" + icoClass + "'></i>"; // concatenate stars
        //}
    //})
//};


//comentarios
function showComentarios(array) {

    let htmlContentToAppend = "";

    for (let i = 0; i < array.length; i++) {
        let comentarios = array[i];

        htmlContentToAppend += `
            <p class="mb-3">` + comentarios.user + "  " + comentarios.score + `</p>
            <p class="mb-3">` + comentarios.description + `</p>
            <small class="text-muted">` + comentarios.dateTime + `</small></br></br>
        `

        document.getElementById("comments").innerHTML = htmlContentToAppend;
    }

}

//validacion formulario
(function () {
    'use strict';
    window.addEventListener('load', function () {
        var forms = document.getElementsByClassName('needs-validation');
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCT_INFO_URL).then(function (resultObj) {
        //getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
        if (resultObj.status === "ok") {
            product_info = resultObj.data;
            comentarios = resultObj.data;

            let product_infoNameHTML = document.getElementById("product_infoName");
            let product_infocategoryHTML = document.getElementById("product_infocategory");
            let product_infoDescriptionHTML = document.getElementById("product_infoDescription");
            let product_infoCostHTML = document.getElementById("product_infoCost");
            let product_infoSoldCountHTML = document.getElementById("product_infoSoldCount");

            product_infoNameHTML.innerHTML = product_info.name;
            product_infocategoryHTML.innerHTML = product_info.category;
            product_infoDescriptionHTML.innerHTML = product_info.description;
            product_infoCostHTML.innerHTML = product_info.cost + product_info.currency;
            product_infoSoldCountHTML.innerHTML = product_info.soldCount;



            //Muestro las imagenes en forma de galería
            showImagesGallery(product_info.images);
        }
    });
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            comentarios = resultObj.data;
            //Muestro las categorías ordenadas
            showComentarios(comentarios);

        }
    });
});
