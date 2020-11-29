var datosPersonales, myJSON, text, obj;

var datosPersonales = {
    nombre: "",
    apellido: "",
    edad: "",
    email: "",
    contraseña: "",
    contacto: ""
};

var miStorage = window.localStorage;


// Storing data:
function guardarDatos() {

        var nombre = document.getElementById("nombre").value;
        var apellido = document.getElementById("apellido").value;
        var edad = document.getElementById("edad").value;
        var email = document.getElementById("email").value;
        var contraseña = document.getElementById("contraseña").value;
        var contacto = document.getElementById("contacto").value;

        miStorage.setItem("nombre", JSON.stringify(nombre));
        miStorage.setItem("apellido", JSON.stringify(apellido));
        miStorage.setItem("edad", JSON.stringify(edad));
        miStorage.setItem("email", JSON.stringify(email));
        miStorage.setItem("contraseña", JSON.stringify(contraseña));
        miStorage.setItem("contacto", JSON.stringify(contacto));
}

(function () {
    // Selecciono los elementos que quiero validar
    var forms = document.getElementsByClassName("needs-validation");
    var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener("submit", function (event) {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add("was-validated");
        }, false);
    });
})();




//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

    nombre = JSON.parse(localStorage.getItem("nombre"))
    document.getElementById("nombre").value = nombre;

    apellido = JSON.parse(localStorage.getItem("apellido"));
    document.getElementById("apellido").value = apellido;

    edad = JSON.parse(localStorage.getItem("edad"));
    document.getElementById("edad").value = edad;

    email = JSON.parse(localStorage.getItem("email"));
    document.getElementById("email").value = email;

    contraseña = JSON.parse(localStorage.getItem("contraseña"));
    document.getElementById("contraseña").value = contraseña;

    contacto = JSON.parse(localStorage.getItem("contacto"));
    document.getElementById("contacto").value = contacto;

});
