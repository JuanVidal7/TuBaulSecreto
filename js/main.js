// Scroll Up

document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp() {

    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

    if (currentScroll > 0) {
        window.requestAnimationFrame(scrollUp);
        window.scrollTo(0, currentScroll - (currentScroll / 10));
    }
}

buttonUp = document.getElementById("button-up");

window.onscroll = function () {

    var scroll = document.documentElement.scrollTop;

    if (scroll > 100) {
        buttonUp.style.transform = "scale(1)";
    } else if (scroll < 100) {
        buttonUp.style.transform = "scale(0)";
    }
}




//PROYECTO INTEGRADOR CURSO JAVASCRIPT

//DESAFÍO 4

function validacion(pregunta) {
    if (pregunta === "si") {
        return "si";
    } else {
        return "no";
    }
}

function productos(producto) {
    switch (producto) {
        case "pringles":
            return "grande";
            break;
        case "greco":
            return "grande";
            break;
        case "nuzart":
            return "grande";
            break;
        case "brown":
            return "mediano";
            break;
        case "ferrero":
            return "mediano";
            break;
        case "chocobreak":
            return "mediano";
            break;
        case "mym":
            return "pequeño";
            break;
        case "hershey negra":
            return "pequeño";
            break;
        case "hershey blanca":
            return "pequeño";
            break;
    }
}

class Productos{
    constructor(nombreProducto){
        this.nombre = nombreProducto;
    }
}

function baulPequeño() {
    alert("Has seleccionado el Baúl Pequeño");
    let pregunta = prompt("¿Este es el Baúl que quieres?");
    let validar = validacion(pregunta);
    let continuar = "si";
    let canasta = [];
    
    if (validar === "si") {
        while (continuar === "si") {
            let producto = prompt("¿Qué producto deseas agregar?");
            let prd = productos(producto);
            if (prd === "grande") {
                alert("Este producto solo se puede agregar al Baúl Grande");
            } else if (prd === "mediano") {
                alert("Este producto solo se puede agregar al Baúl Mediano o Grande");
            } else {
                let misProductos = new Productos(producto);
                alert("El producto agregado es: " + JSON.stringify(misProductos.nombre).toUpperCase());
                canasta.push(" " + producto.toUpperCase());
            }

            continuar = prompt("¿Deseas agregar otro producto?");

            if (continuar === "no") {
                alert("!Qué bien!... Tienes un Baúl especial lleno con " + canasta);
            }
        }
    } else {
        alert("Entendemos que quieres elegir otro Baúl!");
    }
}

function baulMediano() {
    alert("Has seleccionado el Baúl Mediano");
    let pregunta = prompt("¿Este es el Baúl que quieres?");
    let validar = validacion(pregunta);
    let continuar = "si";
    let canasta = [];

    if (validar === "si") {
        while (continuar === "si") {
            let producto = prompt("¿Qué producto deseas agregar?");
            let prd = productos(producto);
            if (prd === "grande") {
                alert("Este producto solo se puede agregar al Baúl Grande");
            } else if ((prd === "mediano") || (prd === "pequeño")) {
                let misProductos = new Productos(producto);
                alert("El producto agregado es: " + JSON.stringify(misProductos.nombre).toUpperCase());
                canasta.push(" " + producto.toUpperCase());
            }

            continuar = prompt("¿Quieres agregar otro producto?");

            if (continuar === "no") {
                alert("!Qué bien!... Tienes un Baúl especial lleno con " + canasta);
            }
        }
    } else {
        alert("Entendemos que quieres elegir otro Baúl!");
    }
}

function baulGrande() {
    alert("Has seleccionado el Baúl Grande");
    let pregunta = prompt("¿Este es el Baúl que quieres?");
    let validar = validacion(pregunta);
    let continuar = "si";
    let canasta = [];

    if (validar === "si") {
        while (continuar === "si") {
            let producto = prompt("¿Qué producto deseas agregar?");
            let prd = productos(producto);
            if ((prd === "grande") || (prd === "mediano" || (prd === "pequeño"))) {
                let misProductos = new Productos(producto);
                alert("El producto agregado es: " + JSON.stringify(misProductos.nombre).toUpperCase());
                canasta.push(" " + producto.toUpperCase());
            }
            
            continuar = prompt("¿Quieres agregar otro producto?");

            if(continuar === "no"){
                alert("!Qué bien!... Tienes un Baúl especial lleno con " + canasta);
            }
        }

    } else {
        alert("Entendemos que quieres elegir otro Baúl!");
    }
}