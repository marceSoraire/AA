let primerOpcion;
let segundaOpcion;
let operador;
let frase;

const comenzar = () => {
    
    let resultado = document.getElementById("resultado");
    let reset = document.getElementById("reset");
    let sumar = document.getElementById("sumar");
    let restar = document.getElementById("restar");
    let multiplicacion = document.getElementById("multiplicacion");
    let division = document.getElementById("division");
    let igual = document.getElementById("igual");
    let cero = document.getElementById("cero");
    let uno = document.getElementById("uno");
    let dos = document.getElementById("dos");
    let tres = document.getElementById("tres");
    let cuatro = document.getElementById("cuatro");
    let cinco = document.getElementById("cinco");
    let seis = document.getElementById("seis");
    let siete = document.getElementById("siete");
    let ocho = document.getElementById("ocho");
    let nueve = document.getElementById("nueve");    
    let seno = document.getElementById("seno");
    let coseno = document.getElementById("coseno");
    let tangente = document.getElementById("tangente");
    let factorial = document.getElementById("factorial");
    let potencia = document.getElementById("potencia");
    let raizCuadrada = document.getElementById("raizCuadrada");
    let raizCubica = document.getElementById("raizCubica");
    let prender = document.getElementById("prender");

    uno.onclick = function(e) {
        resultado.textContent = resultado.textContent + "1";
    }
    dos.onclick = function(e) {
        resultado.textContent = resultado.textContent + "2";
    }
    tres.onclick = function(e) {
        resultado.textContent = resultado.textContent + "3";
    }
    cuatro.onclick = function(e) {
        resultado.textContent = resultado.textContent + "4";
    }
    cinco.onclick = function(e) {
        resultado.textContent = resultado.textContent + "5";
    }
    seis.onclick = function(e) {
        resultado.textContent = resultado.textContent + "6";
    }
    siete.onclick = function(e) {
        resultado.textContent = resultado.textContent + "7";
    }
    ocho.onclick = function(e) {
        resultado.textContent = resultado.textContent + "8";
    }
    nueve.onclick = function(e) {
        resultado.textContent = resultado.textContent + "9";
    }
    cero.onclick = function(e) {
        resultado.textContent = resultado.textContent + "0";
    }
    
    prender.onclick = function(e) {
        inicio();
    }

    reset.onclick = function(e) {
        resetear();
    }

    sumar.onclick = function(e) {
        primerOpcion = resultado.textContent;
        operador = "+";
        limpiar();
    }
    restar.onclick = function(e) {
        primerOpcion = resultado.textContent;
        operador = "-";
        limpiar();
    }
    multiplicacion.onclick = function(e) {
        primerOpcion = resultado.textContent;
        operador = "*";
        limpiar();
    }
    division.onclick = function(e) {
        primerOpcion = resultado.textContent;
        operador = "/";
        limpiar();
    }
    seno.onclick = function(e) {
        primerOpcion = resultado.textContent;
        operador = "sen";
        resolver();
    }
    coseno.onclick = function(e) {
        primerOpcion = resultado.textContent;
        operador = "cos";
        resolver();
    }
    tangente.onclick = function(e) {
        primerOpcion = resultado.textContent;
        operador = "tan";
        resolver();
    }
    factorial.onclick = function(e) {
        primerOpcion = resultado.textContent;
        operador = "!";
        resolver();
    }
    potencia.onclick = function(e) {
        primerOpcion = resultado.textContent;
        operador = "x^";
        resolver();
    }
    raizCuadrada.onclick = function(e) {
        primerOpcion = resultado.textContent;
        operador = "R2";
        resolver();
    }
    raizCubica.onclick = function(e) {
        primerOpcion = resultado.textContent;
        operador = "R3";
        resolver();
    }
    igual.onclick = function(e) {
        segundaOpcion = resultado.textContent;
        resolver();
    }
}
let off = false;
let on = true;

const inicio = () => {
   
    if (off == false && on == true) {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Encendido',
            showConfirmButton: false,
            timer: 1500
        })
        off = true;
        on = false;
    }else {
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Apagado',
            showConfirmButton: false,
            timer: 1500
        })
        off = false;
        on = true;
    }
}

const limpiar = () =>{
    resultado.textContent = "";
}

const resetear = () => {
    resultado.textContent = "";
    primerOpcion = 0;
    segundaOpcion = 0;
    operador = "";
}

const resolver = () =>{
    let res = 0;
    switch (operador) {
        case "+":
            res = parseFloat(primerOpcion) + parseFloat(segundaOpcion);
            break;
        case "-":
            res = parseFloat(primerOpcion) - parseFloat(segundaOpcion);
            break;
        case "*":
            res = parseFloat(primerOpcion) * parseFloat(segundaOpcion);
            break;
        case "/":
            res = parseFloat(primerOpcion) / parseFloat(segundaOpcion);
            break;
        case "sen":
            res = seno(primerOpcion);
            break;
        case "cos":
            res = coseno(primerOpcion);
            break;
        case "tan":
            res = tangente(primerOpcion);
            break;
        case "!":
            res = factorial(primerOpcion);
            break;
        case "x^":
            res = potencia(primerOpcion,segundaOpcion);
            break;
        case "R2":
            res = raizCuadrada(primerOpcion);
            break;
        case "R3":
            res = raizCubica(primerOpcion);
            break;
    }
    resetear();
    resultado.textContent = res;
}

const factorial = (num) => {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
       fact = fact * i;
    }
    return fact;
}

const seno =(num) => {
    let res = Math.sin(num);
    return res.toFixed(4);
}

const coseno = (num) => {
    let res = Math.cos(num);
    return res.toFixed(4);
}

const tangente = (num) => {
    let res = Math.tan(num);
    return res.toFixed(4);
}

const potencia = (base,exponente) => {
    let exp = Math.pow(base,exponente)
    return exp.toFixed(4);
}

const raizCuadrada = (num) => {
    let res = Math.sqrt(num);
    return res.toFixed(4);
}

const raizCubica = (num) => {
    let res = Math.cbrt(num);
    return res.toFixed(4);
}