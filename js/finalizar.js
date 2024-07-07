
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

const envioContainer = document.getElementById('costoenvio');
if (!envioContainer) {
    console.error('Container not found!');
}

if (cnt > 0) {
    let placeDetalle = document.createElement('detalle');
    placeDetalle.innerHTML = `
    <p style="width: 350px; margin: 0 auto; font-size: 12px; font-style: italic; color: orange;">Pedido : $${total} <span ID="mostrartotal"> ${detalle}</span><button ID="editar"><i class="fi fi-rs-pencil"></i></button></p>
    `;
    detalleContainer.appendChild(placeDetalle);
} 

// BOTON EDITAR DETALLE //

const editar = document.getElementById('editar');
editar.onclick = ('submit', (event) => {
    event.preventDefault();
    localStorage.clear();
    localStorage.setItem('items', JSON.stringify(check));
    window.location.href = '../pages/compra.html'
});

// EMPEZAR VALIDACION DEL CODIGO POSTAL //

// OBTENER INTERNAMENTE EL NOMBRE DE LA PROVINCIA PARA CONSULTAR API Y OBTENER INTERNAMENTE EL PRECIO DE ENVIO //
let consultar = [];

fetch(`../js/provincias.json`)
.then((data) => data.json())
.then ((res) => {
    consultar = res;
});

let listaEnvio = [];

fetch(`../js/ costoenvio.json`)
.then((costo) => costo.json())
.then ((cos) => {
    listaEnvio = cos;
});

let obtenerCostoEnvio = 0;


// ESCUCHAR EL BOTON DE VERIFICAR CODIGO POSTAL Y VERIFICAR LA PROVINCIA CON GET API //

let cp = 0;

document.getElementById('codigop').addEventListener('click', function() {
    event.preventDefault();
    const listen = document.getElementById('codigoCP').value;
    cp = listen;
    const region = consultar.find(mostrar => cp >= mostrar.startID && cp <= mostrar.endID);

    async function findIdEnvio(provincia) {
        const url = `https://apis.datos.gob.ar/georef/api/provincias?nombre=${encodeURIComponent(provincia)}`;
    
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Error en la solicitud: ${response.status}`);
            }
            const data = await response.json();
            setTimeout(() => {
                if (data.provincias && data.provincias.length > 0) {
                    // Recorrer el array de provincias
                    data.provincias.forEach(provincia => {
                        obtenerCostoEnvio = provincia.id;
                    });
                    listaEnvio.forEach ((e) => {
                        if (e.id == obtenerCostoEnvio){
                            costoEnvio = e.precio;
                            totalConEnvio = total + costoEnvio;
                        };
                    });

                    let placeenvio = document.getElementById('costoenvio');
                    placeenvio.innerHTML = `
                    <p style="font-size: 15px; color: black;">$${costoEnvio} </p>
                    `;

                    let placeretotal = document.getElementById('placeCostoTotal');
                    placeretotal.innerHTML = `
                    <p style="width: 200px; margin: 0 auto; font-size: 25px; color: black;">Total: $${totalConEnvio} </p>
                    `
                    totalContainer.appendChild(placeretotal);
                    envioContainer.appendChild(placeenvio);
                    
                } else {
                    alert("No se encontró la provincia");
                }
            }, 1000);
    
        } catch (error) {
            console.error('Hubo un problema con la solicitud Fetch:', error);
        }
    }
    findIdEnvio(region.provincia);
    
});

// BOTON CONFIRMAR //
const confirmar = document.getElementById('confirmar');

confirmar.onclick = async (e) => {
    e.preventDefault(); // Evita el envío del formulario

    if (cp > 0) {
        const inputOptions = new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    "Mercado Pago": "Mercado Pago",
                    "Transferencia": "Transferencia",
                    "Modo": "Modo"
                });
            }, 1000);
        });

        const { value: pago } = await Swal.fire({
            title: "Elige tu forma de pago",
            input: "radio",
            inputOptions,
            inputValidator: (value) => {
                if (!value) {
                    return "Necesitas elegir una forma de pago";
                }
            }
        });

        if (pago) {
            await Swal.fire({ html: `Elegiste: ${pago}` });

            // Capturar datos del formulario
            const form = document.getElementById('form');
            const formData = new FormData(form);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });
            localStorage.clear();
            let compraConfirmada = [];
            compraConfirmada.push(total, detalle, costoEnvio, totalConEnvio, pago);
            localStorage.setItem('dataComprador', JSON.stringify(data));
            localStorage.setItem('datosConfirmados', JSON.stringify(compraConfirmada));
            localStorage.setItem('items', JSON.stringify(check));
            window.location.href = '../pages/gracias.html';
        }
    } else {
        Swal.fire("Debes calcular el envio con el CP");
    }
};



// BOTON CANCELAR //

const cancelar = document.getElementById('cancela');

cancelar.onclick = (e) => {
    e.preventDefault();
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
    });

    swalWithBootstrapButtons.fire({
        title: "Seguro que deseas cancelar?",
        text: "Puedes llegar a dejar de probarlos!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Si, lo siento!",
        cancelButtonText: "No",
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire({
                title: "Lo lamentamos!",
                text: "Esperamos puedas elegirnos pronto!",
                icon: "error"
            }).then(() => {
                localStorage.clear();
                localStorage.setItem('items', JSON.stringify(check));
                window.location.href = '../index.html';
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            swalWithBootstrapButtons.fire({
                title: "Vamos!",
                text: "Tu carrito te espera",
                icon: "success"
            });
        }
    });
};









