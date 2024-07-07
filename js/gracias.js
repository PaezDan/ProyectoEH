
let check = [];
let compra = [];
let comprador = [];
let total = 0;
let metodoPago = " ";

// numero aleatorio para ID de compra //
function generarNumeroAleatorioDe4Digitos() {
    return Math.floor(1000 + Math.random() * 9000);
}

const numeroAleatorio = generarNumeroAleatorioDe4Digitos()

// RECUPERAR LOS DATOS DE CONFIRMACION // 

const storedItems = localStorage.getItem('items');
if (storedItems) {
    check = JSON.parse(storedItems);
}
console.log('Parsed Items:', check);

const storedCompra = localStorage.getItem('datosConfirmados');
if (storedCompra) {
    compra = JSON.parse(storedCompra);
}
console.log('Parsed Compra:', compra);

const storedComprador = localStorage.getItem('dataComprador');
if (storedComprador) {
    comprador = JSON.parse(storedComprador);
}
console.log('Parsed Comprador:', comprador);

// ENVIARLOS A BASE DE DATOS //

// MOSTRAR CONFIRMACION // 

const confirmacionContainer = document.getElementById('confirmacionContainer');
if (!confirmacionContainer) {
    console.error('Carrito container not found!');
} else {
    let placeConfirmacion = document.createElement('div');
    placeConfirmacion.classList.add('placeConfirmacion');
    placeConfirmacion.innerHTML = `
        <div class="vinoart">
            <h3>Compra #${numeroAleatorio}</h3>
        </div>
    `;
    confirmacionContainer.appendChild(placeConfirmacion);
}

// LIMPIAR Y ENVIAR A HOME //

const gracias = document.getElementById('gracias');

gracias.onclick = () => {
    localStorage.clear();
    window.location.href = '../index.html';
};








