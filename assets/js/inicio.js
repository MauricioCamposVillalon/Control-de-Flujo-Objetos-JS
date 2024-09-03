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
    let opin = true;
    Object.keys(usuario).forEach(i => {


        if (usuario[i].id === identidad && usuario[i].pass === contrasena) {
            est1 = true;
            us = i;
            nomb = usuario[i].nombre;
            sal = usuario[i].saldo;
        }
    })
    while (opin === true) {
        let op2="";
        let nwsal=0;
        if (est1 === true) {
            alert('Bienvenido a banca en linea \n' + nomb);
            let op = prompt('Seleccione que desea hacer: \n 1.-Ver saldo.\n 2.-Realizar giro.\n 3.-Realizar deposito. \n 4.-Salir ')
            
            switch (op) {
                case "1":
                    alert('Su saldo actual es $' + sal );
                    op2= prompt('Para volver al menu principal presione S \n de lo contrario presione cualquier tecla').toLowerCase()
                    console.log(op2)
                    if (op2==='s'){
                        break;
                    }else{
                        opin = false;
                        break;
                    }
                    

                case "2":
                    nwsal = giro(sal);
                    console.log(nwsal)
                    usuario[us].saldo = nwsal;
                    sal = usuario[us].saldo;
                    console.log(usuario[us].saldo)
                    op2= prompt('Para volver al menu principal presione S \n de lo contrario presione cualquier tecla').toLowerCase()
                    if (op2==='s'){
                        break;
                    }else{
                        opin = false;
                        break;
                    }


                case "3":
                    nwsal = deposito(sal);
                    console.log(nwsal)
                    usuario[us].saldo = nwsal;
                    sal = usuario[us].saldo;
                    console.log(usuario[us].saldo)
                    op2= prompt('Para volver al menu principal presione S \n de lo contrario presione cualquier tecla').toLowerCase()
                    if (op2==='s'){
                        break;
                    }else{
                        alert('Muchas gracias Hasta Pronto')
                        opin = false;
                        break;
                    }
                case "4":
                    opin = false;
                    break;

                default:
                    alert('Opcion ingresada no es valida');
                    opin
            }


        } else {
            alert(" Usuario no encontrado");
            opin = false;

        }

    }



}

function giro(sald) {
    let newsal = parseInt(prompt('Su saldo actual es ' + sald + ' Ingrese el monto que desea girar'))
    if (sald >= newsal) {
        sald -= newsal
        alert('Su nuevo saldo es $'+sald)
        
    }
    else {
        alert('Operacion no se Puede realizar ya que no tiene saldo disponible para esta Operacion')
        
    }
    return sald;
}

function deposito(sal) {
    let depsal = parseInt(prompt('Sulasodo actual es $'+sal+'\n Ingrese el monto que desea depositar'))
    if (depsal<=0){
        alert('Operacion No se puede realizar, Monto a depositar debe ser superior a 0.')
    }
    else {
        sal += depsal
        alert('Deposito realizado su nuevo saldo es $'+sal)
        
    }
    return sal;
}