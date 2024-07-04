let check = [];
let cnt = 0;
let total = 0;

// Traer Carrito y crear los items para visualizar //

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
    cnt = cnt + vino.qty;
    if (vino.qty > 0) {
        let placeCarrito = document.createElement('article');
        placeCarrito.id = vino.id
        total = total + (vino.precio * vino.qty);
        console.log(check);
        placeCarrito.innerHTML = `
        <div class="vinoart">
            <p>${vino.nombre}  </p>
            <p> ${vino.anio}  </p>
            <div class="qty">
            <button type="submit" class="menos" id="${vino.id}"><i class="fi fi-rs-minus-small"></i></i></button>
            <span id="qty${vino.id}"> ${vino.qty} </span>
            <button type="submit" class="mas" id="${vino.id}"><i class="fi fi-rs-plus-small"></i></button>
            </div>
            <p id="precio${vino.id}"> $: ${(vino.precio * vino.qty)} </p>
            <button type="submit" id="${vino.id}" class="borrar"><i class="fi fi-rs-trash"></i></button>
        </div>
        `;
        carritoContainer.appendChild(placeCarrito);
    }
}

// Mostrar cnt y price // 
const cntplace1 = document.getElementById('cntplace')
cntplace1.innerText = cnt

const total1 = document.getElementById('total')
total1.innerText = total

console.log (check);
//funcion para actualizar price // 



// luego de mostrar todo //

//BORRAR 1 O MAS - O SUMAR 1 O MAS //

//Borrar de a 1


const disminuirElemnto = document.querySelectorAll('.menos')
disminuirElemnto.forEach(boton => {
    boton.addEventListener('click', function() {
    const menos = this.getAttribute('id');
    console.log(menos);
    check.forEach(e => {
        if (e.id == menos){
            if (e.qty > 0) {
                e.qty = e.qty - 1;
                const menosqty = document.getElementById('qty'+menos);
                menosqty.innerText = e.qty;
                const menosprecio = document.getElementById('precio'+menos);
                menosprecio.innerText = '$: ' + e.precio * e.qty;
                cnt = cnt - 1;
                cntplace1.innerText = cnt;
                total = total - (e.precio);
                total1.innerText = total;
            } else modqty.innerText = 0;
        };
    });
    });
});

//Sumar de a 1 //

const aumentarElemento = document.querySelectorAll('.mas')
aumentarElemento.forEach(boton => {
    boton.addEventListener('click', function() {
    const mas = this.getAttribute('id');
    console.log(mas);
    check.forEach(e => {
        if (e.id == mas){
            if (e.qty > -1) {
                e.qty = e.qty + 1;
                const masqty = document.getElementById('qty'+mas);
                masqty.innerText = e.qty;
                const masprecio = document.getElementById('precio'+mas);
                masprecio.innerText = '$: ' + e.precio * e.qty;
                cnt = cnt + 1;
                cntplace1.innerText = cnt;
                total = total + (e.precio);
                total1.innerText = total;
            } 
        };
    });
    });
});

// BORRAR TODO EL ELEMENTO //

const borrarElemnto = document.querySelectorAll('.borrar')
borrarElemnto.forEach(boton => {
    boton.addEventListener('click', function() {
    const eliminaa = this.getAttribute('id');
    const eliminado = document.getElementById(eliminaa)
    eliminado.remove();
    check.forEach(e => {
        if (e.id == eliminaa){
            cnt = cnt - e.qty;
            cntplace1.innerText = cnt;
            total= total - (e.precio * e.qty);
            total1.innerText = total;
        };
    });
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
