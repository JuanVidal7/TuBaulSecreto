let carrito = [];

class Productos {
    constructor(idProducto, nombreProducto, descripcionProducto, imagenProducto, valorProducto) {
        this.id = idProducto;
        this.nombre = nombreProducto;
        this.descripcion = descripcionProducto;
        this.imagen = imagenProducto;
        this.valor = valorProducto;
    }
}

let baseDeDatos = [];

let hersheyBlanca = new Productos(1,"Chocolatina Hersheys Blanca",
    "Cookies 'n' creme es una barrita de chocolate blanco con bits de galleta similares en sabor y textura a las Oreo.",
    `<img src="img/hersheyblanca.png" class="card-img-top" alt="Hershey's Blanca">`, 2500);
let hersheyNegra = new Productos(2, "Chocolatina Hersheys Negra",
    "La barrita de chocolate con leche Hershey's, tiene un sabor único característico, amargo y picante. Esta es su variedad chocolate negro.",
    `<img src="img/hersheynegra.png" class="card-img-top" alt="Hershey's Negra" style="padding-top: 7px;">`, 3000);
let chocolatesMYM = new Productos(3, "Chocolates M&M",
    "Pequeños pedazos de chocolate con leche revestidos de azucar.",
    `<img src="img/mym.png" class="card-img-top" alt="M&M" style="width: 80%; margin-top: 2%; margin-left: 10%;">`, 1500);

baseDeDatos.push(hersheyBlanca);
baseDeDatos.push(hersheyNegra);
baseDeDatos.push(chocolatesMYM);

function agregarAlCarrito(nombre,valor) {
    alert("Se ha agregado el Baúl a tu Carrito. Ahora selecciona los productos!");

    carrito.push({nombre,valor});
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
                                onclick='agregarAlBaul(${JSON.stringify(baseDeDatos[i].nombre)},${JSON.stringify(baseDeDatos[i].valor)})'>Agregar al Baúl</button>
                            </div>
                        </div>
                    </div>`
    }

    // document.getElementById("productos").innerHTML = mostrarProducto;
    $("#productos").html(mostrarProducto);
}

function verCarrito() {
    if (localStorage.getItem('carrito') != null) {
        let valoresDelCarrito = JSON.parse(localStorage.getItem('carrito'));
        carrito = valoresDelCarrito;

        let totalValor = 0;
        let mostrarCarrito = ``;
        for (i = 0; i < carrito.length; i++) {
            mostrarCarrito += `
            <h5>${JSON.stringify(carrito[i].nombre).replace(/["']/g, "")}
            <a href="#" onclick='borrarDelBaul(${JSON.stringify(carrito[i].id)})'}><img
                style="width:25px; float:right;" src="img/eliminar.png" alt="Carrito"></a>
            </h5>
            <hr>
            `
            totalValor = totalValor + carrito[i].valor;
            $("#total").html(totalValor);
        }
        // document.getElementById("carritoCompras").innerHTML = mostrarCarrito;
        $("#carritoCompras").html(mostrarCarrito);

    } else if (localStorage.getItem('carrito') === null) {
        document.getElementById("carritoCompras").innerHTML = `
            <p>No has agregado productos aún</p>
        `
    }
}

function agregarAlBaul(nombre,valor) {
    var id = Math.round(Math.random()*12);
    carrito.push({id,nombre,valor});
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function borrarDelBaul(id) {
    let idProdu = id;
    const nuevoCarrito = [];
   
    for (let i = 0; i < carrito.length; i++) {
        if (idProdu !== carrito[i].id) {
            nuevoCarrito.push(carrito[i]);
        }
    }
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
    carrito = nuevoCarrito;

    let totalValor = 0;
    if(carrito.length === 0){
        localStorage.removeItem('carrito');
        $("#total").html(totalValor);
    }
    verCarrito();
}

$("#pruebaAjax").ready(function(){
    $.get('js/datos.json', function(datos){
        let info = JSON.stringify(datos.texto)
        info = info.replace(/['"]+/g, '');
        $("#seccion").html(info);
    })
});