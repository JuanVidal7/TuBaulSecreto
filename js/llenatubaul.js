let carrito = [];

class Productos {
    constructor(nombreProducto, descripcionProducto, imagenProducto) {
        this.nombre = nombreProducto;
        this.descripcion = descripcionProducto;
        this.imagen = imagenProducto;
    }
}

let baseDeDatos = [];

let hersheyBlanca = new Productos("Chocolatina Hershey's Blanca",
    "Cookies 'n' creme es una barrita de chocolate blanco con bits de galleta similares en sabor y textura a las Oreo.",
    `<img src="img/hersheyblanca.png" class="card-img-top" alt="Hershey's Blanca">`);
let hersheyNegra = new Productos("Chocolatina Hershey's Negra",
    "La barrita de chocolate con leche Hershey's, tiene un sabor único característico, amargo y picante. Esta es su variedad chocolate negro.",
    `<img src="img/hersheynegra.png" class="card-img-top" alt="Hershey's Negra" style="padding-top: 7px;">`);
let chocolatesMYM = new Productos("Chocolates M&M",
    "Pequeños pedazos de chocolate con leche revestidos de azucar.",
    `<img src="img/mym.png" class="card-img-top" alt="M&M" style="width: 80%; margin-top: 2%; margin-left: 10%;">`);

baseDeDatos.push(hersheyBlanca);
baseDeDatos.push(hersheyNegra);
baseDeDatos.push(chocolatesMYM);

function agregarAlCarrito() {
    alert("Se ha agregado el Baúl a tu Carrito. Ahora selecciona los productos!");

    carrito.push("Baúl Pequeño");
    localStorage.setItem("carrito", JSON.stringify(carrito));

    let mostrarProducto = ``;
    for (let i = 0; i < baseDeDatos.length; i++) {
        mostrarProducto += `
        <div class="col mb-4">
                        <div class="card h-100 shadow p-3 mb-5 bg-white rounded">
                            ${baseDeDatos[i].imagen}
                            <div class="card-body">
                                <h5 class="card-title">${baseDeDatos[i].nombre}</h5>
                                <p class="card-text">${baseDeDatos[i].descripcion}</p>
                                <button type="button" class="btn btn-secondary btn-lg btn-block"
                                onclick=${"agregarAlBaul()"}>Agregar al Baúl</button>
                            </div>
                        </div>
                    </div>`
    }

    document.getElementById("productos").innerHTML = mostrarProducto;
}

function verCarrito() {
    if (localStorage.getItem('carrito') != null) {
        let valoresDelCarrito = JSON.parse(localStorage.getItem('carrito'));
        carrito = valoresDelCarrito;

        for (i = 0; i < carrito.length; i++) {
            document.getElementById("carritoCompras").innerHTML = `
            <h5>${carrito}
            <a href="" onclick=${"borrarDelBaul()"}><img
                style="width:25px; float:right;" src="img/eliminar.png" alt="Carrito"></a>
            </h5>
            <hr>
            `
        }

    } else if (localStorage.getItem('carrito') === null) {
        document.getElementById("carritoCompras").innerHTML = `
            <p>No has agregado productos aún</p>
        `
    }
}

function agregarAlBaul() {
    carrito.push("Chocolatinaa Hershey's Blanca");
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

