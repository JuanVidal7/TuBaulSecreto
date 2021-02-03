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
        default:
            return "no";
            break;
    }
}

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  });

