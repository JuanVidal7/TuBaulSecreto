class Productos {
    constructor(nombreProducto, descripcionProducto, imagenProducto, tipoBaulProducto) {
        this.nombre = nombreProducto;
        this.descripcion = descripcionProducto;
        this.imagen = imagenProducto;
        this.tipo = tipoBaulProducto;
    }
}

let baseDeDatos = [];

let hersheyBlanca = new Productos("Chocolatina Hershey's Blanca",
    "Cookies 'n' creme es una barrita de chocolate blanco con bits de galleta similares en sabor y textura a las Oreo.",
    `<img src="img/hersheyblanca.png" class="card-img-top" alt="Hershey's Blanca">`,
    "Este producto se puede agregar a cualquier Baúl");
let hersheyNegra = new Productos("Chocolatina Hershey's Negra",
    "La barrita de chocolate con leche Hershey's, tiene un sabor único característico, amargo y picante. Esta es su variedad chocolate negro.",
    `<img src="img/hersheynegra.png" class="card-img-top" alt="Hershey's Negra" style="padding-top: 7px;">`,
    "Este producto se puede agregar a cualquier Baúl");
let chocolatesMYM = new Productos("Chocolates M&M",
    "Pequeños pedazos de chocolate con leche revestidos de azucar.",
    `<img src="img/mym.png" class="card-img-top" alt="M&M" style="width: 80%; margin-top: 2%; margin-left: 10%;">`,
    "Este producto se puede agregar a cualquier Baúl");
let mrBrown = new Productos("Mr. Brown",
    "Brownie Mr. Brown Minix el único brownie con todo el sabor del chocolate. Está horneado con los mejores ingredientes y una preparación especial que hacen que este brownie tenga la textura ideal, y todo el sabor del chocolate. Disfruta de su sabor en cualquier momento y lugar.", 
    `<img src="img/mrbrownie.png" class="card-img-top" alt="Mr. Brownie">`, 
    "Este producto se puede agregar al Baúl Mediano y Grande");
let ferreroRocher = new Productos("Chocolates Ferrero Rocher", 
    "Los bombones están formados por una capa de barquillo rellena con pasta de cacao y avellanas, recubierta por una capa de chocolate con avellanas trituradas y una avellana entera en el interior, envueltos en papel metalizado y colocados individualmente sobre un molde de papel engrasado.", 
    `<img src="img/ferrerorocher.png" class="card-img-top" alt="Ferrero Rocher" style="padding-top: 50px; padding-bottom: 50px;">`, 
    "Este producto se puede agregar al Baúl Mediano y Grande");
let chocoBreak = new Productos("Paquete Chocobreak", 
    "Elaborados a partir de extracto de cacao fresco y seleccionado, junto a un relleno cremoso de sabores frutales para crear un snack listo para disfrutar en familia o con amigos, Choco Break Rellenos Surtidos en su presentación de empaque con 30 unidades es perfecto para consumidores que buscan darle un toque de sabor único y delicioso a su rutina diaria.", 
    `<img src="img/Chocobreak.png" class="card-img-top" alt="Chocobreak" style="padding-left: 30px; padding-right: 30px; height: 40%;">`, 
    "Este producto se puede agregar al Baúl Mediano y Grande");
let pringles = new Productos("Papas Pringles", 
    "Aperitivo con forma de papa frita. Está compuesto por patata deshidratada, almidón de trigo y harinas mezcladas con aceite vegetal.",
    `<img src="img/pringles.png" class="card-img-top" alt="Pringles" style="width: 50%; margin-left: 25%;">`,
    "Este producto se puede agregar al Baúl Grande.");
let galletasGreco = new Productos("Galletas Greco",
    "El auténtico sabor del mediterráneo lo encuentras en las galletas Greco Kurabié, deliciosa combinación de mantequilla con almendras. Su exquisita y original receta griega los hace únicos.",
    `<img src="img/greco.png" class="card-img-top" alt="Greco" style="margin-top: 25%; margin-bottom: 25%;">`,
    "Este producto se puede agregar al Baúl Grande.");
let nuzart = new Productos("Nuzart",
    "Crema de Chocolate y Avellanas Duo, con chocolate negro y chocolate blanco.",
    `<img src="img/nuzart.png" class="card-img-top" alt="Nuzart" style="width: 90%; margin-left: 5%; margin-top: 7%;">`,
    "Este producto se puede agregar al Baúl Grande.");

baseDeDatos.push(hersheyBlanca);
baseDeDatos.push(hersheyNegra);
baseDeDatos.push(chocolatesMYM);
baseDeDatos.push(mrBrown);
baseDeDatos.push(ferreroRocher);
baseDeDatos.push(chocoBreak);
baseDeDatos.push(pringles);
baseDeDatos.push(galletasGreco);
baseDeDatos.push(nuzart);

let mostrarProducto = ``;
for (let i = 0; i < baseDeDatos.length; i++) {
    mostrarProducto += `
    <div class="col mb-4">
                    <div class="card h-100 shadow p-3 mb-5 bg-white rounded">
                        ${baseDeDatos[i].imagen}
                        <div class="card-body">
                            <h5 class="card-title">${baseDeDatos[i].nombre}</h5>
                            <p class="card-text">${baseDeDatos[i].descripcion}</p>
                            <br>
                            <p class="card-text" style="text-align: center; font-weight: bold;">${baseDeDatos[i].tipo}</p>
                        </div>
                    </div>
                </div>`
}

document.getElementById("productos").innerHTML = mostrarProducto;