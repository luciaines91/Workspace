//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
  
});

function validar1(valor) {
  if (valor == "") {
    document.getElementById("error-usuario").innerHTML = "Ingrese usuario";
  } else
    document.getElementById("error-usuario").innerHTML = " ";
}

function validar2(valor2) {
  if (valor2 == "") {
    document.getElementById("error-contraseña").innerHTML = "Ingrese contraseña";
  } else
    document.getElementById("error-contraseña").innerHTML = " ";
}

function newDoc() {
  var valor = document.getElementById("usuario").value
  var valor2 = document.getElementById("contraseña").value
  var usuario = document.getElementById("usuario").value
  var miStorage = window.sessionStorage;

  if (valor !== "" && valor2 !== "") {
    document.location.href = "index1.html";
    miStorage.setItem("keyNombre", usuario);//Guardar variable usuario
    document.getElementsById("keyNombre");
  } else
    document.getElementById("ok").innerHTML = "Revise los datos";
}


//alert(miStorage.getItem("keyNombre"))