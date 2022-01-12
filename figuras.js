// Codigo del Cuadrado
console.group("Cudrados");

//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: "+ ladoCuadrado +"cm");

function perimetroCuadrado(lado) {
    return lado*4;
}

//const perimetroCuadrado = ladoCuadrado*4;
//console.log("El perimetro del cuadrado es: "+ perimetroCuadrado+"cm");

function areaCuadrado(lado) {
    return lado*lado
}

//const area = ladoCuadrado*ladoCuadrado;
//console.log("El area del cuadrado es: "+ area+"cm2");
console.groupEnd();


// Código del triangulo
console.group("Triangulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

function perimetroTriangulo(lado1, lado2, base) {
    return lado1+lado2+base
}


function areaTriangulo(altura,base) {
    return (altura*base)/2
}


console.groupEnd();

//Codigo del circulo
console.group("circulo");

const radioCirculo = 4;
const PI = Math.PI;


function perimetroCirculo(radio) {
    return 2*PI*radio
}
function areaCirculo(radio) {
    return PI*radio*radio
}

console.groupEnd();

//Aqui interactuamos con HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("cuadrado");
    const value = input.value;
    console.log(value);
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("cuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert(area);
}