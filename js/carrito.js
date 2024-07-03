

let lista = "\nDetalle: ";
let cnt = 0
let carrito = 0;
const checkOutItems = [];

// creando los vinos // 

function vinocos(id,nombre, tipo, stock, anio, precio, qty) {
    this.id = id;
    this.nombre = nombre;
    this.tipo = tipo;
    this.stock = stock;
    this.anio = anio;
    this.precio = precio;
    this.qty = qty;
}

const vino1 = new vinocos(100,"Malvasia", "Blanco", 20, 2024, 1000, 0);
const vino2 = new vinocos(200,"Begquinol", "Blanco", 15, 2023, 1000, 0);
const vino3 = new vinocos(300,"Rose", "Rosado", 50, 2023, 1000, 0);
const vino4 = new vinocos(400,"Liv. Malbec", "Tinto", 10, 2022, 1000, 0);
const vino5 = new vinocos(500,"Electrico", "Blanco", 30, 2022, 2000, 0);
const vino6 = new vinocos(600,"Vertebrado", "Tinto", 17, 2021, 2000, 0);
const vino7 = new vinocos(700,"Parcela", "Tinto", 8, 2021, 3000, 0);
const vino8 = new vinocos(800,"Credo Semillon", "Blanco", 10, 2019, 5000, 0);
const vino9 = new vinocos(900,"Credo Malbec", "Tinto", 5, 2020, 5000, 0);


// CHEQUEAR QUE EL CARRITO ESTE VACIO //

const safeitems = localStorage.getItem('items');
console.log('safe', safeitems);

function restore(safeitems) {
    if (safeitems) {
        const itemsArray = JSON.parse(safeitems);
        itemsArray.forEach(item => {
            if (item.nombre === "Malvasia"){
                vino1.qty = item.qty;
            } else if (item.nombre === "Begquinol"){
                vino2.qty = item.qty;
            } else if (item.nombre === "Rose"){
                vino3.qty = item.qty;
            } else if (item.nombre === "Liv. Malbec"){
                vino4.qty = item.qty;
            } else if (item.nombre === "Electrico"){
                vino5.qty = item.qty;
            } else if (item.nombre === "Vertebrado"){
                vino6.qty = item.qty;
            } else if (item.nombre === "Parcela"){
                vino7.qty = item.qty;
            } else if (item.nombre === "Credo Semillon"){
                vino8.qty = item.qty;
            }else if (item.nombre === "Credo Malbec"){
                vino9.qty = item.qty;
            };
            carrito = carrito + item.precio
            cnt = cnt + item.qty
        });
    }
}
restore(safeitems);

localStorage.clear();


// FUNCIONES // 

function agregar(x) {
    carrito = carrito + x
}
function suma() {
    cnt = cnt + 1
}

function agregovino (x) {
    x.qty = x.qty + 1;
}

const agregadoAcarrito = document.getElementById('catidadCarrito')

agregadoAcarrito.innerText = cnt





// AGREGAR AL CARRITO //
//PRIMERO ESCUCHAR // 

const agregarVin1 = document.getElementById('btn1');
const agregarVin2 = document.getElementById('btn2');
const agregarVin3 = document.getElementById('btn3');
const agregarVin4 = document.getElementById('btn4');
const agregarVin5 = document.getElementById('btn5');
const agregarVin6 = document.getElementById('btn6');
const agregarVin7 = document.getElementById('btn7');
const agregarVin8 = document.getElementById('btn8');
const agregarVin9 = document.getElementById('btn9');

//FUNCIONES AL ESCUCHAR //

agregarVin1.onclick = () => {
    agregar (vino1.precio)
    suma ()
    lista = lista + "\n1 x " + vino1.nombre + " " + vino1.anio
    agregadoAcarrito.innerText = cnt
    agregovino (vino1)
    Toastify({
    text: ("Agregaste " + vino1.nombre + " a tu compra, tu carrito es de: $ " + carrito),
    duration: 3000
    }).showToast();

}
agregarVin2.onclick = () => {
    agregar (vino2.precio)
    lista = lista + "\n1 x " + vino2.nombre + " " + vino2.anio
    suma ()
    agregovino (vino2)
    Toastify({
    text: ("Agregaste " + vino2.nombre + " a tu compra, tu carrito es de: $ " + carrito),
    duration: 3000
    }).showToast();
    agregadoAcarrito.innerText = cnt

}
agregarVin3.onclick = () => {
    agregar (vino3.precio)
    lista = lista + "\n1 x " + vino3.nombre + " " + vino3.anio
    suma ()
    agregovino (vino3)
    Toastify({
        text: ("Agregaste " + vino3.nombre + " a tu compra, tu carrito es de: $ " + carrito),
        duration: 3000
        }).showToast();
    agregadoAcarrito.innerText = cnt

}
agregarVin4.onclick = () => {
    agregar (vino4.precio)
    lista = lista + "\n1 x " + vino4.nombre + " " + vino4.anio
    suma ()
    agregovino (vino4)
    Toastify({
        text: ("Agregaste " + vino4.nombre + " a tu compra, tu carrito es de: $ " + carrito),
        duration: 3000
        }).showToast();
    agregadoAcarrito.innerText = cnt

}
agregarVin5.onclick = () => {
    agregar (vino5.precio)
    lista = lista + "\n1 x " + vino5.nombre + " " + vino5.anio
    suma ()
    agregovino (vino5)
    Toastify({
        text: ("Agregaste " + vino5.nombre + " a tu compra, tu carrito es de: $ " + carrito),
        duration: 3000
        }).showToast();
    agregadoAcarrito.innerText = cnt

}
agregarVin6.onclick = () => {
    agregar (vino6.precio)
    lista = lista + "\n1 x " + vino6.nombre + " " + vino6.anio
    suma ()
    agregovino (vino6)
    Toastify({
        text: ("Agregaste " + vino6.nombre + " a tu compra, tu carrito es de: $ " + carrito),
        duration: 3000
        }).showToast();
    agregadoAcarrito.innerText = cnt

}
agregarVin7.onclick = () => {
    agregar (vino7.precio)
    lista = lista + "\n1 x " + vino7.nombre + " " + vino7.anio
    suma ()
    agregovino (vino7)
    Toastify({
        text: ("Agregaste " + vino7.nombre + " a tu compra, tu carrito es de: $ " + carrito),
        duration: 3000
        }).showToast();
    agregadoAcarrito.innerText = cnt

}
agregarVin8.onclick = () => {
    agregar (vino8.precio)
    lista = lista + "\n1 x " + vino8.nombre + " " + vino8.anio
    suma ()
    agregovino (vino8)
    Toastify({
        text: ("Agregaste " + vino8.nombre + " a tu compra, tu carrito es de: $ " + carrito),
        duration: 3000
        }).showToast();
    agregadoAcarrito.innerText = cnt

}
agregarVin9.onclick = () => {
    agregar (vino9.precio)
    lista = lista + "\n1 x " + vino9.nombre + " " + vino9.anio
    suma ()
    agregovino (vino9)
    Toastify({
        text: ("Agregaste " + vino9.nombre + " a tu compra, tu carrito es de: $ " + carrito),
        duration: 3000
        }).showToast();
    agregadoAcarrito.innerText = cnt

}

//PARA EMPEZAR EL CHECKOUT //


const iracheckout = document.getElementById('checkout');

iracheckout.onclick = ('submit', (event) => {
    console.log("Compra finalizada, detalle: " 
        + "\nTotal de compra: " + carrito + lista + "\nUn total: " + cnt + " vino/s"
        + "\nFecha de registro: " + new Date);

    console.log(checkOutItems);
    checkOutItems.push(vino1, vino2, vino3, vino4, vino5, vino6, vino7, vino8, vino9);
    localStorage.setItem('items', JSON.stringify(checkOutItems));
    localStorage.setItem('cnt',JSON.stringify(cnt));
    localStorage.setItem('price',JSON.stringify(carrito));
    window.location.href = '../pages/compra.html'
});






