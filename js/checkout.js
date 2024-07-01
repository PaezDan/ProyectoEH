let check = [];

const storedItems = localStorage.getItem('items');
console.log('Stored Items:', storedItems);

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

    let placeCarrito = document.createElement('article'); 

    placeCarrito.innerHTML = `
    <div class="vinoart">
        <p>${vino.nombre}  </p>
        <p>Tipo: ${vino.tipo}  </p>
        <p>Año: ${vino.anio}  </p>
        <p>Precio: ${vino.precio}</p>
    </div>
    `;

    console.log(check.length)
    carritoContainer.appendChild(placeCarrito);
}

const cntplace = docment.getElementById('cntplace');
cntplace.innerText = "hola"




