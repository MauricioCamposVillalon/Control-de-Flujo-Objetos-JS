let usuario = [
    {
        nombre: "juan",
        id: "11111111-1",
        pass: "123456",
        saldo: 1000,

    },
    {
        nombre: "Pedro",
        id: "22222222-2",
        pass: "123456",
        saldo: 2000,
    },
    {
        nombre: "Javiera",
        id: "33333333-3",
        pass: "123456",
        saldo: 10000,
    }

]



//const miFormulario = document.querySelector('formulario')


document.getElementById("formulario").addEventListener('submit', validar);

function validar(evt) {
    let identidad = document.getElementById("id").value;
    let contrasena = document.getElementById("password").value;
    let est1 = false;
    let us = 0;
    let nomb = ""
    let sal = 0;

    //    console.log(identidad);
    //    console.log(contrasena);

    Object.keys(usuario).forEach(i => {


        if (usuario[i].id === identidad && usuario[i].pass === contrasena) {
            est1 = true;
            us = i;
            nomb = usuario[i].nombre;
            sal = usuario[i].saldo;
        }
    })

    if (est1 === true) {
        alert('Bienvenido a banca en linea n/' + nomb);
        let op = prompt('Seleccione que desea hacer: \n 1.-Ver saldo.\n 2.-Realizar giro.\n 3.-Realizar deposito. \n 4.-Salir ')

        switch (op) {
            case "1":
                let nwsal=giro(sal);
                usuario[us].saldo = nwsal;
                console.log(usuario[us].saldo)
                break;
            case "2":
                senalllamadas();
                break;
            case "3":
                OfertaComercial();
                break;
            case "4":
                break;
            default:
                alert('Opcion ingresada no es valida');
        }


    } else {
        alert(" Usuario no encontrado")
    }


}

function giro(sald) {
    let newsal  = prompt




}