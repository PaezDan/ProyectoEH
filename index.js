// CARRITO DE COMPRAS PARA EH 

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
 * 
 * IF not 18= No podes Comprar
 */

let carrito = 0
let option;
let lista = " Detalle: ";
let cnt = 0
function agregar(x) {
    carrito = carrito + x
}
function suma() {
    cnt = cnt + 1
}

let permiso = Number(prompt("Ingresa tu edad: "));
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
        0. FINALIZAR
        `)
        switch (compra){
            case '1':
            agregar (1000)
            suma ()
            lista = lista + " Malvasia x1,"
            alert("Agregaste Malvasia a tu compra, tu carrito es de: $" + carrito)
            break
            case '2':
            agregar (1000)
            lista = lista + " Bequinol x1,"
            suma ()
            alert("Agregaste Begquinol a tu compra, tu carrito es de: $" + carrito)
            break
            case '3':
            agregar (1000)
            lista = lista + " Rose x1,"
            suma ()
            alert("Agregaste Rose a tu compra, tu carrito es de: $" + carrito)
            break
            case '4':
            agregar (1000)
            lista = lista + " Liv. Malbec x1,"
            suma ()
            alert("Agregaste Liv. malbec a tu compra, tu carrito es de: $" + carrito)
            break
            case '5':
            agregar (2000)
            lista = lista + " Electrico x1,"
            suma ()
            alert("Agregaste Electrico a tu compra, tu carrito es de: $" + carrito)
            break
            case '6':
            agregar (2000)
            lista = lista + " Vertebrado x1,"
            suma ()
            alert("Agregaste Vertebrado a tu compra, tu carrito es de: $" + carrito)
            break
            case '7':
            agregar (3000)
            lista = lista + " Parcela x1,"
            suma ()
            alert("Agregaste Parcela a tu compra, tu carrito es de: $" + carrito)
            break
            case '8':
            agregar (5000)
            lista = lista + " Credo Semillon x1,"
            suma ()
            alert("Agregaste Credo Semillon a tu compra, tu carrito es de: $" + carrito)
            break
            case '9':
            agregar (5000)
            lista = lista + " Credo Malbec x1,"
            suma ()
            alert("Agregaste Credo malbec a tu compra, tu carrito es de: $" + carrito)
            break
            case '0':
            alert("Finalizaste tu compra, tu carrito es de: $ " + carrito + lista + " - Pronto estaremos realizando su envio." )
            console.log(`Compraste un total de: ` + cnt + " Vinos,  " +
            lista + ` - El monto total de tu compra fue de: $ ` + carrito
            )
            alert("Muchas gracias por su compra")
            option = 0;
            break
        }
    }
} else{
    alert("Lo sentimos, no tienes edad para comprar")
    console.log("Lo sentimos, no tienes edad para comprar")
}
