let fotosDesayunos = ['foto1.jpeg', 'foto2.jpeg'];
let cont = 0;

function carrusel(carrusel) {
    carrusel.addEventListener('click', e => {


        let atras = carrusel.querySelector("#atras"),
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
    })
}

document.addEventListener("DOMContentLoaded", () => {
    let contenedor = document.querySelector('#carrusel');
    carrusel(contenedor);
})