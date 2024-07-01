

let lista = "\nDetalle: ";
let cnt = 0
let carrito = 0;


// CHEQUEAR QUE EL CARRITO ESTE VACIO //

const safeitems = localStorage.getItem('items');
console.log('safe', safeitems);

const checkOutItems = [];

function restore(safeitems) {
    if (safeitems) {
        const itemsArray = JSON.parse(safeitems);
        itemsArray.forEach(item => {
            checkOutItems.push(item);
            carrito = carrito + item.precio
        });
        cuenta = JSON.parse(safeitems);
        cuenta.forEach(item => {
            cnt = cnt + 1 
        });

    }
}
restore(safeitems);

localStorage.clear();


// creando los vinos // 

function vino(id,nombre, tipo, stock, anio, precio) {
    this.id = id;
    this.nombre = nombre;
    this.tipo = tipo;
    this.stock = stock;
    this.anio = anio;
    this.precio = precio;
}

const vino1 = new vino(1,"Malvasia", "Blanco", 20, 2024, 1000);
const vino2 = new vino(2,"Begquinol", "Blanco", 15, 2023, 1000);
const vino3 = new vino(3,"Rose", "Rosado", 50, 2023, 1000);
const vino4 = new vino(4,"Liv. Malbec", "Tinto", 10, 2022, 1000);
const vino5 = new vino(5,"Electrico", "Blanco", 30, 2022, 2000);
const vino6 = new vino(6,"Vertebrado", "Tinto", 17, 2021, 2000);
const vino7 = new vino(7,"Parcela", "Tinto", 8, 2021, 3000);
const vino8 = new vino(8,"Credo Semillon", "Blanco", 10, 2019, 5000);
const vino9 = new vino(9,"Credo Malbec", "Tinto", 5, 2020, 5000);

const vinos = [vino1, vino2, vino3, vino4, vino5, vino6, vino7, vino8, vino9];

// FUNCIONES // 

function agregar(x) {
    carrito = carrito + x
}
function suma() {
    cnt = cnt + 1
}

const agregadoAcarrito = document.getElementById('catidadCarrito')

agregadoAcarrito.innerText = cnt

function agregarcheckout (x) {
    checkOutItems.push(x)
}



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
    Toastify({
    text: ("Agregaste " + vino1.nombre + " a tu compra, tu carrito es de: $ " + carrito),
    duration: 3000
    }).showToast();
    agregarcheckout(vino1)
}
agregarVin2.onclick = () => {
    agregar (vino2.precio)
    lista = lista + "\n1 x " + vino2.nombre + " " + vino2.anio
    suma ()
    Toastify({
    text: ("Agregaste " + vino2.nombre + " a tu compra, tu carrito es de: $ " + carrito),
    duration: 3000
    }).showToast();
    agregadoAcarrito.innerText = cnt
    agregarcheckout(vino2)
}
agregarVin3.onclick = () => {
    agregar (vino3.precio)
    lista = lista + "\n1 x " + vino3.nombre + " " + vino3.anio
    suma ()
    Toastify({
        text: ("Agregaste " + vino3.nombre + " a tu compra, tu carrito es de: $ " + carrito),
        duration: 3000
        }).showToast();
    agregadoAcarrito.innerText = cnt
    agregarcheckout(vino3)
}
agregarVin4.onclick = () => {
    agregar (vino4.precio)
    lista = lista + "\n1 x " + vino4.nombre + " " + vino4.anio
    suma ()
    Toastify({
        text: ("Agregaste " + vino4.nombre + " a tu compra, tu carrito es de: $ " + carrito),
        duration: 3000
        }).showToast();
    agregadoAcarrito.innerText = cnt
    agregarcheckout(vino4)
}
agregarVin5.onclick = () => {
    agregar (vino5.precio)
    lista = lista + "\n1 x " + vino5.nombre + " " + vino5.anio
    suma ()
    Toastify({
        text: ("Agregaste " + vino5.nombre + " a tu compra, tu carrito es de: $ " + carrito),
        duration: 3000
        }).showToast();
    agregadoAcarrito.innerText = cnt
    agregarcheckout(vino5)
}
agregarVin6.onclick = () => {
    agregar (vino6.precio)
    lista = lista + "\n1 x " + vino6.nombre + " " + vino6.anio
    suma ()
    Toastify({
        text: ("Agregaste " + vino6.nombre + " a tu compra, tu carrito es de: $ " + carrito),
        duration: 3000
        }).showToast();
    agregadoAcarrito.innerText = cnt
    agregarcheckout(vino6)
}
agregarVin7.onclick = () => {
    agregar (vino7.precio)
    lista = lista + "\n1 x " + vino7.nombre + " " + vino7.anio
    suma ()
    Toastify({
        text: ("Agregaste " + vino7.nombre + " a tu compra, tu carrito es de: $ " + carrito),
        duration: 3000
        }).showToast();
    agregadoAcarrito.innerText = cnt
    agregarcheckout(vino7)
}
agregarVin8.onclick = () => {
    agregar (vino8.precio)
    lista = lista + "\n1 x " + vino8.nombre + " " + vino8.anio
    suma ()
    Toastify({
        text: ("Agregaste " + vino8.nombre + " a tu compra, tu carrito es de: $ " + carrito),
        duration: 3000
        }).showToast();
    agregadoAcarrito.innerText = cnt
    agregarcheckout(vino8)
}
agregarVin9.onclick = () => {
    agregar (vino9.precio)
    lista = lista + "\n1 x " + vino9.nombre + " " + vino9.anio
    suma ()
    Toastify({
        text: ("Agregaste " + vino9.nombre + " a tu compra, tu carrito es de: $ " + carrito),
        duration: 3000
        }).showToast();
    agregadoAcarrito.innerText = cnt
    agregarcheckout(vino9)
}

//PARA EMPEZAR EL CHECKOUT //


const iracheckout = document.getElementById('checkout');

iracheckout.onclick = ('submit', (event) => {
    console.log("Compra finalizada, detalle: " 
        + "\nTotal de compra: " + carrito + lista + "\nUn total: " + cnt + " vino/s"
        + "\nFecha de registro: " + new Date);

    console.log(checkOutItems);
    localStorage.setItem('items', JSON.stringify(checkOutItems));
    localStorage.setItem('cnt',JSON.stringify(cnt));
    localStorage.setItem('price',JSON.stringify(carrito));
    window.location.href = '../pages/compra.html'
});






