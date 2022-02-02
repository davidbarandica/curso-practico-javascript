/*
const precioOriginal = Number(prompt("Ingrese el precio: "));

const descuento = Number(prompt("Ingrese el descuento en numeros: "));

const descuentoReal = 1-(descuento/100);

const precioConDescuento = precioOriginal*descuentoReal;

document.write("Su precio original era: "+
precioOriginal+ " Su precio con descuento es: "+precioConDescuento);
*/
function calcularPrecioConDescuento(precio,descuento) {
    const descuentoReal = 1-(descuento/100);
    const precioConDescuento = precio*descuentoReal;

    return precioConDescuento;
    
}

function onClickButtonPrice() {
    const precio = document.getElementById("precioOriginal").value;
    const descuento = document.getElementById("descuento").value; 
    const precioDescuento = calcularPrecioConDescuento(precio,descuento);
    const resultP = document.getElementById("resultadoParrafo");
    resultP.innerText = "El precio con descuento es: "+precioDescuento;
}