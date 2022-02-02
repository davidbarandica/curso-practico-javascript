
function calularPromedio(lista) {
    
     let numeroElementos = lista.length;
     let sumaLista = 0;
     for (let i =0; i< lista.length; i++ ){
         sumaLista = lista[i] + sumaLista;
     }
/*
    let sumaLista = lista.reduce(
        function (valorAcumulado, nuevoElemento) {
            return valorAcumulado + nuevoElemento
        }
    );
*/
    let promedioLista = sumaLista/lista.length;
    return promedioLista;
}

console.log(calularPromedio([55,150,95,150]));