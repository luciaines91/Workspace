var datosPersonales, myJSON, text, obj;

var datosPersonales = {
    nombre: "",
    apellido: "",
    edad: "",
    email: "",
    contraseña: "",
    contacto: ""
};

var miStorage = window.sessionStorage;


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

// Retrieving data:
function mostrarDatos() {
    var objNombre = JSON.parse(localStorage.getItem("nombre"));
    document.getElementById("nombre").innerHTML = objNombre;

    var objApellido = JSON.parse(localStorage.getItem("apellido"));
    document.getElementById("apellido").innerHTML = objApellido;

    var objEdad = JSON.parse(localStorage.getItem("edad"));
    document.getElementById("edad").innerHTML = objEdad;

    var objEmail = JSON.parse(localStorage.getItem("email"));
    document.getElementById("email").innerHTML = objEmail;

    var objContraseña = JSON.parse(localStorage.getItem("contraseña"));
    document.getElementById("contraseña").innerHTML = objContraseña;

    var objContacto = JSON.parse(localStorage.getItem("contacto"));
    document.getElementById("contacto").innerHTML = objContacto;
}


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

});
