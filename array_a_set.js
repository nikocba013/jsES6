let arr = [1,2,3,4,4,5,5,6,7,6,6,7,10];

let setItem = new Set(arr);

let arr2 = [... setItem]; //UNA  FORMA DE PASAR DE ARRAY A SET Y VICEVERSA, Y DE ELIMINAR DUPLICADOS.

//console.log(arr2);

let dup = [1,2,2,3,4,4,4,3,2,2,5,6,6,5,5,6,7,8,7,8,8,7,9,9,10];

let sdup = eliminarDup(dup);



function eliminarDup (dup){
    return [... new Set(dup)]; //ELIMINA DUPLICADOS EN UN ARRAY EN UNA SOLA LINEA.
}

console.log(sdup);




