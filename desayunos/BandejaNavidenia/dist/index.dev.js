"use strict";

var fotosDesayunos = ['foto2.jpg', 'foto1.jpg'];
var cont = 0;

function carrusel(carrusel) {
  carrusel.addEventListener('click', function (e) {
    var atras = carrusel.querySelector("#atras"),
        adelante = carrusel.querySelector("#adelante"),
        img = carrusel.querySelector("#fotoDesayunoInside"),
        target = e.target;

    if (target == atras) {
      if (cont > 0) {
        img.src = fotosDesayunos[cont - 1];
        cont--;
      } else {
        img.src = fotosDesayunos[fotosDesayunos.length - 1];
        cont = fotosDesayunos.length - 1;
      }
    } else if (target == adelante) {
      if (cont < fotosDesayunos.length - 1) {
        img.src = fotosDesayunos[cont + 1];
        cont++;
      } else {
        img.src = fotosDesayunos[0];
        cont = 0;
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  var contenedor = document.querySelector('#carrusel');
  console.log(contenedor);
  carrusel(contenedor);
});