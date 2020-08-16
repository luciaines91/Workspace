//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

});

  function validar1(valor) {
    if (valor == "") {
      document.getElementById("error-nombre").innerHTML = "Ingrese usuario";
    } else
      document.getElementById("error-nombre").innerHTML = " ";
  }

  function validar2(valor2) {
    if (valor2 == "") {
      document.getElementById("error-contraseña").innerHTML = "Ingrese contraseña";
    } else
      document.getElementById("error-contraseña").innerHTML = " ";
  }

  function newDoc() {
    var valor = document.getElementById("nombre").value
    var valor2 = document.getElementById("contraseña").value
    if (valor !== "" && valor2 !== "") {
      document.location.href = "index1.html";
    } else
      document.getElementById("ok").innerHTML = "Revise los datos";
  }