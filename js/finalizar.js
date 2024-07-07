
let check = [];
let cnt = 0;
let total = 0;
let detalle = "Detalle: ";
let costoEnvio = 0;
let totalConEnvio = 0;

// Traer Carrito y crear los items para visualizar, detallar y contar //

const storedItems = localStorage.getItem('items');
console.log('Stored Items:', storedItems);

if (storedItems) {
    check = JSON.parse(storedItems);
}
console.log('Parsed Items:', check);

// PREPARAR PARA MOSTRAR //

function agregarALdetalle() {
    detalle = detalle + " " + vino.nombre + " x" + vino.qty + ";";
}

for (vino of check){
    if (vino.qty > 0){
        cnt=  cnt + vino.qty;
        total = total + (vino.precio * vino.qty);
        agregarALdetalle() ;
    };
}
console.log(cnt)
console.log(total)
console.log(detalle)
totalConEnvio = total + costoEnvio;

// MOSTRAR EL DETALLE // 

const detalleContainer = document.getElementById('detalleCompra');
if (!detalleContainer) {
    console.error('Container not found!');
}

const totalContainer = document.getElementById('placeCostoTotal');
if (!totalContainer) {
    console.error('Container not found!');
}

if (cnt > 0) {
    let placeDetalle = document.createElement('detalle');
    placeDetalle.innerHTML = `
    <p style="width: 350px; margin: 0 auto; font-size: 12px; font-style: italic; color: orange;">Pedido : $${total} <span ID="mostrartotal"> ${detalle}</span><button><i class="fi fi-br-pen-field"></i></button></p>
    `;
    detalleContainer.appendChild(placeDetalle);
    let placeCostoTotal = document.createElement('CostoTotal');
    placeCostoTotal.innerHTML = `
    <p style="width: 200px; margin: 0 auto; font-size: 12px; color: red;">Calcula tu envio </p>
    `;
    totalContainer.appendChild(placeCostoTotal);
} 

// EMPEZAR VALIDACION DEL CODIGO POSTAL //

// OBTENER INTERNAMENTE LOS ID DE LOS CODIGOS POSTALES DE ARG //
let consultar = [];

fetch(`../js/provincias.json`)
.then((data) => data.json())
.then ((res) => {
    consultar = res;
});

// ESCUCHAR EL BOTON DE VERIFICAR CODIGO POSTAL Y VERIFICAR LA PROVINCIA CON GET API //

let cp = 0;

document.getElementById('codigop').addEventListener('click', function() {
    event.preventDefault();
    const listen = document.getElementById('codigoCP').value;
    cp = listen;
    const region = consultar.find(mostrar => cp >= mostrar.startID && cp <= mostrar.endID);
    console.log(region.provincia);
});



// verificarCP.onclick = () => {
//     event.preventDefault();
//     listencp = document.getElementById('codigoCP')
//     cp = listencp.value;
//     console.log(cp);
// };



// let placeCostoTotal = document.createElement('CostoTotal');
// placeCostoTotal.innerHTML = `
// <p style="width: 200px; margin: 0 auto; font-size: 25px; color: black;">Total: $${totalConEnvio} </p>
// `;
// totalContainer.appendChild(placeCostoTotal);


// const getPostalCodeInfo = async (postalCode) => {
//     try {
//         const response = await fetch(`https://postalcodes.app/api/v1/?key=tk_24bb34eb14b84d44be06ae8bb48a3018&zipcode=${getPostalCodeInfo}&country=ar`);
//             mode: 'no-cors'
//         if (!response.ok) {
//             throw new Error('Postal code not found');
//         }
//         const data = await response.json();
//         console.log(data);
//         return data;
//     } catch (error) {
//         console.error('Error fetching postal code information:', error);
//     }
// };

// // Ejemplo de uso
// getPostalCodeInfo('1690'); 







