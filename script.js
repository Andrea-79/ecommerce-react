// script.js

// URL del archivo JSON que contiene los productos
const productsUrl = 'products.json';

let carrito = [];

function toggleProductos() {
    const productosContainer = document.getElementById('productos-container');
    const botonMostrar = document.querySelector('.btn-primary');

    if (productosContainer.style.display === 'none') {
        mostrarProductos();
        botonMostrar.textContent = 'Ocultar Productos';
    } else {
        productosContainer.innerHTML = '';
        productosContainer.style.display = 'none';
        botonMostrar.textContent = 'Mostrar Productos';
    }
}

function mostrarProductos() {
    fetch(productsUrl)
        .then(handleResponse)
        .then(showProducts)
        .catch(handleError);
}

function handleResponse(response) {
    if (!response.ok) {
        throw new Error('No se pudo obtener la lista de productos');
    }
    return response.json();
}

function showProducts(productosRecuperados) {
    const productosContainer = document.getElementById('productos-container');
    productosContainer.innerHTML = '';

    productosRecuperados.forEach(producto => {
        const productoDiv = document.createElement('div');
        productoDiv.innerHTML = `
            <div class="producto">${producto.nombre} - $${producto.precio}</div>
            <button class="btn btn-success" onclick="agregarAlCarrito(${producto.codigo})">Agregar al carrito</button>
        `;
        productosContainer.appendChild(productoDiv);
    });

    productosContainer.style.display = 'block';
}

function agregarAlCarrito(codigo) {
    fetch(productsUrl)
        .then(handleResponse)
        .then(productosRecuperados => {
            const producto = productosRecuperados.find(prod => prod.codigo === codigo);
            if (producto) {
                carrito.push(producto);
                mostrarCarrito();
            }
        })
        .catch(handleError);
}

function mostrarCarrito() {
    const carritoContainer = document.getElementById('carrito-container');
    carritoContainer.innerHTML = '';

    carrito.forEach(producto => {
        const productoDiv = document.createElement('div');
        productoDiv.textContent = `${producto.nombre} - $${producto.precio}`;
        carritoContainer.appendChild(productoDiv);
    });
}

function calcularTotal() {
    let total = 0;

    const modoPago = document.getElementById('modo-pago').value;
    const IVA = 0.21;
    const DESC_EF = 0.1;
    const RECARGO_CREDITO = 0.04;

    carrito.forEach(producto => {
        total += producto.precio;
    });

    switch (modoPago) {
        case 'efectivo':
            total = aplicarImpuestosyDescuentos(total, IVA, DESC_EF);
            break;
        case 'debito':
            total = aplicarImpuestosyDescuentos(total, IVA, 0);
            break;
        case 'credito':
            total = aplicarImpuestosyDescuentos(total, IVA + RECARGO_CREDITO, 0);
            break;
        default:
            alert('Opción inválida!');
            break;
    }

    const totalContainer = document.getElementById('total-container');
    totalContainer.textContent = `Total a pagar 💵: $${total.toFixed(2)}`;
}

function aplicarImpuestosyDescuentos(total, impuestos, descuentos) {
    let totalConImpuestos = total * (1 + impuestos);
    let totalConImpuestosYDescuentos = totalConImpuestos * (1 - descuentos);
    return totalConImpuestosYDescuentos;
}

function limpiarCarrito() {
    carrito = [];
    mostrarCarrito();
}

function handleError(error) {
    console.error('Error:', error);
}

