


function perimetroCuadrado(lado) {
    return lado*4;
}

function areaCuadrado(lado) {
    return lado*lado
}


function perimetroTriangulo(lado1, lado2, base) {
    return lado1+lado2+base
}


function areaTriangulo(altura,base) {
    return (altura*base)/2
}


const radioCirculo = 4;
const PI = Math.PI;


function perimetroCirculo(radio) {
    return 2*PI*radio
}
function areaCirculo(radio) {
    return PI*radio*radio
}

function calcularPerimetroCuadrado() {
    const input = document.getElementById("cuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("cuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo() {
    const base = Number.parseInt(document.getElementById("base").value); 
    const lado2 = Number.parseInt(document.getElementById("triangulo2").value);
    const altura = Number.parseInt(document.getElementById("trianguloh").value);
    const perimetro = perimetroTriangulo(base,lado2,altura);
   
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const base = Number.parseInt(document.getElementById("base").value); 
    const lado2 = Number.parseInt(document.getElementById("triangulo2").value);
    const altura = Number.parseInt(document.getElementById("trianguloh").value);
    const area = areaTriangulo(base,altura);
    alert(area);
}

function calcularPerimetroCirculo() {
    const radio = Number.parseInt(document.getElementById("radio").value); 
    const perimetro = perimetroCirculo(radio);
    alert(perimetro);
}

function calcularAraCirculo() {
    const radio = Number.parseInt(document.getElementById("radio").value); 
    const area = areaCirculo(radio);
    alert(area);
}

function calcularAlturaIsoseceles() {
    const base = Number.parseInt(document.getElementById("baseIsoce").value); 
    const lado1 = Number.parseInt(document.getElementById("lado1Isoce").value); 
    const lado2 = Number.parseInt(document.getElementById("lado2Isoce").value); 
    const altura = alturaIsoceles(lado1,base);
    
    if (lado1 == "" && lado2 == "" ) {
        alert("Escribir un lado");
    } else if (lado1 === lado2) {
        alert("La altura del Isoceles es: "+altura);
    } else {
        alert("No es un triangulo isoceles")
    }
}

function alturaIsoceles(lado1, base) {
    return Math.sqrt((lado1*lado1)-((base*base)/4))
}

