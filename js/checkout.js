let check = [];
let precio = [];

const storedItems = localStorage.getItem('items');
console.log('Stored Items:', storedItems);
localStorage.clear;

if (storedItems) {
    check = JSON.parse(storedItems);
}
console.log('Parsed Items:', check);

const carritoContainer = document.getElementById('carrito-container');
if (!carritoContainer) {
    console.error('Carrito container not found!');
}

for (let vino of check) {
    console.log('Processing vino:', vino); 
    const vinocarrito = check.map(check => check.id);

    let placeCarrito = document.createElement('article'); 

    placeCarrito.innerHTML = `
    <div class="vinoart">
        <p>${vino.nombre}  </p>
        <p>Tipo: ${vino.tipo}  </p>
        <p>Año: ${vino.anio}  </p>
        <p>Precio: ${vino.precio}</p>
        <button id="eli-${check.id}" class="botonEliminar"><</button>
    </div>
    `;
    carritoContainer.appendChild(placeCarrito);
}

const cntplace1 = document.getElementById('cntplace')
cntplace1.innerText = check.length 

const storeprice = localStorage.getItem('price');
console.log('price', storeprice);

const total1 = document.getElementById('total')
total1.innerText = storeprice


// EDITAR //

const editar = document.getElementById('editar');
editar.onclick = ('submit', (event) => {
    window.location.href = '../pages/tienda.html'
});

// CONTINUAR // 

const continuar = document.getElementById('continuar');
continuar.onclick = ('submit', (event) => {
    window.location.href = '../pages/finalizar.html'
});







