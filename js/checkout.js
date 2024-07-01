let check = [];
let precio = [];

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

let idCounter = 0; 

for (let vino of check) {
    console.log('Processing vino:', vino); 
    let placeCarrito = document.createElement('article');
    placeCarrito.id = `${idCounter++}`

    console.log(check);
    placeCarrito.innerHTML = `
    <div class="vinoart">
        <p>${vino.nombre}  </p>
        <p>Tipo: ${vino.tipo}  </p>
        <p>Año: ${vino.anio}  </p>
        <p class="precio${placeCarrito.id}">Precio: ${vino.precio}</p>
        <button type="submit" id="${placeCarrito.id}" class="botonh2 borrar">borrar</button>
    </div>
    `;
    carritoContainer.appendChild(placeCarrito);
}


let cnt = check.length 
const cntplace1 = document.getElementById('cntplace')
cntplace1.innerText = cnt


let sumaTotal = check.reduce((acumulador, producto) => acumulador + (producto.precio || 0), 0);
console.log(sumaTotal);
let total = sumaTotal;
const total1 = document.getElementById('total')
total1.innerText = total

//funcion para actualizar price // 

function actualizaPrice () {
    sumaTotal = check.reduce((acumulador, producto) => acumulador + (producto.precio || 0), 0);
    total = sumaTotal
    total1.innerText = total
}

// luego de mostrar todo //
// BORRAR ELEMENTOS //

const borrarElemnto = document.querySelectorAll('.borrar')

borrarElemnto.forEach(boton => {
    boton.addEventListener('click', function() {
    const eliminaa = this.getAttribute('id');
    console.log(eliminaa);
    const eliminado = document.getElementById(eliminaa)
    eliminado.remove();
    check.splice(eliminaa,1)
    actualizaPrice ()
    cnt= cnt - 1;
    cntplace1.innerText = cnt;
    });
});

// BORRAR TODOS // 

const vaciarCarrito = document.getElementById('Borrartodo');

vaciarCarrito.onclick = ('submit', (event) => {
    localStorage.clear();
    window.location.href = '../pages/tienda.html'
});


// AGREGAR MAS //

const editar = document.getElementById('editar');
editar.onclick = ('submit', (event) => {
    localStorage.clear();
    localStorage.setItem('items', JSON.stringify(check));
    window.location.href = '../pages/tienda.html'
});

// CONTINUAR // 

const continuar = document.getElementById('continuar');
localStorage.setItem('items', JSON.stringify(check));
continuar.onclick = ('submit', (event) => {
    window.location.href = '../pages/finalizar.html'
});







