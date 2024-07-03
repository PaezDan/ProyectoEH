// CARRITO DE COMPRAS PARA EH -- Archivo inutilizado

/**
 * MENSAJE INICIAL - Ingresa tu edad para comprar
 * Prompt edad 18 o más
 * IF 18 o más 
 * Que vinos deseas comprar?
 * 1. Malvasia = 1000$
 * 2. Begquinol = 1000$
 * 3. Rose = 1000$
 * 4. Liv. Malbec = 1000$
 * 5. Electrico = 2000$
 * 6. Vertebrado = 2000$
 * 7. Parcela = 3000$
 * 8. Credo Semillon = 5000$
 * 9. Credo Malbec = 5000$
 * 0. SALIR
 * 10. No Deseo realizar una compra
 * 
 * IF not 18= No podes Comprar
 */



let carrito = 0
let option;
let lista = "\nDetalle: ";
let cnt = 0

function vino(nombre, tipo, stock, anio, precio) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.stock = stock;
    this.anio = anio;
    this.precio = precio;
}

const vino1 = new vino("Malvasia", "Blanco", 20, 2024, 1000);
const vino2 = new vino("Begquinol", "Blanco", 15, 2023, 1000);
const vino3 = new vino("Rose", "Rosado", 50, 2023, 1000);
const vino4 = new vino("Liv. Malbec", "Tinto", 10, 2022, 1000);
const vino5 = new vino("Electrico", "Blanco", 30, 2022, 2000);
const vino6 = new vino("Vertebrado", "Tinto", 17, 2021, 2000);
const vino7 = new vino("Parcela", "Tinto", 8, 2021, 3000);
const vino8 = new vino("Credo Semillon", "Blanco", 10, 2019, 5000);
const vino9 = new vino("Credo Malbec", "Tinto", 5, 2020, 5000);

const vinos = [vino1, vino2, vino3, vino4, vino5, vino6, vino7, vino8, vino9];

let comprador = {

}

//Mostrar el detalle de los vinos en el Array // 
console.log(vinos);

//Mostrar el tipo de cada vino //
console.log(vino1.nombre + " es un " + vino1.tipo);
console.log(vino2.nombre + " es un " + vino2.tipo);
console.log(vino3.nombre + " es un " + vino3.tipo);
console.log(vino4.nombre + " es un " + vino4.tipo);
console.log(vino5.nombre + " es un " + vino5.tipo);
console.log(vino6.nombre + " es un " + vino6.tipo);
console.log(vino7.nombre + " es un " + vino7.tipo);
console.log(vino8.nombre + " es un " + vino8.tipo);
console.log(vino9.nombre + " es un " + vino9.tipo);


function agregar(x) {
    carrito = carrito + x
}
function suma() {
    cnt = cnt + 1
}

let permiso =  prompt ("Ingresa tu edad: ");
comprador.mail = prompt ("Ingrese su correo electronico: ");
if (permiso >=18){
    while (option !=0){
        let compra = prompt(`
        Que vinos deseas comprar?
        1. Malvasia = 1000$
        2. Begquinol = 1000$
        3. Rose = 1000$
        4. Liv. Malbec = 1000$
        5. Electrico = 2000$
        6. Vertebrado = 2000$
        7. Parcela = 3000$
        8. Credo Semillon = 5000$
        9. Credo Malbec = 5000$
        0. Finalizar compra.
        10. No deseo comprar nada.
        `)
        switch (compra){
            case '1':
            agregar (vino1.precio)
            suma ()
            lista = lista + "\n1 x " + vino1.nombre + " " + vino1.anio
            alert("Agregaste " + vino1.nombre + " a tu compra, tu carrito es de: $ " + carrito)
            break
            case '2':
            agregar (vino2.precio)
            lista = lista + "\n1 x " + vino2.nombre + " " + vino2.anio
            suma ()
            alert("Agregaste " + vino2.nombre + " a tu compra, tu carrito es de: $ " + carrito)
            break
            case '3':
            agregar (vino3.precio)
            lista = lista + "\n1 x " + vino3.nombre + " " + vino3.anio
            suma ()
            alert("Agregaste " + vino3.nombre + " a tu compra, tu carrito es de: $ " + carrito)
            break
            case '4':
            agregar (vino4.precio)
            lista = lista + "\n1 x " + vino4.nombre + " " + vino4.anio
            suma ()
            alert("Agregaste " + vino4.nombre + " a tu compra, tu carrito es de: $ " + carrito)
            break
            case '5':
            agregar (vino5.precio)
            lista = lista + "\n1 x " + vino5.nombre + " " + vino5.anio
            suma ()
            alert("Agregaste " + vino5.nombre + " a tu compra, tu carrito es de: $ " + carrito)
            break
            case '6':
            agregar (vino6.precio)
            lista = lista + "\n1 x " + vino6.nombre + " " + vino6.anio
            suma ()
            alert("Agregaste " + vino6.nombre + " a tu compra, tu carrito es de: $ " + carrito)
            break
            case '7':
            agregar (vino7.precio)
            lista = lista + "\n1 x " + vino7.nombre + " " + vino7.anio
            suma ()
            alert("Agregaste " + vino7.nombre + " a tu compra, tu carrito es de: $ " + carrito)
            break
            case '8':
            agregar (vino8.precio)
            lista = lista + "\n1 x " + vino8.nombre + " " + vino8.anio
            suma ()
            alert("Agregaste " + vino8.nombre + " a tu compra, tu carrito es de: $ " + carrito)
            break
            case '9':
            agregar (vino9.precio)
            lista = lista + "\n1 x " + vino9.nombre + " " + vino9.anio
            suma ()
            alert("Agregaste " + vino9.nombre + " a tu compra, tu carrito es de: $ " + carrito)
            break
            case '10':
            alert("Muchas gracias, vuelva pronto!!")
            option = 0;
            break
            case '0':
            alert("Finalizaste tu compra, procederemos a pedir tus datos para el envío.");
            comprador.nombre = prompt ("Ingrese su nombre completo: ");
            comprador.direccion = prompt ("Ingrese su dirección: ");
            comprador.postalcode = prompt ("Ingrese su código postal: ");
            comprador.dni = prompt ("Ingrese su DNI: ");
            alert("Verifique a continuación los datos de su compra: " 
            + "\nRecibe: " + comprador.nombre
            + "\nEn: " + comprador.direccion
            + "\nCodigo Postal: " + comprador.postalcode
            + "\nDni: " + comprador.dni
            + "\nTotal de compra: " + carrito + lista + "\nUn total: " + cnt + " vino/s"
            + "\nFecha de registro: " + new Date
            )
            let confirmo = prompt  (`
            1. Los datos están correctos.
            2. Los datos son incorrectos.
            0. Me arrepiento de la compra, salir.
            `)
            while (confirmo !=0){
                switch (confirmo){
                    case '1':
                    alert("Gracias por confirmar su compra, enviaremos todos los datos para realizar el pago a su correo: " + comprador.mail
                    )
                    confirmo = 0;
                    console.log("Compra finalizada, detalle: " 
                        + "\nRecibe: " + comprador.nombre
                        + "\nEn: " + comprador.direccion
                        + "\nCodigo Postal: " + comprador.postalcode
                        + "\nDni: " + comprador.dni
                        + "\nTotal de compra: " + carrito + lista + "\nUn total: " + cnt + " vino/s"
                        + "\nFecha de registro: " + new Date
                        );
                    break
                    case '2':
                    alert("Reingrese sus datos correctamente: ")
                    comprador.nombre = prompt ("Ingrese su nombre completo: ");
                    comprador.direccion = prompt ("Ingrese su dirección: ");
                    comprador.postalcode = prompt ("Ingrese su código postal: ");
                    comprador.dni = prompt ("Ingrese su DNI: ");
                    alert("Verifique a continuación los datos de su compra: " 
                    + "\nRecibe: " + comprador.nombre
                    + "\nEn: " + comprador.direccion
                    + "\nCodigo Postal: " + comprador.postalcode
                    + "\nDni: " + comprador.dni
                    + "\nTotal de compra: " + carrito + lista + "\nUn total:  " + cnt + " vino/s"
                    + "\nFecha de registro: " + new Date
                    )
                    confirmo = prompt (`
                    1. Los datos están correctos.
                    2. Los datos son incorrectos.
                    0. Me arrepiento de la compra, salir.
                    `)
                    console.log("Compra finalizada, detalle: " 
                        + "\nRecibe: " + comprador.nombre
                        + "\nEn: " + comprador.direccion
                        + "\nCodigo Postal: " + comprador.postalcode
                        + "\nDni: " + comprador.dni
                        + "\nTotal de compra: " + carrito + lista + "\nUn total: " + cnt + " vino/s"
                        + "\nFecha de registro: " + new Date
                        );
                    break
                    case '0':
                    alert("Gracias, vuelva pronto!")
                }
            }
        option = 0;
        break
        }
    }
} else{
    alert("Lo sentimos, no tienes edad para comprar")
    console.log("Lo sentimos, no tienes edad para comprar")
}

